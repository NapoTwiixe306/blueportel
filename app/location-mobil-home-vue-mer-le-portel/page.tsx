import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ReservationForm from "../components/ReservationForm";
import frHomeDictionary from "../../src/i18n/home/fr";

const FR_URL = "https://blueportel.fr/location-mobil-home-vue-mer-le-portel";
const EN_URL = "https://blueportel.com/mobile-home-sea-view-le-portel";

export const metadata: Metadata = {
  title: "Location mobil-home vue mer Le Portel (3 chambres, 6 pers) – Réservez en direct",
  description:
    "Location mobil-home vue mer Le Portel : 3 chambres / 6 personnes, terrasse face à la mer, accès direct plage. Camping calme sans piscine (Phare d’Opale). Proche Nausicaá. Disponibilités + réservation en direct.",
  alternates: {
    canonical: FR_URL,
    languages: {
      "fr-FR": FR_URL,
      "en-GB": EN_URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: FR_URL,
    title: "Location mobil-home vue mer Le Portel – 3 chambres (6 pers) | Blueportel",
    description:
      "Mobil-home haut de gamme face à la mer au Portel : 3 chambres, 6 pers, terrasse, accès direct plage. Camping calme (Phare d’Opale, sans piscine). Réservation en direct.",
    images: [
      {
        url: "https://blueportel.fr/galerie/blueportel-hero-vue-mer.png",
        width: 1200,
        height: 630,
        alt: "Mobil-home Blueportel au Portel – vue mer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Location mobil-home vue mer Le Portel – Réservez en direct",
    description:
      "3 chambres / 6 pers, vue mer, accès direct plage. Camping calme sans piscine (Phare d’Opale). Proche Nausicaá.",
    images: ["https://blueportel.fr/galerie/blueportel-hero-vue-mer.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MoneyPageFR() {
  const reservationForm = frHomeDictionary.reservationForm;
  const lodgifyUrl =
    "https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1";

  const imageUrls = [
    "https://blueportel.fr/galerie/blueportel-hero-vue-mer.png",
    "https://blueportel.fr/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
    "https://blueportel.fr/galerie/blueportel-salon-vue-mer-1040x693.jpg",
    "https://blueportel.fr/galerie/blueportel-suite-parentale-1040x693.jpg",
  ];

  const lodgingBusiness = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${FR_URL}#lodging`,
    name: "Blueportel – Location mobil-home vue mer Le Portel",
    url: FR_URL,
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
      { "@type": "LocationFeatureSpecification", name: "Vue mer" },
      { "@type": "LocationFeatureSpecification", name: "Accès direct plage" },
      { "@type": "LocationFeatureSpecification", name: "3 chambres" },
      { "@type": "LocationFeatureSpecification", name: "6 personnes" },
      { "@type": "LocationFeatureSpecification", name: "2 salles d’eau" },
      { "@type": "LocationFeatureSpecification", name: "Terrasse couverte" },
      { "@type": "LocationFeatureSpecification", name: "Wi‑Fi" },
      { "@type": "LocationFeatureSpecification", name: "Climatisation réversible" },
      { "@type": "LocationFeatureSpecification", name: "Camping calme sans piscine (Phare d’Opale)" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
    },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${FR_URL}#product`,
    name: "Séjour – mobil-home 3 chambres vue mer à Le Portel",
    description:
      "Location d’un mobil-home haut de gamme 3 chambres (6 personnes) avec vue mer et accès direct plage au Portel, Côte d’Opale.",
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
    "@id": `${FR_URL}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment vérifier les disponibilités et réserver en direct ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cliquez sur « Vérifier les disponibilités » (calendrier Lodgify) et sélectionnez vos dates. La réservation est sécurisée et se fait en direct, sans intermédiaire.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de personnes peuvent séjourner dans ce mobil-home au Portel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le mobil-home est conçu pour 6 personnes grâce à ses 3 chambres. C’est une vraie configuration famille / amis, sans couchage d’appoint obligatoire dans le salon.",
        },
      },
      {
        "@type": "Question",
        name: "La vue mer est-elle vraiment visible depuis la terrasse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. L’emplacement est orienté pour profiter de la mer depuis la pièce de vie et la terrasse, avec un panorama typique de la Côte d’Opale.",
        },
      },
      {
        "@type": "Question",
        name: "Le camping Phare d’Opale est-il calme ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le Phare d’Opale est recherché pour une ambiance plus reposante. L’absence de piscine sur place contribue à limiter le bruit et la concentration d’animations.",
        },
      },
      {
        "@type": "Question",
        name: "À quelle distance se trouve Nausicaá ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nausicaá (Boulogne-sur-Mer) est à environ 15 minutes en voiture depuis Le Portel, pratique pour une sortie journée pendant votre séjour vue mer.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les horaires d’arrivée et de départ ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les horaires exacts sont indiqués sur le parcours de réservation. En cas de besoin, contactez-nous pour une demande spécifique (selon possibilités).",
        },
      },
      {
        "@type": "Question",
        name: "Le linge de lit et le ménage sont-ils inclus ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les prestations (linge, ménage) peuvent varier selon la période. Les options disponibles et inclusions sont affichées lors de la réservation.",
        },
      },
      {
        "@type": "Question",
        name: "Comment contacter rapidement Blueportel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez appeler le +32 488 83 20 91 ou envoyer un email à info@blueportel.fr. Pour réserver immédiatement, utilisez le calendrier en ligne.",
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

      <main className="mx-auto  bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Mobil-home haut de gamme • Côte d’Opale • Accès direct plage
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Location mobil-home vue mer Le Portel
              <span className="block text-blue-600">3 chambres • 6 personnes • Réservation en direct</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              Blueportel, c’est une <strong>location mobil-home vue mer Le Portel</strong> pensée pour
              les voyageurs qui veulent la mer au premier plan et le calme au quotidien. Ici, vous ne
              réservez pas “un logement de plus” dans un catalogue : vous réservez un mobil-home
              haut de gamme, <strong>3 chambres / 6 personnes</strong>, avec une terrasse face à la Manche,
              dans un environnement recherché au <strong>camping Phare d’Opale</strong> (calme,{" "}
              <strong>sans piscine</strong>), à deux pas de Boulogne et de Nausicaá.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href={lodgifyUrl}
                target="_blank"
                rel="nofollow"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Vérifier les disponibilités (réservation directe)
              </Link>
              <Link
                href="tel:+32488832091"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-gray-400 transition-colors"
              >
                Appeler le +32 488 83 20 91
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/galerie/blueportel-hero-vue-mer.png"
              alt="Mobil-home Blueportel au Portel avec vue mer"
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
              Mobil-home vue mer au Portel : ce que vous réservez vraiment
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Quand on vise une destination très concurrentielle, les plateformes poussent des listes
              interminables de “séjours” interchangeables. Blueportel fait l’inverse : une offre
              unique, ultra-spécialisée, qui répond à l’intention transactionnelle exacte :{" "}
              <strong>mobil-home luxe Côte d’Opale</strong> + mer + accès plage + espace pour 6.
              Le Portel n’est pas qu’un point sur la carte : c’est la proximité immédiate du littoral,
              des falaises, et des balades côtières, avec Boulogne-sur-Mer à quelques minutes.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Cette page est volontairement orientée “réservation” : vous trouverez tout ce qui compte
              pour décider vite (vue mer, nombre de chambres, environnement du camping, distance
              Nausicaá, accès aux tarifs et au calendrier). L’objectif est simple : si vous cherchez
              une <strong>location mobil-home vue mer Le Portel</strong>, vous devez pouvoir vérifier
              les dates et réserver en direct en quelques clics.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Terrasse face à la mer, accès direct plage : l’atout rare
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Le critère “vue mer” est souvent flou sur le marché. Ici, la vue est le cœur de
              l’expérience : elle accompagne vos repas, vos apéros, et vos fins de journée. L’accès à
              la plage est simple et direct : vous sortez, vous marchez, vous êtes au sable. C’est ce
              qui fait la différence entre “proche de la mer” et “la mer est votre décor”.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Sur la Côte d’Opale, la météo change vite : une terrasse couverte vous permet de rester
              dehors même quand le vent se lève, tout en gardant le panorama. C’est aussi ce qui rend
              le séjour agréable hors été : vous pouvez profiter de la vue mer toute l’année, sans
              dépendre d’un “plan B” intérieur.
            </p>

            <h2 className="mt-10 text-2xl sm:text-3xl font-bold text-gray-900">
              Mobil-home 3 chambres / 6 personnes au Portel : vrai confort, vraie séparation
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Si vous cherchez un <strong>mobil-home 3 chambres Le Portel</strong>, c’est rarement par
              hasard : vous voulez de l’espace réel, des chambres séparées, et la tranquillité de ne
              pas transformer le salon en dortoir. Blueportel est pensé pour les séjours en famille
              (enfants, ados) comme pour des amis qui veulent rester confortables, même quand la météo
              invite à rester au chaud.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Plan de couchage et intimité</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              La logique est simple : 3 chambres, jusqu’à 6 personnes, et une circulation fluide. Vous
              gagnez du temps le matin, vous limitez les compromis le soir, et chacun peut se coucher
              sans “négocier” l’espace commun. C’est exactement ce qui manque sur une grande partie
              de l’offre locale, souvent limitée à 2 chambres.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Cuisine équipée, séjour lumineux, équipements utiles (Wi‑Fi, clim)
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Concrètement, vous profitez de deux points d’eau, d’une cuisine équipée pour manger
              “comme à la maison”, et d’un séjour lumineux où la mer reste présente. Le Wi‑Fi et la
              climatisation réversible font partie des détails qui changent tout : travailler une
              heure, organiser une sortie, ou simplement rester confortable quand la température
              bouge.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              C’est cet équilibre qui fait l’intérêt d’une <strong>location mobil-home vue mer Le Portel</strong>{" "}
              premium : une sensation “vacances” dès l’arrivée, mais aussi un vrai niveau de
              fonctionnalité au quotidien.
            </p>
          </div>

          <aside className="rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900">Réservation rapide</h2>
            <p className="mt-2 text-sm text-gray-700">
              Sélectionnez vos dates, puis ouvrez la réservation sécurisée.
            </p>
            <div className="mt-4">
              <ReservationForm dictionary={reservationForm} />
            </div>
            <p className="mt-4 text-xs text-gray-600">
              Vous préférez un échange direct ?{" "}
              <Link className="underline" href="mailto:info@blueportel.fr">
                info@blueportel.fr
              </Link>
            </p>
          </aside>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Camping Le Phare d’Opale : camping calme sans piscine (Le Portel)
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Si votre priorité est le repos, vous savez déjà que le bruit n’arrive pas par hasard : il
            se concentre autour des zones d’animation, des bassins, et des flux. Ici, le choix est
            assumé : <strong>camping calme sans piscine</strong>. Résultat : moins d’agitation, moins de
            “tourisme de passage”, et une atmosphère plus posée.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Ce positionnement est clé face aux annonces “camping + piscine” qui attirent surtout des
            volumes. Blueportel vise l’inverse : une expérience plus qualitative, où la mer et les
            falaises remplacent les animations. Si vous comparez des annonces, posez-vous la question
            essentielle : cherchez-vous un parc de loisirs… ou une vue mer et du calme ?
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Pourquoi “sans piscine” est un avantage pour votre séjour vue mer
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            La mer est déjà là. Au lieu de courir d’une activité à l’autre, vous retrouvez ce que
            vous cherchez vraiment : des journées simples, des balades sur le sentier du littoral,
            des retours au mobil-home pour cuisiner, se poser, lire, et admirer le ciel de la Côte
            d’Opale. C’est un séjour “respiration”, pas une usine à loisirs.
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Services utiles et accès direct aux balades
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Vous gardez l’essentiel : un emplacement au Portel, des accès rapides aux commerces, et
            surtout un environnement qui donne envie de sortir à pied. C’est ce mix “calme + mer +
            praticité” qui rend Blueportel pertinent pour les séjours courts comme pour une semaine
            complète.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            En pratique, vous pouvez alterner : matin plage, après-midi visite, fin de journée
            terrasse. Et si vous êtes du genre “balades”, la Côte d’Opale se vit très bien à pied : le
            littoral, les points de vue, et les couchers de soleil sont l’activité principale.
          </p>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Hébergement proche Nausicaá : l’excursion parfaite pendant votre séjour
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Blueportel est un <strong>hébergement proche Nausicaá</strong> : vous pouvez planifier une
            journée à l’aquarium, puis revenir retrouver le calme et la vue mer au Portel. Cette
            proximité vous évite de choisir entre “visites” et “repos” : vous faites les deux.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Et comme Boulogne-sur-Mer est juste à côté, vous profitez aussi de la vieille ville, des
            remparts, du port et des bonnes tables. L’idée, c’est d’avoir une base premium, en bord
            de mer, mais connectée aux “incontournables” de la Côte d’Opale.
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">Idées simples pour organiser la semaine</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Une journée Nausicaá, une journée marché / restaurants à Boulogne, une boucle balade sur
            le littoral, et deux journées “100% mer” au Portel : c’est souvent la combinaison qui
            plaît le plus. Et quand on a une terrasse vue mer, on réalise vite que le meilleur moment
            est parfois celui où l’on ne fait… rien.
          </p>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tarifs & disponibilités</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Pour un séjour vue mer, le bon timing fait souvent la différence (week-ends, vacances
            scolaires, ponts). Notre recommandation est simple : ouvrez le calendrier, vérifiez les
            dates, puis réservez en direct pour sécuriser votre créneau.
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">Vérifier le calendrier en direct</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Le calendrier affiche les disponibilités et vous guide jusqu’à la confirmation. Vous
            évitez les commissions des plateformes et vous échangez plus facilement si vous avez une
            question avant de valider.
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Pourquoi réserver en direct (et pas via Booking/Abritel) ?
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Sur les plateformes, l’offre est souvent standardisée, et la communication avant
            réservation peut être limitée. En direct, vous allez à l’essentiel : dates, conditions,
            confirmation, et un contact plus simple si vous avez une question. Pour une offre aussi
            spécifique qu’un mobil-home vue mer au Portel, c’est un avantage concret.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={lodgifyUrl}
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Voir les tarifs et réserver
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-gray-400 transition-colors"
            >
              Demande (email / téléphone)
            </Link>
          </div>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Avis clients</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Pour garder une transparence totale, nous vous orientons vers les{" "}
            <strong>avis vérifiés affichés au moment de la réservation</strong> (plateforme de
            paiement et de réservation). Vous pouvez aussi nous contacter directement si vous voulez
            confirmer un point précis (calme, accès plage, configuration 3 chambres).
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">Ce que les voyageurs veulent vérifier (et nos réponses)</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            La plupart des voyageurs ont les mêmes “doutes” avant de réserver : est-ce vraiment calme
            ? la vue mer est-elle réelle ? est-ce pratique à 6 ? Ici, la proposition est claire : un
            environnement plus reposant, une configuration 3 chambres, et une expérience tournée vers
            la mer. Si un point est critique pour vous (enfant en bas âge, télétravail, arrivée tardive),
            écrivez-nous : vous aurez une réponse nette, sans flou marketing.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={lodgifyUrl}
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Ouvrir la page de réservation (avis + calendrier)
            </Link>
            <Link
              href="mailto:info@blueportel.fr"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-gray-400 transition-colors"
            >
              Poser une question avant de réserver
            </Link>
          </div>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            FAQ – location mobil-home vue mer Le Portel
          </h2>
          <div className="mt-6 space-y-5 text-gray-800">
            <div>
              <h3 className="font-semibold">La réservation est-elle immédiate ?</h3>
              <p className="mt-1 text-gray-700">
                Oui : vous sélectionnez vos dates et vous finalisez en direct via le parcours de
                réservation sécurisé.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Peut-on venir en famille (enfants) ?</h3>
              <p className="mt-1 text-gray-700">
                Oui. La configuration 3 chambres est justement idéale pour les familles et les
                séjours à 4–6 personnes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Le camping est-il adapté si je cherche du calme ?</h3>
              <p className="mt-1 text-gray-700">
                Oui, c’est un point fort recherché : <strong>camping calme sans piscine</strong>, avec
                un accès rapide au littoral et à la plage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Comment savoir ce qui est inclus (linge, ménage, options) ?</h3>
              <p className="mt-1 text-gray-700">
                Tout est détaillé dans le parcours de réservation (inclusions et options selon la
                période).
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Peut-on réserver pour un week-end ?</h3>
              <p className="mt-1 text-gray-700">
                Les durées minimales varient selon les périodes. Le calendrier de réservation indique
                immédiatement ce qui est possible pour vos dates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Y a-t-il un parking sur place ?</h3>
              <p className="mt-1 text-gray-700">
                Oui, le stationnement est prévu pour faciliter l’arrivée et les déplacements pendant
                le séjour.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Le mobil-home convient-il hors saison (automne/hiver) ?</h3>
              <p className="mt-1 text-gray-700">
                Oui : la Côte d’Opale est superbe hors été, et l’objectif est de rester confortable
                (chauffage / clim réversible) tout en profitant de la vue mer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Si je veux parler à quelqu’un avant de réserver ?</h3>
              <p className="mt-1 text-gray-700">
                Appelez le +32 488 83 20 91 ou écrivez à info@blueportel.fr : on répond vite et on
                vous aide à valider les bonnes dates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


