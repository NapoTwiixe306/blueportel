import type { AccommodationId } from "../../data/accommodations";

// Sources iCal par logement. Chaque logement peut cumuler plusieurs exports
// (Booking + Airbnb). Les dates bloquées sont fusionnées (union) côté API.
//
// Pour ajouter / remplacer un calendrier, définir les variables d'env
// (recommandé, garde les URLs hors du dépôt) :
//   ICAL_HORIZON_BOOKING, ICAL_HORIZON_AIRBNB
//   ICAL_PRESTIGE_BOOKING, ICAL_PRESTIGE_AIRBNB
// À défaut, les valeurs par défaut ci-dessous sont utilisées.

const HORIZON_BOOKING_DEFAULT =
  "https://ical.booking.com/v1/export?t=2f9b6512-bc70-4b4f-a0ee-f8f9769ee564";
const HORIZON_AIRBNB_DEFAULT =
  "https://fr.airbnb.be/calendar/ical/1684229209545436081.ics?t=33486bf3d2384c32bd8da4edb9e2091b";
const PRESTIGE_BOOKING_DEFAULT =
  "https://ical.booking.com/v1/export?t=00f98fb5-48cd-4cc2-a527-8326bd5cca00";
const PRESTIGE_AIRBNB_DEFAULT =
  "https://fr.airbnb.be/calendar/ical/1389190512266062716.ics?t=5d45b9aa84c8444ab97140c3c2a69537";

function clean(...urls: (string | undefined)[]): string[] {
  return urls.filter((u): u is string => Boolean(u && u.startsWith("http")));
}

export const icalSources: Record<AccommodationId, string[]> = {
  horizon: clean(
    process.env.ICAL_HORIZON_BOOKING || HORIZON_BOOKING_DEFAULT,
    process.env.ICAL_HORIZON_AIRBNB || HORIZON_AIRBNB_DEFAULT
  ),
  prestige: clean(
    process.env.ICAL_PRESTIGE_BOOKING || PRESTIGE_BOOKING_DEFAULT,
    process.env.ICAL_PRESTIGE_AIRBNB || PRESTIGE_AIRBNB_DEFAULT
  ),
};

export function isAccommodationId(value: string | null): value is AccommodationId {
  return value === "horizon" || value === "prestige";
}
