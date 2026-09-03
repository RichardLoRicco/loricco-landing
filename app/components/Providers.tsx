"use client";

import { MotionConfig } from "motion/react";
import { ActiveSectionProvider } from "./ActiveSection";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </MotionConfig>
  );
}
