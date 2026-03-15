import Link from 'next/link';
import { blogPosts } from '../data/blog';

export const metadata = {
  title: 'Blog | Life Atlas',
  description: 'Technical core & narratives — AI workflows, personal journeys, and deep-dive articles by Ivan Kukić.',
  openGraph: {
    title: 'Blog | Life Atlas',
    description: 'Technical core & narratives — AI workflows, personal journeys, and deep-dive articles by Ivan Kukić.',
    type: 'website',
  },
};

export default function BlogIndex() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>BLOG</h1>
        <p style={{ opacity: 0.5, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technical Core & Narratives</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {blogPosts.map((post, i) => (
          <Link 
            key={i} 
            href={post.link}
            className="glow-card tool-card"
            style={{ 
              padding: '2.5rem', 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'block',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {post.date}
            </span>
            <h2 style={{ 
              margin: '1rem 0 0.75rem', 
              fontSize: '1.6rem', 
              color: 'var(--neon-cyan)',
              lineHeight: '1.2'
            }}>
              {post.title}
            </h2>
            <p style={{ 
              opacity: 0.7, 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              marginBottom: '0' 
            }}>
              {post.description}
            </p>
            <div style={{ marginTop: '2rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--neon-cyan)', opacity: 0.8 }}>
              READ FULL STORY →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
