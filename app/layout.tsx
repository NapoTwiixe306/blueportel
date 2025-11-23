import type { Metadata } from "next";
import { Geist, Geist_Mono, Gluten } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gluten = Gluten({
  variable: "--font-gluten",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Configuration SEO de base
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';
const siteName = 'Blueportel';
const defaultTitle = 'Blueportel - Mobil-Home Prestige Face à la Mer | Location Le Portel';
const defaultDescription = 'Découvrez Blueportel, votre mobil-home de prestige face à la mer au Portel. Location de mobil-home haut de gamme avec vue imprenable sur la mer.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
