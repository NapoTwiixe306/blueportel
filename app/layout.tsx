import type { Metadata } from "next";
import { Geist, Geist_Mono, Gluten } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Analytics from "../src/components/Analytics";
import { CurrencyProvider } from "../src/contexts/CurrencyContext";
import { headers } from "next/headers";
import { defaultLocale, locales, type Locale } from "../src/i18n/locales";
import { getLayoutDictionary } from "../src/i18n/layout";

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
  keywords: [
    'location mobil-home Le Portel',
    'mobil-home face à la mer',
    'location mobil-home Côte d\'Opale',
    'mobil-home 3 chambres',
    'location vacances Le Portel',
    'hébergement mobil-home',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/location-mobil-home-le-portel-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Blueportel - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/location-mobil-home-le-portel-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr-FR': `${siteUrl}/fr`,
      'en-US': `${siteUrl}/en`,
      'nl-NL': `${siteUrl}/nl`,
    },
  },
  icons: {
    icon: [
      { url: '/location-mobil-home-le-portel-logo.png', sizes: 'any' },
      { url: '/location-mobil-home-le-portel-logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/location-mobil-home-le-portel-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/location-mobil-home-le-portel-logo.png',
  },
  category: 'Tourisme',
  classification: 'Location de mobil-home',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const headerLocale = headerList.get("x-path-locale") as Locale | null;
  const locale = headerLocale && locales.includes(headerLocale) ? headerLocale : defaultLocale;
  const layoutDictionary = getLayoutDictionary(locale);

  const lodgingSchema = {
    '@context': 'https://schema.org',
    '@type': 'CampingResort',
    '@id': `${siteUrl}/#resort`,
    name: 'Blueportel',
    description: defaultDescription,
    url: siteUrl,
    logo: `${siteUrl}/location-mobil-home-le-portel-logo.png`,
    image: `${siteUrl}/galerie/blueportel-hero-vue-mer.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Camping Tohapi Le Phare d\'Opale, Boulevard Sainte-Beuve',
      addressLocality: 'Le Portel',
      addressRegion: 'Hauts-de-France',
      postalCode: '62480',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.7011',
      longitude: '1.5758',
    },
    telephone: '+32488832091',
    priceRange: '€€',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Vue Mer', value: 'true' },
      { '@type': 'LocationFeatureSpecification', name: '3 Chambres', value: 'true' },
      { '@type': 'LocationFeatureSpecification', name: 'Proche Nausicaá', value: 'true' },
    ],
  };

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} antialiased flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
        />
        <Analytics />
        <CurrencyProvider>
          <Navbar locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer dictionary={layoutDictionary.footer} locale={locale} />
        </CurrencyProvider>
      </body>
    </html>
  );
}
