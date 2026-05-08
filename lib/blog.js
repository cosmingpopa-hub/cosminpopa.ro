import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_ROOT = path.join(process.cwd(), 'content', 'blog');
const SUPPORTED_LANGS = ['ro', 'en'];

function resolveLangDir(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) {
    return null;
  }
  return path.join(CONTENT_ROOT, lang);
}

function safeReadDir(directoryPath) {
  if (!directoryPath || !fs.existsSync(directoryPath)) {
    return [];
  }
  return fs.readdirSync(directoryPath).filter((entry) => entry.endsWith('.mdx'));
}

function normalizeMeta(rawMeta, slug, lang) {
  return {
    slug,
    lang,
    title: rawMeta.title || slug,
    date: rawMeta.date || '',
    summary: rawMeta.summary || '',
    tag: rawMeta.tag || '',
    pdfs: Array.isArray(rawMeta.pdfs) ? rawMeta.pdfs : [],
  };
}

export function getPostsByLang(lang) {
  const langDir = resolveLangDir(lang);
  const files = safeReadDir(langDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(langDir, filename);
    const source = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(source);
    return normalizeMeta(data, slug, lang);
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(lang, slug) {
  const langDir = resolveLangDir(lang);
  if (!langDir) {
    return null;
  }

  const fullPath = path.join(langDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(source);
  const meta = normalizeMeta(data, slug, lang);

  return {
    ...meta,
    content,
  };
}

export function getAllPostParams() {
  return SUPPORTED_LANGS.flatMap((lang) =>
    getPostsByLang(lang).map((post) => ({ lang, slug: post.slug }))
  );
}
