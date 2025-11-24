"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 text-white flex items-center justify-center px-6 py-16">
      <div className="relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-8 sm:p-12 shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur">
        <AnimatedOrbits />
        <div className="relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
            <Sparkles className="h-4 w-4 text-sky-300 animate-pulse" />
            Oups
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">
            Erreur 404
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Cette page est introuvable
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Il semble que vous ayez pris un virage vers une page encore en mer.
            Revenez à l&apos;accueil pour poursuivre votre escapade sur la Côte
            d&apos;Opale.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedOrbits() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full border border-white/10 animate-[spin_18s_linear_infinite]" />
        <div className="absolute h-60 w-60 rounded-full border border-white/10 animate-[spin_12s_linear_infinite_reverse]" />
        <div className="absolute h-44 w-44 rounded-full border border-sky-500/30 animate-pulse" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
        <div className="absolute -top-10 left-1/3 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      </div>
    </>
  );
}

