export default function BlogIndex() {
  const posts = [
    {
      date: "March 14, 2026",
      title: "Building an AI Email Agent for Free",
      description: "A journey in patience, code, and why having a non-technical friend nearby is the secret to great software.",
      link: "/blog/email-agent"
    }
  ];

  return (
    <main style={{ padding: '8rem 2rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="glow-text" style={{ fontSize: '3.5rem' }}>BLOG</h1>
        <p style={{ opacity: 0.6 }}>tech core</p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {posts.map((post, i) => (
          <div key={i} className="glow-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{post.date}</span>
            <h2 className="glow-text-green" style={{ margin: '0.5rem 0' }}>{post.title}</h2>
            <p style={{ opacity: 0.8 }}>{post.description}</p>
            <a href={post.link} className="glow-text" style={{ alignSelf: 'flex-start', marginTop: '1rem', fontSize: '0.9rem', position: 'relative', zIndex: 20 }}>
              READ FULL STORY →
            </a>
            <a href={post.link} className="card-link"></a>
          </div>
        ))}
      </div>
    </main>
  );
}
