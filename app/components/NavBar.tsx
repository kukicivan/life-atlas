'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    if (path === '/#tools') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="logo-glow" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LIFE ATLAS</div>
      </Link>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>HOME</Link>
        <Link href="/tools" className={`nav-link ${pathname === '/tools' ? 'active' : ''}`}>TOOLS</Link>
        <Link href="/blog" className={`nav-link ${pathname.startsWith('/blog') ? 'active' : ''}`}>BLOG</Link>
        <Link href="/news" className={`nav-link ${pathname.startsWith('/news') ? 'active' : ''}`}>NEWS</Link>
      </div>
    </nav>
  );
}
