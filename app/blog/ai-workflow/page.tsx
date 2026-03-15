import Link from 'next/link';

export const metadata = {
  title: 'Building an AI Workflow | Life Atlas',
  description: 'A journey in patience, code, and why having a non-technical friend nearby is the secret to great success.',
  openGraph: {
    title: 'Building an AI Workflow',
    description: 'A journey in patience, code, and why having a non-technical friend nearby is the secret to great success.',
    type: 'article',
    publishedTime: '2026-03-14',
    authors: ['Ivan Kukić'],
  },
};

export default function EmailWorkflowPost() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
      <Link href="/blog" className="nav-link" style={{ display: 'inline-block', marginBottom: '3rem', fontSize: '0.85rem' }}>
        ← BACK TO BLOG
      </Link>
      
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', lineHeight: '1.2', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
          Building an AI Workflow
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem', opacity: 0.5, fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <time dateTime="2026-03-14">MARCH 14, 2026</time>
          <span>•</span>
          <span>BY IVAN KUKIĆ</span>
        </div>
      </header>
      
      <article className="utility-card blog-post-detail" style={{ padding: '2rem', border: 'none', background: 'rgba(255, 255, 255, 0.02)' }}>
        <blockquote style={{ fontSize: '1.3rem', color: 'var(--neon-cyan)', marginBottom: '2rem', fontWeight: '500', lineHeight: '1.4' }}>
          "Nothing wasn't built in isolation."
        </blockquote>

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
            I've realized that I reached the finish line because I wasn't doing it in a vacuum. Fixing an SMTP relay at 2 AM becomes a simple task when you are in a headspace shaped by respect and good conversation. The project became a byproduct of a great weekend.
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

        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#fff', margin: '0', fontWeight: 'bold' }}>
            Architecture Deep-Dive
          </h2>
          <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
            The system follows a simple pipeline: incoming emails are fetched via IMAP, processed through an AI summarization layer, and delivered as Telegram notifications.
          </p>
          <div style={{ background: '#0d0d0d', border: '1px solid #222', borderRadius: '6px', padding: '1.25rem', fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.8rem', lineHeight: '1.8', marginBottom: '1rem', overflowX: 'auto' }}>
            <div style={{ color: 'var(--neon-cyan)', marginBottom: '0.5rem' }}># Data Flow</div>
            <div style={{ opacity: 0.9 }}>IMAP Inbox → OpenClaw Engine → OpenRouter API → Mistral AI → Summary → Telegram Bot</div>
            <div style={{ color: 'var(--neon-cyan)', marginTop: '1rem', marginBottom: '0.5rem' }}># Infrastructure</div>
            <div style={{ opacity: 0.9 }}>Docker Compose: openclaw + postfix (SMTP relay)</div>
            <div style={{ opacity: 0.9 }}>Host: Azure/AWS free tier VM (Ubuntu 22.04)</div>
            <div style={{ opacity: 0.9 }}>Cron: systemd timer, every 15 min</div>
          </div>
          <p style={{ opacity: 0.9, marginBottom: '1rem' }}>
            Key environment variables that wire it together:
          </p>
          <div style={{ background: '#0d0d0d', border: '1px solid #222', borderRadius: '6px', padding: '1.25rem', fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.8rem', lineHeight: '1.8', overflowX: 'auto' }}>
            <div style={{ color: '#555' }}># .env (example)</div>
            <div><span style={{ color: 'var(--neon-green)' }}>OPENROUTER_API_KEY</span>=sk-or-...</div>
            <div><span style={{ color: 'var(--neon-green)' }}>OPENROUTER_MODEL</span>=mistralai/mistral-large-latest</div>
            <div><span style={{ color: 'var(--neon-green)' }}>IMAP_HOST</span>=imap.example.com</div>
            <div><span style={{ color: 'var(--neon-green)' }}>IMAP_USER</span>=your@email.com</div>
            <div><span style={{ color: 'var(--neon-green)' }}>TELEGRAM_BOT_TOKEN</span>=123456:ABC-...</div>
            <div><span style={{ color: 'var(--neon-green)' }}>TELEGRAM_CHAT_ID</span>=your_chat_id</div>
          </div>
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

        <section style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px solid rgba(255, 255, 255, 0.05)' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#fff', margin: '0 0 0.75rem', fontWeight: 'bold' }}>
            Chapter 5: The Takeaway
          </h2>
          <p style={{ opacity: 0.9, fontSize: '1.2rem', lineHeight: '1.6' }}>
            Don't underestimate the power of a mature, calm environment. Technical breakthroughs don't only happen in labs—they happen where life is being lived and shared with people who truly have more experience than we do.
          </p>
        </section>
      </article>
    </main>
  );
}
