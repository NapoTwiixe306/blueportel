import { createMollieClient, type MollieClient } from "@mollie/api-client";

// Singleton Mollie. Clé via env MOLLIE_API_KEY (test_... ou live_...).
const globalForMollie = globalThis as unknown as { mollie?: MollieClient };

export function getMollie(): MollieClient {
  const apiKey = process.env.MOLLIE_API_KEY;
  if (!apiKey) throw new Error("MOLLIE_API_KEY manquante");
  if (!globalForMollie.mollie) {
    globalForMollie.mollie = createMollieClient({ apiKey });
  }
  return globalForMollie.mollie;
}

// URL publique du site (pour redirectUrl + webhookUrl Mollie). Doit être HTTPS en prod.
export function siteBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://blueportel.fr"
  ).replace(/\/$/, "");
}
