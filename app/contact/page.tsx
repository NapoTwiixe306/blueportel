import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

const FR_MONEY = "https://blueportel.fr/location-mobil-home-vue-mer-le-portel";
const EN_MONEY = "https://blueportel.com/mobile-home-sea-view-le-portel";
const FR_CONTACT = "https://blueportel.fr/contact";
const EN_CONTACT = "https://blueportel.com/contact";

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") || "";
  const isFr = host === "blueportel.fr" || host.endsWith(".blueportel.fr");
  const canonical = isFr ? FR_CONTACT : EN_CONTACT;

  return {
    title: isFr
      ? "Contact Blueportel – Réservation mobil-home vue mer au Portel"
      : "Contact Blueportel – Sea-view mobile home booking (Le Portel)",
    description: isFr
      ? "Contactez Blueportel pour réserver votre mobil-home vue mer au Portel (3 chambres, 6 pers). Réponse rapide par téléphone ou email."
      : "Contact Blueportel to book your sea-view mobile home in Le Portel (3 bedrooms, sleeps 6). Fast reply by phone or email.",
    alternates: {
      canonical,
      languages: {
        "fr-FR": FR_CONTACT,
        "en-GB": EN_CONTACT,
        "x-default": EN_CONTACT,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ContactRootPage() {
  const host = (await headers()).get("host") || "";
  const isFr = host === "blueportel.fr" || host.endsWith(".blueportel.fr");

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <header className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {isFr ? "Contact Blueportel" : "Contact Blueportel"}
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {isFr ? (
            <>
              Pour réserver votre <strong>mobil-home vue mer au Portel</strong> (3 chambres, 6
              personnes) ou poser une question avant réservation, contactez-nous directement.
            </>
          ) : (
            <>
              For any question before booking your <strong>sea-view mobile home in Le Portel</strong>{" "}
              (3 bedrooms, sleeps 6), contact us directly for a fast reply.
            </>
          )}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="tel:+32488832091"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            {isFr ? "Appeler" : "Call"} +32 488 83 20 91
          </Link>
          <Link
            href="mailto:info@blueportel.fr"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-gray-400 transition-colors"
          >
            {isFr ? "Email" : "Email"} info@blueportel.fr
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          {isFr ? (
            <>
              Retour à la page réservation :{" "}
              <Link className="underline" href={FR_MONEY}>
                location mobil-home vue mer Le Portel
              </Link>
              .
            </>
          ) : (
            <>
              Back to booking page:{" "}
              <Link className="underline" href={EN_MONEY}>
                sea-view mobile home rental in Le Portel
              </Link>
              .
            </>
          )}
        </p>
      </header>
    </main>
  );
}


