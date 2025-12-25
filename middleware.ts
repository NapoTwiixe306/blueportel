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

  const pathLocale = locales.find((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`));

  const toAbsolute = (targetHost: string, targetPath: string) => {
    const url = request.nextUrl.clone();
    url.host = targetHost;
    url.pathname = targetPath;
    return url;
  };

  const redirect301 = (url: URL) => NextResponse.redirect(url, 301);

  // Domain-only language rule (no multilingual content on same domain):
  // - blueportel.fr serves only FR routes (no /fr prefix publicly)
  // - blueportel.com serves only EN routes (no /en prefix publicly)

  // Cross-domain locale prefixes => send to the right domain, strip locale prefix
  if (domainLocale === "fr" && pathLocale === "en") {
    const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    const mapped =
      stripped === "/mobile-home-rental-le-portel" ? "/mobile-home-sea-view-le-portel" : stripped;
    return redirect301(toAbsolute("blueportel.com", mapped));
  }
  if (domainLocale === "en" && pathLocale === "fr") {
    const stripped = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
    const mapped =
      stripped === "/location-mobil-home-le-portel" ? "/location-mobil-home-vue-mer-le-portel" : stripped;
    return redirect301(toAbsolute("blueportel.fr", mapped));
  }

  // If user hits /fr/* on .fr => strip /fr (301)
  if (domainLocale === "fr" && pathLocale === "fr") {
    const stripped = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
    // consolidate old FR overview slug
    const mapped =
      stripped === "/location-mobil-home-le-portel" ? "/location-mobil-home-vue-mer-le-portel" : stripped;
    const url = request.nextUrl.clone();
    url.pathname = mapped;
    return redirect301(url);
  }

  // If user hits /en/* on .com => strip /en (301)
  if (domainLocale === "en" && pathLocale === "en") {
    const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    // consolidate old EN overview slug
    const mapped =
      stripped === "/mobile-home-rental-le-portel" ? "/mobile-home-sea-view-le-portel" : stripped;
    const url = request.nextUrl.clone();
    url.pathname = mapped;
    return redirect301(url);
  }

  // Mandatory 301s (legacy -> money)
  if (domainLocale === "fr") {
    if (pathname === "/fr/pages/vue-densemble" || pathname === "/pages/vue-densemble") {
      const url = request.nextUrl.clone();
      url.pathname = "/location-mobil-home-vue-mer-le-portel";
      return redirect301(url);
    }
    if (
      pathname === "/location-mobil-home-le-portel" ||
      pathname === "/mobil-home-3-chambres-vue-mer" ||
      pathname === "/hebergement-proche-nausicaa" ||
      pathname === "/camping-phare-d-opale"
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/location-mobil-home-vue-mer-le-portel";
      return redirect301(url);
    }
    // If someone tries to access the EN money URL on .fr, send to FR money.
    if (pathname === "/mobile-home-sea-view-le-portel") {
      const url = request.nextUrl.clone();
      url.pathname = "/location-mobil-home-vue-mer-le-portel";
      return redirect301(url);
    }
  }

  if (domainLocale === "en") {
    if (pathname === "/en/pages/overview" || pathname === "/pages/overview") {
      const url = request.nextUrl.clone();
      url.pathname = "/mobile-home-sea-view-le-portel";
      return redirect301(url);
    }
    if (
      pathname === "/mobile-home-rental-le-portel" ||
      pathname === "/seaside-campsite-opal-coast" ||
      pathname === "/accommodation-near-nausicaa"
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/mobile-home-sea-view-le-portel";
      return redirect301(url);
    }
    // If someone tries to access the FR money URL on .com, send to EN money.
    if (pathname === "/location-mobil-home-vue-mer-le-portel") {
      const url = request.nextUrl.clone();
      url.pathname = "/mobile-home-sea-view-le-portel";
      return redirect301(url);
    }
  }

  // Always expose the domain locale to the app (for <html lang>, etc.)
  if (domainLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-path-locale", domainLocale);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Fallback: keep existing behavior when host is unknown (dev)
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

