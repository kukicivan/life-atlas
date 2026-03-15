import UtilityCard from './components/UtilityCard';
import Link from 'next/link';
import { getTools, getAllPosts } from './lib/content';

export default function Home() {
  const tools = getTools();
  const blogPosts = getAllPosts('blog');
  const newsItems = getAllPosts('news');
  const latestPost = blogPosts[0];
  const latestNews = newsItems[0];

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();

  return (
    <main>
      {/* Hero Section */}
      <section style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="glow-text" style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: 'none' }}>LIFE ATLAS</h1>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', opacity: 0.8 }}>
          A minimal, functional hub for tools, personal AI journeys, and hidden opportunities.
          No fluff, just substance.
        </p>
      </section>

      {/* Tools Section — show first 2 */}
      <section id="tools">
        <h2 className="section-title glow-text" style={{ textShadow: 'none' }}>Practical Utilities</h2>
        <div className="grid grid-cols-2">
          {tools.slice(0, 2).map((tool) => (
            <UtilityCard key={tool.title} {...tool} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/tools" className="glow-text" style={{ fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
            VIEW ALL TOOLS →
          </Link>
        </div>
      </section>

      {/* Blog Section — latest post */}
      {latestPost && (
        <section id="blog">
          <h2 className="section-title glow-text" style={{ textShadow: 'none' }}>Workflow Experiences & AI Journey</h2>
          <div className="grid">
            <div className="glow-card" style={{ borderLeft: '4px solid var(--neon-cyan)', position: 'relative' }}>
              <time dateTime={latestPost.date} style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 'bold' }}>{formatDate(latestPost.date)}</time>
              <h3 className="glow-text" style={{ margin: '0.5rem 0' }}>{latestPost.title}</h3>
              <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{latestPost.description}</p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 'bold' }}>READ FULL STORY →</div>
              <Link href={`/blog/${latestPost.slug}`} className="card-link" aria-label={`Read: ${latestPost.title}`}></Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" className="glow-text" style={{ fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              VIEW ALL POSTS →
            </Link>
          </div>
        </section>
      )}
      
      {/* News Section — latest item */}
      {latestNews && (
        <section id="news" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title glow-text" style={{ textShadow: 'none' }}>NEWS</h2>
          <div className="glow-card" style={{ borderLeft: '4px solid var(--neon-cyan)', position: 'relative' }}>
            <time dateTime={latestNews.date} style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 'bold' }}>{formatDate(latestNews.date)}</time>
            <h3 className="glow-text" style={{ margin: '0.5rem 0' }}>{latestNews.title}</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '1rem' }}>{latestNews.description}</p>
            <Link href={`/news/${latestNews.slug}`} className="glow-text-green" style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              border: '1px solid var(--neon-green)',
              textDecoration: 'none',
              position: 'relative', 
              zIndex: 20 
            }}>{latestNews.cta ?? 'READ MORE'} →</Link>
            <Link href={`/news/${latestNews.slug}`} className="card-link" aria-label={`Read: ${latestNews.title}`}></Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/news" className="glow-text" style={{ fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              VIEW ALL NEWS →
            </Link>
          </div>
        </section>
      )}

    </main>
  );
}
