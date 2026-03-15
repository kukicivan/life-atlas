import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://lifeatlas.site/sitemap.xml',
    host: 'https://lifeatlas.site',
  };
}
