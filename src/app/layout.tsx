import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { MainPage } from 'constants/pages';
import 'assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: MainPage.metaTitle.toUpperCase(),
  description: MainPage.metaDescription,
  keywords: MainPage.metaKeywords,
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
