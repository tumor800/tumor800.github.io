import './globals.css';
import localFont from 'next/font/local';

const hackFont = localFont({
  src: './fonts/Montserrat-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--montserrat',
});

export const metadata = {
  title: 'Johan Gideon',
  description: "Johan Gideon's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hackFont.variable} bg-j1 text-slate-400`}>{children}</body>
    </html>
  );
}
