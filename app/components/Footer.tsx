import Image from "next/image";
import { liveApps } from "../lib/apps";
import { PROFILES } from "../lib/site";
import Wordmark from "./Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-dark className="overflow-hidden bg-night text-night-ink">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-10 border-t border-night-rule py-12 sm:grid-cols-[1fr_2fr]">
          <div>
            <p className="label text-[10px] text-night-soft">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {PROFILES.map((p) => (
                <li key={p.label}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="line-link pb-0.5 text-[15px] font-medium">
                    {p.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-[10px] text-night-soft">On the App Store</p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {liveApps.map((app) => (
                <li key={app.slug}>
                  <a
                    href={app.siteUrl ?? app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${app.name} (opens in a new tab)`}
                    title={app.name}
                    className="block h-10 w-10 overflow-hidden rounded-[23%] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Image src={app.icon} alt="" width={40} height={40} sizes="40px" className="h-full w-full object-cover" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-3 sm:px-5">
        <Wordmark />
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-5 pt-6 pb-8 text-[12.5px] text-night-soft sm:flex-row sm:justify-between sm:px-8">
        <p>&copy; {year} LoRicco &amp; Co. LLC</p>
        <p>New Haven, Connecticut</p>
      </div>
    </footer>
  );
}
