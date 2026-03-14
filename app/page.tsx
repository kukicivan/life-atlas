import CopyButton from "./components/CopyButton";

export default function Home() {
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

      {/* Tools Section */}
      <section id="tools">
        <h2 className="section-title glow-text">Practical Utilities</h2>
        <div className="grid grid-cols-2">
          <div className="glow-card">
            <h3 className="glow-text-green">Ubuntu Automation Script</h3>
            <p style={{ margin: '1rem 0', fontSize: '0.9rem', opacity: 0.8 }}>Streamline setup with automated package installation.</p>
            <div className="code-command">
              <code style={{ wordBreak: 'break-all', fontSize: '0.8rem' }}>curl -sSL https://life-atlas-nine.vercel.app/bin/linux-setup/install.sh | bash</code>
              <CopyButton text="curl -sSL https://life-atlas-nine.vercel.app/bin/linux-setup/install.sh | bash" />
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/linux-setup" target="_blank" rel="noopener noreferrer" className="source-link">
              view source
            </a>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/linux-setup" target="_blank" rel="noopener noreferrer" className="card-link"></a>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">Instagram Photo Downloader</h3>
            <p style={{ margin: '1rem 0', fontSize: '0.9rem', opacity: 0.8 }}>Archive Instagram photos with captions and sorting.</p>
            <div className="code-command">
              <code style={{ wordBreak: 'break-all', fontSize: '0.8rem' }}>python instagram_downloader.py --user [username]</code>
              <CopyButton text="python instagram_downloader.py --user [username]" />
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-downloader" target="_blank" rel="noopener noreferrer" className="source-link">
              view source
            </a>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-downloader" target="_blank" rel="noopener noreferrer" className="card-link"></a>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">IG Screenshot Extractor</h3>
            <p style={{ margin: '1rem 0', fontSize: '0.9rem', opacity: 0.8 }}>Extract media and metadata from Instagram screenshots.</p>
            <div className="code-command">
              <code style={{ wordBreak: 'break-all', fontSize: '0.8rem' }}>python ig_extract.py --input ./screenshots</code>
              <CopyButton text="python ig_extract.py --input ./screenshots" />
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-extractor" target="_blank" rel="noopener noreferrer" className="source-link">
              view source
            </a>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-extractor" target="_blank" rel="noopener noreferrer" className="card-link"></a>
          </div>

          <div className="glow-card">
            <h3 className="glow-text-green">MD2Docx Converter</h3>
            <p style={{ margin: '1rem 0', fontSize: '0.9rem', opacity: 0.8 }}>Convert Markdown to professional Word docs.</p>
            <div className="code-command">
              <code style={{ wordBreak: 'break-all', fontSize: '0.8rem' }}>node md2docx.js input.md output.docx a5</code>
              <CopyButton text="node md2docx.js input.md output.docx a5" />
            </div>
            <a href="https://github.com/kukicivan/life-atlas/tree/main/public/bin/md-to-docx" target="_blank" rel="noopener noreferrer" className="source-link">
              view source
            </a>
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
            <h3 className="glow-text-green" style={{ margin: '0.5rem 0' }}>Building an AI Email Agent for Free</h3>
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
