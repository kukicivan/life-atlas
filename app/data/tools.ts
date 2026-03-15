export interface Tool {
  title: string;
  description: string;
  command: string;
  sourceUrl: string;
  prerequisites: string;
  readmeUrl: string;
}

export const tools: Tool[] = [
  {
    title: "Ubuntu Automation Script",
    description: "Streamline setup with automated package installation and system optimization.",
    command: "curl -sSL https://life-atlas-nine.vercel.app/bin/linux-setup/install.sh | bash",
    sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/linux-setup",
    prerequisites: "Ubuntu 20.04+, curl",
    readmeUrl: "/bin/linux-setup/README.md",
  },
  {
    title: "Instagram Photo Downloader",
    description: "Archive Instagram photos with captions and sorting.",
    command: "python instagram_downloader.py --user [username]",
    sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-downloader",
    prerequisites: "Python 3.8+, pip",
    readmeUrl: "/bin/ig-downloader/README.md",
  },
  {
    title: "IG Screenshot Extractor",
    description: "Extract media and metadata from Instagram screenshots.",
    command: "python ig_extract.py --input ./screenshots",
    sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/ig-extractor",
    prerequisites: "Python 3.8+, pip",
    readmeUrl: "/bin/ig-extractor/README.md",
  },
  {
    title: "MD2Docx Converter",
    description: "Convert Markdown to professional Word docs.",
    command: "node md2docx.js input.md output.docx a5",
    sourceUrl: "https://github.com/kukicivan/life-atlas/tree/main/public/bin/md-to-docx",
    prerequisites: "Node.js 18+",
    readmeUrl: "/bin/md-to-docx/README.md",
  },
];
