"use client";

import { useEffect } from "react";

export default function LegacyContactRedirect() {
  useEffect(() => {
    window.location.replace("/fr/contact");
  }, []);

  return null;
}

