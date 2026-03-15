'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav aria-label="Main navigation">
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="logo-glow" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LIFE ATLAS</div>
      </Link>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${isActive('/') ? 'active-link' : ''}`}>HOME</Link>
        <Link href="/tools" className={`nav-link ${isActive('/tools') ? 'active-link' : ''}`}>TOOLS</Link>
        <Link href="/blog" className={`nav-link ${isActive('/blog') ? 'active-link' : ''}`}>BLOG</Link>
        <Link href="/news" className={`nav-link ${isActive('/news') ? 'active-link' : ''}`}>NEWS</Link>
      </div>
    </nav>
  );
}
