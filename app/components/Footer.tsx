import Image from "next/image";

const appLinks = [
  { name: "Atlas", icon: "/apps/atlas/icon.png", url: "https://atlas.loriccoandco.com/" },
  { name: "Grill Tonight", icon: "/apps/grilltonight/icon.png", url: "https://grilltonight-landing.vercel.app/" },
  { name: "Milo", icon: "/apps/milo/icon.png", url: "https://quitwithmilo.com/" },
  { name: "Claro", icon: "/apps/claro/icon.png", url: "https://claro.loriccoandco.com/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* Top row — wordmark + document identifier + app icons */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="font-display text-sm font-bold tracking-tight">
              LoRicco <span className="editorial font-medium text-cobalt">&</span> Co.
            </span>
            <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
              Attorney · MBA · Engineer
            </p>
          </div>

          {/* App icons */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase">
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
                  <div className="h-8 w-8 overflow-hidden rounded-[4px] border border-line transition-all duration-200 group-hover:border-line-strong group-hover:-translate-y-0.5">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row — identifier + copyright + email */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-[11px] text-text-muted">
            LCO / LORICCOANDCO.COM / {new Date().getFullYear()}
          </p>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} LoRicco &amp; Co. LLC. All rights
            reserved.
          </p>
          <a
            href="mailto:admin@loriccoandco.com"
            className="font-mono text-[11px] text-body-muted underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-cobalt hover:decoration-cobalt"
          >
            admin@loriccoandco.com
          </a>
        </div>
      </div>
    </footer>
  );
}
