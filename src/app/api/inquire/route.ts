import { NextResponse } from 'next';
import { WHATSAPP_NUMBER } from '@/data/furnitureData';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mppzabek';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, message, itemRequested } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required' },
        { status: 400 }
      );
    }

    // Forward to Formspree for email delivery
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          service: service || itemRequested || 'Interior Consultation',
          message: message || 'No additional notes',
          _subject: `New Inquiry Lead: ${name} (${phone})`,
        }),
      });
    } catch (formspreeError) {
      console.error('Formspree forward error:', formspreeError);
    }

    const inquiryDetails = `*New Website Inquiry*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Interested In:* ${service || itemRequested || 'Interior Consultation'}\n` +
      `*Message:* ${message || 'No additional details'}\n\n` +
      `Sent via Sharma Interior Designer Website`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiryDetails)}`;

    return NextResponse.json({
      success: true,
      message: 'Inquiry registered successfully and emailed to designer! Connecting to WhatsApp...',
      whatsappUrl,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process inquiry request' },
      { status: 500 }
    );
  }
}
