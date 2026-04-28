import OverviewPage from "../../../../src/components/overview/OverviewPage";
import nlOverviewDictionary from "../../../../src/i18n/overview/nl";

export const metadata = nlOverviewDictionary.metadata;

export default function Page() {
  return <OverviewPage dictionary={nlOverviewDictionary} />;
}

