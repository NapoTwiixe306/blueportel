import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

import type { FooterDictionary } from "../i18n/layout";
import Logo from "../img/logo.png";

type FooterProps = {
  dictionary: FooterDictionary;
};

export default function Footer({ dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const rightsText = dictionary.rights.replace("{year}", currentYear.toString());

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" aria-label="Blueportel - Accueil">
              <Image 
                src={Logo} 
                alt="Blueportel - Logo" 
                className="h-auto w-auto"
                width={180}
                height={72}
                priority={false}
              />
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              {dictionary.contactTitle}
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
              <Link
                href="tel:+32488832091"
                className="flex items-center gap-2 sm:gap-3 hover:text-blue-500 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span>{dictionary.phonePrimaryLabel}</span>
              </Link>
              <Link
                href="tel:+33745324836"
                className="flex items-center gap-2 sm:gap-3 hover:text-blue-500 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span>{dictionary.phoneSecondaryLabel}</span>
              </Link>
              <Link
                href="mailto:info@blueportel.fr"
                className="flex items-center gap-2 sm:gap-3 hover:text-blue-500 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span>{dictionary.emailLabel}</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              {dictionary.addressTitle}
            </h3>
            <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div className="space-y-1">
                {dictionary.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
            {dictionary.quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-gray-600 hover:text-blue-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <Link
              href="https://www.facebook.com/Blueportel"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs sm:text-sm text-gray-700 transition hover:border-blue-200 hover:text-blue-500"
            >
              <Facebook className="h-4 w-4" />
              {dictionary.facebookLabel}
            </Link>
            <p className="text-xs sm:text-sm text-gray-500">
              {rightsText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

