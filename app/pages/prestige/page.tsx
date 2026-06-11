"use client";

import { useEffect } from "react";

export default function LegacyPrestigeRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/prestige");
  }, []);
  return null;
}
