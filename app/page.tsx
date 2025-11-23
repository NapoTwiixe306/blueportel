import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReservationForm from "./components/ReservationForm";
import { Home as HomeIcon, Waves, MapPin, Star, ChevronRight } from "lucide-react";

import Terasse from "../src/img/terasse.png";

export const metadata: Metadata = {
  title: "Blueportel - Mobil-Home Prestige Face à la Mer | Location Le Portel Côte d'Opale",
  description: "Location mobil-home prestige face à la mer au Portel sur la Côte d'Opale. Mobil-home 3 chambres avec vue mer panoramique, accès direct plage. Réservez votre location vacances dès 90€/nuit.",
  keywords: [
    "location mobil-home Le Portel",
    "mobil-home prestige face à la mer",
    "location mobil-home Côte d'Opale",
    "mobil-home 3 chambres vue mer",
    "location vacances Le Portel",
    "mobil-home plage Le Portel",
    "hébergement mobil-home prestige",
    "location mobil-home vue panoramique",
    "mobil-home haut de gamme Côte d'Opale",
    "location mobil-home accès plage",
  ],
  openGraph: {
    title: "Blueportel - Mobil-Home Prestige Face à la Mer | Le Portel",
    description: "Location mobil-home prestige 3 chambres face à la mer au Portel. Vue panoramique, accès direct plage. À partir de 90€/nuit.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-tight px-3 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6">
          Location Mobil-Home <br className="hidden sm:block" />{" "}
          <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>Face à la Mer</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-3 sm:px-4 md:px-6">
          Mobil-Home 3 Chambres • Côte d&#39;Opale • Vue Mer Panoramique • Accès Direct Plage
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 w-full sm:w-auto items-stretch sm:items-center justify-center mb-4 sm:mb-6 md:mb-8">
          <Link 
            href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1" 
            target="_blank"
            rel="nofollow"
            className="cursor-pointer border-2 border-blue-500 text-black font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 px-4 py-2.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md text-xs sm:text-sm md:text-base whitespace-nowrap text-center w-full sm:w-auto"
          >
            Réserver Maintenant
          </Link>
          <Link 
            href="#decouvrir-le-mobil-home" 
            className="cursor-pointer bg-blue-500 font-bold hover:bg-blue-600 transition-colors duration-300 text-white px-4 py-2.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md text-xs sm:text-sm md:text-base whitespace-nowrap inline-block text-center w-full sm:w-auto"
          >
            Découvrir le Mobil-Home
          </Link>
        </div>

        <section className="reservation mt-12 sm:mt-16 md:mt-20 lg:mt-24 p-4 sm:p-6 md:p-8 bg-gray-200 rounded-lg shadow w-full flex flex-col items-center justify-center" aria-label="Réservation mobil-home">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black leading-tight px-2 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6">
              <Link href="#decouvrir-le-mobil-home" className="hover:text-blue-500 transition-colors">Découvrir le Mobil-Home</Link> 
              <br className="hidden sm:block" />
              <span className="text-blue-500">Face à la Mer</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-6">
              Mobil-Home 3 Chambres Côte d&#39;Opale • Vue Mer Panoramique • Location Vacances Face à la Mer
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
            <ReservationForm />
          </div>
          
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-2 sm:py-4 md:py-6">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black mb-0.5 sm:mb-1">
              Prix Location Mobil-Home 
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
              À partir de <span className="text-blue-500">90€</span> / nuit
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold px-2 sm:px-4 md:px-6">
              Sélectionnez vos dates pour voir le prix total de votre location mobil-home face à la mer
            </p>
          </div>
        </section>

        <section className="features mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" aria-label="Caractéristiques du mobil-home">
          <h2 className="sr-only">Caractéristiques de votre location mobil-home face à la mer</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* 3 chambres spacieuses */}
            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Mobil-home 3 chambres">
                <HomeIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Mobil-Home 6 Personnes
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                3 chambres spacieuses mobil-home avec vue mer
              </p>
            </article>

            {/* Panorama Exceptionnel */}
            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Vue mer panoramique">
                <Waves className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Vue Mer Panoramique
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                Panorama exceptionnel face à la mer Côte d&#39;Opale
              </p>
            </article>

            {/* À la plage */}
            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Accès direct plage">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Accès Direct Plage
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                Mobil-home face à la mer avec accès direct à la plage
              </p>
            </article>

            {/* Tout confort inclus */}
            <article className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-3 md:mb-4" aria-label="Mobil-home prestige">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-black">
                Mobil-Home Prestige
              </h3>
              <p className="text-s w-3/4 mx-auto font-bold text-gray-500">
                Location mobil-home haut de gamme tout confort inclus
              </p>
            </article>
          </div>
        </section>
        

        <section className="location mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" aria-label="Location mobil-home face à la mer au Portel">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black leading-tight px-2 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6 text-center">
            Le Logement <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>Prestige</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6">Confort premium avec vue mer panoramique</p>
          
          <div className="bg-gray-200 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto shadow-lg">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8">À l&#39;intérieur</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">Chambre parentale avec salle de bain privative</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">Chambre parentale avec salle de bain privative</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">2 chambres avec lits jumeaux + 2ème SDB</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">Kitchenette entièrement équipée</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">Climatisation été &amp; chauffage hiver</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto shadow-lg mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8">À l&#39;extérieur</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">Terrasse couverte de 12 m² avec vue mer, parfaite pour vos repas en plein air et apéritifs face au coucher de soleil.</span>
              </li>
              
            </ul>
          </div>
          <div className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-lg flex justify-center items-center scroll-mt-20" id="decouvrir-le-mobil-home">
            <Image src={Terasse} alt="Location mobil-home extérieur avec terrasse vue mer" width={1000} height={400} className="rounded-lg w-full h-auto object-cover" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 sm:px-4">
              Prêt à Réserver Votre Séjour Face à la Mer ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4 max-w-2xl">
              Réservez dès maintenant votre location mobil-home et profitez d&#39;un séjour inoubliable avec vue mer panoramique
            </p>
            <Link 
              href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1" 
              target="_blank"
              rel="nofollow"
              className="bg-white text-blue-600 font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap w-full sm:w-auto text-center"
            >
              Réserver Maintenant
            </Link>
          </div>
        </section>

        {/* Contenu SEO caché pour les moteurs de recherche */}
        <div className="sr-only">
          <p>
            Location mobil-home prestige face à la mer au Portel sur la Côte d&#39;Opale. 
            Mobil-home 3 chambres avec vue mer panoramique et accès direct à la plage. 
            Location vacances mobil-home haut de gamme à partir de 90€ par nuit. 
            Réservez votre mobil-home prestige avec vue mer au Portel.
          </p>
          <p>
            Blueportel propose la location de mobil-home prestige face à la mer au Portel. 
            Notre mobil-home 3 chambres peut accueillir jusqu&#39;à 6 personnes avec vue mer panoramique 
            sur la Côte d&#39;Opale. Location mobil-home avec accès direct plage et tout le confort 
            d&#39;un hébergement haut de gamme au Portel.
          </p>
        </div>
      </main>
    </div>
  );
}
