"use client";

import { useEffect } from "react";

export default function LegacyGalerieRedirect() {
  useEffect(() => {
    window.location.replace("/fr/galerie-photo");
  }, []);

  return null;
}

