import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPost, getAllSlugs } from '../../lib/content';

const siteUrl = 'https://lifeatlas.site';

export async function generateStaticParams() {
  return getAllSlugs('news').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost('news', slug);
  if (!post) return {};
  return {
    title: `${post.title} | Life Atlas`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function NewsPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost('news', slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author ?? 'Ivan Kukić', url: `${siteUrl}/about` },
    publisher: { '@type': 'Person', name: post.author ?? 'Ivan Kukić' },
    mainEntityOfPage: `${siteUrl}/news/${slug}`,
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  }).toUpperCase();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/news" className="nav-link" style={{ display: 'inline-block', marginBottom: '3rem', fontSize: '0.85rem' }}>
        ← BACK TO NEWS
      </Link>

      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', lineHeight: '1.2', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
          {post.title}
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem', opacity: 0.5, fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <span>{post.author ? `BY ${post.author.toUpperCase()}` : 'SYSTEM UPDATE'}</span>
        </div>
      </header>

      <article
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
