import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReservationForm from "./components/ReservationForm";
import { Home as HomeIcon, Waves, MapPin, Star, ChevronRight } from "lucide-react";

import Terasse from "../src/img/terasse.png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.com';

export const metadata: Metadata = {
  title: "Location Mobil-Home Face à la Mer Le Portel | Blueportel",
  description: "Location mobil-home face à la mer au Portel, Côte d'Opale. Mobil-home 3 chambres, vue panoramique, accès plage. Réservez dès 90€/nuit.",
  keywords: [
    "location mobil-home Le Portel",
    "mobil-home prestige face à la mer",
    "location mobil-home Côte d'Opale",
    "mobil-home 3 chambres vue mer",
    "location vacances Le Portel",
    "mobil-home plage Le Portel",
    "hébergement mobil-home prestige",
    "location mobil-home vue panoramique",
    "mobil-home haut de gamme Côte d'Opale",
    "location mobil-home accès plage",
    "location mobil-home Boulogne-sur-Mer",
    "mobil-home vue mer",
    "location vacances Côte d'Opale",
    "mobil-home 6 personnes",
    "location mobil-home terrasse vue mer",
  ],
  authors: [{ name: "Blueportel" }],
  creator: "Blueportel",
  publisher: "Blueportel",
  openGraph: {
    title: "Blueportel - Mobil-Home Prestige Face à la Mer | Le Portel",
    description: "Location mobil-home prestige 3 chambres face à la mer au Portel. Vue panoramique, accès direct plage. À partir de 90€/nuit.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Blueportel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Blueportel - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueportel - Mobil-Home Prestige Face à la Mer",
    description: "Location mobil-home prestige 3 chambres face à la mer au Portel. Vue panoramique, accès direct plage.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: "/",
  },
  category: "Tourisme",
  classification: "Location de mobil-home",
  other: {
    "geo.region": "FR-62",
    "geo.placename": "Le Portel",
    "geo.position": "50.7081;1.5714",
    "ICBM": "50.7081, 1.5714",
  },
};

