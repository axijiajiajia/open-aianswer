import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'AI Answer Generator',
  description: 'Get instant answers to your digital marketing questions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
