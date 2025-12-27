import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { locales } from "./src/i18n/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  
  // Déterminer la langue cible basée sur le domaine
  // Gère blueportel.fr, www.blueportel.fr, etc.
  let domainLocale: string | null = null;
  if (hostname === "blueportel.fr" || hostname.endsWith(".blueportel.fr")) {
    domainLocale = "fr";
  } else if (hostname === "blueportel.com" || hostname.endsWith(".blueportel.com")) {
    domainLocale = "en";
  }

  // Vérifier si la route actuelle contient déjà une locale
  const pathLocale = locales.find(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );

  // Si on a une locale dans le domaine ET pas de locale dans le chemin
  if (domainLocale && !pathLocale) {
    // Rediriger vers la version avec la locale du domaine
    const url = request.nextUrl.clone();
    url.pathname = `/${domainLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // Si on a une locale dans le chemin qui ne correspond pas au domaine
  if (domainLocale && pathLocale && pathLocale !== domainLocale) {
    // Rediriger vers la locale correspondant au domaine
    const url = request.nextUrl.clone();
    const pathWithoutLocale = pathname.replace(`/${pathLocale}`, "") || "/";
    url.pathname = `/${domainLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    return NextResponse.redirect(url);
  }

  // Si on a une locale dans le chemin, l'ajouter aux headers
  if (pathLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-path-locale", pathLocale);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap).*)",
  ],
};

