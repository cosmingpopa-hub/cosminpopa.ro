import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByLang } from '@/lib/blog';

const LANG_COPY = {
  ro: {
    title: 'Blog',
    subtitle: 'Articole în format lung despre anatomie, educație medicală și tehnologie.',
    back: '← Înapoi la homepage',
    read: 'Citește articolul →',
  },
  en: {
    title: 'Blog',
    subtitle: 'Long-form articles on anatomy, medical education, and technology.',
    back: '← Back to homepage',
    read: 'Read article →',
  },
};

export function generateMetadata({ params }) {
  const copy = LANG_COPY[params.lang];
  if (!copy) {
    return {};
  }

  return {
    title: `${copy.title} (${params.lang.toUpperCase()})`,
    description: copy.subtitle,
  };
}

export default function BlogLangPage({ params }) {
  const copy = LANG_COPY[params.lang];
  if (!copy) {
    notFound();
  }

  const posts = getPostsByLang(params.lang);

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <Link href="/" style={{ color: 'var(--acc)', fontFamily: 'var(--fm)', fontSize: '0.85rem' }}>
        {copy.back}
      </Link>

      <h1 style={{ fontFamily: 'var(--fh)', fontSize: '2.2rem', marginTop: '1rem', marginBottom: '0.4rem' }}>
        {copy.title}
      </h1>
      <p style={{ color: 'var(--fg-sec)', marginBottom: '2rem' }}>{copy.subtitle}</p>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {posts.map((post) => (
          <article key={post.slug} style={{ border: '1px solid var(--bdr)', borderRadius: 6, padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h2 style={{ fontFamily: 'var(--fh)', fontSize: '1.2rem' }}>{post.title}</h2>
              <span style={{ fontFamily: 'var(--fm)', fontSize: '0.72rem', background: 'var(--tagbg)', padding: '0.15rem 0.5rem', borderRadius: 3 }}>
                {post.tag}
              </span>
            </div>
            <p style={{ fontFamily: 'var(--fm)', color: 'var(--fg-ter)', fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              {post.date}
            </p>
            <p style={{ color: 'var(--fg-sec)', marginBottom: '0.9rem' }}>{post.summary}</p>
            <Link href={`/blog/${params.lang}/${post.slug}`} style={{ color: 'var(--acc)', fontFamily: 'var(--fm)', fontSize: '0.85rem' }}>
              {copy.read}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
