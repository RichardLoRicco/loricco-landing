import type { ReactNode } from "react";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  aside?: ReactNode;
};

export default function SectionHead({ index, label, title, intro, dark = false, aside }: Props) {
  return (
    <header className="grid gap-x-10 gap-y-8 lg:grid-cols-12">
      <div className="lg:col-span-12">
        <p
          className={`label flex items-center gap-4 border-t pt-4 ${
            dark ? "border-night-rule text-night-soft" : "border-ink text-ink-mute"
          }`}
        >
          <span className={dark ? "text-signal-bright" : "text-signal-ink"}>{index}</span>
          {label}
        </p>
      </div>
      <h2 className="display text-[2.6rem] sm:text-[3.6rem] lg:col-span-7 lg:text-[4.6rem]">{title}</h2>
      {(intro || aside) && (
        <div className="flex flex-col justify-end gap-6 lg:col-span-5">
          {intro && (
            <p
              className={`max-w-md text-[1.0625rem] leading-[1.6] ${
                dark ? "text-night-soft" : "text-ink-soft"
              }`}
            >
              {intro}
            </p>
          )}
          {aside}
        </div>
      )}
    </header>
  );
}
