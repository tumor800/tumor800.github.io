import './globals.css';
import localFont from 'next/font/local';

const hackFont = localFont({
  src: './fonts/hack.regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--hack',
});

export const metadata = {
  title: 'Johan Gideon',
  description: "Johan Gideon's Portfolios",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hackFont.variable} bg-j1`}>{children}</body>
    </html>
  );
}
