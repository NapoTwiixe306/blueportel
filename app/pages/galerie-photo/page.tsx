"use client";

import { useEffect } from "react";

export default function LegacyGalerieRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/galerie-photo");
  }, []);

  return null;
}

