import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life Atlas | Ivan Kukuć",
  description: "Personal website, utilities, blog, and news by Ivan Kukuć. Retro aesthetic, functional tools, and latest AI insights.",
  keywords: "Ivan Kukuć, Life Atlas, Personal Agent, AI, Utilities, Ubuntu automation, Instagram downloader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="glow-text" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LIFE ATLAS</div>
          <div className="nav-links">
            <a href="#tools">TOOLS</a>
            <a href="#blog">BLOG</a>
            <a href="#news">NEWS</a>
          </div>
        </nav>
        {children}
        <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #333', opacity: 0.6 }}>
          <p>Made with ❤️ by Ivan Kukuć</p>
        </footer>
      </body>
    </html>
  );
}
