import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ReservationForm from "../components/ReservationForm";
import enHomeDictionary from "../../src/i18n/home/en";

const FR_URL = "https://blueportel.fr/location-mobil-home-vue-mer-le-portel";
const EN_URL = "https://blueportel.com/mobile-home-sea-view-le-portel";

export const metadata: Metadata = {
  title: "Sea-view mobile home rental in Le Portel (3 bedrooms, sleeps 6) – Book direct",
  description:
    "Sea view mobile home in Le Portel: 3 bedrooms / sleeps 6, seafront terrace, direct beach access. Quiet campsite with no pool (Phare d’Opale). Near Nausicaá. Live availability + secure direct booking.",
  alternates: {
    canonical: EN_URL,
    languages: {
      "fr-FR": FR_URL,
      "en-GB": EN_URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: EN_URL,
    title: "Sea-view mobile home rental in Le Portel – 3 bedrooms (sleeps 6) | Blueportel",
    description:
      "Luxury sea-view mobile home on the Opal Coast: 3 bedrooms, sleeps 6, terrace facing the sea, direct beach access. Quiet campsite (Phare d’Opale, no pool). Book direct.",
    images: [
      {
        url: "https://blueportel.com/galerie/blueportel-hero-vue-mer.png",
        width: 1200,
        height: 630,
        alt: "Blueportel sea-view mobile home in Le Portel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea-view mobile home rental in Le Portel – Book direct",
    description:
      "3 bedrooms / sleeps 6, sea view, direct beach access. Quiet campsite with no pool (Phare d’Opale). Near Nausicaá.",
    images: ["https://blueportel.com/galerie/blueportel-hero-vue-mer.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MoneyPageEN() {
  const reservationForm = enHomeDictionary.reservationForm;
  const lodgifyUrl =
    "https://checkout.lodgify.com/en/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1";

  const imageUrls = [
    "https://blueportel.com/galerie/blueportel-hero-vue-mer.png",
    "https://blueportel.com/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
    "https://blueportel.com/galerie/blueportel-salon-vue-mer-1040x693.jpg",
    "https://blueportel.com/galerie/blueportel-suite-parentale-1040x693.jpg",
  ];

  const lodgingBusiness = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${EN_URL}#lodging`,
    name: "Blueportel – Sea-view mobile home rental in Le Portel",
    url: EN_URL,
    image: imageUrls,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue de la Mer 2",
      addressLocality: "Le Portel",
      addressRegion: "Hauts-de-France",
      postalCode: "62480",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7081,
      longitude: 1.5714,
    },
    telephone: "+32488832091",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Sea view" },
      { "@type": "LocationFeatureSpecification", name: "Direct beach access" },
      { "@type": "LocationFeatureSpecification", name: "3 bedrooms" },
      { "@type": "LocationFeatureSpecification", name: "Sleeps 6" },
      { "@type": "LocationFeatureSpecification", name: "2 bathrooms" },
      { "@type": "LocationFeatureSpecification", name: "Covered terrace" },
      { "@type": "LocationFeatureSpecification", name: "Wi‑Fi" },
      { "@type": "LocationFeatureSpecification", name: "Reversible air conditioning" },
      { "@type": "LocationFeatureSpecification", name: "Quiet campsite with no pool (Phare d’Opale)" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
    },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${EN_URL}#product`,
    name: "Stay – 3-bedroom sea-view mobile home in Le Portel",
    description:
      "Luxury mobile home on the Opal Coast: 3 bedrooms (sleeps 6), sea view, terrace and direct beach access in Le Portel, France.",
    image: imageUrls,
    brand: { "@type": "Brand", name: "Blueportel" },
    offers: {
      "@type": "Offer",
      url: lodgifyUrl,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${EN_URL}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I check availability and book direct?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click “Check availability” (Lodgify calendar), pick your dates and complete the secure direct booking—no marketplace in between.",
        },
      },
      {
        "@type": "Question",
        name: "How many guests can stay in this mobile home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The mobile home sleeps up to 6 guests with 3 separate bedrooms—ideal for families or friends without relying on a sofa bed.",
        },
      },
      {
        "@type": "Question",
        name: "Is the sea view really visible from the terrace?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The setting is designed around the sea view from the living area and the terrace, with an Opal Coast-style panorama.",
        },
      },
      {
        "@type": "Question",
        name: "Is the campsite quiet (and does it have a pool)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Phare d’Opale is chosen for a calmer atmosphere. There is no on-site pool, which helps keep noise and animations limited.",
        },
      },
      {
        "@type": "Question",
        name: "How far is Nausicaá from Le Portel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nausicaá (Boulogne-sur-Mer) is roughly a 15-minute drive from Le Portel—perfect for a half-day or full-day outing.",
        },
      },
      {
        "@type": "Question",
        name: "What are the check-in and check-out times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Exact times are shown during the booking flow. If you have a specific need, contact us and we’ll confirm what’s possible.",
        },
      },
      {
        "@type": "Question",
        name: "Are linens and cleaning included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inclusions and optional services may vary by season. Everything is listed transparently during booking.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Blueportel quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call +32 488 83 20 91 or email info@blueportel.fr. To secure dates immediately, use the online booking calendar.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusiness) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Luxury mobile home • Opal Coast • Direct beach access
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Sea-view mobile home rental in Le Portel
              <span className="block text-blue-600">3 bedrooms • sleeps 6 • direct booking</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              If you are searching for a <strong>mobile home sea view Le Portel</strong>, Blueportel is
              built around one clear promise: real sea views, real space, and a quiet setting. You are
              booking a <strong>3 bedroom mobile home Le Portel</strong> (sleeps 6) with a terrace facing
              the English Channel, in <strong>Phare d’Opale</strong>—a calm campsite with{" "}
              <strong>no pool</strong>—and with easy access to Boulogne-sur-Mer and Nausicaá.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href={lodgifyUrl}
                target="_blank"
                rel="nofollow"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Check availability (book direct)
              </Link>
              <Link
                href="tel:+32488832091"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-gray-400 transition-colors"
              >
                Call +32 488 83 20 91
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/galerie/blueportel-hero-vue-mer.png"
              alt="Blueportel sea-view mobile home in Le Portel"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </header>

        <section className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What makes this sea-view mobile home in Le Portel different
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Most marketplaces rank “standard” properties by inventory size. Blueportel is the
              opposite: a focused, premium offer designed to match purchase intent—{" "}
              <strong>luxury mobile home Opal Coast</strong>, true sea view, direct beach access and a
              comfortable layout for six. Le Portel gives you the coast on your doorstep while keeping
              you close to Boulogne for restaurants, the old town and Nausicaá.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              This page is deliberately built for fast decision-making: sea view, bedrooms, campsite
              atmosphere, distance to key attractions and direct access to the live calendar. If you’re
              comparing options on Booking/Abritel, this is the “short path” to confirm dates and book
              direct without friction.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Sea-facing terrace + direct beach access
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              “Sea view” is often vague. Here it is central: the view is part of the living experience
              from the terrace and the lounge. Beach access is straightforward—step out, walk a short
              distance and you’re on the sand. That’s the difference between “near the sea” and “living
              by the sea”.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              On the Opal Coast, weather can shift quickly. A covered terrace is a practical advantage:
              you still sit outside for breakfast or sunset drinks even when it’s breezy, while keeping
              the panorama as the main feature of the stay.
            </p>

            <h2 className="mt-10 text-2xl sm:text-3xl font-bold text-gray-900">
              3 bedrooms / sleeps 6: real space for families and friends
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              A true 3-bedroom setup matters when you want privacy, quiet evenings and a stay that
              doesn’t revolve around converting sofas into beds. This is a practical, high-comfort base
              for coastal hikes, day trips and slow mornings with the sea in front of you.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Sleeping layout & privacy</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Three separate bedrooms means everyone keeps their own space. That’s what makes it work
              for a family of 5–6, or for friends travelling together: you can share the view and the
              terrace, without giving up comfort at night.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Everyday comfort (kitchen, Wi‑Fi, climate control)
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A sea-view stay isn’t just about the photo—it’s about how easy it feels day to day. The
              kitchen is there for simple meals after the beach, Wi‑Fi helps with planning or quick work,
              and reversible air conditioning keeps the indoor comfort stable when temperatures change.
            </p>

            <h2 className="mt-10 text-2xl sm:text-3xl font-bold text-gray-900">
              Phare d’Opale: a quiet campsite with no pool
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If your goal is calm, you already know where noise tends to concentrate: pools and heavy
              entertainment areas. Here, the setting is intentionally quieter—<strong>no pool</strong>—
              so the stay feels more coastal and less “theme park”. The sea is the activity.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              This detail matters for travellers who want to sleep well and recharge. Instead of a busy
              resort vibe, the focus is on the coastline: walking trails, fresh air, and easy beach time.
              That’s exactly what many people mean when they search for “quiet campsite” on the Opal Coast.
            </p>

            <h2 className="mt-10 text-2xl sm:text-3xl font-bold text-gray-900">
              Accommodation near Nausicaá (Boulogne-sur-Mer)
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Blueportel is practical for travellers looking for{" "}
              <strong>accommodation near Nausicaá</strong>. Visit the aquarium, explore Boulogne, then
              return to the quiet sea-view setting in Le Portel.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Simple week plan (no stress)</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A common rhythm works well here: one day for Nausicaá, one day for Boulogne’s old town and
              seafood spots, and the rest for beach time and coastal walks. Having a sea-view terrace
              changes the pace—you naturally spend more time “at home”, because the view is the highlight.
            </p>

            <h2 className="mt-10 text-2xl sm:text-3xl font-bold text-gray-900">
              Rates & availability: book direct
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              High-demand weekends and school holidays move fast on the Opal Coast. Use the live
              calendar to check availability and lock in your dates with secure direct booking.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Why book direct (vs marketplaces)?</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Marketplaces are built for volume, not for clarity. Direct booking keeps things simple:
              you see availability, confirm conditions, and you can ask a quick question before you pay.
              For a very specific product—sea view, 3 bedrooms, quiet campsite—clarity beats endless listings.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Practical tip: if you have fixed dates, check them first; if you’re flexible, scan two or
              three nearby weekends. Sea-view inventory is limited in Le Portel, and the calm/no-pool
              setting tends to sell out faster during school holidays.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href={lodgifyUrl}
                target="_blank"
                rel="nofollow"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                View rates & book
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-gray-400 transition-colors"
              >
                Contact before booking
              </Link>
            </div>

            <h2 className="mt-10 text-2xl sm:text-3xl font-bold text-gray-900">Guest reviews</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              For transparency, we point you to verified reviews available in the booking interface.
              If you need to confirm a specific detail (quiet setting, 3-bedroom layout, beach access),
              contact us directly and we’ll reply quickly.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Most travellers want to verify the same points before booking: is it genuinely calm, is the
              view real, and does the space work for 6? The offer is intentionally clear and focused. If a
              detail is critical for your group (arrival time, kids, a short remote-work slot), ask us and
              you’ll get a direct answer.
            </p>

            <h2 className="mt-10 text-2xl sm:text-3xl font-bold text-gray-900">
              Transactional FAQ (booking)
            </h2>
            <div className="mt-6 space-y-5 text-gray-800">
              <div>
                <h3 className="font-semibold">Is booking instant?</h3>
                <p className="mt-1 text-gray-700">
                  Yes. Pick dates and complete secure direct booking through the online calendar.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Is it family-friendly?</h3>
                <p className="mt-1 text-gray-700">
                  Yes—the 3-bedroom layout is ideal for families or groups up to 6.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">What’s included (linens, cleaning, options)?</h3>
                <p className="mt-1 text-gray-700">
                  Inclusions and optional services are shown transparently in the booking flow.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Is parking available?</h3>
                <p className="mt-1 text-gray-700">
                  Yes—parking is available to make arrival and day trips easy during your stay.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Is it a good choice off-season?</h3>
                <p className="mt-1 text-gray-700">
                  Yes. The Opal Coast is beautiful outside summer, and the idea is to keep indoor comfort
                  stable while enjoying the sea-view atmosphere even in cooler months.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Can I speak with someone before booking?</h3>
                <p className="mt-1 text-gray-700">
                  Call +32 488 83 20 91 or email info@blueportel.fr for a quick confirmation before you book.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900">Fast availability check</h2>
            <p className="mt-2 text-sm text-gray-700">Select dates, then open secure booking.</p>
            <div className="mt-4">
              <ReservationForm dictionary={reservationForm} />
            </div>
            <p className="mt-4 text-xs text-gray-600">
              Prefer email?{" "}
              <Link className="underline" href="mailto:info@blueportel.fr">
                info@blueportel.fr
              </Link>
            </p>
          </aside>
        </section>
      </main>
    </>
  );
}


