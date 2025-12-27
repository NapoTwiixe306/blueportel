import TarifsPage from "../../../../src/components/tarifs/TarifsPage";
import enTarifsDictionary from "../../../../src/i18n/tarifs/en";

export const metadata = enTarifsDictionary.metadata;

export default function Page() {
  return <TarifsPage dictionary={enTarifsDictionary} />;
}

