import PlanPage from "../../../src/components/plan/PlanPage";
import frPlanDictionary from "../../../src/i18n/plan/fr";

export const metadata = frPlanDictionary.metadata;

export default function Page() {
  return <PlanPage dictionary={frPlanDictionary} />;
}

