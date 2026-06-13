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
  "https://ical.booking.com/v1/export?t=93aa3a20-548b-4290-a413-797ca3b447e1";
const HORIZON_AIRBNB_DEFAULT =
  "https://fr.airbnb.be/calendar/ical/1684229209545436081.ics?t=33486bf3d2384c32bd8da4edb9e2091b";

function clean(...urls: (string | undefined)[]): string[] {
  return urls.filter((u): u is string => Boolean(u && u.startsWith("http")));
}

export const icalSources: Record<AccommodationId, string[]> = {
  horizon: clean(
    process.env.ICAL_HORIZON_BOOKING || HORIZON_BOOKING_DEFAULT,
    process.env.ICAL_HORIZON_AIRBNB || HORIZON_AIRBNB_DEFAULT
  ),
  // Prestige : exports pas encore disponibles — ajouter les URLs quand prêtes.
  prestige: clean(process.env.ICAL_PRESTIGE_BOOKING, process.env.ICAL_PRESTIGE_AIRBNB),
};

export function isAccommodationId(value: string | null): value is AccommodationId {
  return value === "horizon" || value === "prestige";
}
