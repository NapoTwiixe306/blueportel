"use client";

import { useEffect } from "react";

export default function LegacyPlanRedirect() {
  useEffect(() => {
    window.location.replace("/fr/plan");
  }, []);

  return null;
}

