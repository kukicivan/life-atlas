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
        <Link 
          href="/" 
          className={isActive('/') ? 'active-link' : ''}
        >
          HOME
        </Link>
        <Link 
          href="/tools" 
          className={isActive('/tools') ? 'active-link' : ''}
        >
          TOOLS
        </Link>
        <Link 
          href="/news" 
          className={isActive('/news') ? 'active-link' : ''}
        >
          NEWS
        </Link>
      </div>
    </nav>
  );
}
