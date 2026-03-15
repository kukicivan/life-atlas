import type { Metadata } from "next";
import "./globals.css";



import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Life Atlas | Ivan Kukić",
  description: "Personal website, utilities, blog, and news by Ivan Kukić. Retro aesthetic, functional tools, and latest AI insights.",
  keywords: "Ivan Kukić, Life Atlas, AI Workflows, Personal AI, Utilities, Ubuntu automation, Instagram downloader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
