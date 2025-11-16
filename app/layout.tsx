import type { Metadata } from 'next';
import { Audiowide, DM_Mono } from 'next/font/google';
import './styles/globals.css';

const audiowide = Audiowide({
  variable: '--font-geist-Audiowide',
  subsets: ['latin'],
  weight: '400',
});

const DMMono = DM_Mono({
  variable: '--font-geist-DMMono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Record Label',
  description: 'Recor label',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${audiowide.variable} ${DMMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
