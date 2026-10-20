import Dateline from "./Dateline";
import Navbar from "./Navbar";

/*
  The fixed strips every route shares: the dateline and the navbar. The
  homepage mounts them inside its section tracker; subpages (the blog) use
  this instead, with no tracker, so the running head shows the practice's
  name and the nav highlights the route rather than a section.
*/
export default function PageChrome() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] rounded bg-[var(--ink)] px-3 py-2 text-[var(--paper)]"
      >
        Skip to main content
      </a>
      <Dateline />
      <Navbar />
    </>
  );
}
