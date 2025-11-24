"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Sparkles,
  LayoutGrid,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blueportel.com";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/galerie/blueportel-hero-vue-mer.png",
    alt: "Mobil-home Blueportel avec vue mer panoramique sur la Côte d'Opale",
    caption: "Vue mer panoramique depuis Blueportel",
    width: 1920,
    height: 1080,
  },
  {
    src: "/galerie/blueportel-panorama-cote-opale.jpg",
    alt: "Panorama côtier depuis la terrasse Blueportel à Le Portel",
    caption: "Panorama sur la Côte d'Opale",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-terrasse-ensoleillee.jpg",
    alt: "Terrasse ensoleillée du mobil-home Blueportel",
    caption: "Terrasse abritée pour les repas en plein air",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-terrasse-couverte-1920x1280.jpg",
    alt: "Terrasse couverte du mobil-home Blueportel avec salon extérieur",
    caption: "Salon extérieur avec vue sur la mer",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-terrasse-cote-opale-1920x2880.jpg",
    alt: "Terrasse surélevée dominant la Côte d'Opale",
    caption: "Terrasse panoramique dominant la mer",
    width: 1920,
    height: 2880,
  },
  {
    src: "/galerie/blueportel-panorama-le-portel-1920x2880.jpg",
    alt: "Vue verticale sur les falaises et la mer depuis Blueportel",
    caption: "Vue verticale sur les falaises du Portel",
    width: 1920,
    height: 2880,
  },
  {
    src: "/galerie/blueportel-vue-mer-cote-opale.jpg",
    alt: "Vue mer dégagée depuis la falaise du Portel",
    caption: "Mer et horizon depuis la falaise",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-salon-vue-mer-1040x693.jpg",
    alt: "Salon lumineux avec large baie vitrée sur la mer",
    caption: "Salon lumineux ouvert sur la mer",
    width: 1040,
    height: 693,
  },
  {
    src: "/galerie/blueportel-espace-repas-1040x693.jpg",
    alt: "Espace repas convivial dans le mobil-home Blueportel",
    caption: "Espace repas pour 6 personnes",
    width: 1040,
    height: 693,
  },
  {
    src: "/galerie/blueportel-sejour-lumineux-1920x1280.jpg",
    alt: "Séjour lumineux avec décoration contemporaine",
    caption: "Séjour chaleureux et spacieux",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-detente-salon-1920x1280.jpg",
    alt: "Coin détente avec canapé et télévision connectée",
    caption: "Coin détente avec TV connectée",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-cuisine-equipee-1920x1280.jpg",
    alt: "Cuisine entièrement équipée du mobil-home Blueportel",
    caption: "Cuisine complète prête pour vos repas",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-suite-parentale-1040x693.jpg",
    alt: "Suite parentale avec lit queen size et rangements",
    caption: "Suite parentale confortable",
    width: 1040,
    height: 693,
  },
  {
    src: "/galerie/blueportel-chambre-enfants-1920x1280.jpg",
    alt: "Chambre enfants avec lits jumeaux",
    caption: "Chambre enfants avec lits jumeaux",
    width: 1920,
    height: 1280,
  },
  {
    src: "/galerie/blueportel-salle-de-bain-1920x1280.jpg",
    alt: "Salle de bain moderne avec grande douche",
    caption: "Salle de bain moderne et fonctionnelle",
    width: 1920,
    height: 1280,
  },
];

const carouselImages = galleryImages.slice(0, 8);

