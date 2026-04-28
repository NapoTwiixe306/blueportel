"use client";

import { useEffect } from "react";

export default function LegacyContactRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/contact");
  }, []);

  return null;
}

