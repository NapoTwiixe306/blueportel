import Link from "next/link";
import Image from "next/image";

import type { Locale } from "../../i18n/locales";
import BookingForm from "../booking/BookingForm";

/** Liens externes de réservation par plateforme. */
export const bookingPlatforms: Record<
  "prestige" | "horizon",
  { booking?: string; airbnb?: string }
> = {
  prestige: {
    booking: "https://www.booking.com/hotel/fr/blueportel.fr.html",
    airbnb: "https://www.airbnb.com/rooms/1389190512266062716",
  },
  horizon: {
    // Fiche Booking commune à la propriété ; pas encore d'annonce Airbnb dédiée.
    booking: "https://www.booking.com/hotel/fr/blueportel.fr.html",
  },
};

type ReserverCopy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pretitle: string;
  title: string;
  description: string;
  benefits: string[];
  formTitle: string;
  formText: string;
  prestigeName: string;
  prestigeDetails: string;
  horizonName: string;
  horizonDetails: string;
  directCtaLabel: string;
  alsoOnLabel: string;
  bookingLabel: string;
  airbnbLabel: string;
  availabilityLabel: string;
  viewLabel: string;
};

export const reserverCopy: Record<Locale, ReserverCopy> = {
  fr: {
    metaTitle: "Réserver en direct | Blueportel — meilleur prix garanti",
    metaDescription:
      "Réservez votre mobil-home Blueportel face à la mer à Le Portel directement sur notre site : meilleur prix sans commission, paiement sécurisé et contact direct avec les propriétaires. Également sur Booking.com et Airbnb.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Réserver",
    pretitle: "Réservation",
    title: "Réservez en direct sur notre site",
    description:
      "En réservant ici, vous réservez au meilleur prix, sans commission de plateforme, et directement auprès de Michel et Véronique. Pour toute question avant de réserver (dates, lits bébé, arrivée tardive…), contactez-nous : nous répondons en général dans la journée.",
    benefits: [
      "Meilleur prix garanti — aucune commission de plateforme",
      "Paiement en ligne sécurisé et confirmation immédiate",
      "Contact direct avec les propriétaires, avant et pendant le séjour",
    ],
    formTitle: "Réservez votre séjour",
    formText: "Réservation immédiate avec paiement sécurisé intégral.",
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "6 personnes · 3 chambres · terrasse couverte vue mer · climatisation",
    horizonName: "Blueportel Horizon",
    horizonDetails: "4 personnes · 2 chambres · même emplacement face à la mer",
    directCtaLabel: "Réserver en direct",
    alsoOnLabel: "Aussi disponible sur",
    bookingLabel: "Booking.com",
    airbnbLabel: "Airbnb",
    availabilityLabel: "Voir les disponibilités",
    viewLabel: "Découvrir l'hébergement",
  },
  en: {
    metaTitle: "Book direct | Blueportel — best price guaranteed",
    metaDescription:
      "Book your Blueportel seafront mobile home in Le Portel directly on our website: best price with no platform commission, secure payment and direct contact with the owners. Also on Booking.com and Airbnb.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Book",
    pretitle: "Booking",
    title: "Book directly on our website",
    description:
      "By booking here, you get the best price, with no platform commission, directly with Michel and Véronique. For any question before booking (dates, cots, late arrival…), contact us — we usually reply within the day.",
    benefits: [
      "Best price guaranteed — no platform commission",
      "Secure online payment and instant confirmation",
      "Direct contact with the owners, before and during your stay",
    ],
    formTitle: "Book your stay",
    formText: "Instant booking with secure full payment.",
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "Sleeps 6 · 3 bedrooms · covered sea-view terrace · air conditioning",
    horizonName: "Blueportel Horizon",
    horizonDetails: "Sleeps 4 · 2 bedrooms · same seafront location",
    directCtaLabel: "Book direct",
    alsoOnLabel: "Also available on",
    bookingLabel: "Booking.com",
    airbnbLabel: "Airbnb",
    availabilityLabel: "Check availability",
    viewLabel: "View the accommodation",
  },
  nl: {
    metaTitle: "Rechtstreeks reserveren | Blueportel — beste prijs gegarandeerd",
    metaDescription:
      "Reserveer uw Blueportel-stacaravan aan zee in Le Portel rechtstreeks op onze website: beste prijs zonder platformcommissie, veilige betaling en rechtstreeks contact met de eigenaars. Ook op Booking.com en Airbnb.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Reserveren",
    pretitle: "Reservering",
    title: "Reserveer rechtstreeks op onze website",
    description:
      "Door hier te boeken, boekt u aan de beste prijs, zonder platformcommissie, rechtstreeks bij Michel en Véronique. Voor vragen vóór het boeken (data, kinderbedje, late aankomst…) kunt u ons contacteren — we antwoorden meestal binnen de dag.",
    benefits: [
      "Beste prijs gegarandeerd — geen platformcommissie",
      "Veilige onlinebetaling en onmiddellijke bevestiging",
      "Rechtstreeks contact met de eigenaars, vóór en tijdens uw verblijf",
    ],
    formTitle: "Boek uw verblijf",
    formText: "Direct reserveren met veilige volledige betaling.",
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "6 personen · 3 slaapkamers · overdekt terras met zeezicht · airco",
    horizonName: "Blueportel Horizon",
    horizonDetails: "4 personen · 2 slaapkamers · dezelfde ligging aan zee",
    directCtaLabel: "Rechtstreeks reserveren",
    alsoOnLabel: "Ook beschikbaar op",
    bookingLabel: "Booking.com",
    airbnbLabel: "Airbnb",
    availabilityLabel: "Beschikbaarheid bekijken",
    viewLabel: "Bekijk de accommodatie",
  },
};

