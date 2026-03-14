'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SectionIndicator() {
  const pathname = usePathname();
  const [indicatorText, setIndicatorText] = useState('ONLINE');

  useEffect(() => {
    if (pathname === '/') {
      setIndicatorText('HOME_HUB');
    } else if (pathname.startsWith('/blog')) {
      setIndicatorText('BLOG_ENVIRONMENT');
    } else if (pathname.startsWith('/news')) {
      setIndicatorText('NEWS_SIGNAL');
    } else {
      setIndicatorText('UNKNOWN_ZONE');
    }
  }, [pathname]);

  return (
    <div className="active-indicator">
      {indicatorText}
    </div>
  );
}
