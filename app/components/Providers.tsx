"use client";

import { ActiveSectionProvider } from "./ActiveSection";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ActiveSectionProvider>{children}</ActiveSectionProvider>;
}
