import NausicaaPage from "../../../src/components/nausicaa/NausicaaPage";
import enNausicaaDictionary from "../../../src/i18n/nausicaa/en";

export const metadata = enNausicaaDictionary.metadata;

export default function Page() {
  return <NausicaaPage dictionary={enNausicaaDictionary} />;
}

