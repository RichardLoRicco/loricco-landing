/*
  The page is one document with numbered sections. This list drives the
  navbar, the margin index and the footer, so it lives outside any client
  module and server components can import it too.
*/
export const SECTIONS = [
  { id: "services", num: "01", label: "Services" },
  { id: "work", num: "02", label: "Selected work" },
  { id: "process", num: "03", label: "How I work" },
  { id: "about", num: "04", label: "About" },
  { id: "studio", num: "05", label: "The Studio" },
  { id: "contact", num: "06", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
