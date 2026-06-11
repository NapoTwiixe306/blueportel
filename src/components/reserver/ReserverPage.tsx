import Link from "next/link";
import Image from "next/image";

import type { Locale } from "../../i18n/locales";

/** Liens externes de réservation par plateforme. */
export const bookingPlatforms = {
  prestige: {
    booking: "https://www.booking.com/hotel/fr/blueportel.fr.html",
    airbnb: "https://www.airbnb.com/rooms/1389190512266062716",
  },
  horizon: {
    // Pas encore d'annonce Booking/Airbnb : réservation en direct uniquement.
  },
} as const;

type ReserverCopy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pretitle: string;
  title: string;
  description: string;
  prestigeName: string;
  prestigeDetails: string;
  horizonName: string;
  horizonDetails: string;
  bookingLabel: string;
  airbnbLabel: string;
  directTitle: string;
  directText: string;
  contactLabel: string;
  availabilityLabel: string;
  viewLabel: string;
};

export const reserverCopy: Record<Locale, ReserverCopy> = {
  fr: {
    metaTitle: "Réserver | Blueportel — Booking.com ou Airbnb",
    metaDescription:
      "Réservez votre mobil-home Blueportel face à la mer à Le Portel : choisissez votre plateforme (Booking.com ou Airbnb) pour le Prestige, ou contactez-nous en direct pour l'Horizon.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Réserver",
    pretitle: "Réservation",
    title: "Choisissez votre plateforme de réservation",
    description:
      "Réservez en toute confiance sur la plateforme de votre choix. Pour toute question avant de réserver (dates, lits bébé, arrivée tardive…), contactez-nous : nous répondons en général dans la journée.",
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "6 personnes · 3 chambres · terrasse couverte vue mer · climatisation",
    horizonName: "Blueportel Horizon",
    horizonDetails: "4 personnes · 2 chambres · même emplacement face à la mer",
    bookingLabel: "Réserver sur Booking.com",
    airbnbLabel: "Réserver sur Airbnb",
    directTitle: "Réservation en direct",
    directText:
      "L'Horizon se réserve directement auprès de Michel et Véronique : envoyez vos dates via la page contact ou par téléphone, réponse en général dans la journée.",
    contactLabel: "Nous contacter",
    availabilityLabel: "Voir les disponibilités",
    viewLabel: "Découvrir l'hébergement",
  },
  en: {
    metaTitle: "Book your stay | Blueportel — Booking.com or Airbnb",
    metaDescription:
      "Book your Blueportel seafront mobile home in Le Portel: choose your platform (Booking.com or Airbnb) for the Prestige, or contact us directly for the Horizon.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Book",
    pretitle: "Booking",
    title: "Choose your booking platform",
    description:
      "Book with confidence on the platform of your choice. For any question before booking (dates, cots, late arrival…), contact us — we usually reply within the day.",
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "Sleeps 6 · 3 bedrooms · covered sea-view terrace · air conditioning",
    horizonName: "Blueportel Horizon",
    horizonDetails: "Sleeps 4 · 2 bedrooms · same seafront location",
    bookingLabel: "Book on Booking.com",
    airbnbLabel: "Book on Airbnb",
    directTitle: "Direct booking",
    directText:
      "The Horizon is booked directly with Michel and Véronique: send your dates via the contact page or by phone — we usually reply within the day.",
    contactLabel: "Contact us",
    availabilityLabel: "Check availability",
    viewLabel: "View the accommodation",
  },
  nl: {
    metaTitle: "Reserveren | Blueportel — Booking.com of Airbnb",
    metaDescription:
      "Reserveer uw Blueportel-stacaravan aan zee in Le Portel: kies uw platform (Booking.com of Airbnb) voor de Prestige, of contacteer ons rechtstreeks voor de Horizon.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Reserveren",
    pretitle: "Reservering",
    title: "Kies uw boekingsplatform",
    description:
      "Boek met vertrouwen op het platform van uw keuze. Voor vragen vóór het boeken (data, kinderbedje, late aankomst…) kunt u ons contacteren — we antwoorden meestal binnen de dag.",
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "6 personen · 3 slaapkamers · overdekt terras met zeezicht · airco",
    horizonName: "Blueportel Horizon",
    horizonDetails: "4 personen · 2 slaapkamers · dezelfde ligging aan zee",
    bookingLabel: "Reserveren op Booking.com",
    airbnbLabel: "Reserveren op Airbnb",
    directTitle: "Rechtstreeks reserveren",
    directText:
      "De Horizon reserveert u rechtstreeks bij Michel en Véronique: stuur uw data via de contactpagina of telefonisch — antwoord meestal binnen de dag.",
    contactLabel: "Contacteer ons",
    availabilityLabel: "Beschikbaarheid bekijken",
    viewLabel: "Bekijk de accommodatie",
  },
};

export default function ReserverPage({ locale }: { locale: Locale }) {
  const copy = reserverCopy[locale];

  return (
    <div className="flex min-h-screen justify-center bg-white font-sans w-full overflow-x-hidden">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
        <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
            <li>
              <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
                {copy.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {copy.breadcrumbCurrent}
            </li>
          </ol>
        </nav>

        <header className="w-full max-w-3xl text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
            {copy.pretitle}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600">{copy.description}</p>
        </header>

        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Prestige */}
          <article className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[16/9]">
              <Image
                src="/galerie/blueportel-terrasse-couverte-1920x1280.jpg"
                alt={copy.prestigeName}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {copy.prestigeName}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-5">{copy.prestigeDetails}</p>
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href={bookingPlatforms.prestige.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003580] text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-[#00224f] transition-colors"
                >
                  {copy.bookingLabel}
                </a>
                <a
                  href={bookingPlatforms.prestige.airbnb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF385C] text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-[#d92b4b] transition-colors"
                >
                  {copy.airbnbLabel}
                </a>
                <Link
                  href={`/${locale}/pages/prestige`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 text-center transition-colors"
                >
                  {copy.viewLabel} →
                </Link>
              </div>
            </div>
          </article>

          {/* Horizon */}
          <article className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[16/9]">
              <Image
                src="/galerie/blueportel-vue-mer-cote-opale.jpg"
                alt={copy.horizonName}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {copy.horizonName}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">{copy.horizonDetails}</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">{copy.directTitle}</p>
              <p className="text-xs sm:text-sm text-gray-600 mb-5">{copy.directText}</p>
              <div className="flex flex-col gap-3 mt-auto">
                <Link
                  href={`/${locale}/pages/contact`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-blue-700 transition-colors"
                >
                  {copy.contactLabel}
                </Link>
                <Link
                  href={`/${locale}/pages/disponibilites`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 text-blue-700 font-semibold px-5 py-3 text-sm sm:text-base hover:bg-blue-50 transition-colors"
                >
                  {copy.availabilityLabel}
                </Link>
                <Link
                  href={`/${locale}/pages/horizon`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 text-center transition-colors"
                >
                  {copy.viewLabel} →
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
