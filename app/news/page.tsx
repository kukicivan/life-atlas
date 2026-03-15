import Link from 'next/link';
import { newsItems } from '../data/news';

export const metadata = {
  title: 'News | Life Atlas',
  description: 'High-signal updates and opportunities — AI credits, tools, and industry insights.',
  openGraph: {
    title: 'News | Life Atlas',
    description: 'High-signal updates and opportunities — AI credits, tools, and industry insights.',
    type: 'website',
  },
};

export default function NewsIndex() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>NEWS</h1>
        <p style={{ opacity: 0.5, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>High-Signal Updates & Opportunities</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {newsItems.map((item, i) => (
          <Link 
            key={i} 
            href={item.link}
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
              {item.date}
            </span>
            <h2 style={{ 
              margin: '1rem 0 0.75rem', 
              fontSize: '1.6rem', 
              color: 'var(--neon-cyan)',
              lineHeight: '1.2'
            }}>
              {item.title}
            </h2>
            <p style={{ 
              opacity: 0.7, 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              marginBottom: '0' 
            }}>
              {item.description}
            </p>
            <div style={{ marginTop: '2rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--neon-green)', opacity: 0.8 }}>
              {item.cta} ⚡
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
