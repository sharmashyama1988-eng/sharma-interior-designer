import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  metadataBase: new URL('https://sharma-interior-designer.vercel.app/'),
  title: {
    default: 'Sharma Interior Designers | Lead Architect Satya Narayan Sharma',
    template: '%s | Sharma Interior Designers',
  },
  description: 'Premier interior design, bespoke Burma teakwood furniture, luxury modular kitchens, and custom palace almirahs crafted by Principal Architect Satya Narayan Sharma. Direct Phone: 9801197102.',
  authors: [{ name: 'Satya Narayan Sharma', url: 'https://sharma-interior-designer.vercel.app' }],
  creator: 'Satya Narayan Sharma',
  publisher: 'Sharma Interior Designers',
  applicationName: 'Sharma Interior Designers & Fine Furniture',
  keywords: [
    'Satya Narayan Sharma',
    'Principal Architect Satya Narayan Sharma',
    'Lead Architect Satya Narayan Sharma',
    'Sharma Interior Designers',
    'Sharma Interior Designer & Fine Furniture',
    'Sharma Interior',
    'Sharma Furniture',
    'Custom Almirah',
    'Modern Doors',
    'Modular Kitchen Patna',
    'Classical Furniture Patna',
    'Luxury Villa Interior',
    'Burma Teakwood Furniture',
    'Interior Designer Bihar',
    'Interior Designer Patna',
    'Handcrafted Teakwood Sofa Set',
    'Royal Emperor Dining Table',
    'Bespoke Walk-in Wardrobe',
    'WhatsApp Inquiry 9801197102'
  ],
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    siteName: 'Sharma Interior Designers',
    title: 'Sharma Interior Designers | Lead Architect Satya Narayan Sharma',
    description: 'Transforming luxury spaces with classical precision, solid Burma teakwood, and turnkey architecture by Satya Narayan Sharma.',
    url: 'https://sharma-interior-designer.vercel.app/',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Sharma Interior Designers - Lead Architect Satya Narayan Sharma',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharma Interior Designers | Satya Narayan Sharma',
    description: 'Expert interior design, custom almirahs, modular kitchens, and classical woodwork by Satya Narayan Sharma.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sharma-interior-designer.vercel.app/',
  },
  other: {
    'apple-mobile-web-app-title': 'Sharma Interior Designers',
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
  const schemaBusinessData = {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'ProfessionalService', 'HomeGoodsStore'],
    '@id': 'https://sharma-interior-designer.vercel.app/#business',
    name: 'Sharma Interior Designers & Fine Furniture',
    alternateName: [
      'Sharma Interior Designers',
      'Sharma Interior',
      'Sharma Furniture Studio',
      'Sharma Interior Designer & Fine Furniture'
    ],
    url: 'https://sharma-interior-designer.vercel.app/',
    logo: 'https://sharma-interior-designer.vercel.app/logo.jpg',
    image: 'https://sharma-interior-designer.vercel.app/logo.jpg',
    description: 'Premium classical and modern interior design services, custom almirahs, modular kitchens, and bespoke Burma teakwood furniture led by Principal Architect Satya Narayan Sharma.',
    founder: {
      '@type': 'Person',
      '@id': 'https://sharma-interior-designer.vercel.app/#architect',
      name: 'Satya Narayan Sharma',
      jobTitle: 'Principal Architect & Master Craftsman',
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Satya Narayan Sharma',
        jobTitle: 'Lead Architect & Founder',
      }
    ],
    telephone: '+919801197102',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bailey Road / Kankarbagh',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      postalCode: '800001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.5941,
      longitude: 85.1376,
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
    sameAs: [
      'https://sharma-interior-designer.vercel.app'
    ],
  };

  const schemaArchitectPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://sharma-interior-designer.vercel.app/#architect',
    name: 'Satya Narayan Sharma',
    jobTitle: 'Principal Architect & Founder',
    worksFor: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Sharma Interior Designers',
    },
    url: 'https://sharma-interior-designer.vercel.app',
    image: 'https://sharma-interior-designer.vercel.app/satya-narayan-sharma.jpg',
    description: 'Principal Architect and master woodcraft artisan with 28+ years of expertise in luxury classical furniture, modern modular kitchens, and turnkey villa interior architecture.',
    knowsAbout: [
      'Interior Architecture',
      'Classical Teakwood Furniture',
      'Modular Kitchen Design',
      'Custom Wardrobe & Almirah Architecture',
      'Luxury Villa Interior Design',
      'Space Planning & 3D Architectural Visualisation'
    ],
  };

  const schemaWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sharma-interior-designer.vercel.app/#website',
    name: 'Sharma Interior Designers',
    alternateName: ['Sharma Interior Designer', 'Sharma Interior', 'Sharma Furniture'],
    url: 'https://sharma-interior-designer.vercel.app/',
    author: {
      '@type': 'Person',
      name: 'Satya Narayan Sharma',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sharma-interior-designer.vercel.app/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBusinessData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArchitectPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
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

