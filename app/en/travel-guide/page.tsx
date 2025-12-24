import GuidePage from "../../../src/components/guide/GuidePage";
import enGuideDictionary from "../../../src/i18n/guide/en";

export const metadata = enGuideDictionary.metadata;

export default function Page() {
  return <GuidePage dictionary={enGuideDictionary} />;
}

