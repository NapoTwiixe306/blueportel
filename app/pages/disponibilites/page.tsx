"use client";

import { useEffect } from "react";

export default function LegacyAvailabilityRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/disponibilites");
  }, []);

  return null;
}

