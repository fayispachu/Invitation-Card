import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amal & Amiya - Wedding Invitation',
  description: 'You are invited to the Wedding Ceremony joining in marriage Amal & Amiya.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-cream text-deep-brown floral-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}
