import '@/app/ui/global.css';
import { inter, lusitana } from './ui/fonts';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/gfavicon.ico"></link>
      </Head>      
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