function PlatformLinks({
  platforms,
  copy,
}: {
  platforms: { booking?: string; airbnb?: string };
  copy: ReserverCopy;
}) {
  if (!platforms.booking && !platforms.airbnb) return null;

  return (
    <p className="text-xs sm:text-sm text-gray-500 text-center">
      {copy.alsoOnLabel}{" "}
      {platforms.booking && (
        <a
          href={platforms.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gray-800 transition-colors"
        >
          {copy.bookingLabel}
        </a>
      )}
      {platforms.booking && platforms.airbnb && <span aria-hidden="true"> · </span>}
      {platforms.airbnb && (
        <a
          href={platforms.airbnb}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gray-800 transition-colors"
        >
          {copy.airbnbLabel}
        </a>
      )}
    </p>
  );
}

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

        <header className="w-full max-w-3xl text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
            {copy.pretitle}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600">{copy.description}</p>
        </header>

        {/* Réservation directe en ligne — mise en avant principale */}
        <section id="reservation" className="w-full max-w-xl mb-12 sm:mb-16 scroll-mt-24">
          <ul className="flex flex-col gap-2 mb-6">
            {copy.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
              >
                <span className="text-blue-500 font-bold mt-0.5" aria-hidden="true">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{copy.formTitle}</h2>
            <p className="mt-2 text-sm text-gray-600">{copy.formText}</p>
          </div>
          <BookingForm locale={locale} />
        </section>

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
                  href="#reservation"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-blue-700 transition-colors"
                >
                  {copy.directCtaLabel}
                </a>
                <Link
                  href={`/${locale}/pages/disponibilites`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 text-blue-700 font-semibold px-5 py-3 text-sm sm:text-base hover:bg-blue-50 transition-colors"
                >
                  {copy.availabilityLabel}
                </Link>
                <Link
                  href={`/${locale}/pages/prestige`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 text-center transition-colors"
                >
                  {copy.viewLabel} →
                </Link>
                <PlatformLinks platforms={bookingPlatforms.prestige} copy={copy} />
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
              <p className="text-xs sm:text-sm text-gray-600 mb-5">{copy.horizonDetails}</p>
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="#reservation"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-blue-700 transition-colors"
                >
                  {copy.directCtaLabel}
                </a>
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
                <PlatformLinks platforms={bookingPlatforms.horizon} copy={copy} />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
