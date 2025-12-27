import AvisPage from "../../../../src/components/avis/AvisPage";
import nlAvisDictionary from "../../../../src/i18n/avis/nl";

export const metadata = nlAvisDictionary.metadata;

export default function Page() {
  return <AvisPage dictionary={nlAvisDictionary} />;
}

