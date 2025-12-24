import PlanPage from "../../../src/components/plan/PlanPage";
import enPlanDictionary from "../../../src/i18n/plan/en";

export const metadata = enPlanDictionary.metadata;

export default function Page() {
  return <PlanPage dictionary={enPlanDictionary} />;
}

