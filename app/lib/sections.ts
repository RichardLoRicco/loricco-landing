/*
  The page is one document with numbered sections. This list drives the
  navbar, the mobile menu and the footer, so it lives outside any client
  module and server components can import it too.
*/
export const SECTIONS = [
  { id: "services", num: "1", label: "Services" },
  { id: "work", num: "2", label: "Selected work" },
  { id: "process", num: "3", label: "How I work" },
  { id: "about", num: "4", label: "About" },
  { id: "studio", num: "5", label: "The Studio" },
  { id: "contact", num: "6", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
