import DisponibilitesPage from "../../../../src/components/disponibilites/DisponibilitesPage";
import frAvailabilityDictionary from "../../../../src/i18n/disponibilites/fr";

export const metadata = frAvailabilityDictionary.metadata;

export default function Page() {
  return <DisponibilitesPage dictionary={frAvailabilityDictionary} />;
}

