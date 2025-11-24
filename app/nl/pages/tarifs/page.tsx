import TarifsPage from "../../../../src/components/tarifs/TarifsPage";
import nlTarifsDictionary from "../../../../src/i18n/tarifs/nl";

export const metadata = nlTarifsDictionary.metadata;

export default function Page() {
  return <TarifsPage dictionary={nlTarifsDictionary} />;
}

