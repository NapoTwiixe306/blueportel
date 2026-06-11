"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, BedDouble, Waves, Umbrella, Wind, Wifi, Car, Check } from "lucide-react";
import type { Accommodation } from "../../data/accommodations";

type AccommodationCardProps = {
  accommodation: Accommodation;
  locale: string;
  ctaLabel: string;
  featured?: boolean;
};

const featureIconMap: Record<string, typeof Users> = {
  capacity: Users,
  bedrooms: BedDouble,
  sea: Waves,
  beach: Umbrella,
  ac: Wind,
  wifi: Wifi,
  parking: Car,
};

export default function AccommodationCard({
  accommodation,
  locale,
  ctaLabel,
  featured = false,
}: AccommodationCardProps) {
  const { name, badge, capacity, bedrooms, highlights, images, detailPath, hasPlaceholderImages } = accommodation;
  const mainImage = images[0];
  const detailUrl = `/${locale}${detailPath}`;

  return (
    <article
      className={`group relative flex flex-col rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white border ${
        featured ? "border-blue-200 ring-2 ring-blue-100" : "border-gray-100"
      }`}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700">
        {mainImage && !hasPlaceholderImages ? (
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <PlaceholderImage name={name} />
        )}

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
            <Users className="h-3.5 w-3.5 text-blue-600" />
            {badge}
          </span>
        </div>

        {hasPlaceholderImages && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center z-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-[10px] font-medium text-white/90">
              Photos définitives bientôt disponibles
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">BluePortel</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{name.replace("BluePortel ", "")}</h3>
          <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4 text-blue-500" />
              {capacity} pers.
            </span>
            <span className="flex items-center gap-1">
              <BedDouble className="h-4 w-4 text-blue-500" />
              {bedrooms} ch.
            </span>
            <span className="flex items-center gap-1">
              <Waves className="h-4 w-4 text-blue-500" />
              Vue mer
            </span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-6 flex-1">
          {highlights.slice(0, 6).map((hl) => (
            <li key={hl} className="flex items-center gap-1.5 text-sm text-slate-600">
              <Check className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
              {hl}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={detailUrl}
          className="group/btn flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function PlaceholderImage({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700">
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <Waves className="h-16 w-16 text-white/40 mb-3" />
      <p className="text-white/80 text-sm font-medium text-center px-4">{name}</p>
      <p className="text-white/60 text-xs mt-1">Côte d'Opale</p>
    </div>
  );
}
