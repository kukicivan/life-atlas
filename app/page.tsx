export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="glow-text" style={{ fontSize: '4rem', marginBottom: '1rem' }}>LIFE ATLAS</h1>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', opacity: 0.8 }}>
          A minimal, functional hub for tools, personal AI journeys, and hidden opportunities.
          No fluff, just substance.
        </p>
      </section>

      {/* Tools Section */}
      <section id="tools">
        <h2 className="section-title glow-text">Practical Utilities</h2>
        <div className="grid grid-cols-2">
          <div className="glow-card">
            <h3 className="glow-text-green">Ubuntu Automation Script</h3>
            <p style={{ margin: '1rem 0' }}>Streamline your Ubuntu setup with automated package installation and system optimization.</p>
            <code>curl -sSL https://life-atlas-nine.vercel.app/setup/install.sh | bash</code>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/kukicivan/life-atlas/tree/main/public/setup" className="glow-text" style={{ fontSize: '0.9rem' }}>VIEW SCRIPT SOURCE →</a>
            </div>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">MD2Docx Converter</h3>
            <p style={{ margin: '1rem 0' }}>Convert Markdown to professional Word documents with custom styling and A5 support.</p>
            <code>node md2docx.js input.md output.docx a5</code>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/kukicivan/md2docx" className="glow-text" style={{ fontSize: '0.9rem' }}>VIEW ON GITHUB →</a>
            </div>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">Instagram Downloader</h3>
            <p style={{ margin: '1rem 0' }}>Simple CLI tool to archive your Instagram photos directly to your local machine.</p>
            <code>python ig_download.py --user [username]</code>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/kukicivan/ig-archive" className="glow-text" style={{ fontSize: '0.9rem' }}>VIEW ON GITHUB →</a>
            </div>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">Future Tool #1</h3>
            <p style={{ margin: '1rem 0' }}>Under development: A specialized helper for managing personal AI agents locally.</p>
            <p style={{ fontStyle: 'italic', opacity: 0.5 }}>Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <h2 className="section-title glow-text">Agent Experiences & AI Journey</h2>
        <div className="grid">
          <div className="glow-card">
            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>March 14, 2026</span>
            <h3 style={{ margin: '0.5rem 0' }}>The Evolution of Autonomous Coding Agents</h3>
            <p>Reflecting on the transition from simple chat assistants to complex agentic entities that can manage entire repository lifecycles.</p>
            <a href="#" className="glow-text" style={{ display: 'block', marginTop: '1rem' }}>READ MORE →</a>
          </div>

          <div className="glow-card">
            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>March 12, 2026</span>
            <h3 style={{ margin: '0.5rem 0' }}>Building My First Local LLM Cluster</h3>
            <p>Insights into high-performance local inference and why data privacy is the future of personal AI.</p>
            <a href="#" className="glow-text" style={{ display: 'block', marginTop: '1rem' }}>READ MORE →</a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" style={{ marginBottom: '4rem' }}>
        <h2 className="section-title glow-text">Hidden Opportunities</h2>
        <div className="glow-card" style={{ borderLeft: '4px solid var(--neon-cyan)' }}>
          <h3 className="glow-text">The Silent Revolution in Decentralized Compute</h3>
          <p style={{ marginTop: '1rem' }}>
            There's a massive shift happening in how we handle large-scale inference. Projects like [Redacted] are offering early-access nodes for virtually no cost, provided you have the hardware. Nobody is talking about this yet, but the ROI for early participants is looking exponential.
          </p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>Stay tuned for the detailed breakdown next week.</p>
        </div>
      </section>
    </main>
  );
}
