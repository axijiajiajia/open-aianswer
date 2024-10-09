import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Answer Generator',
  description: 'Generate AI-powered answers to your questions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      
      </head>
      <body>{children}</body>
    </html>
  );
}
