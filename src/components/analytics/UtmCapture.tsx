"use client";

import { useEffect } from "react";
import { captureUtmIfPresent } from "@/lib/utm";

/**
 * Mounted once in root layout. Captures UTM params on first visit and
 * persists them in sessionStorage for the rest of the session, so any
 * downstream wa.me link / quiz submission can include them.
 */
export function UtmCapture() {
  useEffect(() => {
    captureUtmIfPresent();
  }, []);
  return null;
}
