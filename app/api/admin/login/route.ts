import { NextResponse } from "next/server";

import { ADMIN_COOKIE, adminToken, checkPassword } from "@/src/lib/admin";

export async function POST(request: Request) {
  let password = "";
  try {
    password = ((await request.json()) as { password?: string }).password ?? "";
  } catch {
    password = "";
  }

  const token = adminToken();
  if (!token) {
    return NextResponse.json({ error: "Admin non configuré (ADMIN_PASSWORD manquant)" }, { status: 503 });
  }
  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  });
  return res;
}
