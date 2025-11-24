import type { Metadata } from "next";
import type { Locale } from "../locales";

export type DrivingRoute = {
  origin: string;
  duration: string;
  route: string;
};

export type DistanceItem = {
  label: string;
  value: string;
};

export type PlanDictionary = {
  locale: Locale;
  metadata: Metadata;
  structuredData: {
    list: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
  };
  hero: {
    homeLabel: string;
    breadcrumbCurrent: string;
    pretitle: string;
    title: string;
    description: string;
  };
  locationCard: {
    title: string;
    description: string;
    address: string;
    gpsLabel: string;
    gpsValue: string;
    phoneLabel: string;
    phoneValue: string;
    phoneHref: string;
    emailLabel: string;
    emailValue: string;
    emailHref: string;
    parking: string;
  };
  map: {
    ariaLabel: string;
    embedUrl: string;
  };
  drivingSection: {
    title: string;
    cards: DrivingRoute[];
  };
  trainInfo: {
    title: string;
    bullets: string[];
  };
  busInfo: {
    title: string;
    bullets: string[];
  };
  bikeInfo: {
    title: string;
    text: string;
  };
  planeInfo: {
    title: string;
    text: string;
  };
  distanceInfo: {
    title: string;
    items: DistanceItem[];
  };
  assistance: {
    title: string;
    description: string;
    phoneLabel: string;
    phoneHref: string;
    emailLabel: string;
    emailHref: string;
    bookingLabel: string;
    bookingHref: string;
  };
  screenReader: {
    title: string;
    paragraph: string;
  };
};

