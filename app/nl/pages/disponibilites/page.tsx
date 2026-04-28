import DisponibilitesPage from "../../../../src/components/disponibilites/DisponibilitesPage";
import nlAvailabilityDictionary from "../../../../src/i18n/disponibilites/nl";

export const metadata = nlAvailabilityDictionary.metadata;

export default function Page() {
  return <DisponibilitesPage dictionary={nlAvailabilityDictionary} />;
}

