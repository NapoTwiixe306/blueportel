import OverviewPage from "../../../../src/components/overview/OverviewPage";
import enOverviewDictionary from "../../../../src/i18n/overview/en";

export const metadata = enOverviewDictionary.metadata;

export default function Page() {
  return <OverviewPage dictionary={enOverviewDictionary} />;
}

