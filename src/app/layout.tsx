import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '../components/ClientLayout';
import GlobalMenu from '../components/GlobalMenu';

export const metadata: Metadata = {
  title: 'Mysore Union - Premium Membership Club',
  description: 'Experience luxury redefined at Mysore\'s premier membership club. Featuring state-of-the-art amenities, exclusive events, and unparalleled service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="font-montserrat">
        <ClientLayout>
          {children}
        </ClientLayout>
        <GlobalMenu />
      </body>
    </html>
  );
} 