export default function GaleriePhotoPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselImages.length) return;
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (!carouselImages.length) return;
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleNext = () => {
    if (!carouselImages.length) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const activeImage = useMemo(
    () => carouselImages[currentIndex],
    [currentIndex]
  );

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galerie photo Blueportel",
    description:
      "Photographies du mobil-home Blueportel à Le Portel sur la Côte d'Opale",
    image: galleryImages.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${siteUrl}${image.src}`,
      description: image.alt,
    })),
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Galerie photo",
        item: `${siteUrl}/pages/galerie-photo`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
          <nav
            aria-label="Fil d'Ariane"
            className="w-full max-w-7xl mb-4 sm:mb-6"
          >
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                /
              </li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Galerie photo
              </li>
            </ol>
          </nav>

          <section className="w-full max-w-6xl text-center mb-8 sm:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              Galerie photo —{" "}
              <span className="text-blue-500">Mobil-home face à la mer</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-3">
              Explorez en images l&apos;univers Blueportel : terrasse avec vue
              mer, pièces de vie lumineuses, chambres confortables et accès
              direct à la Côte d&apos;Opale. Laissez-vous inspirer par notre
              sélection de photos HD avant de réserver votre séjour.
            </p>
          </section>

          <section
            className="w-full max-w-6xl mb-10 sm:mb-14"
            aria-label="Carousel photo"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {activeImage && (
                <figure className="relative h-[260px] sm:h-[360px] md:h-[420px] lg:h-[500px] xl:h-[560px]">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="object-cover"
                    priority
                  />
                  <figcaption
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white px-4 sm:px-6 py-4"
                    aria-live="polite"
                  >
                    <p className="text-sm sm:text-base md:text-lg font-semibold">
                      {activeImage.caption}
                    </p>
                    <p className="text-xs sm:text-sm text-white/80">
                      {activeImage.alt}
                    </p>
                  </figcaption>
                </figure>
              )}

              <button
                type="button"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
                onClick={handlePrev}
                aria-label="Photo précédente"
              >
                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
                onClick={handleNext}
                aria-label="Photo suivante"
              >
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {carouselImages.map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    aria-label={`Aller à la photo ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === index
                        ? "w-6 bg-white"
                        : "w-2.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section
            className="w-full max-w-6xl mb-10 sm:mb-14"
            aria-label="Moments à capturer"
          >
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <article className="bg-blue-50 border border-blue-100 rounded-xl p-6 sm:p-8 shadow-md flex flex-col gap-3">
                <div className="flex items-center gap-3 text-blue-600">
                  <Camera className="w-6 h-6" aria-hidden="true" />
                  <h2 className="text-lg sm:text-xl font-bold">
                    Tous vos moments en images
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Vue mer au petit-déjeuner, apéros au coucher du soleil,
                  soirées cocooning : capturez chaque instant de votre séjour à
                  Blueportel. Toutes les photos présentes sont optimisées pour
                  les réseaux sociaux et vos souvenirs de vacances.
                </p>
              </article>

              <article className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 shadow-md flex flex-col gap-3">
                <div className="flex items-center gap-3 text-blue-600">
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                  <h2 className="text-lg sm:text-xl font-bold">
                    Design pensé pour vos vacances
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Chaque espace a été imaginé pour le confort des familles et
                  des amis : matériaux chaleureux, rangements pratiques,
                  décoration contemporaine, literie hôtelière et équipements
                  premium pour 4 à 6 personnes.
                </p>
              </article>
            </div>
          </section>

          <section
            className="w-full max-w-6xl mb-10 sm:mb-16"
            aria-label="Grille photos complète"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <LayoutGrid className="w-6 h-6 text-blue-500" aria-hidden="true" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                Toutes les photos Blueportel
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {galleryImages.map((image) => (
                <figure
                  key={image.src}
                  className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="p-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">
                      {image.caption}
                    </p>
                    <p className="text-xs text-gray-500">{image.alt}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Vous imaginez déjà vos prochaines photos ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">
                Réservez votre séjour face à la mer ou contactez-nous pour une
                visite guidée en visio. Nous répondons à toutes vos questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                  target="_blank"
                  rel="nofollow"
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  Réserver maintenant
                </Link>
                <Link
                  href="/pages/contact"
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </section>

          <div className="sr-only">
            <h2>Galerie photo Blueportel</h2>
            <p>
              Galerie photo haute définition du mobil-home Blueportel situé à Le
              Portel sur la Côte d&apos;Opale. Terrasse couverte avec vue mer,
              pièces de vie lumineuses, suite parentale, chambre enfants, cuisine
              équipée et accès rapide à Nausicaá.
            </p>
            <p>
              Toutes les photos sont optimisées pour le référencement naturel
              (SEO) et permettent de découvrir l&apos;intérieur comme
              l&apos;extérieur du mobil-home avant de réserver votre prochain
              séjour.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}


