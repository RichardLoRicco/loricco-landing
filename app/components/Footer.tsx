import Image from "next/image";
import { liveApps } from "../lib/apps";

const EMAIL = "admin@loriccoandco.com";

/* The footer row shows the apps that are live on the App Store. */
const appLinks = liveApps.map((app) => ({
  name: app.name,
  icon: app.icon,
  url: app.siteUrl ?? app.appStoreUrl ?? "#studio",
}));

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="page-gutter pb-12">
      {/* Signature block, as it closes richardloricco.com */}
      <div
        className="flex flex-wrap items-end justify-between gap-8 pt-8"
        style={{ borderTop: "1px solid var(--rule-color)" }}
      >
        <div>
          <p className="meta">Signed</p>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 0.9,
              color: "var(--accent)",
              fontVariationSettings: '"opsz" 144, "SOFT" 80',
            }}
          >
            RTL
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="meta">The studio</span>
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
                <span
                  className="block h-8 w-8 overflow-hidden rounded-[22.5%] transition-transform duration-200 group-hover:-translate-y-0.5"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Image src={app.icon} alt="" width={32} height={32} sizes="32px" className="h-full w-full object-cover" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-8 flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="nav-mark" style={{ fontSize: "1rem" }}>
          LoRicco <em>&amp;</em> Co.
        </p>
        <p className="marginalia">
          &copy; {year} LoRicco &amp; Co. LLC. All rights reserved.
        </p>
        <a href={`mailto:${EMAIL}`} className="dateline-link meta">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}
