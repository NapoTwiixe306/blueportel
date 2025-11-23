"use client";

import { useState, useEffect, useRef } from "react";

export default function ReservationForm() {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [guests, setGuests] = useState("1 Adulte");
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowGuestDropdown(false);
      }
    };

    if (showGuestDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showGuestDropdown]);

  const CalendarIcon = () => (
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const PeopleIcon = () => (
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  // Convertir la date du format jj/mm/aaaa vers YYYY-MM-DD
  const convertDateToISO = (dateString: string): string | null => {
    if (!dateString) return null;
    
    // Si la date est déjà au format YYYY-MM-DD, la retourner telle quelle
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    
    // Sinon, essayer de convertir depuis jj/mm/aaaa
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = parts[1].padStart(2, '0');
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    
    return null;
  };

  // Extraire le nombre d'adultes depuis le string (ex: "1 Adulte" -> 1)
  const extractAdultsCount = (guestsString: string): number => {
    const match = guestsString.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const baseUrl = "https://checkout.lodgify.com/fr/blueportel/654566/reservation";
    const url = new URL(baseUrl);
    
    // Ajouter les paramètres par défaut
    url.searchParams.set("currency", "EUR");
    url.searchParams.set("ref", "bnbox");
    
    // Ajouter le nombre d'adultes
    const adultsCount = extractAdultsCount(guests);
    url.searchParams.set("adults", adultsCount.toString());
    
    // Ajouter les dates si elles sont renseignées
    const arrival = convertDateToISO(arrivalDate);
    if (arrival) {
      url.searchParams.set("arrival", arrival);
    }
    
    const departure = convertDateToISO(departureDate);
    if (departure) {
      url.searchParams.set("departure", departure);
    }
    
    // Rediriger vers l'URL
    window.open(url.toString(), "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
      {/* Arrivée */}
      <div className="w-full">
        <label className="block text-xs sm:text-sm md:text-base font-bold text-gray-700 mb-1.5 sm:mb-2">
          Arrivée
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-2 sm:left-3 pointer-events-none z-10">
            <CalendarIcon />
          </div>
          <input
            type="date"
            id="arrival-date"
            name="arrival"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            placeholder="jj/mm/aaaa"
            autoComplete="off"
            className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Départ */}
      <div className="w-full">
        <label className="block text-xs sm:text-sm md:text-base font-bold text-gray-700 mb-1.5 sm:mb-2">
          Départ
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-2 sm:left-3 pointer-events-none z-10">
            <CalendarIcon />
          </div>
          <input
            type="date"
            id="departure-date"
            name="departure"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            placeholder="jj/mm/aaaa"
            min={arrivalDate || undefined}
            autoComplete="off"
            className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Invités */}
      <div className="relative w-full" ref={dropdownRef}>
        <label className="block text-xs sm:text-sm md:text-base font-bold text-gray-700 mb-1.5 sm:mb-2">
          Invités
        </label>
        <div className="relative">
          <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <PeopleIcon />
          </div>
          <button
            type="button"
            id="guests-select"
            name="guests"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
            aria-expanded={showGuestDropdown}
            aria-haspopup="listbox"
            className="w-full pl-9 sm:pl-11 pr-9 sm:pr-11 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base border border-gray-300 rounded-lg text-gray-700 text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
          >
            <span>{guests}</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${
                showGuestDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showGuestDropdown && (
            <div 
              className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
              role="listbox"
              aria-label="Sélectionner le nombre d'invités"
            >
              <div className="py-2">
                <button
                  type="button"
                  role="option"
                  onClick={() => {
                    setGuests("1 Adulte");
                    setShowGuestDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  1 Adulte
                </button>
                <button
                  type="button"
                  role="option"
                  onClick={() => {
                    setGuests("2 Adultes");
                    setShowGuestDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  2 Adultes
                </button>
                <button
                  type="button"
                  role="option"
                  onClick={() => {
                    setGuests("3 Adultes");
                    setShowGuestDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  3 Adultes
                </button>
                <button
                  type="button"
                  role="option"
                  onClick={() => {
                    setGuests("4 Adultes");
                    setShowGuestDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  4 Adultes
                </button>
                <button
                  type="button"
                  role="option"
                  onClick={() => {
                    setGuests("5 Adultes");
                    setShowGuestDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  5 Adultes
                </button>
                <button
                  type="button"
                  role="option"
                  onClick={() => {
                    setGuests("6 Adultes");
                    setShowGuestDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  6 Adultes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 text-sm sm:text-base md:text-lg rounded-lg transition-colors duration-300 mt-2 sm:mt-3 md:mt-4"
      >
        Réserver
      </button>
    </form>
  );
}

