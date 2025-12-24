"use client";

import { useEffect } from "react";

export default function LegacyGuideRedirect() {
  useEffect(() => {
    window.location.replace("/fr/guide-touristique");
  }, []);

  return null;
}

