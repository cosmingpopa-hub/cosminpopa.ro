import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllPostParams, getPostBySlug } from '@/lib/blog';

const LANG_COPY = {
  ro: {
    back: '← Înapoi la blog',
    resources: 'Resurse PDF',
    download: 'Descarcă PDF',
  },
  en: {
    back: '← Back to blog',
    resources: 'PDF resources',
    download: 'Download PDF',
  },
};

export function generateStaticParams() {
  return getAllPostParams();
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.lang, params.slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }) {
  const copy = LANG_COPY[params.lang];
  const post = getPostBySlug(params.lang, params.slug);

  if (!copy || !post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <Link href={`/blog/${params.lang}`} style={{ color: 'var(--acc)', fontFamily: 'var(--fm)', fontSize: '0.85rem' }}>
        {copy.back}
      </Link>

      <article style={{ marginTop: '1rem' }}>
        <h1 style={{ fontFamily: 'var(--fh)', fontSize: '2.2rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>{post.title}</h1>
        <p style={{ fontFamily: 'var(--fm)', color: 'var(--fg-ter)', fontSize: '0.82rem', marginBottom: '1.5rem' }}>
          {post.date} {post.tag ? `· ${post.tag}` : ''}
        </p>

        {post.pdfs.length > 0 ? (
          <section style={{ border: '1px solid var(--bdr)', borderRadius: 6, padding: '0.9rem 1rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'var(--fh)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>{copy.resources}</h2>
            <ul style={{ marginLeft: '1rem' }}>
              {post.pdfs.map((pdf) => (
                <li key={pdf.url} style={{ marginBottom: '0.25rem' }}>
                  <a href={pdf.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--acc)' }}>
                    {copy.download}: {pdf.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mdx-content" style={{ color: 'var(--fg-sec)', lineHeight: 1.8 }}>
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </article>
    </main>
  );
}
