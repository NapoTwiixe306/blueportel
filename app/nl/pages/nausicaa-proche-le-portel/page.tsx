import NausicaaPage from "../../../../src/components/nausicaa/NausicaaPage";
import nlNausicaaDictionary from "../../../../src/i18n/nausicaa/nl";

export const metadata = nlNausicaaDictionary.metadata;

export default function Page() {
  return <NausicaaPage dictionary={nlNausicaaDictionary} />;
}

