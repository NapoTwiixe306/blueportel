"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, Globe, Heart, Users, MapPin, Calendar } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueportel.vercel.app';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    guests: '',
    phone: '',
    country: 'FR',
    arrival: '',
    departure: '',
    comment: '',
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Schéma BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": `${siteUrl}/pages/contact`
      }
    ]
  };

  // Schéma Person pour Michel Milants
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michel Milants",
    "jobTitle": "Propriétaire Blueportel",
    "email": "infos@blueportel.fr",
    "telephone": "+32488832091",
    "url": siteUrl,
    "sameAs": []
  };

  // Schéma ContactPoint
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Blueportel",
    "description": "Contactez Michel & Véro pour votre location de mobil-home face à la mer au Portel",
    "url": `${siteUrl}/pages/contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Blueportel",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+32488832091",
        "contactType": "Customer Service",
        "email": "infos@blueportel.fr",
        "availableLanguage": ["French"]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white w-full overflow-x-hidden">
        <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white dark:bg-white">
          <nav aria-label="Fil d'Ariane" className="w-full max-w-7xl mb-4 sm:mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Infos / Contact</li> 
           </ol>
          </nav>

          {/* Titre principal */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-tight px-3 sm:px-4 md:px-6 mb-3 sm:mb-4 md:mb-6">
            Contact <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-gluten)' }}>Blueportel</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center font-bold mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 md:px-6">
            Contactez Michel & Véro pour votre location de mobil-home face à la mer au Portel
          </p>

          <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-3 sm:px-4 md:px-6">
            <section className="space-y-6 sm:space-y-8" aria-label="À propos de l'hôte">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8 md:p-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
                  À propos de l'hôte
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Michel Milants
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🇫🇷</span>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Notre histoire</h4>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                      Passionnés par la <strong>Côte d'Opale</strong> et par les séjours au grand air, <strong>nous sommes Michel & Véro</strong>, un couple originaire de Belgique, amoureux du littoral et de la convivialité.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                      Blueportel est né d'un coup de cœur pour <strong>Le Portel</strong> et pour cette vue exceptionnelle sur la mer, les falaises anglaises et les couchers de soleil dorés du Phare d'Opale.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                      Nous avons voulu créer un lieu à notre image : <strong>raffiné, chaleureux et familial</strong>, où l'on se sent immédiatement bien.
                      Ici, tout a été pensé pour que vos vacances riment avec <strong>confort, liberté et authenticité</strong>.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                      Chaque saison, nous prenons plaisir à accueillir nos voyageurs, à échanger, à conseiller les plus belles balades, les meilleures tables locales, et à partager notre passion pour cette région pleine de charme.
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-sm sm:text-base md:text-lg text-gray-700">
                      "Notre plus belle récompense, c'est de voir nos visiteurs revenir… et se sentir un peu chez eux à Blueportel."
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-gray-300">
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">Nous contacter</h4>
                    <div className="space-y-3">
                      <a
                        href="mailto:infos@blueportel.fr"
                        className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-700 hover:text-blue-500 transition-colors"
                        aria-label="Envoyer un email à Blueportel"
                      >
                        <Mail className="w-5 h-5 text-blue-500" aria-hidden="true" />
                        <span>infos@blueportel.fr</span>
                      </a>
                      <a
                        href="tel:+32488832091"
                        className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-700 hover:text-blue-500 transition-colors"
                        aria-label="Appeler Blueportel"
                      >
                        <Phone className="w-5 h-5 text-blue-500" aria-hidden="true" />
                        <span>+32 488 83 20 91</span>
                      </a>
                      <a
                        href="https://blueportel.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-700 hover:text-blue-500 transition-colors"
                        aria-label="Visiter le site Blueportel"
                      >
                        <Globe className="w-5 h-5 text-blue-500" aria-hidden="true" />
                        <span>https://blueportel.fr</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6 sm:space-y-8" aria-label="Demande de réservation">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8 md:p-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 sm:mb-8">
                  Demande de réservation
                </h2>
                <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="Prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="Nom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                        Invités <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        min="1"
                        max="6"
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="1"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        >
                          <option value="FR">🇫🇷</option>
                          <option value="BE">🇧🇪</option>
                          <option value="GB">🇬🇧</option>
                          <option value="DE">🇩🇪</option>
                          <option value="NL">🇳🇱</option>
                          <option value="ES">🇪🇸</option>
                          <option value="IT">🇮🇹</option>
                          <option value="CH">🇨🇭</option>
                          <option value="US">🇺🇸</option>
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="flex-1 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="arrival" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                        Arrivée <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="arrival"
                        name="arrival"
                        value={formData.arrival}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="departure" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                        Départ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="departure"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Commentaire
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600">
                      J'accepte la <Link href="#" className="text-blue-500 hover:underline">politique de confidentialité</Link>. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-500 italic">
                    Ce site est protégé par reCAPTCHA et les politique de confidentialité et Conditions d'utilisation de Google s'appliquent.
                  </div>

                  <button
                    type="submit"
                    disabled
                    className="w-full bg-gray-400 text-white font-bold px-6 py-3 sm:py-4 rounded-lg cursor-not-allowed opacity-60 text-sm sm:text-base md:text-lg"
                    aria-disabled="true"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </section>
          </div>

          <section className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 mt-8 sm:mt-12 mb-8 sm:mb-12" aria-label="Réservation">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl p-6 sm:p-8 md:p-10 text-white text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Prêt à Réserver Votre Séjour ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-50 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Réservez directement en ligne votre location de mobil-home face à la mer au Portel 
                et profitez d'un séjour inoubliable avec vue mer panoramique sur la Côte d'Opale.
              </p>
              <Link
                href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
                target="_blank"
                rel="nofollow"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-base sm:text-lg md:text-xl"
              >
                Réserver Maintenant
              </Link>
            </div>
          </section>

          <div className="sr-only">
            <h2>Contact Blueportel - Location Mobil-Home Face à la Mer Le Portel</h2>
            <p>
              Contactez Michel & Véro, propriétaires de Blueportel, pour votre location de mobil-home face à la mer au Portel, 
              sur la Côte d'Opale. Mobil-home 3 chambres pour 6 personnes avec vue mer panoramique, terrasse couverte, 
              accès direct plage. Réservez votre séjour dès maintenant.
            </p>
            <h3>Informations de contact Blueportel</h3>
            <p>
              Email : infos@blueportel.fr | Téléphone : +32 488 83 20 91 | Site web : https://blueportel.fr
            </p>
            <h3>À propos de Michel & Véro</h3>
            <p>
              Michel Milants et Véro sont les propriétaires de Blueportel, un mobil-home de prestige face à la mer au Portel. 
              Passionnés par la Côte d'Opale, ils ont créé un lieu raffiné, chaleureux et familial pour vos vacances. 
              Mobil-home 3 chambres avec vue exceptionnelle sur la mer et les falaises anglaises.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

