import type { AccommodationId } from "../../data/accommodations";
import type { RatesMap, Season } from "./rates";

// Tarification des réservations directes.
// Les tarifs (prix/nuit + nuits min) sont éditables depuis /admin (table Rate, cf. rates.ts).
// Politique : paiement intégral (100%) à la réservation,
// caution 200€ (empreinte/chèque, NON débitée via Mollie). Ménage non inclus.

export const DEPOSIT_RATE = 1; // paiement intégral à la réservation

// Frais de ménage en centimes (0 = non facturé via le site, réglé sur place)
const CLEANING_CENTS: Record<AccommodationId, number> = { prestige: 0, horizon: 0 };

// Délai minimum avant l'arrivée pour réserver en ligne (réduit le risque de double-résa
// lié à la synchro iCal différée des OTA). En-deçà → contact direct.
export const MIN_LEAD_DAYS = 3;

// Saison à partir du mois (1-12). Approximation Côte d'Opale, affinable par le proprio.
export function seasonForMonth(month: number): Season {
  if (month === 7 || month === 8) return "haute"; // juillet-août
  if (month >= 4 && month <= 9) return "moyenne"; // avril-juin, sept
  return "basse"; // oct-mars
}

function addDaysIso(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export function nightsBetween(checkIn: string, checkOut: string): number {
  const a = new Date(`${checkIn}T00:00:00Z`).getTime();
  const b = new Date(`${checkOut}T00:00:00Z`).getTime();
  return Math.round((b - a) / 86_400_000);
}

export type Quote = {
  property: AccommodationId;
  checkIn: string;
  checkOut: string;
  nights: number;
  season: Season; // saison de la nuit d'arrivée (indicative)
  minNights: number;
  nightlyCents: number; // tarif de la nuit d'arrivée (indicatif)
  cleaningCents: number;
  totalCents: number;
  depositCents: number;
  balanceCents: number;
};

export type QuoteError = { code: string; message: string };

// Calcule le devis nuit par nuit (gère un séjour à cheval sur plusieurs saisons).
// `rates` provient de getRates() (DB ou valeurs par défaut).
export function computeQuote(
  property: AccommodationId,
  checkIn: string,
  checkOut: string,
  rates: RatesMap
): { quote: Quote } | { error: QuoteError } {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(checkIn) || !/^\d{4}-\d{2}-\d{2}$/.test(checkOut)) {
    return { error: { code: "INVALID_DATES", message: "Dates invalides." } };
  }

  const nights = nightsBetween(checkIn, checkOut);
  if (nights <= 0) {
    return { error: { code: "INVALID_RANGE", message: "La date de départ doit suivre l'arrivée." } };
  }

  const arrivalSeason = seasonForMonth(Number(checkIn.slice(5, 7)));
  const minNights = rates[property][arrivalSeason].minNights;
  if (nights < minNights) {
    return {
      error: {
        code: "MIN_NIGHTS",
        message: `Séjour minimum de ${minNights} nuits en saison ${arrivalSeason}.`,
      },
    };
  }

  let lodgingCents = 0;
  for (let i = 0; i < nights; i++) {
    const nightIso = addDaysIso(checkIn, i);
    const season = seasonForMonth(Number(nightIso.slice(5, 7)));
    lodgingCents += rates[property][season].nightlyCents;
  }

  const cleaningCents = CLEANING_CENTS[property];
  const totalCents = lodgingCents + cleaningCents;
  const depositCents = Math.round(totalCents * DEPOSIT_RATE);

  return {
    quote: {
      property,
      checkIn,
      checkOut,
      nights,
      season: arrivalSeason,
      minNights,
      nightlyCents: rates[property][arrivalSeason].nightlyCents,
      cleaningCents,
      totalCents,
      depositCents,
      balanceCents: totalCents - depositCents,
    },
  };
}

export function eurosFromCents(cents: number): string {
  return (cents / 100).toFixed(2);
}
