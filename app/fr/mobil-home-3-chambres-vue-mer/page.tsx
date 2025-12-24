import OverviewPage from "../../../src/components/overview/OverviewPage";
import frOverviewDictionary from "../../../src/i18n/overview/fr";

export const metadata = {
  ...frOverviewDictionary.metadata,
  title: "Mobil-Home 3 Chambres Vue Mer Le Portel | Location Blueportel",
  description: "Réservez notre mobil-home 3 chambres avec vue mer panoramique au Portel. Idéal pour 6 personnes, tout confort sur la Côte d'Opale. Proche Nausicaá.",
  alternates: {
    canonical: "/fr/mobil-home-3-chambres-vue-mer",
    languages: {
      "fr-FR": "/fr/mobil-home-3-chambres-vue-mer",
    },
  },
};

export default function Page() {
  return <OverviewPage dictionary={frOverviewDictionary} />;
}

