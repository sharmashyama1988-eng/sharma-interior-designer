import BookingPortal from '@/components/BookingPortal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | Sharma Interior & Fine Furniture',
  description: 'Book your luxury classical furniture and royal interior design consultation with Sharma Interior Designer. Direct Phone: 9801197102.',
};

export default function BookingRoutePage() {
  return <BookingPortal isStandalone={true} />;
}
