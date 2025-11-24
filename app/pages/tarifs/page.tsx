"use client";

import { useEffect } from "react";

export default function LegacyTarifsRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/tarifs");
  }, []);

  return null;
}

