import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Googlebot-News',
          'Googlebot-Video',
          'Bingbot',
          'Applebot',
          'DuckDuckBot',
          'YandexBot',
          'Baiduspider',
          'Twitterbot',
          'facebookexternalhit',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://sharma-interior-designer.vercel.app/sitemap.xml',
    host: 'https://sharma-interior-designer.vercel.app',
  };
}