export default function Home() {
  // Structured Data JSON-LD pour SEO maximum
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: "Blueportel",
    description: "Location de mobil-home prestige face à la mer au Portel sur la Côte d'Opale",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: ["+32488832091", "+33745324836"],
    email: "infos@blueportel.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "rue du Vinâve 32",
      addressLocality: "Liers",
      addressCountry: "BE",
      postalCode: "4042",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7081,
      longitude: 1.5714,
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const accommodationSchema = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: "Blueportel Mobil-Home Prestige",
    description: "Mobil-home de prestige 3 chambres face à la mer au Portel avec vue panoramique et accès direct à la plage",
    image: `${siteUrl}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Le Portel",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7081,
      longitude: 1.5714,
    },
    priceRange: "€€",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    numberOfRooms: {
      "@type": "QuantitativeValue",
      value: "3",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: "6",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Vue mer panoramique",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Accès direct plage",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Terrasse couverte",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Climatisation",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Chauffage",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Blueportel",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Location de mobil-home prestige face à la mer",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+32488832091",
      contactType: "Customer Service",
      availableLanguage: ["French"],
      email: "infos@blueportel.fr",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Blueportel",
    url: siteUrl,
    description: "Location de mobil-home prestige face à la mer au Portel",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accommodationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
        <nav aria-label="Fil d'Ariane" className="w-full max-w-7xl mb-4 sm:mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">Accueil</Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">Location Mobil-Home Face à la Mer</li>
          </ol>
        </nav>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-tight px-3 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6">
          Location Mobil-Home  <br className="hidden sm:block" />{" "}
          <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>Face à la Mer</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-3 sm:px-4 md:px-6">
          Mobil-Home 3 Chambres • Côte d&#39;Opale • Vue Mer Panoramique • Accès Direct Plage
        </p>
        <p className="sr-only">
          Découvrez notre location mobil-home face à la mer au Portel. Mobil-home 3 chambres pour 6 personnes avec vue mer panoramique sur la Côte d&#39;Opale. 
          Location vacances mobil-home avec accès direct à la plage et terrasse couverte. Réservez dès maintenant votre séjour au Portel.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 w-full sm:w-auto items-stretch sm:items-center justify-center mb-4 sm:mb-6 md:mb-8">
          <Link 
            href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1" 
            target="_blank"
            rel="nofollow"
            className="cursor-pointer border-2 border-blue-500 text-black font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 px-4 py-2.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md text-xs sm:text-sm md:text-base whitespace-nowrap text-center w-full sm:w-auto"
          >
            Réserver Maintenant
          </Link>
          <Link 
            href="#decouvrir-le-mobil-home" 
            className="cursor-pointer bg-blue-500 font-bold hover:bg-blue-600 transition-colors duration-300 text-white px-4 py-2.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md text-xs sm:text-sm md:text-base whitespace-nowrap inline-block text-center w-full sm:w-auto"
          >
            Découvrir le Mobil-Home
          </Link>
        </div>

        <section className="reservation mt-12 sm:mt-16 md:mt-20 lg:mt-24 p-4 sm:p-6 md:p-8 bg-gray-200 rounded-lg shadow w-full flex flex-col items-center justify-center" aria-label="Réservation mobil-home">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black leading-tight px-2 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6">
              <Link href="#decouvrir-le-mobil-home" className="hover:text-blue-500 transition-colors">Découvrir le Mobil-Home</Link> 
              <br className="hidden sm:block" />
              <span className="text-blue-500">Face à la Mer</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-6">
              Mobil-Home 3 Chambres Côte d&#39;Opale • Vue Mer Panoramique • Location Vacances Face à la Mer
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
            <ReservationForm />
          </div>
          
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-2 sm:py-4 md:py-6">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black mb-0.5 sm:mb-1">
              Prix Location Mobil-Home 
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
              À partir de <span className="text-blue-500">90€</span> / nuit
            </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold px-2 sm:px-4 md:px-6">
              Sélectionnez vos dates pour voir le prix total de votre <Link href="#decouvrir-le-mobil-home" className="text-blue-500 hover:text-blue-600">location mobil-home face à la mer</Link>
            </p>
          </div>
        </section>

        <section className="features mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" aria-label="Caractéristiques du mobil-home">
          <h2 className="sr-only">Caractéristiques de votre location mobil-home face à la mer</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Mobil-home 3 chambres">
                <HomeIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Mobil-Home 6 Personnes
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                <Link href="#decouvrir-le-mobil-home" className="hover:text-blue-500 transition-colors">3 chambres spacieuses</Link> mobil-home avec vue mer
              </p>
            </article>

            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Vue mer panoramique">
                <Waves className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Vue Mer Panoramique
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                <Link href="#decouvrir-le-mobil-home" className="hover:text-blue-500 transition-colors">Panorama exceptionnel</Link> face à la mer Côte d&#39;Opale
              </p>
            </article>

            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Accès direct plage">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Accès Direct Plage
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                <Link href="#decouvrir-le-mobil-home" className="hover:text-blue-500 transition-colors">Mobil-home face à la mer</Link> avec accès direct à la plage
              </p>
            </article>

            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Mobil-home prestige">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Mobil-Home Prestige
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                <Link href="#decouvrir-le-mobil-home" className="hover:text-blue-500 transition-colors">Location mobil-home</Link> haut de gamme tout confort inclus
              </p>
            </article>
          </div>
        </section>
        

        <section className="location mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" aria-label="Location mobil-home face à la mer au Portel">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black leading-tight px-2 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6 text-center">
            Le Logement <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>Prestige</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-4 sm:mb-6 px-2 sm:px-4 md:px-6">Confort premium avec vue mer panoramique</p>
          <div className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-4xl mx-auto px-3 sm:px-4 md:px-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <p className="mb-3 sm:mb-4">
              Notre <strong>mobil-home face à la mer au Portel</strong> vous offre un <strong>confort premium</strong> avec une <strong>vue mer panoramique</strong> exceptionnelle. 
              Le <strong>mobil-home 3 chambres</strong> est parfaitement équipé pour accueillir <strong>6 personnes</strong> dans les meilleures conditions. 
              Chaque détail a été pensé pour votre confort et votre bien-être.
            </p>
            <p>
              Que vous souhaitiez passer vos <strong>vacances en famille</strong> ou entre amis, notre <strong>location mobil-home au Portel</strong> 
              sur la <strong>Côte d&#39;Opale</strong> saura répondre à toutes vos attentes. 
              Profitez de l&#39;<strong>accès direct à la plage</strong> et de la <strong>terrasse couverte</strong> pour des moments inoubliables.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto shadow-lg">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8">À l&#39;intérieur du Mobil-Home</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              Le <strong>mobil-home face à la mer</strong> dispose de tout le confort nécessaire pour un séjour agréable. 
              Découvrez les équipements de notre <strong>location mobil-home au Portel</strong> :
            </p>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800"><strong>Chambre parentale</strong> avec <strong>salle de bain privative</strong> et vue mer</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800"><strong>Chambre parentale</strong> avec <strong>salle de bain privative</strong> et vue mer</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800"><strong>2 chambres</strong> avec <strong>lits jumeaux</strong> + <strong>2ème salle de bain</strong></span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800"><strong>Kitchenette entièrement équipée</strong> pour préparer vos repas</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800"><strong>Climatisation</strong> pour l&#39;été et <strong>chauffage</strong> pour l&#39;hiver</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto shadow-lg mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8">À l&#39;extérieur du Mobil-Home</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              Profitez des espaces extérieurs de notre <strong>mobil-home face à la mer au Portel</strong> :
            </p>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800"><strong>Terrasse couverte de 12 m²</strong> avec <strong>vue mer panoramique</strong>, parfaite pour vos repas en plein air et apéritifs face au coucher de soleil sur la <strong>Côte d&#39;Opale</strong>.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800"><strong>Accès direct à la plage</strong> depuis le <strong>mobil-home</strong> pour profiter de la mer à tout moment</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">Espace extérieur privé pour vos moments de détente face à la mer</span>
              </li>
            </ul>
          </div>
          <div className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-lg flex justify-center items-center scroll-mt-20" id="decouvrir-le-mobil-home">
            <Image 
              src={Terasse} 
              alt="Terrasse couverte mobil-home Blueportel avec vue mer panoramique au Portel - Location mobil-home face à la mer Côte d'Opale" 
              width={1000} 
              height={400} 
              className="rounded-lg w-full h-auto object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
          </div>
        </section>

        <section className="cta mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 sm:px-4">
              Prêt à Réserver Votre Séjour Face à la Mer ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4 max-w-2xl">
              Réservez dès maintenant votre <strong>location mobil-home face à la mer au Portel</strong> et profitez d&#39;un séjour inoubliable avec <strong>vue mer panoramique</strong> sur la <strong>Côte d&#39;Opale</strong>. 
              Notre <strong>mobil-home 3 chambres</strong> vous attend pour vos <strong>vacances</strong>.
            </p>
            <Link 
              href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1" 
              target="_blank"
              rel="nofollow"
              className="bg-white text-blue-600 font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap w-full sm:w-auto text-center"
            >
              Réserver Maintenant
            </Link>
          </div>
        </section>

        <div className="sr-only">
          <h2>Location Mobil-Home Face à la Mer au Portel - Blueportel</h2>
          <p>
            Blueportel propose la location de mobil-home face à la mer au Portel sur la Côte d&#39;Opale. 
            Notre mobil-home 3 chambres peut accueillir jusqu&#39;à 6 personnes avec vue mer panoramique 
            et accès direct à la plage. Location vacances mobil-home haut de gamme à partir de 90€ par nuit. 
            Réservez votre mobil-home avec vue mer au Portel.
          </p>
          <p>
            Situé au Portel, notre mobil-home offre une vue exceptionnelle sur la mer avec terrasse couverte de 12 m². 
            Location mobil-home 3 chambres avec salle de bain privative, kitchenette équipée, climatisation et chauffage. 
            Idéal pour vos vacances en famille ou entre amis sur la Côte d&#39;Opale.
          </p>
          <p>
            Location mobil-home Le Portel avec accès direct plage. Mobil-home face à la mer avec vue panoramique. 
            Hébergement mobil-home haut de gamme pour 6 personnes. Réservez votre séjour au Portel dès maintenant.
          </p>
          <h3>Pourquoi choisir Blueportel pour votre location mobil-home au Portel ?</h3>
          <ul>
            <li>Mobil-home 3 chambres avec vue mer panoramique</li>
            <li>Accès direct à la plage</li>
            <li>Terrasse couverte avec vue mer</li>
            <li>Location mobil-home haut de gamme</li>
            <li>Prix à partir de 90€ par nuit</li>
            <li>Situé sur la Côte d&#39;Opale</li>
          </ul>
        </div>
      </main>
    </div>
    </>
  );
}
