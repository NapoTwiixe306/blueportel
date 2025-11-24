"use client";

import { useEffect } from "react";

export default function LegacyPlanRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/plan");
  }, []);

  return null;
}

