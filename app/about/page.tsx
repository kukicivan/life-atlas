import Link from 'next/link';

export const metadata = {
  title: 'About | Life Atlas',
  description: 'About Ivan Kukić — developer, AI workflow builder, and the person behind Life Atlas.',
  openGraph: {
    title: 'About | Life Atlas',
    description: 'About Ivan Kukić — developer, AI workflow builder, and the person behind Life Atlas.',
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>ABOUT</h1>
      </header>

      <article style={{ fontSize: '1.05rem' }}>
        <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>
          I&apos;m <strong>Ivan Kukić</strong> — a developer focused on practical AI workflows, automation scripts, and building tools that solve real problems with minimal overhead.
        </p>

        <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>
          <strong>Life Atlas</strong> is my personal hub: a place to share the tools I build, the AI experiments I run, and the insights I pick up along the way. No fluff, no filler — just functional output.
        </p>

        <p style={{ opacity: 0.9, marginBottom: '2.5rem' }}>
          This site itself runs on Next.js, deployed on Vercel, and is fully open-source.
        </p>

        <section>
          <h2 style={{ fontSize: '1.3rem', color: 'var(--neon-cyan)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Links
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="https://github.com/kukicivan" target="_blank" rel="noopener noreferrer" className="source-link" style={{ fontSize: '0.95rem' }}>
              GitHub — kukicivan
            </a>
            <a href="https://linkedin.com/in/ivan-kukic" target="_blank" rel="noopener noreferrer" className="source-link" style={{ fontSize: '0.95rem' }}>
              LinkedIn — Ivan Kukić
            </a>
            <a href="https://github.com/kukicivan/life-atlas" target="_blank" rel="noopener noreferrer" className="source-link" style={{ fontSize: '0.95rem' }}>
              This site&apos;s source code
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
