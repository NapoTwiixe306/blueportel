"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { LocationSection } from "../../i18n/home/types";

type LocationCarouselProps = {
  slides: LocationSection["carouselImages"];
};

export default function LocationCarousel({ slides }: LocationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const activeSlide = useMemo(
    () => slides[currentIndex] ?? slides[0],
    [currentIndex, slides]
  );

  const handlePrev = () => {
    if (!slides.length) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    if (!slides.length) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-xl">
      <div className="relative h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px]">
        <Image
          src={activeSlide.src}
          alt={activeSlide.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={`slide-dot-${index}`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
