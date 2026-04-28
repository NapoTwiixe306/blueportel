import AvisPage from "../../../../src/components/avis/AvisPage";
import frAvisDictionary from "../../../../src/i18n/avis/fr";

export const metadata = frAvisDictionary.metadata;

export default function Page() {
  return <AvisPage dictionary={frAvisDictionary} />;
}

