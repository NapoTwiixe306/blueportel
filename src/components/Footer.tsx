import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {/* Logo */}
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

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Contact</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
              <a 
                href="tel:+32488832091" 
                className="flex items-center gap-2 sm:gap-3 hover:text-blue-500 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span>+32 488 83 20 91</span>
              </a>
              <a 
                href="tel:+33745324836" 
                className="flex items-center gap-2 sm:gap-3 hover:text-blue-500 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span>+33 745 32 48 36</span>
              </a>
              <a 
                href="mailto:infos@blueportel.fr" 
                className="flex items-center gap-2 sm:gap-3 hover:text-blue-500 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span>infos@blueportel.fr</span>
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Adresse</h3>
            <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div className="space-y-1">
                <p>rue du Vinâve 32</p>
                <p>Liers, Belgique 4042</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Blueportel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

