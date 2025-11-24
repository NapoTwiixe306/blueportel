import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { locales } from "./src/i18n/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = locales.find(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );

  if (!locale) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-path-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/fr/:path*", "/en/:path*", "/nl/:path*"],
};

