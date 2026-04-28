"use client"

import { ArrowRight, Star, Users, Waves, Umbrella } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import herobg from '../../img/herobg.jpg'
import type { HeroSection } from "../../i18n/home/types"

interface HeroBannerProps {
  hero: HeroSection
  locale: string
}

const getHeroTexts = (locale: string) => {
  const texts: Record<string, Record<string, string>> = {
    fr: {
      people: "6 Personnes",
      bedrooms: "3 Chambres",
      seafront: "Face à la mer",
      beachAccess: "Accès direct à la plage",
      directAccess: "Accès direct",
      beach: "plage",
      rating: "9,1/10 sur +10 avis",
    },
    en: {
      people: "6 People",
      bedrooms: "3 Bedrooms",
      seafront: "Facing the sea",
      beachAccess: "Direct beach access",
      directAccess: "Direct access",
      beach: "beach",
      rating: "9.1/10 from +10 reviews",
    },
    nl: {
      people: "6 Personen",
      bedrooms: "3 Slaapkamers",
      seafront: "Aan zee",
      beachAccess: "Directe strandtoegang",
      directAccess: "Directe toegang",
      beach: "strand",
      rating: "9,1/10 van +10 reviews",
    },
  }
  return texts[locale] || texts.fr
}

export default function HeroBanner({ hero, locale }: HeroBannerProps) {
  const texts = getHeroTexts(locale)

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Background Image - visible on the right side */}
      <div className="absolute inset-0">
        <Image
          src={herobg}
          alt={hero.srDescription}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative gradients */}
      <div className="absolute -right-20 top-10 w-72 h-72 rounded-full bg-[#3B82F6]/20 blur-3xl" />
      <div className="absolute -left-16 top-40 w-52 h-52 rounded-full bg-[#F59E0B]/20 blur-3xl" />
      <div className="absolute -right-10 bottom-24 w-40 h-40 rounded-full bg-[#22C55E]/20 blur-3xl" />

      {/* White overlay with ellipse clip-path - covers left side */}
      <div
        className="absolute inset-0 bg-white/95 shadow-[inset_0_0_200px_rgba(255,255,255,0.9)]"
        style={{
          clipPath: "ellipse(60% 105% at 0% 20%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-10 pt-18 sm:pt-24 md:pt-28 lg:pt-32 pb-40 sm:pb-48 md:pb-52 lg:pb-56 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-sky-200 to-blue-100 text-[#1D4ED8] text-sm sm:text-base font-semibold mb-5 sm:mb-7 shadow-sm">
            {hero.pretitle}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4 sm:mb-6 drop-shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
            <span className="text-balance block">{hero.titleLine1}</span>
            <span className="block mt-3 sm:mt-4 text-[#334155]">
              <span>{hero.titleLine2Prefix}</span>
              <span className="text-[#3B82F6]" style={{ fontFamily: "var(--font-caveat)" }}>
                {hero.titleLine2Highlight}
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#334155] leading-relaxed mb-7 sm:mb-9 max-w-xl">
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
            <Link
              href={hero.ctaPrimary.href}
              rel={hero.ctaPrimary.rel}
              target={hero.ctaPrimary.rel ? "_blank" : undefined}
              className="group inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-2xl shadow-[#2563EB]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              {hero.ctaPrimary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="group inline-flex items-center justify-center rounded-full border-2 border-[#3B82F6] bg-white/90 px-6 py-3 text-sm sm:text-base font-semibold text-[#3B82F6] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:text-white"
            >
              {hero.ctaSecondary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Rating */}
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-50/90 px-4 py-2 shadow-sm border border-slate-200">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[#FBBF24] text-[#FBBF24]" />
              ))}
              <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-[#FBBF24]/50 text-[#FBBF24]" />
            </div>
            <span className="text-sm text-slate-600 font-medium">{texts.rating}</span>
          </div>
        </div>
      </div>

      {/* Features Bar - positioned on the image area */}
      <div className="absolute bottom-4 right-3 sm:bottom-8 sm:right-6 lg:right-8 z-20 w-[calc(100%-24px)] sm:w-auto sm:max-w-3xl">
        <div className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-3xl shadow-2xl shadow-slate-500/10 p-4 sm:p-5 md:p-6">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 md:flex-row md:items-center">
            {/* Feature 1 */}
            <div className="flex items-start sm:items-center gap-3">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-[#DBEAFE] rounded-2xl shadow-sm">
                <Users className="h-6 w-6 text-[#2563EB]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#0F172A] text-sm md:text-base">{texts.people}</p>
                <p className="text-xs text-slate-500">{texts.bedrooms}</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start sm:items-center gap-3">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-[#DBEAFE] rounded-2xl shadow-sm">
                <Waves className="h-6 w-6 text-[#2563EB]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#0F172A] text-sm md:text-base">{texts.seafront}</p>
                <p className="text-xs text-slate-500">{texts.beachAccess}</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start sm:items-center gap-3">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-[#DBEAFE] rounded-2xl shadow-sm">
                <Umbrella className="h-6 w-6 text-[#2563EB]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#0F172A] text-sm md:text-base">{texts.directAccess}</p>
                <p className="text-xs text-slate-500">{texts.beach}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
