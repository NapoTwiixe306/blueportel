import PlanPage from "../../../../src/components/plan/PlanPage";
import nlPlanDictionary from "../../../../src/i18n/plan/nl";

export const metadata = nlPlanDictionary.metadata;

export default function Page() {
  return <PlanPage dictionary={nlPlanDictionary} />;
}

