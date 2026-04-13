import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grilled Grinders — Coffee & Co.',
  description: 'Brewed Fresh, Served Warm. Premium Coffee experiences.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents zoom for mobile-app feel
  themeColor: '#E6DED4',
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
        <div className="app-wrapper">
          <main className="main-card">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
