import Image from "next/image";

const appLinks = [
  { name: "Atlas", icon: "/apps/atlas/icon.png", color: "#B08630", url: "https://atlas.loriccoandco.com/" },
  { name: "Grill Tonight", icon: "/apps/grilltonight/icon.png", color: "#D4652A", url: "https://grilltonight-landing.vercel.app/" },
  { name: "Milo", icon: "/apps/milo/icon.png", color: "#6FA3AB", url: "https://quitwithmilo.com/" },
  { name: "Claro", icon: "/apps/claro/icon.png", color: "#6B8F71", url: "https://claro.loriccoandco.com/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* Top row — branding + app icons */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-display text-sm font-semibold tracking-tight text-text-muted">
            LoRicco <span className="text-cream">&</span> Co
          </span>

          {/* App icons */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted">Our apps</span>
            <div className="flex items-center gap-3">
              {appLinks.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-1.5"
                  aria-label={`${app.name}, opens in a new tab`}
                >
                  <div className="h-8 w-8 overflow-hidden rounded-lg border border-border-light transition-all duration-300 group-hover:border-border group-hover:scale-110">
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

        {/* Bottom row — copyright + email */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-border-light pt-6 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} LoRicco & Co. All rights reserved.
          </p>
          <a
            href="mailto:admin@loriccoandco.com"
            className="text-xs text-text-secondary underline decoration-text-muted transition-colors duration-300 hover:text-cream"
          >
            admin@loriccoandco.com
          </a>
        </div>
      </div>
    </footer>
  );
}
