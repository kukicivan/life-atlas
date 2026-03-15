export default function EmailWorkflowPost() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
      <a href="/blog" className="nav-link" style={{ display: 'inline-block', marginBottom: '3rem', fontSize: '0.85rem' }}>
        ← BACK TO BLOG
      </a>
      
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', lineHeight: '1.2', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
          Building an AI Workflow
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem', opacity: 0.5, fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>MARCH 14, 2026</span>
          <span>•</span>
          <span>BY IVAN KUKIĆ</span>
        </div>
      </header>
      
      <article className="utility-card blog-post-detail" style={{ padding: '2rem', border: 'none', background: 'rgba(255, 255, 255, 0.02)' }}>
        <p style={{ fontSize: '1.3rem', color: 'var(--neon-cyan)', marginBottom: '2rem', fontWeight: '500', lineHeight: '1.4' }}>
          "Nothing wasn't built in isolation."
        </p>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#fff', margin: '0', fontWeight: 'bold' }}>
            Chapter 1: Beyond the Myth of the "Silent Room"
          </h2>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            There is a common belief that technical work requires total isolation. For three days, I proved the opposite. I didn't lock myself away to build this AI email workflow. Instead, I spent that time with a dear friend—a man of 76 years who has significantly more life experience than I do. 
          </p>
          <p style={{ opacity: 0.9 }}>
            The productivity didn't come from a "grind." It came from the calm, steady presence of someone who understands what actually matters. Sitting there, talking about real life, provided a mental clarity that made the most complex Docker configurations feel manageable.
          </p>
        </section>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#fff', margin: '0', fontWeight: 'bold' }}>
            Chapter 2: Experience as a Productivity Multiplier
          </h2>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            My friend doesn't open a terminal, but his company provided the perfect environment for deep work. When you are with someone who has seen it all, the "noise" of technical frustration disappears. You aren't rushing to finish; you are just working while enjoying the quality of the time spent.
          </p>
          <p style={{ opacity: 0.9 }}>
            I’ve realized that I reached the finish line because I wasn't doing it in a vacuum. Fixing an SMTP relay at 2 AM becomes a simple task when you are in a headspace shaped by respect and good conversation. The project became a byproduct of a great weekend.
          </p>
        </section>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#fff', margin: '0', fontWeight: 'bold' }}>
            Chapter 3: The Technical Outcome
          </h2>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            In the periods between our conversations, I managed to finalize a system that now runs autonomously:
          </p>
          <ul style={{ paddingLeft: '0', margin: '1rem 0', listStyle: 'none' }}>
            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
              <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>[+]</span>
              <span><strong>OpenClaw</strong> — Free and open-source engine running in Docker.</span>
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
              <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>[+]</span>
              <span><strong>OpenRouter & Mistral AI</strong> — Tapping into high-tier models via free tiers and experimental credits.</span>
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
              <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>[+]</span>
              <span><strong>Cloud Infrastructure</strong> — Azure or AWS free tier virtual machines for 24/7 uptime.</span>
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
              <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>[+]</span>
              <span><strong>Docker</strong> — The cleanest way to containerize the entire setup.</span>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#fff', margin: '0', fontWeight: 'bold' }}>
            Chapter 4: Patience Over Speed
          </h2>
          <p style={{ opacity: 0.9 }}>
            Because the time I was spending was inherently valuable, I didn't feel the urge to "hack" a quick solution. I had the patience to solve every error properly. Every bug was addressed with a permanent fix because I was in the right headspace. Now, the workflow reads, summarizes, and reports via Telegram without a single intervention.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--neon-cyan)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            References & Inspiration by Peter Steinberger
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="https://steipete.me/posts/just-talk-to-it" target="_blank" rel="noopener noreferrer" style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-color)',
              opacity: 0.9,
              border: '1px solid var(--neon-cyan)', 
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              width: 'fit-content'
            }}>
              JUST TALK TO IT ⚡
            </a>
            <a href="https://steipete.me/posts/2025/optimal-ai-development-workflow" target="_blank" rel="noopener noreferrer" style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-color)',
              opacity: 0.9,
              border: '1px solid var(--neon-cyan)', 
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              width: 'fit-content'
            }}>
              OPTIMAL AI DEVELOPMENT WORKFLOW ⚡
            </a>
            <a href="https://steipete.me/posts/2025/shipping-at-inference-speed" target="_blank" rel="noopener noreferrer" style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-color)',
              opacity: 0.9,
              border: '1px solid var(--neon-cyan)', 
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              width: 'fit-content'
            }}>
              SHIPPING AT INFERENCE SPEED ⚡
            </a>
          </div>
        </section>

        <footer style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px solid rgba(255, 255, 255, 0.05)' }}>
          <p style={{ opacity: 0.9, fontSize: '1.2rem', lineHeight: '1.6' }}>
            <strong>Chapter 5: The Takeaway</strong><br />
            Don't underestimate the power of a mature, calm environment. Technical breakthroughs don't only happen in labs—they happen where life is being lived and shared with people who truly have more experience than we do.
          </p>
        </footer>
      </article>
    </main>
  );
}
