import type { Metadata } from "next";
import "./globals.css";



import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Life Atlas | Ivan Kukić",
  description: "Personal website, utilities, blog, and news by Ivan Kukić. Retro aesthetic, functional tools, and latest AI insights.",
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
        <NavBar />
        {children}
        <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #333', opacity: 0.6 }}>
          <p>Made with ❤️ by Ivan Kukić</p>
        </footer>
      </body>
    </html>
  );
}
