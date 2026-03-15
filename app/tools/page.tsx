import UtilityCard from '../components/UtilityCard';

export const metadata = {
  title: 'Tools | Life Atlas',
  description: 'Minimal, functional scripts for automation and data extraction — Ubuntu setup, Instagram archival, Markdown conversion.',
};

export default function ToolsPage() {
  const tools = [
    {
      title: "Ubuntu Automation Script",
      description: "Streamline setup with automated package installation and system optimization.",
      command: "curl -sSL https://life-atlas-nine.vercel.app/bin/linux-setup/install.sh | bash",
      sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/linux-setup"
    },
    {
      title: "Instagram Photo Downloader",
      description: "Archive Instagram photos with captions and sorting.",
      command: "python instagram_downloader.py --user [username]",
      sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-downloader"
    },
    {
      title: "IG Screenshot Extractor",
      description: "Extract media and metadata from Instagram screenshots.",
      command: "python ig_extract.py --input ./screenshots",
      sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-extractor"
    },
    {
      title: "MD2Docx Converter",
      description: "Convert Markdown to professional Word docs.",
      command: "node md2docx.js input.md output.docx a5",
      sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/md-to-docx"
    }
  ];

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="glow-text" style={{ fontSize: '3.5rem', textShadow: 'none' }}>PRACTICAL UTILITIES</h1>
        <p style={{ opacity: 0.6 }}>Minimal, functional scripts for automation and data extraction.</p>
      </header>

      <div className="grid grid-cols-2">
        {tools.map((tool, index) => (
          <UtilityCard 
            key={index}
            title={tool.title}
            description={tool.description}
            command={tool.command}
            sourceUrl={tool.sourceUrl}
          />
        ))}
      </div>
    </main>
  );
}
