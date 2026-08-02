import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  metadataBase: new URL('https://sharma-interior-designer.vercel.app'),
  title: 'Sharma Interior Designer & Fine Furniture | 28+ Years Legacy',
  description: 'Premier classical furniture studio & luxury interior design architecture. Handcrafted Burma Teakwood furniture, royal sofa sets, emperor dining tables, 4-poster beds & complete villa interiors. Direct Phone: 9801197102.',
  applicationName: 'Sharma Interior Designer',
  keywords: [
    'Sharma Interior Designer',
    'Sharma Interior',
    'Sharma Furniture',
    'Furniture Designs',
    'Classical Furniture',
    'Teakwood Furniture',
    'Handcrafted Sofa Set',
    'Interior Designer Patna',
    'Luxury Villa Interior',
    'WhatsApp Inquiry 9801197102'
  ],
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    siteName: 'Sharma Interior Designer',
    title: 'Sharma Interior Designer & Fine Furniture',
    description: 'Bespoke classical furniture designs & royal villa interiors.',
    url: 'https://sharma-interior-designer.vercel.app/',
    images: ['/logo.jpg'],
    type: 'website',
  },
  other: {
    'apple-mobile-web-app-title': 'Sharma Interior Designer',
  },
  verification: {
    google: 'pE_h0mGnQTI35A2Z6drNRWA-dWCQQ6QhKz7be-Mq78g',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sharma Interior Designer',
    alternateName: ['Sharma Interior', 'Sharma Furniture'],
    url: 'https://sharma-interior-designer.vercel.app/',
  };

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeGoodsStore',
    name: 'Sharma Interior Designer & Fine Furniture Studio',
    image: 'https://sharma-interior-designer.vercel.app/logo.jpg',
    '@id': 'https://sharma-interior-designer.vercel.app/#business',
    url: 'https://sharma-interior-designer.vercel.app/',
    telephone: '+919801197102',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '21:00',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="bg-classical-bg text-classical-cream min-h-screen flex flex-col selection:bg-classical-gold selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
