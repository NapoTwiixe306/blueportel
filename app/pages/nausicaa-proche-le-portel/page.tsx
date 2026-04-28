"use client";

import { useEffect } from "react";

export default function LegacyNausicaaRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/nausicaa-proche-le-portel");
  }, []);

  return null;
}

