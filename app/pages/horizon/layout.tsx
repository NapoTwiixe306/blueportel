import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BluePortel Horizon — Mobil-home 4 personnes face à la mer | Le Portel",
  description:
    "Découvrez le Horizon BluePortel : mobil-home 2 chambres pour 4 personnes avec vue mer et terrasse privée. Côte d'Opale.",
  robots: { index: false, follow: true },
};

export default function HorizonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
