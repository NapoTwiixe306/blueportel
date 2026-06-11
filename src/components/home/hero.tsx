"use client";

import { ArrowRight, Star, Waves, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

import herobg from "../../img/herobg.jpg";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  badge: string;
  ratingText: string;
  statsItems: { label: string; value: string }[];
};

const easing = cubicBezier(0.25, 0.1, 0.25, 1);

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easing },
  },
};

const statsVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5, ease: easing },
  },
};

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  badge,
  ratingText,
  statsItems,
}: HeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={herobg}
          alt="Vue mer panoramique depuis BluePortel sur la Côte d'Opale"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
      </div>

      {/* Decorative glows */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 md:pt-36 pb-32 sm:pb-40 flex flex-col justify-center">
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-6">
              <Waves className="h-3.5 w-3.5 text-sky-300" />
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              href={ctaPrimary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400 active:scale-[0.98]"
            >
              {ctaPrimary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={ctaSecondary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 active:scale-[0.98]"
            >
              {ctaSecondary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Rating */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
              <Star className="h-4 w-4 fill-amber-400/50 text-amber-400" aria-hidden="true" />
            </div>
            <span className="text-xs sm:text-sm text-white/80 font-medium">{ratingText}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        variants={statsVariant}
        initial="hidden"
        animate="show"
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="mx-4 sm:mx-6 lg:mx-10 mb-4 sm:mb-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {statsItems.map((stat) => (
              <div key={stat.label} className="py-4 px-4 sm:px-6 text-center">
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
