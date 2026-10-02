"use client";

import { useState, type ReactNode } from "react";

/*
  "Redline" components. The page reads as one document under revision, with
  a few marks used everywhere: the red double margin rule (page.tsx) with
  contract numbers hanging outside it (Clause), tracked insertions (the
  .ins-mark class) and review comments (Comment). On top of that there is
  one AI suggestion (in the hero) and one spreadsheet (Sheet).
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

/*
  The one spreadsheet on the page: a formula bar over a two-column grid with
  row numbers and column letters. Hovering or clicking a row selects its
  value cell, and the formula bar shows that cell's formula, so the
  selection is real rather than decoration. Every formula is true: either a
  real count or the literal value.
*/
export type SheetRow = { label: string; value: ReactNode; formula: string };

export function Sheet({ rows, caption, className = "" }: { rows: SheetRow[]; caption: string; className?: string }) {
  const [selected, setSelected] = useState(0);
  const cols = "grid grid-cols-[2rem_minmax(0,1.1fr)_minmax(0,1fr)]";
  return (
    <div className={`overflow-hidden rounded-[4px] border border-line-strong bg-card font-mono text-[12px] ${className}`}>
      {/* Formula bar and column letters are spreadsheet chrome: visible, not read aloud */}
      <div aria-hidden="true">
        <div className="flex items-stretch border-b border-line-strong">
          <span className="flex w-12 shrink-0 items-center justify-center border-r border-line-strong bg-gutter text-[11px] text-text-muted tnum">
            B{selected + 1}
          </span>
          <span className="flex items-center border-r border-line-strong px-2.5 text-[11px] text-text-muted italic">fx</span>
          <span className="min-w-0 flex-1 truncate px-3 py-2 text-foreground">{rows[selected].formula}</span>
        </div>
        <div className={`${cols} border-b border-line bg-gutter text-center text-[10px] text-text-muted`}>
          <span className="border-r border-line py-1" />
          <span className="border-r border-line py-1">A</span>
          <span className="py-1">B</span>
        </div>
      </div>

      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <tbody>
          {rows.map((row, i) => {
            const isSel = i === selected;
            return (
              <tr
                key={row.label}
                onMouseEnter={() => setSelected(i)}
                className={`${cols} cursor-cell border-b border-line last:border-b-0`}
              >
                <td
                  aria-hidden="true"
                  className={`flex items-center justify-center border-r border-line text-[10px] tnum transition-colors ${
                    isSel ? "bg-ins-wash text-ins" : "bg-gutter text-text-muted"
                  }`}
                >
                  {i + 1}
                </td>
                <th scope="row" className="border-r border-line px-3 py-2.5 text-[11px] font-normal text-body-muted">
                  {row.label}
                </th>
                <td className="relative p-0">
                  <button
                    type="button"
                    aria-pressed={isSel}
                    onClick={() => setSelected(i)}
                    onFocus={() => setSelected(i)}
                    className={`block h-full w-full cursor-cell px-3 py-2.5 text-left font-medium text-foreground tnum focus-visible:outline-offset-[-2px] ${
                      isSel ? "bg-ins-wash outline-2 -outline-offset-2 outline-ins outline-solid" : ""
                    }`}
                  >
                    {row.value}
                  </button>
                  {isSel && <span aria-hidden="true" className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-ins" />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
