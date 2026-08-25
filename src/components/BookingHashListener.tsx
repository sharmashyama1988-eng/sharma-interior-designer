'use client';

import React, { useState, useEffect } from 'react';
import BookingPortal from '@/components/BookingPortal';

export default function BookingHashListener() {
  const [isBooking, setIsBooking] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkHash = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.toLowerCase();
        setIsBooking(hash === '#booking' || hash.startsWith('#booking?'));
      }
    };

    // Check initial hash on mount
    checkHash();

    // Listen to hash changes and browser back/forward navigation
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('popstate', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('popstate', checkHash);
    };
  }, []);

  if (!mounted || !isBooking) {
    return null;
  }

  const handleBackToMain = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', window.location.pathname);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      setIsBooking(false);
    }
  };

  return <BookingPortal onBack={handleBackToMain} />;
}
