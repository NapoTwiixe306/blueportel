import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootRedirectPage() {
  const host = (await headers()).get("host") || "";
  const isFr = host === "blueportel.fr" || host.endsWith(".blueportel.fr");
  const isEn = host === "blueportel.com" || host.endsWith(".blueportel.com");

  if (isFr) redirect("/location-mobil-home-vue-mer-le-portel");
  if (isEn) redirect("/mobile-home-sea-view-le-portel");

  // Fallback (dev / unknown host)
  redirect("/location-mobil-home-vue-mer-le-portel");
}

