"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Camera, Sparkles, LayoutGrid } from "lucide-react";

import type { GalleryDictionary, InfoCard } from "../../i18n/gallery/types";

const infoIcons: Record<InfoCard["icon"], typeof Camera> = {
  camera: Camera,
  sparkles: Sparkles,
};

type GalleryPageProps = {
  dictionary: GalleryDictionary;
};

export default function GalleryPage({ dictionary }: GalleryPageProps) {
  const {
    locale,
    hero,
    carouselImages,
    galleryImages,
    infoCards,
    gridHeading,
    cta,
    screenReader,
    structuredData,
  } = dictionary;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselImages.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handlePrev = () => {
    if (!carouselImages.length) return;
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    if (!carouselImages.length) return;
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const activeImage = useMemo(
    () => carouselImages[currentIndex],
    [currentIndex, carouselImages]
  );

  const withLocale = (path: string) => {
    if (!path || path === "#") return "#";
    if (path.startsWith("http")) return path;
    if (path === "/") return `/${locale}`;
    if (path.startsWith("/")) return `/${locale}${path}`;
    return `/${locale}/${path}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.gallery) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-white font-sans w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
          <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
                  {hero.homeLabel}
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                /
              </li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {hero.breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <section className="w-full max-w-6xl text-center mb-8 sm:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 px-3">
              {hero.title}{" "}
              <span className="text-blue-500">{hero.highlight}</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-3">
              {hero.description}
            </p>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-14" aria-label="Photo carousel">
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
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white px-4 sm:px-6 py-4">
                    <p className="text-sm sm:text-base md:text-lg font-semibold">{activeImage.caption}</p>
                    <p className="text-xs sm:text-sm text-white/80">{activeImage.alt}</p>
                  </figcaption>
                </figure>
              )}

              <button
                type="button"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
                onClick={handlePrev}
                aria-label="Previous photo"
              >
                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
                onClick={handleNext}
                aria-label="Next photo"
              >
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {carouselImages.map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    aria-label={`Photo ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === index ? "w-6 bg-white" : "w-2.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-14" aria-label="Moments to capture">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {infoCards.map((card) => {
                const Icon = infoIcons[card.icon];
                return (
                  <article
                    key={card.title}
                    className={`rounded-xl p-6 sm:p-8 shadow-md flex flex-col gap-3 ${
                      card.icon === "camera"
                        ? "bg-blue-50 border border-blue-100"
                        : "bg-white border border-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-blue-600">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                      <h2 className="text-lg sm:text-xl font-bold">{card.title}</h2>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16" aria-label="Photo grid">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <LayoutGrid className="w-6 h-6 text-blue-500" aria-hidden="true" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">{gridHeading}</h2>
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
                    <p className="text-sm font-semibold text-gray-900">{image.caption}</p>
                    <p className="text-xs text-gray-500">{image.alt}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="w-full max-w-6xl mb-10 sm:mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6">{cta.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={cta.bookingHref}
                  target="_blank"
                  rel={cta.bookingRel}
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
                >
                  {cta.bookingLabel}
                </Link>
                <Link
                  href={withLocale(cta.contactHref)}
                  className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  {cta.contactLabel}
                </Link>
              </div>
            </div>
          </section>

          <section className="sr-only" aria-label={screenReader.title}>
            <h2>{screenReader.title}</h2>
            {screenReader.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

