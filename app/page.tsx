import NavBar from './components/NavBar';
import CopyButton from './components/CopyButton';
import UtilityCard from './components/UtilityCard';
import Link from 'next/link';

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
        <h2 className="section-title glow-text" style={{ textShadow: 'none' }}>Practical Utilities</h2>
        <div className="grid grid-cols-2">
          <UtilityCard 
            title="Ubuntu Automation Script"
            description="Streamline setup with automated package installation and system optimization."
            command="curl -sSL https://life-atlas-nine.vercel.app/bin/linux-setup/install.sh | bash"
            sourceUrl="https://github.com/kukicivan/life-atlas/tree/main/public/bin/linux-setup"
          />
          <UtilityCard 
            title="Instagram Photo Downloader"
            description="Archive Instagram photos with captions and sorting."
            command="python instagram_downloader.py --user [username]"
            sourceUrl="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-downloader"
          />
          <UtilityCard 
            title="IG Screenshot Extractor"
            description="Extract media and metadata from Instagram screenshots."
            command="python ig_extract.py --input ./screenshots"
            sourceUrl="https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-extractor"
          />
          <UtilityCard 
            title="MD2Docx Converter"
            description="Convert Markdown to professional Word docs."
            command="node md2docx.js input.md output.docx a5"
            sourceUrl="https://github.com/kukicivan/life-atlas/tree/main/public/bin/md-to-docx"
          />
        </div>
      </section>

      <section id="blog">
        <h2 className="section-title glow-text" style={{ textShadow: 'none' }}>Workflow Experiences & AI Journey</h2>
        <div className="grid">
          <div className="glow-card" style={{ borderLeft: '4px solid var(--neon-cyan)', position: 'relative' }}>
            <span style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 'bold' }}>MARCH 14, 2026</span>
            <h3 className="glow-text" style={{ margin: '0.5rem 0' }}>Building an AI Workflow</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>A journey in patience, code, and why having a non-technical friend nearby is the secret to great success.</p>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 'bold' }}>READ FULL STORY →</div>
            <Link href="/blog/email-workflow" className="card-link"></Link>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section id="news" style={{ marginBottom: '4rem' }}>
        <h2 className="section-title glow-text" style={{ textShadow: 'none' }}>NEWS</h2>
        <div className="glow-card" style={{ borderLeft: '4px solid var(--neon-cyan)' }}>
          <h3 className="glow-text">Hidden Opportunity: Mistral AI Free Credits</h3>
          <p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            Experimental API access with significant compute credits. No credit card required for qualified developers.
          </p>
          <Link href="/news/mistral-credits" className="glow-text-green" style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            border: '1px solid var(--neon-green)',
            textDecoration: 'none',
            position: 'relative', 
            zIndex: 20 
          }}>ACTIVATE CREDITS →</Link>
          <Link href="/news/mistral-credits" className="card-link"></Link>
        </div>
      </section>

    </main>
  );
}
