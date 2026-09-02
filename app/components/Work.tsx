"use client";

import Image from "next/image";
import { motion } from "motion/react";

type Project = {
  name: string;
  url: string;
  host: string;
  image: string;
  imageAlt: string;
  description: string;
  data: [string, string][];
};

/*
  Real, non-privileged website work. Website engagements aren't covered by the
  work-product posture that keeps consulting matters off this page.
  Lighthouse figures are mobile runs from 2026-09-02; refresh them when the
  sites change materially.
*/
const projects: Project[] = [
  {
    name: "Omni Physical & Aquatic Therapy",
    url: "https://www.omnicanhelp.com/",
    host: "omnicanhelp.com",
    image: "/work/omni.jpg",
    imageAlt:
      "Homepage of omnicanhelp.com: headline reading Physical therapy, aquatic therapy and chiropractic care, with a photo of a warm-water therapy pool",
    description:
      "A physical, aquatic, and chiropractic therapy practice with five Connecticut offices. I rebuilt the Squarespace site as a bilingual Next.js site with an appointment-request form running on HIPAA-eligible AWS infrastructure, then took over content and AI-search visibility on retainer.",
    data: [
      ["Lighthouse", "94 · 100 · 100 · 100"],
      ["Live since", "Aug 2026"],
      ["Languages", "EN · ES"],
    ],
  },
  {
    name: "The LoRicco Law Firm",
    url: "https://loriccolaw.com/",
    host: "loriccolaw.com",
    image: "/work/loriccolaw.jpg",
    imageAlt:
      "Homepage of loriccolaw.com: headline reading Three generations of New Haven injury attorneys",
    description:
      "A personal injury and criminal defense firm that has practiced in New Haven since 1956. I rebuilt the outdated site as a bilingual Next.js site, kept the URLs and rankings it already had, and added a compliance-reviewed blog and pages for the surrounding towns. I run the content and AI-search work on a monthly retainer.",
    data: [
      ["Lighthouse", "100 · 100 · 100 · 100"],
      ["Live since", "May 2026"],
      ["Languages", "EN · ES"],
    ],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 px-6 py-28"
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="kicker rule-label text-text-muted">Selected work · Exhibit A</p>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Two websites I rebuilt
            <br />
            and still run.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body-muted">
            Both are live and on a monthly retainer, so anything this page
            says about how I build and run a site can be checked against
            them.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.host}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name}, ${project.host}. Opens in a new tab.`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[4px] border border-line bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_16px_32px_-20px_rgba(26,24,20,0.3)]"
            >
              {/* Browser-frame screenshot */}
              <div className="border-b border-line bg-background p-3 pb-0">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex gap-1" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                    <span className="h-2 w-2 rounded-full bg-line-strong" />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-text-muted">
                    {project.host}
                  </span>
                </div>
                <div className="overflow-hidden rounded-t-[3px] border border-b-0 border-line">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={750}
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-cobalt">
                    {project.name}
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-cobalt uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Visit →
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-body-muted">
                  {project.description}
                </p>
              </div>

              {/* Engineering-voice data strip */}
              <dl className="flex flex-wrap gap-x-8 gap-y-1.5 bg-data-bg px-6 py-4 font-mono text-[11px] text-data-ink">
                {project.data.map(([label, value]) => (
                  <div key={label} className="flex gap-2">
                    <dt className="uppercase tracking-[0.1em]">{label} /</dt>
                    <dd className="font-medium text-data-hi">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl font-mono text-[12px] leading-relaxed text-text-muted"
        >
          Lighthouse figures are mobile runs from September 2026 (performance,
          accessibility, best practices, SEO). Consulting matters for counsel
          are not shown here, for the reasons described below.
        </motion.p>
      </div>
    </section>
  );
}
