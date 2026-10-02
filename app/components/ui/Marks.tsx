import type { ReactNode } from "react";

/*
  "Three Disciplines" marks. Law is red, business is yellow, engineering is
  blue. The colours are rationed: they appear as small squares, bars and
  planes, and every label sits on chalk or ink, never on the colour itself.
*/

export type Discipline = "law" | "biz" | "eng";

export const DISCIPLINES: Record<Discipline, { label: string; fill: string }> = {
  law: { label: "Law", fill: "bg-law" },
  biz: { label: "Business", fill: "bg-biz" },
  eng: { label: "Engineering", fill: "bg-eng" },
};

/* The logo mark: three squares, one per discipline, at cap height. */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-end gap-[2px] ${className}`}>
      <span className="h-[0.42em] w-[0.42em] bg-law" />
      <span className="h-[0.42em] w-[0.42em] bg-biz" />
      <span className="h-[0.42em] w-[0.42em] bg-eng" />
    </span>
  );
}

/* Which disciplines a piece of work draws on: a square of each colour and its name. */
export function Chips({ of, className = "" }: { of: Discipline[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-1.5 ${className}`} aria-label="Disciplines">
      {of.map((d) => (
        <li key={d} className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-text-muted uppercase">
          <span aria-hidden="true" className={`h-2 w-2 ${DISCIPLINES[d].fill}`} />
          {DISCIPLINES[d].label}
        </li>
      ))}
    </ul>
  );
}

/* A section label: number, slash, name, then a hairline to the edge. */
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
    <p className={`kicker flex items-center gap-3 ${dark ? "text-data-ink" : "text-text-muted"} ${className}`}>
      <span className={`tnum ${dark ? "text-data-hi" : "text-foreground"}`}>{num.padStart(2, "0")}</span>
      {children && (
        <span className={dark ? "text-white/25" : "text-line-strong"} aria-hidden="true">
          /
        </span>
      )}
      {children}
      {rule && <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-line"}`} aria-hidden="true" />}
    </p>
  );
}

/* A short review note, tagged with the discipline it speaks to. */
export function Comment({ meta, discipline, children }: { meta?: ReactNode; discipline: Discipline; children: ReactNode }) {
  return (
    <div className="relative border border-foreground bg-card px-4 py-3 text-left shadow-[6px_6px_0_0_rgba(18,18,18,0.9)]">
      <div className="flex items-center gap-2">
        <span aria-hidden="true" className={`h-2.5 w-2.5 ${DISCIPLINES[discipline].fill}`} />
        <span className="font-mono text-[11px] tracking-[0.06em] text-text-muted uppercase">
          {DISCIPLINES[discipline].label}
          {meta && <span className="ml-2 normal-case tracking-normal">{meta}</span>}
        </span>
      </div>
      <div className="mt-1.5 text-[14px] leading-snug text-foreground">{children}</div>
    </div>
  );
}
