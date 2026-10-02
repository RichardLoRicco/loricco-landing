"use client";

import { useSyncExternalStore } from "react";

/*
  True when the visitor asks for reduced motion. The server snapshot is
  always false, so the hydration render matches the server HTML; React then
  re-renders with the real preference. (motion's useReducedMotion reads the
  media query during the first client render, which made the Lighthouse
  gauges hydrate "94" over a server-rendered "0".)
*/
const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export function useStill() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
}
