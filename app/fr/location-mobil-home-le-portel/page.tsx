import OverviewPage from "../../../src/components/overview/OverviewPage";
import frOverviewDictionary from "../../../src/i18n/overview/fr";

export const metadata = frOverviewDictionary.metadata;

export default function Page() {
  return <OverviewPage dictionary={frOverviewDictionary} />;
}

