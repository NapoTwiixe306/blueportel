import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BluePortel Prestige — Mobil-home 6 personnes face à la mer | Le Portel",
  description:
    "Découvrez le Prestige BluePortel : mobil-home 3 chambres pour 6 personnes avec vue mer panoramique, terrasse couverte 12 m² et accès direct plage. Côte d'Opale.",
  robots: { index: false, follow: true },
};

export default function PrestigeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
