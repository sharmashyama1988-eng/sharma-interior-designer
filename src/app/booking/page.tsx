import BookingPortal from '@/components/BookingPortal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | Principal Architect Satya Narayan Sharma',
  description: 'Book your bespoke classical furniture and luxury villa interior architecture consultation with Principal Architect Satya Narayan Sharma. Direct Phone: 9801197102.',
};

export default function BookingRoutePage() {
  return <BookingPortal isStandalone={true} />;
}
