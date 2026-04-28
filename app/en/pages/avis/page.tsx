import AvisPage from "../../../../src/components/avis/AvisPage";
import enAvisDictionary from "../../../../src/i18n/avis/en";

export const metadata = enAvisDictionary.metadata;

export default function Page() {
  return <AvisPage dictionary={enAvisDictionary} />;
}

