import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Edu Escape Academy',
  description:
    'Digitale Escape Rooms, Spiele, Lesespurgeschichten und Genially-Angebote für Lehrkräfte.',
  icons: { icon: './favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
