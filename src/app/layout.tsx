import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/ClientLayout';
import GlobalMenu from '../components/GlobalMenu';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <GlobalMenu />
      </body>
    </html>
  );
} 