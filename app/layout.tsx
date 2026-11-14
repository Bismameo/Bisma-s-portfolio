import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bisma Yaseen — Frontend Developer',
  description: 'Bisma Yaseen is a frontend web developer building responsive, thoughtful web experiences with React, Next.js, JavaScript, and TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}