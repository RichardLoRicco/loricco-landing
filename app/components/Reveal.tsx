"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-5% 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal-on-scroll ${className}`}
    >
      {children}
    </Tag>
  );
}
