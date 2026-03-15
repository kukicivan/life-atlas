import UtilityCard from '../components/UtilityCard';
import { tools } from '../data/tools';

export const metadata = {
  title: 'Tools | Life Atlas',
  description: 'Minimal, functional scripts for automation and data extraction — Ubuntu setup, Instagram archival, Markdown conversion.',
  openGraph: {
    title: 'Tools | Life Atlas',
    description: 'Minimal, functional scripts for automation and data extraction.',
    type: 'website',
  },
};

export default function ToolsPage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="glow-text" style={{ fontSize: '3.5rem', textShadow: 'none' }}>PRACTICAL UTILITIES</h1>
        <p style={{ opacity: 0.6 }}>Minimal, functional scripts for automation and data extraction.</p>
      </header>

      <div className="grid grid-cols-2">
        {tools.map((tool) => (
          <UtilityCard 
            key={tool.title}
            {...tool}
          />
        ))}
      </div>
    </main>
  );
}
