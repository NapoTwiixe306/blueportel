import DisponibilitesPage from "../../../../src/components/disponibilites/DisponibilitesPage";
import enAvailabilityDictionary from "../../../../src/i18n/disponibilites/en";

export const metadata = enAvailabilityDictionary.metadata;

export default function Page() {
  return <DisponibilitesPage dictionary={enAvailabilityDictionary} />;
}

