import Image from "next/image";
import { counts } from "../lib/apps";
import { services } from "../lib/services";
import { EMAIL } from "../lib/site";

const facts = [
  { value: String(counts.live), label: "apps on the App Store" },
  { value: "100", label: "Lighthouse SEO, both client sites" },
  { value: "CT", label: "admitted attorney, New Haven" },
];

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative pt-24 sm:pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-[1320px] gap-x-10 gap-y-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="label flex items-center gap-3 text-ink-mute">
            <span className="inline-block h-2 w-2 bg-signal" aria-hidden="true" />
            Richard T. LoRicco · New Haven, Connecticut
          </p>

          <h1 className="display mt-8 text-[13.4vw] sm:text-[11.2vw] lg:text-[7.1vw] min-[1500px]:text-[6.75rem]">
            <span className="block">Attorney</span>
            <span className="block">
              <span className="serif-i pr-[0.06em] text-signal">&amp;</span>engineer.
            </span>
          </h1>

          <div className="mt-10 max-w-[38rem] lg:mt-12">
            <p className="text-[1.125rem] leading-[1.6] text-ink-soft sm:text-[1.2rem]">
              I rebuild and run websites and AI systems for law firms and small
              businesses, train lawyers and their staff on AI, consult with
              counsel on the technology in their cases, and advise startups.
              You work with me directly, from the first call to the finished
              work.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="slab bg-ink px-6 py-4 text-[15px] font-semibold text-paper hover:text-ink"
              >
                Start with an email <span className="slab-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#work" className="line-link pb-0.5 text-[15px] font-medium text-ink">
                See client work
              </a>
            </div>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[22rem] self-start sm:max-w-[24rem] lg:col-span-4 lg:mx-0 lg:mt-10 lg:max-w-none">
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 bg-signal sm:translate-x-4 sm:translate-y-4"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden bg-ink">
              <Image
                src="/portrait-bw.jpg"
                alt="Richard T. LoRicco, principal of LoRicco & Co., in a suit and tie"
                width={800}
                height={1000}
                priority
                sizes="(min-width: 1024px) 32vw, 24rem"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
            </div>
          </div>
          <figcaption className="relative mt-7 flex items-baseline justify-between gap-4 border-t border-ink pt-3">
            <span className="text-[14px] font-semibold">Richard T. LoRicco</span>
            <span className="label text-[10px] text-ink-mute">LL.M. · J.D. · MBA</span>
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-16 max-w-[1320px] px-5 sm:px-8 lg:mt-20">
        <dl className="grid grid-cols-3 gap-4 border-t border-ink pt-5 sm:gap-8">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="display display-tight block text-[2rem] tnum sm:text-[2.75rem]">
                  {f.value}
                </span>
                <span className="mt-2 block text-[12.5px] leading-snug text-ink-mute sm:text-[13.5px]">
                  {f.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <nav aria-label="Services" className="mt-14 border-y border-rule bg-card lg:mt-16">
        <ul className="mx-auto grid max-w-[1320px] grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li
              key={s.slug}
              className={`border-rule ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
            >
              <a
                href={`#${s.slug}`}
                className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden px-5 py-5 transition-colors duration-300 hover:text-paper sm:px-8 sm:py-6"
              >
                <span
                  className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 [transition-timing-function:var(--ease-snap)] group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <span className="label relative text-ink-mute transition-colors group-hover:text-signal-bright">
                  0{i + 1}
                </span>
                <span className="relative flex items-end justify-between gap-3">
                  <span className="text-[16px] leading-tight font-bold tracking-[-0.01em] sm:text-[18px]">
                    {s.short}
                  </span>
                  <span
                    className="text-[18px] transition-transform duration-500 group-hover:translate-y-1"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
