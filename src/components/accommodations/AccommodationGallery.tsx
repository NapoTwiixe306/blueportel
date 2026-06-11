"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Waves } from "lucide-react";
import type { AccommodationImage } from "../../data/accommodations";

type AccommodationGalleryProps = {
  images: AccommodationImage[];
  name: string;
  hasPlaceholder: boolean;
};

export default function AccommodationGallery({
  images,
  name,
  hasPlaceholder,
}: AccommodationGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    if (!hasPlaceholder) setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const mainImage = images[0];
  const thumbImages = images.slice(1, 5);

  return (
    <>
      <div className="w-full">
        {hasPlaceholder ? (
          <PlaceholderGrid name={name} count={images.length} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {/* Main large image */}
            <button
              className="col-span-2 sm:col-span-2 row-span-2 relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group"
              onClick={() => openLightbox(0)}
              aria-label={`Voir la photo : ${mainImage.alt}`}
            >
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              {mainImage.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-xs sm:text-sm font-medium">{mainImage.caption}</p>
                </div>
              )}
            </button>

            {/* Thumbnails */}
            {thumbImages.map((img, i) => (
              <button
                key={i}
                className="relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group"
                onClick={() => openLightbox(i + 1)}
                aria-label={`Voir la photo : ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {i === thumbImages.length - 1 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">+{images.length - 5}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/70 text-sm">
              {lightboxIndex + 1} / {images.length}
              {images[lightboxIndex].caption && ` — ${images[lightboxIndex].caption}`}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function PlaceholderGrid({ name, count }: { name: string; count: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
      <div className="col-span-2 sm:col-span-2 relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 flex flex-col items-center justify-center">
        <PlaceholderOverlay />
        <Waves className="h-16 w-16 text-white/30 mb-3 relative z-10" />
        <p className="text-white/80 text-sm font-semibold relative z-10 text-center px-4">{name}</p>
        <p className="text-white/60 text-xs mt-1 relative z-10">Photos définitives bientôt disponibles</p>
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-sky-300 via-blue-400 to-blue-600 flex items-center justify-center"
        >
          <PlaceholderOverlay />
          <Waves className="h-8 w-8 text-white/30 relative z-10" />
        </div>
      ))}
    </div>
  );
}

function PlaceholderOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-15"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
}
