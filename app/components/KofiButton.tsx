'use client'

import { useEffect } from 'react';

declare global {
  interface Window {
    kofiwidget2?: {
      init: (text: string, color: string, id: string) => void;
      draw: () => void;
    };
  }
}

export default function KofiButton() {
  useEffect(() => {
    // Ensure the kofiwidget2 object is available
    if (typeof window !== 'undefined' && window.kofiwidget2) {
      window.kofiwidget2.init('Support Me', '#29abe0', 'Q5Q0144IE9');
      window.kofiwidget2.draw();
    }
  }, []);

  return (
    <div className="kofi-button-container">
      {/* Ko-fi button will be inserted here by the script */}
    </div>
  );
}