'use client'

import { useEffect } from 'react';
import Script from 'next/script';

export default function KofiButton() {
  useEffect(() => {
    // Ensure the kofiwidget2 object is available
    if (typeof window !== 'undefined' && window.kofiwidget2) {
      window.kofiwidget2.init('Support Me', '#29abe0', 'Q5Q0144IE9');
      window.kofiwidget2.draw();
    }
  }, []);

  return (
    <>
      <Script
        src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"
        strategy="afterInteractive"
      />
      <div className="kofi-button-container"></div>
    </>
  );
}