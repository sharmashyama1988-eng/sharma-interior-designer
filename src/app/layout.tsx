import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Sharma Interior Designer & Fine Furniture | 28+ Years Legacy',
  description: 'Premier classical furniture studio & luxury interior design architecture. Handcrafted Burma Teakwood furniture, royal sofa sets, emperor dining tables, 4-poster beds & complete villa interiors. Direct Phone: 9801197102.',
  keywords: [
    'Sharma Interior Designer',
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
    title: 'Sharma Interior Designer & Fine Furniture',
    description: 'Bespoke classical furniture designs & royal villa interiors.',
    images: ['/logo.jpg'],
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-classical-bg text-classical-cream min-h-screen flex flex-col selection:bg-classical-gold selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
