"use client";

import { useEffect } from "react";

export default function LegacyAvisRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/avis");
  }, []);

  return null;
}

