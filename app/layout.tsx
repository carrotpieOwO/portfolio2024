import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Noto_Sans_KR } from "next/font/google";


import "./globals.css";
import Nav from "./components/Nav";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "800", "900"],
});

export const notoSansKr = Noto_Sans_KR({
  preload: false,
  display: "swap",
  variable: "--font-noto-sans-kr",
  weight: ["100", "400", "500", "700", "900"],
  fallback: ["Noto Sans KR", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "ha0 portfolio 2024",
  description: "ha0 portfolio 2024, front-end developer",
  generator: 'Next.js',
  applicationName: 'ha0 portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'front-end', 'front', 'web', 'developer', '기술블로그', '블로그', 'blog'],
  authors: { name: 'ha0', url: 'https://ha0.work' },
  creator: 'ha0',
  publisher: 'ha0',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      template: '%s :: ha0',
      default: 'ha0'
    },
    description: "ha0 portfolio 2024, front-end developer",
    url: 'https://ha0.work',
    siteName: "ha0 portfolio 2024",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${notoSansKr.className} antialiased overflow-x-hidden bg`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
