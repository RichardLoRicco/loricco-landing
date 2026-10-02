import type { ReactNode } from "react";

/*
  "Redline" components. The page reads as one document under revision, with
  a few marks used everywhere: the red double margin rule (page.tsx) with
  contract numbers hanging outside it (Clause), tracked insertions (the
  .ins-mark class) and review comments (Comment). On top of that there is
  one AI suggestion, in the hero.
*/

/*
  A section or paragraph number in contract style (2, 2.1). From xl up the
  number hangs in the page's left margin, outside the double rule; below
  that it sits inline before the label.
*/
export function Clause({
  num,
  children,
  className = "",
  rule = true,
  dark = false,
}: {
  num: string;
  children?: ReactNode;
  className?: string;
  rule?: boolean;
  dark?: boolean;
}) {
  return (
    <p className={`kicker relative flex items-center gap-3 ${dark ? "text-data-ink" : "text-text-muted"} ${className}`}>
      <span
        className={`font-medium tnum xl:absolute xl:-left-[5.5rem] xl:w-14 xl:text-right ${
          dark ? "text-ins-bright" : "text-ins"
        }`}
      >
        {num}
      </span>
      {children && (
        <span className={`xl:hidden ${dark ? "text-white/25" : "text-line-strong"}`} aria-hidden="true">
          /
        </span>
      )}
      {children}
      {rule && <span className={`h-px flex-1 ${dark ? "bg-white/12" : "bg-line"}`} aria-hidden="true" />}
    </p>
  );
}

/* A review comment, the way it sits in the margin of a redlined draft or a pull request. */
export function Comment({
  author = "R.T. LoRicco",
  meta,
  children,
  className = "",
  tone = "light",
}: {
  author?: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`relative rounded-[4px] border px-4 py-3 text-left ${
        dark ? "border-white/15 bg-white/5" : "border-line-strong bg-card shadow-[0_18px_40px_-24px_rgba(18,19,23,0.35)]"
      } ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ins font-mono text-[9px] font-medium text-white"
        >
          RL
        </span>
        <span className={`text-[13px] font-semibold ${dark ? "text-data-hi" : "text-foreground"}`}>{author}</span>
        {meta && (
          <span className={`font-mono text-[10px] ${dark ? "text-data-ink" : "text-text-muted"}`}>{meta}</span>
        )}
      </div>
      <div className={`mt-2 text-[13.5px] leading-snug ${dark ? "text-data-ink" : "text-body-muted"}`}>{children}</div>
    </div>
  );
}
