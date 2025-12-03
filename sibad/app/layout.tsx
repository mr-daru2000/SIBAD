import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SIBAD - Sistem Informasi Bansos Desa',
  description: 'Platform manajemen bantuan sosial desa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
