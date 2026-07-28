import { NextResponse } from 'next/server';
import { WHATSAPP_NUMBER } from '@/data/furnitureData';

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

    const inquiryDetails = `*New Website Inquiry*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Interested In:* ${service || itemRequested || 'Interior Consultation'}\n` +
      `*Message:* ${message || 'No additional details'}\n\n` +
      `Sent via Sharma Interior Designer Website`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiryDetails)}`;

    return NextResponse.json({
      success: true,
      message: 'Inquiry registered successfully! Connecting to WhatsApp...',
      whatsappUrl,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process inquiry request' },
      { status: 500 }
    );
  }
}
