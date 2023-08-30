import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'

const josefinsans = localFont({ src: '../public/fonts/JosefinSans-Regular.ttf' })

export const metadata: Metadata = {
  title: 'Rockettela',
  description: 'We are Rockettela Studios. Delivering beyond limitless creativity, by all means possible.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={josefinsans.className}>{children}</body>
    </html>
  );
}
