'use client';

import { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Send, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

export default function ContactInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Complete Villa Interior',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setTimeout(() => {
          window.open(data.whatsappUrl, '_blank');
        }, 1200);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-classical-bg relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <MessageSquare className="w-4 h-4 text-classical-gold" />
            <span>CONTACT & INQUIRY CENTER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Let&apos;s Craft Your <span className="gold-text-gradient italic">Dream Space</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Connect directly with Sharma Interior Designer via WhatsApp or Phone for immediate quotes and 3D catalogs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Highlight Box */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-950/80 to-classical-card border border-emerald-500/40 shadow-classical-deep space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                    Fastest Response
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Direct WhatsApp Inquiry
                  </h3>
                </div>
              </div>
              <p className="text-xs text-emerald-100 font-light leading-relaxed">
                Click below to start an instant WhatsApp chat with our chief wood designer. Send photos of your space or choose from our catalog.
              </p>
              <a
                href={getWhatsAppLink("Hello Sharma Interior Designer, I would like to inquire about your furniture collections and interior services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 rounded shadow-lg transition-all transform hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Inquire on WhatsApp Now</span>
              </a>
            </div>

            {/* Direct Call & Address Box */}
            <div className="p-6 rounded-xl bg-classical-card border border-classical-border space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-classical-bg border border-classical-gold/40 text-classical-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-classical-gold font-bold block">
                    Phone & Consultation
                  </span>
                  <a href={`tel:${PHONE_NUMBER}`} className="font-serif text-xl font-bold text-classical-cream hover:text-classical-gold transition-colors">
                    +91 {PHONE_NUMBER}
                  </a>
                  <p className="text-xs text-classical-creamMuted mt-1">Available 9:00 AM – 9:00 PM (Mon – Sun)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-classical-border/40">
                <div className="p-3 rounded-lg bg-classical-bg border border-classical-gold/40 text-classical-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-classical-gold font-bold block">
                    Showroom & Design Studio
                  </span>
                  <p className="font-serif text-sm font-bold text-classical-cream">
                    Sharma Interior Designer & Fine Furniture Studio
                  </p>
                  <p className="text-xs text-classical-creamMuted font-light mt-0.5">
                    Patna & NCR Region (Serving All Over Bihar & North India)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 bg-classical-card p-8 rounded-xl border border-classical-gold/40 shadow-classical-deep">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle className="w-16 h-16 text-classical-gold mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-classical-cream">
                  Inquiry Registered Successfully!
                </h3>
                <p className="text-xs text-classical-creamMuted max-w-md mx-auto font-light">
                  Redirecting you to WhatsApp to connect directly with our chief designer...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-xl font-bold text-classical-cream mb-4">
                  Send a Direct Inquiry Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-classical-gold font-semibold block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-classical-bg border border-classical-border text-classical-cream text-xs focus:outline-none focus:border-classical-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-classical-gold font-semibold block mb-1.5">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9801197102"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-classical-bg border border-classical-border text-classical-cream text-xs focus:outline-none focus:border-classical-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-classical-gold font-semibold block mb-1.5">
                    Service / Furniture of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-classical-bg border border-classical-border text-classical-cream text-xs focus:outline-none focus:border-classical-gold"
                  >
                    <option value="Complete Villa Interior">Complete Villa Interior</option>
                    <option value="Teakwood Maharaja Sofa Set">Teakwood Maharaja Sofa Set</option>
                    <option value="Emperor Carved Dining Suite">Emperor Carved Dining Suite</option>
                    <option value="Victoria 4-Poster Master Bed">Victoria 4-Poster Master Bed</option>
                    <option value="Executive Boardroom Furniture">Executive Boardroom Furniture</option>
                    <option value="Custom Furniture Manufacturing">Custom Furniture Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-classical-gold font-semibold block mb-1.5">
                    Message / Space Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share dimensions, room type, or specific customization requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-classical-bg border border-classical-border text-classical-cream text-xs focus:outline-none focus:border-classical-gold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending...' : 'Submit & Connect on WhatsApp'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
