"use client";

import { useEffect } from "react";

export default function LegacyOverviewRedirect() {
  useEffect(() => {
    window.location.replace("/fr/pages/vue-densemble");
  }, []);

  return null;
}

