"use client";

import { useEffect } from "react";

export default function LegacyFAQRedirect() {
  useEffect(() => {
    window.location.replace("/fr/faq");
  }, []);

  return null;
}

