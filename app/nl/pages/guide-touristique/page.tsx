import GuidePage from "../../../../src/components/guide/GuidePage";
import nlGuideDictionary from "../../../../src/i18n/guide/nl";

export const metadata = nlGuideDictionary.metadata;

export default function Page() {
  return <GuidePage dictionary={nlGuideDictionary} />;
}

