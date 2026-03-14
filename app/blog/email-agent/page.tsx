export default function EmailAgentPost() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <a href="/" className="glow-text" style={{ display: 'inline-block', marginBottom: '2rem', fontSize: '0.9rem' }}>← BACK TO HOME</a>
      
      <h1 className="glow-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        Building an AI Email Agent for Free: A Journey in Patience, Code, and Good Company
      </h1>
      <p style={{ opacity: 0.6, marginBottom: '2rem' }}>March 14, 2026 • By Ivan Kukić</p>
      
      <div className="glow-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
          How a frustrated inbox, a few free tools, and an older friend who knew nothing about tech led to something worth sharing.
        </p>

        <h2 className="glow-text-green" style={{ marginTop: '2rem' }}>Chapter 1: The Problem Nobody Talks About</h2>
        <p>
          Let me be upfront with you. I am the tech person in this story. I know how to set up a server, write a config file, and debug a broken installation at midnight. But even for me, starting a new project from scratch — something genuinely useful, not just a toy — takes time, patience, and honestly, the right atmosphere.
        </p>
        <p>
          The problem I wanted to solve was simple: too many emails, not enough time. Every morning I would open my inbox and feel immediately overwhelmed. Newsletters, work threads, notifications, spam disguised as opportunity. Too much noise. I wanted one thing — a short, clear summary of what actually matters, delivered to me through WhatsApp or Telegram, wherever I already spend my time.
        </p>

        <h2 className="glow-text-green" style={{ marginTop: '2rem' }}>Chapter 2: The Unlikely Co-Worker</h2>
        <p>
          My friend is an older guy. Not technical at all. He does not know what Docker is. He has never opened a terminal. He is not the kind of person you would expect to find sitting next to someone building an AI agent.
        </p>
        <p>
          But he was there. We hung out. We talked about life. We had coffee. And in between all of that, I was coding, configuring, and debugging — slowly building something real. His presence made a genuine difference. Not because he contributed technically — he absolutely did not — but because I was never grinding in isolation.
        </p>

        <h2 className="glow-text-green" style={{ marginTop: '2rem' }}>Chapter 3: Discovering OpenClaw — and the Free Stack</h2>
        <p>
          The tool I built around is called <strong>OpenClaw</strong>. It is open-source, free, and designed to be your personal AI assistant running on your own hardware.
        </p>
        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
          <li><strong>OpenClaw</strong> — Free and open-source.</li>
          <li><strong>OpenRouter</strong> — Free tier available at <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="glow-text">openrouter.ai</a>. Real AI models, no upfront cost.</li>
          <li><strong>AWS or Azure</strong> — Both offer free tier virtual machines.</li>
          <li><strong>Docker</strong> — The cleanest way to containerise your setup.</li>
        </ul>

        <h2 className="glow-text-green" style={{ marginTop: '2rem' }}>Chapter 4: Three Days of Real Work</h2>
        <p>
          Day one was setup. Day two, the agent was reading my Gmail. By day three, it was summarising emails and I was asking it questions through Telegram. That moment — typing a message on my phone and getting back a clean summary of my inbox — felt genuinely satisfying.
        </p>
        <blockquote style={{ borderLeft: '3px solid var(--neon-cyan)', paddingLeft: '1rem', margin: '1.5rem 0', fontStyle: 'italic' }}>
          "Every issue deserves proper time and attention. Cutting corners just creates more problems later."
        </blockquote>

        <h2 className="glow-text-green" style={{ marginTop: '2rem' }}>Chapter 5: Moving to the Cloud</h2>
        <p>
          The next phase is moving everything to the cloud — spinning up Ubuntu instances on both AWS and Azure, installing Docker, deploying the agent, and setting up persistent memory.
        </p>

        <h2 className="glow-text-green" style={{ marginTop: '2rem' }}>Conclusion</h2>
        <p>
          Everything is possible. You just need a reasonable plan, enough patience to address each problem properly, and if you are lucky — someone good to sit with while you figure it out.
        </p>
      </div>
      
    </main>
  );
}
