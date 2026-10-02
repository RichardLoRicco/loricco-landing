import type { ReactNode } from "react";

/*
  "Redline" components. The page reads as one document under revision, with
  exactly four marks: gutter numbers (Clause), inserts and deletes (CSS
  classes .ins-mark / .del-mark), and review comments (Comment). On top of
  that there is one AI suggestion (in the hero) and one formula bar (Sheet).
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
  row numbers and column letters. Row `selected` gets the selection outline,
  and the formula bar shows its formula. Every formula states a real fact.
*/
export function Sheet({
  rows,
  selected = 0,
  formula,
  className = "",
}: {
  rows: [string, ReactNode][];
  selected?: number;
  formula: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[4px] border border-line-strong bg-card font-mono text-[12px] ${className}`}>
      {/* Formula bar */}
      <div className="flex items-stretch border-b border-line-strong">
        <span className="flex w-12 shrink-0 items-center justify-center border-r border-line-strong bg-gutter text-[11px] text-text-muted tnum">
          B{selected + 1}
        </span>
        <span className="flex items-center border-r border-line-strong px-2.5 text-[11px] text-text-muted italic">fx</span>
        <span className="min-w-0 flex-1 truncate px-3 py-2 text-foreground">{formula}</span>
      </div>
      {/* Column letters */}
      <div className="grid grid-cols-[2rem_minmax(0,1.1fr)_minmax(0,1fr)] border-b border-line bg-gutter text-center text-[10px] text-text-muted">
        <span className="border-r border-line py-1" />
        <span className="border-r border-line py-1">A</span>
        <span className="py-1">B</span>
      </div>
      <dl>
        {rows.map(([label, value], i) => {
          const isSel = i === selected;
          return (
            <div
              key={label}
              className="grid grid-cols-[2rem_minmax(0,1.1fr)_minmax(0,1fr)] border-b border-line last:border-b-0"
            >
              <span className="flex items-center justify-center border-r border-line bg-gutter text-[10px] text-text-muted tnum">
                {i + 1}
              </span>
              <dt className="border-r border-line px-3 py-2.5 text-[11px] text-body-muted">{label}</dt>
              <dd
                className={`relative px-3 py-2.5 font-medium text-foreground tnum ${
                  isSel ? "bg-ins-wash outline-2 -outline-offset-2 outline-ins outline-solid" : ""
                }`}
              >
                {value}
                {isSel && (
                  <span aria-hidden="true" className="absolute -right-px -bottom-px h-1.5 w-1.5 bg-ins" />
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
