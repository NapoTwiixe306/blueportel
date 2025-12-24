"use client";

import { useEffect } from "react";

export default function LegacyNausicaaRedirect() {
  useEffect(() => {
    window.location.replace("/fr/hebergement-proche-nausicaa");
  }, []);

  return null;
}

