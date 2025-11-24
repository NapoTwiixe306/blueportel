"use client";

import { useEffect } from "react";

export default function LegacyGuideRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/guide-touristique");
  }, []);

  return null;
}

