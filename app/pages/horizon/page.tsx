"use client";

import { useEffect } from "react";

export default function LegacyHorizonRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/horizon");
  }, []);
  return null;
}
