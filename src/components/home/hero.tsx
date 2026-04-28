"use client"

import { ArrowRight, Star, Users, Waves, Umbrella } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, cubicBezier } from "framer-motion"

import herobg from "../../img/herobg.jpg"
import type { HeroSection } from "../../i18n/home/types"

interface HeroBannerProps {
  hero: HeroSection
  locale: string
}

/* ---------------- TEXTS ---------------- */

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

/* ---------------- ANIMATION ---------------- */

const easing = cubicBezier(0.25, 0.1, 0.25, 1)

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

/* ---------------- FEATURES ---------------- */

const featureContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.35,
      ease: easing,
    },
  },
}

const featureItem = {
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      type: "spring" as const, // ✅ FIX TS ERROR ICI
      stiffness: 300,
      damping: 20,
    },
  },
}

/* ---------------- COMPONENT ---------------- */

export default function HeroBanner({ hero, locale }: HeroBannerProps) {
  const texts = getHeroTexts(locale)

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={herobg}
          alt={hero.srDescription}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* DECOR */}
      <div className="absolute -right-20 top-10 w-72 h-72 rounded-full bg-[#3B82F6]/20 blur-3xl" />
      <div className="absolute -left-16 top-40 w-52 h-52 rounded-full bg-[#F59E0B]/20 blur-3xl" />
      <div className="absolute -right-10 bottom-24 w-40 h-40 rounded-full bg-[#22C55E]/20 blur-3xl" />

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-white/95 shadow-[inset_0_0_200px_rgba(255,255,255,0.9)]"
        style={{ clipPath: "ellipse(60% 105% at 0% 20%)" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-10 pt-18 sm:pt-24 md:pt-28 lg:pt-32 pb-40 sm:pb-48 md:pb-52 lg:pb-56 flex flex-col justify-center">

        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >

          {/* BADGE */}
          <motion.div
            variants={item}
            className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-sky-200 to-blue-100 text-[#1D4ED8] text-sm font-semibold mb-5 shadow-sm"
          >
            {hero.pretitle}
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4"
          >
            <span className="whitespace-nowrap">{hero.titleLine1}</span>

            <span className="block mt-3 sm:mt-4 text-[#334155]">
              <span>{hero.titleLine2Prefix}</span>{" "}
              <span
                className="text-[#3B82F6]"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                {hero.titleLine2Highlight}
              </span>
            </span>
          </motion.h1>

          {/* TEXT */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-[#334155] mb-7 max-w-xl"
          >
            {hero.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >

            {/* PRIMARY */}
            <Link
              href={hero.ctaPrimary.href}
              className="relative group inline-flex items-center justify-center overflow-hidden rounded-full bg-[#2563EB] px-6 py-3 font-semibold text-white shadow-2xl transition hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-[#2563EB] blur-xl opacity-0 group-hover:opacity-30 transition" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-40" />

              <span className="relative flex items-center gap-2">
                {hero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* SECONDARY */}
            <Link
              href={hero.ctaSecondary.href}
              className="relative group inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#3B82F6] bg-white/90 px-6 py-3 font-semibold text-[#3B82F6] transition hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] hover:bg-[#3B82F6] hover:text-white"
            >
              <span className="absolute inset-0 bg-[#3B82F6] blur-xl opacity-0 group-hover:opacity-20 transition" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-30" />

              <span className="relative flex items-center gap-2">
                {hero.ctaSecondary.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* RATING */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 rounded-full bg-slate-50/90 px-4 py-2 border"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" />
              ))}
              <Star className="h-4 w-4 fill-[#FBBF24]/50 text-[#FBBF24]" />
            </div>
            <span className="text-sm text-slate-600">{texts.rating}</span>
          </motion.div>

        </motion.div>
      </div>

      {/* FEATURES */}
      <motion.div
        variants={featureContainer}
        initial="hidden"
        animate="show"
        className="absolute bottom-4 right-3 sm:bottom-8 sm:right-6 lg:right-8 z-20 w-[calc(100%-24px)] sm:w-auto sm:max-w-3xl"
      >
        <div className="bg-white/95 backdrop-blur-xl border rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col gap-4 md:flex-row">

          <motion.div variants={featureItem} whileHover="hover" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#DBEAFE] rounded-2xl">
              <Users className="h-6 w-6 text-[#2563EB]" />
            </div>
            <div>
              <p className="font-semibold text-[#0F172A]">{texts.people}</p>
              <p className="text-xs text-slate-500">{texts.bedrooms}</p>
            </div>
          </motion.div>

          <motion.div variants={featureItem} whileHover="hover" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#DBEAFE] rounded-2xl">
              <Waves className="h-6 w-6 text-[#2563EB]" />
            </div>
            <div>
              <p className="font-semibold text-[#0F172A]">{texts.seafront}</p>
              <p className="text-xs text-slate-500">{texts.beachAccess}</p>
            </div>
          </motion.div>

          <motion.div variants={featureItem} whileHover="hover" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#DBEAFE] rounded-2xl">
              <Umbrella className="h-6 w-6 text-[#2563EB]" />
            </div>
            <div>
              <p className="font-semibold text-[#0F172A]">{texts.directAccess}</p>
              <p className="text-xs text-slate-500">{texts.beach}</p>
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  )
}