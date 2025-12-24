import GuidePage from "../../../src/components/guide/GuidePage";
import frGuideDictionary from "../../../src/i18n/guide/fr";

export const metadata = frGuideDictionary.metadata;

export default function Page() {
  return <GuidePage dictionary={frGuideDictionary} />;
}

