import type { Metadata } from "next";
import "./globals.css";



import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import { GoogleAnalytics } from '@next/third-parties/google';

const siteUrl = 'https://lifeatlas.site';

export const metadata: Metadata = {
  title: "Life Atlas | Ivan Kukić",
  description: "Personal website, utilities, blog, and news by Ivan Kuki\u0107. Functional tools, AI workflows, and hidden opportunities.",
  keywords: "Ivan Kuki\u0107, Life Atlas, AI Workflows, Personal AI, Utilities, Ubuntu automation, Instagram downloader",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Life Atlas | Ivan Kukić',
    description: 'Minimal, functional hub for tools, AI workflows, and hidden opportunities.',
    url: siteUrl,
    siteName: 'Life Atlas',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Life Atlas | Ivan Kukić',
    description: 'Minimal, functional hub for tools, AI workflows, and hidden opportunities.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${siteUrl}/#website`,
                  url: siteUrl,
                  name: 'Life Atlas',
                  description: 'Minimal, functional hub for tools, AI workflows, and hidden opportunities.',
                  publisher: { '@id': `${siteUrl}/#person` },
                },
                {
                  '@type': 'Person',
                  '@id': `${siteUrl}/#person`,
                  name: 'Ivan Kukić',
                  url: `${siteUrl}/about`,
                  sameAs: [
                    'https://github.com/kukicivan',
                    'https://linkedin.com/in/ivan-kukic',
                  ],
                },
              ],
            }),
          }}
        />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-WG5QS01PZH"} />
        <ScrollToTop />
        <NavBar />
        {children}
        <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #333', opacity: 0.6 }}>
          <p>Made with ❤️ by <a href="https://linkedin.com/in/ivan-kukic" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Ivan Kukić</a></p>
        </footer>
      </body>
    </html>
  );
}
