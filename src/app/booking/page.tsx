import BookingPortal from '@/components/BookingPortal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | Principal Architect Satya Narayan Sharma',
  description: 'Book your bespoke classical furniture and luxury villa interior architecture consultation with Principal Architect Satya Narayan Sharma. Direct Phone: 9801197102.',
  alternates: {
    canonical: 'https://sharma-interior-designer.vercel.app/booking/',
  },
  openGraph: {
    title: 'Book Architectural Consultation | Sharma Interior Designers',
    description: 'Schedule a one-on-one session with Chief Architect Satya Narayan Sharma for luxury villas, modular kitchens, and custom woodwork.',
    url: 'https://sharma-interior-designer.vercel.app/booking/',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Sharma Interior Designers Consultation Booking',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Consultation | Sharma Interior Designers',
    description: 'Consult with Principal Architect Satya Narayan Sharma for villa interiors.',
    images: ['/logo.jpg'],
  },
};

export default function BookingRoutePage() {
  const schemaBookingData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://sharma-interior-designer.vercel.app/booking/#page',
    name: 'Book an Interior Architecture Consultation',
    description: 'Schedule an on-site or digital interior architecture consultation with Principal Architect Satya Narayan Sharma.',
    url: 'https://sharma-interior-designer.vercel.app/booking/',
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sharma-interior-designer.vercel.app/booking/',
      },
      result: {
        '@type': 'Reservation',
        name: 'Sharma Interior Architecture Site Consultation',
      },
    },
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
        name: 'Book a Consultation',
        item: 'https://sharma-interior-designer.vercel.app/booking/',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBookingData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <BookingPortal isStandalone={true} />
    </>
  );
}
