import Image from "next/image";
import { liveApps } from "../lib/apps";
import { SECTIONS } from "../lib/sections";
import { Mark } from "./ui/Marks";

/* The footer row shows the apps that are live on the App Store. */
const appLinks = liveApps.map((app) => ({
  name: app.name,
  icon: app.icon,
  url: app.siteUrl ?? app.appStoreUrl ?? "#studio",
}));

export default function Footer() {
  return (
    <footer className="border-t border-white/12 bg-data-bg px-6 py-12 text-data-hi">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* Top row: wordmark, discipline line, live app icons */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="font-display text-sm font-bold tracking-tight">
              <Mark className="mr-2 text-[16px]" />LoRicco &amp; Co.
            </span>
            <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-data-ink uppercase">
              Attorney · MBA · Engineer
            </p>
          </div>

          {/* App icons */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.14em] text-data-ink uppercase">
              The studio
            </span>
            <div className="flex items-center gap-2.5">
              {appLinks.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-1"
                  aria-label={`${app.name}, opens in a new tab`}
                >
                  <div className="h-8 w-8 overflow-hidden rounded-[22.5%] border border-white/12 transition-all duration-200 group-hover:border-white/40 group-hover:-translate-y-0.5">
                    <Image
                      src={app.icon}
                      alt=""
                      width={32}
                      height={32}
                      sizes="32px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section links, numbered like the section labels */}
        <nav aria-label="Footer" className="border-t border-white/12 pt-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`/#${s.id}`}
                  className="group inline-flex items-baseline gap-2 text-[13px] text-data-ink transition-colors duration-200 hover:text-biz"
                >
                  <span className="font-mono text-[10px] text-data-ink tnum group-hover:text-biz">
                    {s.num}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom row: identifier, copyright, email */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/12 pt-6 sm:flex-row">
          <p className="font-mono text-[11px] text-data-ink">
            LCO / LORICCOANDCO.COM / {new Date().getFullYear()}
          </p>
          <p className="text-xs text-data-ink">
            &copy; {new Date().getFullYear()} LoRicco &amp; Co. LLC. All rights
            reserved.
          </p>
          <a
            href="mailto:admin@loriccoandco.com"
            className="font-mono text-[11px] text-data-ink underline decoration-white/30 underline-offset-4 transition-colors duration-200 hover:text-biz hover:decoration-biz"
          >
            admin@loriccoandco.com
          </a>
        </div>
      </div>
    </footer>
  );
}
