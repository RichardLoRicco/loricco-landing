import { PROFILES } from "../lib/site";
import SectionHead from "./ui/SectionHead";

const principles = [
  {
    title: "Client matters stay private",
    body: "Consulting work for counsel is structured with privilege and work-product protection in mind. I don't turn those matters into marketing material or publish case studies about them.",
  },
  {
    title: "Straight answers",
    body: "You'll get a direct answer on what the records show, what's broken, what it costs to fix, and what AI can and can't do for you, including when the answer is that you don't need me.",
  },
  {
    title: "Keep what's working",
    body: "A rebuild shouldn't cost you the search rankings you spent years earning. I inventory your URLs, rankings, and content before anything changes, and plan the migration around keeping them.",
  },
  {
    title: "You own everything",
    body: "The domain, code, content, analytics, and accounts are set up in your name from the first day. If we part ways, you keep a working system and everything needed to run it.",
  },
];

const record: [string, string][] = [
  ["Admitted", "Connecticut"],
  ["Degrees", "LL.M., J.D., MBA"],
  ["Schools", "Quinnipiac University School of Law; UConn School of Business"],
  ["Also", "Software engineer"],
  ["Based in", "New Haven, CT"],
];

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHead
          index="05"
          label="About"
          title={
            <>
              Law, startups,
              <br />
              <span className="serif-i text-signal-ink">then</span> software
            </>
          }
        />

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[1.3rem] leading-[1.55] tracking-[-0.005em] sm:text-[1.5rem]">
              I practiced law, consulted for startups, and then moved into
              building production software. The services on this page grew out
              of problems people kept bringing me.
            </p>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.65] text-ink-soft">
              Their firm website had stopped bringing in work. Their team bought
              AI tools but never used them. Their case turned on carrier records.
              Their business plan needed a straight read. My work has included
              legal practice, startup consulting, production web and AI systems,
              open-source tools, and the studio&apos;s apps.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9" aria-label="Credentials">
            <div className="border border-ink bg-card">
              <p className="border-b border-ink px-5 py-4 text-[15px] font-bold">Richard T. LoRicco</p>
              <dl>
                {record.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-rule px-5 py-3 last:border-b-0">
                    <dt className="label pt-0.5 text-[10px] text-ink-mute">{k}</dt>
                    <dd className="text-[14px] leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {PROFILES.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="line-link pb-0.5 text-[14px] font-medium"
                  >
                    {p.label} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-24 lg:mt-28">
          <h3 className="label border-b border-ink pb-4 text-ink">How I work with clients</h3>
          <ol className="grid sm:grid-cols-2">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className={`border-b border-rule py-8 sm:py-10 ${i % 2 === 0 ? "sm:border-r sm:pr-10" : "sm:pl-10"}`}
              >
                <h4 className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-signal-ink">0{i + 1}</span>
                  <span className="display display-tight text-[1.6rem] sm:text-[1.9rem]">{p.title}</span>
                </h4>
                <p className="mt-4 pl-9 text-[15.5px] leading-[1.65] text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
