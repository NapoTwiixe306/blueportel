import TarifsPage from "../../../../src/components/tarifs/TarifsPage";
import nlTarifsDictionary from "../../../../src/i18n/tarifs/nl";
import { getSeasonPriceRanges } from "../../../../src/lib/booking/rates";

export const metadata = nlTarifsDictionary.metadata;

export default async function Page() {
  const seasonPrices = await getSeasonPriceRanges();
  return <TarifsPage dictionary={nlTarifsDictionary} seasonPrices={seasonPrices} />;
}

