export default function BlogIndex() {
  const posts = [
    {
      date: "MARCH 14, 2026",
      title: "Building an AI Email Agent for Free",
      description: "A journey in patience, code, and why having a non-technical friend nearby is the secret to great software.",
      link: "/blog/email-agent"
    }
  ];

  return (
    <main style={{ padding: '8rem 2rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>BLOG</h1>
        <p style={{ opacity: 0.5, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technical Core & Narratives</p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {posts.map((post, i) => (
          <div key={i} className="utility-card" style={{ padding: '2rem' }}>
            <span style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 'bold', letterSpacing: '0.05em' }}>{post.date}</span>
            <h2 style={{ margin: '1rem 0 0.5rem', fontSize: '1.5rem', color: 'var(--neon-cyan)' }}>{post.title}</h2>
            <p style={{ opacity: 0.7, fontSize: '1rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>{post.description}</p>
            <a href={post.link} className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
              READ FULL STORY →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
