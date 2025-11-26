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
        url: `${siteUrl}/logo.png`,
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
    images: [`${siteUrl}/logo.png`],
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

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: defaultDescription,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+32488832091',
      contactType: 'Customer Service',
      availableLanguage: ['French'],
      email: 'infos@blueportel.fr',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'rue du Vinâve 32',
      addressLocality: 'Liers',
      addressCountry: 'BE',
      postalCode: '4042',
    },
  };

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} antialiased flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
        <CurrencyProvider>
          <Navbar locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer dictionary={layoutDictionary.footer} />
        </CurrencyProvider>
      </body>
    </html>
  );
}
