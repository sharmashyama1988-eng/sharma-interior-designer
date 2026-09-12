import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

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
  applicationName: 'Sharma Interior Designers',
  keywords: [
    'Sharma Interior Designers',
    'Sharma Interior Designer',
    'Satya Narayan Sharma',
    'Principal Architect Satya Narayan Sharma',
    'Lead Architect Satya Narayan Sharma',
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
    'application-name': 'Sharma Interior Designers',
    'og:site_name': 'Sharma Interior Designers',
    'site_name': 'Sharma Interior Designers',
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar',
    'geo.position': '25.5941;85.1376',
    'ICBM': '25.5941, 85.1376',
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
    name: 'Sharma Interior Designers',
    alternateName: [
      'Sharma Interior Designer',
      'Sharma Interior Designers & Fine Furniture',
      'Sharma Interior',
      'Sharma Furniture Studio'
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: '138',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: [
      { '@type': 'City', name: 'Patna' },
      { '@type': 'State', name: 'Bihar' },
      { '@type': 'Country', name: 'India' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Luxury Furniture & Turnkey Interior Architecture Collections',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Burma Teakwood Living Room Furniture' },
        { '@type': 'OfferCatalog', name: 'Royal Dining Suites' },
        { '@type': 'OfferCatalog', name: 'Four-Poster Master Beds' },
        { '@type': 'OfferCatalog', name: 'Modular Kitchen Architecture' },
        { '@type': 'OfferCatalog', name: 'Custom Wardrobes & Palace Almirahs' },
      ],
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
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: 'Sharma Interior Designers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sharma-interior-designer.vercel.app/logo.jpg'
      }
    },
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

  const schemaFAQPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://sharma-interior-designer.vercel.app/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I inquire or place a custom furniture order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can click any Inquire on WhatsApp button across the website or call us directly at 9801197102. Our interior design consultants will immediately connect with you, share 3D catalogs, and provide personalized quotes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer complete home interior design packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! With 28+ years of excellence, we specialize in turnkey interior solutions — including space planning, 3D architectural renders, custom teakwood furniture manufacturing, false ceiling, lighting, wall panelling, and white-glove installation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize the dimensions and finish of any catalog item?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! Every item is manufactured at our own woodworking facility. You can customize dimensions (inches/cm), wood grade (Burma Teak, Sheesham, Walnut), polish finish (Matt, High-Gloss PU, Natural Oil), and fabric colors.',
        },
      },
      {
        '@type': 'Question',
        name: 'What wood grade is used for classical furniture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We exclusively use Grade-A seasoned Burma Teakwood, Indian Rosewood (Sheesham), and high-grade HDHMR marine ply for modular kitchens with anti-termite and moisture-shield treatment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the warranty on Sharma Interior furniture and modular kitchens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide up to a 20-Year Hand-Carved Teakwood Guarantee and Lifetime anti-termite borer warranty on all solid seasoned teak structures.',
        },
      },
    ],
  };

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sharma-interior-designer.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Digital Furniture & Interior Catalog',
        item: 'https://sharma-interior-designer.vercel.app/catloug/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Consultation Booking',
        item: 'https://sharma-interior-designer.vercel.app/booking/',
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="application-name" content="Sharma Interior Designers" />
        <meta name="apple-mobile-web-app-title" content="Sharma Interior Designers" />
        <meta property="og:site_name" content="Sharma Interior Designers" />
        <meta name="site_name" content="Sharma Interior Designers" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
        />
      </head>
      <body className="bg-classical-bg text-classical-cream min-h-screen flex flex-col selection:bg-classical-gold selection:text-black font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

