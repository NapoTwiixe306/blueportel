import TarifsPage from "../../../src/components/tarifs/TarifsPage";
import frTarifsDictionary from "../../../src/i18n/tarifs/fr";

export const metadata = frTarifsDictionary.metadata;

export default function Page() {
  return <TarifsPage dictionary={frTarifsDictionary} />;
}

