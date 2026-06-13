import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

// Authentification admin simple par mot de passe unique (env ADMIN_PASSWORD).
// Le cookie ne contient pas le mot de passe mais un jeton dérivé (non forgeable
// sans connaître ADMIN_PASSWORD).

export const ADMIN_COOKIE = "bp_admin";

export function adminToken(): string | null {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return null;
  return createHash("sha256").update(`${pwd}:blueportel-admin-v1`).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

// Le mot de passe fourni est-il correct ?
export function checkPassword(password: string): boolean {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return false;
  return safeEqual(password, pwd);
}

// La requête courante est-elle authentifiée (cookie valide) ?
export async function isAdminAuthed(): Promise<boolean> {
  const token = adminToken();
  if (!token) return false;
  const jar = await cookies();
  const cookie = jar.get(ADMIN_COOKIE)?.value;
  return Boolean(cookie && safeEqual(cookie, token));
}
