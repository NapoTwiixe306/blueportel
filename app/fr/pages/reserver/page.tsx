import type { Metadata } from "next";

import ReserverPage, { reserverCopy } from "../../../../src/components/reserver/ReserverPage";

export const metadata: Metadata = {
  title: reserverCopy.fr.metaTitle,
  description: reserverCopy.fr.metaDescription,
  alternates: {
    canonical: "https://blueportel.fr/fr/pages/reserver",
    languages: {
      "fr-FR": "https://blueportel.fr/fr/pages/reserver",
      "en-GB": "https://blueportel.com/en/pages/reserver",
      "nl-NL": "https://blueportel.fr/nl/pages/reserver",
      "x-default": "https://blueportel.fr/fr/pages/reserver",
    },
  },
};

export default function Page() {
  return <ReserverPage locale="fr" />;
}
