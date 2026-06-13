import type { AccommodationId } from "../../data/accommodations";
import { prisma } from "../db";

export type Season = "basse" | "moyenne" | "haute";
export const SEASONS: Season[] = ["basse", "moyenne", "haute"];
export const PROPERTIES: AccommodationId[] = ["horizon", "prestige"];

export type RateValue = { nightlyCents: number; minNights: number };
export type RatesMap = Record<AccommodationId, Record<Season, RateValue>>;

// Valeurs par défaut (utilisées pour amorcer la base et comme repli si la DB est absente).
// ⚠️ Tarifs Horizon estimés — modifiables ensuite depuis /admin.
export const DEFAULT_RATES: RatesMap = {
  prestige: {
    basse: { nightlyCents: 7500, minNights: 2 },
    moyenne: { nightlyCents: 10000, minNights: 3 },
    haute: { nightlyCents: 14000, minNights: 6 },
  },
  horizon: {
    basse: { nightlyCents: 6000, minNights: 2 },
    moyenne: { nightlyCents: 8000, minNights: 3 },
    haute: { nightlyCents: 11000, minNights: 6 },
  },
};

function dbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

function clone(map: RatesMap): RatesMap {
  return JSON.parse(JSON.stringify(map));
}

// Charge les tarifs : DB par-dessus les valeurs par défaut. Repli sur les défauts si DB indispo.
export async function getRates(): Promise<RatesMap> {
  const rates = clone(DEFAULT_RATES);
  if (!dbConfigured()) return rates;
  try {
    const rows = await prisma.rate.findMany();
    for (const r of rows) {
      const prop = r.property as AccommodationId;
      const season = r.season as Season;
      if (rates[prop] && rates[prop][season]) {
        rates[prop][season] = { nightlyCents: r.nightlyCents, minNights: r.minNights };
      }
    }
    return rates;
  } catch {
    return rates;
  }
}

// Amorce la table Rate avec les valeurs par défaut si elle est vide.
export async function ensureRatesSeeded(): Promise<void> {
  const count = await prisma.rate.count();
  if (count > 0) return;
  const data = PROPERTIES.flatMap((property) =>
    SEASONS.map((season) => ({
      property,
      season,
      nightlyCents: DEFAULT_RATES[property][season].nightlyCents,
      minNights: DEFAULT_RATES[property][season].minNights,
    }))
  );
  await prisma.rate.createMany({ data, skipDuplicates: true });
}

export type RateUpdate = { property: string; season: string; nightlyCents: number; minNights: number };

// Enregistre les tarifs édités depuis l'admin (upsert + validation simple).
export async function saveRates(updates: RateUpdate[]): Promise<void> {
  await Promise.all(
    updates
      .filter(
        (u) =>
          PROPERTIES.includes(u.property as AccommodationId) &&
          SEASONS.includes(u.season as Season) &&
          Number.isFinite(u.nightlyCents) &&
          u.nightlyCents >= 0 &&
          Number.isInteger(u.minNights) &&
          u.minNights >= 1
      )
      .map((u) =>
        prisma.rate.upsert({
          where: { property_season: { property: u.property, season: u.season } },
          update: { nightlyCents: Math.round(u.nightlyCents), minNights: u.minNights },
          create: {
            property: u.property,
            season: u.season,
            nightlyCents: Math.round(u.nightlyCents),
            minNights: u.minNights,
          },
        })
      )
  );
}
