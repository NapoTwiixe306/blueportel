import TarifsPage from "../../../../src/components/tarifs/TarifsPage";
import frTarifsDictionary from "../../../../src/i18n/tarifs/fr";
import { getSeasonPriceRanges } from "../../../../src/lib/booking/rates";

export const metadata = frTarifsDictionary.metadata;

export default async function Page() {
  const seasonPrices = await getSeasonPriceRanges();
  return <TarifsPage dictionary={frTarifsDictionary} seasonPrices={seasonPrices} />;
}

