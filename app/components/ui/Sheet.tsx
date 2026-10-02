import type { ReactNode } from "react";

/*
  Pieces of the cobalt drafting sheet shared by the hero and the contact
  band: an engineering title block and the zone markers along an edge.
  Labels sit at vellum 80% (about 5.7:1 on cobalt); nothing goes lower.
*/

export type TitleCell = { label: string; value: ReactNode; wide?: boolean };

export function TitleBlock({
  cells,
  heading,
  className = "",
}: {
  cells: TitleCell[];
  heading?: ReactNode;
  className?: string;
}) {
  return (
    // Drawing convention: a heavier outer rule, hairline rules inside.
    <div className={`border-[1.5px] border-background/70 ${className}`}>
      {heading && (
        <div className="border-b border-background/35 px-4 py-2.5 font-mono text-[11px] tracking-[0.14em] text-background uppercase">
          {heading}
        </div>
      )}
      <dl className="grid grid-cols-2 gap-px bg-background/35">
        {cells.map((cell) => (
          <div
            key={cell.label}
            className={`bg-cobalt px-4 py-3 ${cell.wide ? "col-span-2" : "col-span-2 min-[480px]:col-span-1"}`}
          >
            <dt className="font-mono text-[10px] tracking-[0.14em] text-background/80 uppercase">
              {cell.label}
            </dt>
            <dd className="mt-1.5 font-mono text-[14px] font-medium text-background tnum">{cell.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* Drawing zone markers (1 to 6) along one edge of the sheet. Fixed markup, no measuring. */
export function Zones({ edge }: { edge: "top" | "bottom" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 flex h-7 ${
        edge === "bottom" ? "bottom-0 border-t" : "top-0 border-b"
      } border-background/30`}
    >
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <span
          key={n}
          className="flex flex-1 items-center justify-center border-r border-background/30 font-mono text-[10px] text-background/80 tnum last:border-r-0"
        >
          {n}
        </span>
      ))}
    </div>
  );
}
