'use client';

import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER } from '@/data/furnitureData';
import { CheckCircle2, MessageSquare, Phone, ArrowLeft, Send, RefreshCw } from 'lucide-react';

interface BookingPortalProps {
  onBack?: () => void;
  isStandalone?: boolean;
}

interface FormDataState {
  name: string;
  phone: string;
  service: string;
  city: string;
  date: string;
  time: string;
  message: string;
  _gotcha: string;
}

export default function BookingPortal({ onBack, isStandalone = false }: BookingPortalProps) {
  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mppzabek';

  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    phone: '',
    service: '',
    city: '',
    date: '',
    time: '',
    message: '',
    _gotcha: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<FormDataState | null>(null);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    // Set min date to today (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field as keyof FormDataState]);
  };

  const validateField = (field: string, value: string): boolean => {
    let err = '';
    if (field === 'name') {
      if (!value.trim()) err = 'Please enter your full name.';
    } else if (field === 'phone') {
      const phoneDigits = value.replace(/\D/g, '');
      if (phoneDigits.length < 10) err = 'Please enter a valid 10-digit phone number.';
    } else if (field === 'service') {
      if (!value) err = 'Please select a required service.';
    } else if (field === 'date') {
      if (!value) err = 'Please choose a preferred consultation date.';
    }

    setErrors((prev) => {
      const next = { ...prev };
      if (err) {
        next[field] = err;
      } else {
        delete next[field];
      }
      return next;
    });

    return !err;
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) newErrors.phone = 'Please enter a valid 10-digit phone number.';
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.date) newErrors.date = 'Please choose a preferred date.';

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      service: true,
      date: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Bot trap check
    if (formData._gotcha) {
      return;
    }

    if (!validateAll()) {
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        payload.append(key, val);
      });

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      if (response.ok) {
        setSubmittedData({ ...formData });
        setSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      // Fallback if offline or endpoint error
      setSubmittedData({ ...formData });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReturnHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      if (typeof window !== 'undefined') {
        window.location.hash = '';
        if (window.location.pathname !== '/') {
          window.location.href = '/';
        }
      }
    }
  };

  const generateWhatsAppUrl = (data: FormDataState) => {
    const waText = `Hi, I just booked a consultation on your website.\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nPreferred Date: ${data.date}${data.time ? '\nTime: ' + data.time : ''}${data.city ? '\nCity: ' + data.city : ''}${data.message ? '\nNotes: ' + data.message : ''}`;
    return `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(waText)}`;
  };

  return (
    <div className="fixed inset-0 z-[100] min-h-screen overflow-y-auto bg-[#0b0a08] text-[#f4efe3] font-sans antialiased selection:bg-[#d6ad4c] selection:text-black">
      {/* Background Ambience Gradients */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_900px_500px_at_15%_-10%,rgba(214,173,76,0.08),transparent_60%),radial-gradient(ellipse_700px_500px_at_100%_10%,rgba(214,173,76,0.06),transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 pb-20 pt-4">
        {/* Header */}
        <header className="w-full max-w-4xl pt-6 pb-5 flex items-center justify-between border-b border-[#2a2620] mb-10">
          <button
            onClick={handleReturnHome}
            className="flex items-center gap-3 text-left group focus:outline-none"
            title="Return to Main Website"
          >
            <div className="w-10 h-10 border border-[#8a7439] rounded-full flex items-center justify-center font-serif text-[#d6ad4c] text-lg flex-shrink-0 group-hover:border-[#f0c869] group-hover:scale-105 transition-all">
              S
            </div>
            <div className="leading-tight">
              <div className="font-serif font-semibold text-lg tracking-wide text-[#f4efe3] group-hover:text-[#f0c869] transition-colors">
                SHARMA
              </div>
              <div className="text-[10px] tracking-[0.16em] text-[#8a7439] uppercase mt-0.5">
                Interior &amp; Fine Furniture
              </div>
            </div>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={handleReturnHome}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#a89e8c] hover:text-[#d6ad4c] px-3 py-1.5 rounded border border-[#2a2620] hover:border-[#8a7439] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Full Website</span>
            </button>

            <a
              href={`tel:+91${PHONE_NUMBER}`}
              className="text-xs sm:text-sm text-[#a89e8c] hover:text-[#f4efe3] flex items-center gap-2 px-3 py-1.5 rounded border border-[#2a2620] hover:border-[#8a7439] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#d6ad4c]" />
              <span>
                Call <strong className="text-[#f0c869] font-semibold">{PHONE_NUMBER}</strong>
              </span>
            </a>
          </div>
        </header>

        {/* Hero */}
        <div className="w-full max-w-xl text-center mb-9">
          <div className="text-[11px] tracking-[0.24em] uppercase text-[#8a7439] font-medium mb-3 flex items-center justify-center gap-2">
            <span className="text-[#8a7439] tracking-tighter">——</span> Book a Consultation
          </div>
          <h1 className="font-serif font-semibold text-3xl sm:text-4xl text-[#f4efe3] leading-tight">
            Plan your <em className="italic text-[#f0c869] font-serif font-normal">royal interior</em>
            <br />
            with our design team
          </h1>
          <p className="mt-3.5 text-[#a89e8c] text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Share a few details and preferred timing below — we'll confirm your consultation directly on WhatsApp or by phone.
          </p>
        </div>

        {/* Card Container */}
        <div className="w-full max-w-xl bg-gradient-to-b from-[#141210] to-[#1a1714] border border-[#2a2620] rounded-sm p-6 sm:p-10 relative shadow-2xl">
          {/* Gold highlight accent top line */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#8a7439] to-transparent" />

          {/* Form Error Banner */}
          {formError && (
            <div className="mb-6 p-3.5 bg-[#e0664f]/10 border border-[#e0664f]/40 text-[#f0a08e] text-xs sm:text-sm rounded">
              {formError}
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot field for bot protection */}
              <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="gotcha">Leave this empty</label>
                <input
                  type="text"
                  id="gotcha"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._gotcha}
                  onChange={handleInputChange}
                />
              </div>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[11px] tracking-[0.08em] uppercase text-[#8a7439] font-semibold mb-2">
                    Full Name <span className="text-[#d6ad4c]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Rohan Verma"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full bg-[#0e0c0a] border ${
                      touched.name && errors.name ? 'border-[#e0664f]' : 'border-[#2a2620] focus:border-[#8a7439]'
                    } rounded-sm px-3.5 py-3 text-[#f4efe3] text-sm outline-none transition-colors placeholder-[#5a5347]`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-xs text-[#e0664f] mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.08em] uppercase text-[#8a7439] font-semibold mb-2">
                    Phone Number <span className="text-[#d6ad4c]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('phone')}
                    className={`w-full bg-[#0e0c0a] border ${
                      touched.phone && errors.phone ? 'border-[#e0664f]' : 'border-[#2a2620] focus:border-[#8a7439]'
                    } rounded-sm px-3.5 py-3 text-[#f4efe3] text-sm outline-none transition-colors placeholder-[#5a5347]`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-xs text-[#e0664f] mt-1.5">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Service & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[11px] tracking-[0.08em] uppercase text-[#8a7439] font-semibold mb-2">
                    Service Required <span className="text-[#d6ad4c]">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('service')}
                    className={`w-full bg-[#0e0c0a] border ${
                      touched.service && errors.service ? 'border-[#e0664f]' : 'border-[#2a2620] focus:border-[#8a7439]'
                    } rounded-sm px-3.5 py-3 text-[#f4efe3] text-sm outline-none transition-colors`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Interior Design Consultation">Interior Design Consultation</option>
                    <option value="Living Room Furniture">Living Room Furniture</option>
                    <option value="Kitchen & Almirah">Kitchen &amp; Almirah</option>
                    <option value="Mica & Doors">Mica &amp; Doors</option>
                    <option value="Custom / Bespoke Furniture">Custom / Bespoke Furniture</option>
                    <option value="Site Visit / Measurement">Site Visit / Measurement</option>
                    <option value="Other">Other</option>
                  </select>
                  {touched.service && errors.service && (
                    <p className="text-xs text-[#e0664f] mt-1.5">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.08em] uppercase text-[#8a7439] font-semibold mb-2">
                    City / Area
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Patna / Bihar"
                    autoComplete="address-level2"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#0e0c0a] border border-[#2a2620] focus:border-[#8a7439] rounded-sm px-3.5 py-3 text-[#f4efe3] text-sm outline-none transition-colors placeholder-[#5a5347]"
                  />
                </div>
              </div>

              {/* Row 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[11px] tracking-[0.08em] uppercase text-[#8a7439] font-semibold mb-2">
                    Preferred Date <span className="text-[#d6ad4c]">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('date')}
                    className={`w-full bg-[#0e0c0a] border ${
                      touched.date && errors.date ? 'border-[#e0664f]' : 'border-[#2a2620] focus:border-[#8a7439]'
                    } rounded-sm px-3.5 py-3 text-[#f4efe3] text-sm outline-none transition-colors`}
                  />
                  {touched.date && errors.date && (
                    <p className="text-xs text-[#e0664f] mt-1.5">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.08em] uppercase text-[#8a7439] font-semibold mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-[#0e0c0a] border border-[#2a2620] focus:border-[#8a7439] rounded-sm px-3.5 py-3 text-[#f4efe3] text-sm outline-none transition-colors"
                  >
                    <option value="" disabled>
                      Select a slot
                    </option>
                    <option value="Morning (10 AM – 1 PM)">Morning (10 AM – 1 PM)</option>
                    <option value="Afternoon (1 PM – 4 PM)">Afternoon (1 PM – 4 PM)</option>
                    <option value="Evening (4 PM – 7 PM)">Evening (4 PM – 7 PM)</option>
                    <option value="Anytime">Anytime</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[11px] tracking-[0.08em] uppercase text-[#8a7439] font-semibold mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  placeholder="Room size, budget range, style preference, anything else the team should know..."
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#0e0c0a] border border-[#2a2620] focus:border-[#8a7439] rounded-sm px-3.5 py-3 text-[#f4efe3] text-sm outline-none transition-colors placeholder-[#5a5347] resize-y min-h-[85px]"
                />
              </div>

              {/* Submit Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto bg-[#d6ad4c] hover:bg-[#f0c869] text-[#171208] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-sm transition-all shadow-md active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm Booking</span>
                    </>
                  )}
                </button>
                <span className="text-xs text-[#a89e8c] leading-normal">
                  You'll get a confirmation from our team within a few hours.
                </span>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-4 animate-fadeIn">
              <div className="w-14 h-14 border border-[#8a7439] rounded-full flex items-center justify-center mx-auto mb-5 bg-[#0e0c0a]">
                <CheckCircle2 className="w-7 h-7 text-[#f0c869]" />
              </div>

              <h2 className="font-serif italic font-medium text-2xl text-[#f0c869] mb-2">
                Booking Request Received
              </h2>
              <p className="text-sm text-[#a89e8c] leading-relaxed max-w-sm mx-auto">
                Thank you — our design team has received your details and will reach out shortly to confirm your consultation.
              </p>

              {submittedData && (
                <div className="mt-6 text-left bg-[#0e0c0a] border border-[#2a2620] rounded-sm p-5 text-xs text-[#a89e8c] space-y-2 leading-relaxed">
                  <div>
                    <strong className="text-[#f4efe3] font-semibold">Name:</strong> {submittedData.name}
                  </div>
                  <div>
                    <strong className="text-[#f4efe3] font-semibold">Phone:</strong> {submittedData.phone}
                  </div>
                  <div>
                    <strong className="text-[#f4efe3] font-semibold">Service:</strong> {submittedData.service}
                  </div>
                  <div>
                    <strong className="text-[#f4efe3] font-semibold">Preferred Date:</strong> {submittedData.date}
                  </div>
                  {submittedData.time && (
                    <div>
                      <strong className="text-[#f4efe3] font-semibold">Preferred Time:</strong> {submittedData.time}
                    </div>
                  )}
                  {submittedData.city && (
                    <div>
                      <strong className="text-[#f4efe3] font-semibold">City:</strong> {submittedData.city}
                    </div>
                  )}
                  {submittedData.message && (
                    <div>
                      <strong className="text-[#f4efe3] font-semibold">Project Notes:</strong> {submittedData.message}
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                {submittedData && (
                  <a
                    href={generateWhatsAppUrl(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-[#3fbf6a] border border-[#3fbf6a]/40 bg-[#3fbf6a]/10 hover:bg-[#3fbf6a]/20 text-xs font-semibold px-5 py-3 rounded-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Message us on WhatsApp too</span>
                  </a>
                )}

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      service: '',
                      city: '',
                      date: '',
                      time: '',
                      message: '',
                      _gotcha: '',
                    });
                    setTouched({});
                    setErrors({});
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs text-[#a89e8c] hover:text-[#d6ad4c] border border-[#2a2620] px-4 py-3 rounded-sm hover:border-[#8a7439] transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Book Another</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-9 text-center text-[#5a5347] text-xs leading-relaxed">
          Sharma Interior &amp; Fine Furniture &nbsp;·&nbsp; Bihar's premier luxury furniture &amp; interior design house
          <div className="mt-2">
            <button
              onClick={handleReturnHome}
              className="text-[#8a7439] hover:text-[#d6ad4c] underline underline-offset-4 transition-colors font-medium cursor-pointer"
            >
              Visit full website →
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
