import TarifsPage from "../../../../src/components/tarifs/TarifsPage";
import enTarifsDictionary from "../../../../src/i18n/tarifs/en";
import { getSeasonPriceRanges } from "../../../../src/lib/booking/rates";

export const metadata = enTarifsDictionary.metadata;

export default async function Page() {
  const seasonPrices = await getSeasonPriceRanges();
  return <TarifsPage dictionary={enTarifsDictionary} seasonPrices={seasonPrices} />;
}

