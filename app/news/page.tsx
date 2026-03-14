export default function NewsIndex() {
  const newsItems = [
    {
      title: "Mistral AI: Experimental €150 Credit Program",
      description: "Mistral AI is now offering experimental API access with €150 monthly credit to developers working on their 2026 models. No credit card needed.",
      cta: "REGISTER AT MISTRAL.AI",
      link: "https://console.mistral.ai",
      category: "OPPORTUNITY",
      urgent: true
    },
    {
      title: "The Silent Revolution in Decentralized Compute",
      description: "Large-scale inference is moving to decentralized nodes. Early access projects are offering virtually no-cost slots for GPU owners.",
      cta: "LEARN MORE",
      link: "#",
      category: "INFRASTRUCTURE",
      urgent: false
    }
  ];

  return (
    <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="glow-text" style={{ fontSize: '3.5rem' }}>HIDDEN NEWS</h1>
        <p style={{ opacity: 0.6 }}>Rare opportunities & high-signal updates from the frontier.</p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {newsItems.map((item, i) => (
          <div key={i} className="glow-card" style={{ 
            borderLeft: item.urgent ? '4px solid var(--neon-cyan)' : '1px solid var(--neon-cyan)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ 
                fontSize: '0.7rem', 
                background: 'rgba(0, 255, 255, 0.1)', 
                padding: '2px 8px', 
                borderRadius: '4px',
                color: 'var(--neon-cyan)'
              }}>{item.category}</span>
            </div>
            <h2 className="glow-text" style={{ marginBottom: '1rem' }}>{item.title}</h2>
            <p style={{ opacity: 0.8, marginBottom: '2rem', lineHeight: '1.6' }}>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="glow-text-green" style={{ 
              fontSize: '0.9rem', 
              border: '1px solid var(--neon-green)', 
              padding: '0.8rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              {item.cta} ⚡
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '4rem', padding: '2rem', border: '1px dashed #444', textAlign: 'center', opacity: 0.6 }}>
        <p>New signals detected daily. Check back for updates.</p>
      </div>
    </main>
  );
}
