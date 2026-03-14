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
            <code>curl -sSL https://life-atlas-nine.vercel.app/bin/linux-setup/install.sh | bash</code>
            <div style={{ marginTop: '1.5rem', position: 'relative', zIndex: 20 }}>
              <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/linux-setup" target="_blank" rel="noopener noreferrer" className="glow-text" style={{ fontSize: '0.9rem' }}>VIEW SCRIPT SOURCE →</a>
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/linux-setup" target="_blank" rel="noopener noreferrer" className="card-link"></a>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">Instagram Photo Downloader</h3>
            <p style={{ margin: '1rem 0' }}>A powerful Python-based tool to archive Instagram photos, including captions and sorting capabilities.</p>
            <code>python instagram_downloader.py --user [username]</code>
            <div style={{ marginTop: '1.5rem', position: 'relative', zIndex: 20 }}>
              <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-downloader" target="_blank" rel="noopener noreferrer" className="glow-text" style={{ fontSize: '0.9rem' }}>EXPLORE TOOL →</a>
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-downloader" target="_blank" rel="noopener noreferrer" className="card-link"></a>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">IG Screenshot Extractor</h3>
            <p style={{ margin: '1rem 0' }}>Extract media and metadata from Instagram screenshots with high precision.</p>
            <code>python ig_extract.py --input ./screenshots</code>
            <div style={{ marginTop: '1.5rem', position: 'relative', zIndex: 20 }}>
              <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-extractor" target="_blank" rel="noopener noreferrer" className="glow-text" style={{ fontSize: '0.9rem' }}>VIEW REPOSITORY →</a>
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-extractor" target="_blank" rel="noopener noreferrer" className="card-link"></a>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">MD2Docx Converter</h3>
            <p style={{ margin: '1rem 0' }}>Convert Markdown to professional Word documents with custom styling and A5 support.</p>
            <code>node md2docx.js input.md output.docx a5</code>
            <div style={{ marginTop: '1.5rem', position: 'relative', zIndex: 20 }}>
              <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/md-to-docx" target="_blank" rel="noopener noreferrer" className="glow-text" style={{ fontSize: '0.9rem' }}>VIEW SCRIPT SOURCE →</a>
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/md-to-docx" target="_blank" rel="noopener noreferrer" className="card-link"></a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <h2 className="section-title glow-text">Agent Experiences & AI Journey</h2>
        <div className="grid">
          <div className="glow-card">
            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Latest Post</span>
            <h3 style={{ margin: '0.5rem 0' }}>Building an AI Email Agent for Free</h3>
            <p>A journey in patience, code, and why having a non-technical friend nearby is the secret to great software.</p>
            <a href="/blog" className="glow-text" style={{ display: 'block', marginTop: '1rem', position: 'relative', zIndex: 20 }}>ENTER BLOG ENVIRONMENT →</a>
            <a href="/blog" className="card-link"></a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" style={{ marginBottom: '4rem' }}>
        <h2 className="section-title glow-text">Hidden Opportunities</h2>
        <div className="glow-card" style={{ borderLeft: '4px solid var(--neon-cyan)' }}>
          <h3 className="glow-text">Mistral AI: Free €150 Credits for 2026 Models</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            Experimental API access with significant compute credits. No credit card required for qualified developers.
          </p>
          <a href="/news" className="glow-text" style={{ display: 'block', position: 'relative', zIndex: 20 }}>OPEN NEWS FEED →</a>
          <a href="/news" className="card-link"></a>
        </div>
      </section>
    </main>
  );
}
