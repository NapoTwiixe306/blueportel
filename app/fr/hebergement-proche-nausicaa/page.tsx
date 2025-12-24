import NausicaaPage from "../../../src/components/nausicaa/NausicaaPage";
import frNausicaaDictionary from "../../../src/i18n/nausicaa/fr";

export const metadata = frNausicaaDictionary.metadata;

export default function Page() {
  return <NausicaaPage dictionary={frNausicaaDictionary} />;
}

