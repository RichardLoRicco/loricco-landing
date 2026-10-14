export const SITE_ORIGIN = "https://loriccoandco.com" as const;
export const SITE_NAME = "LoRicco & Co" as const;
export const EMAIL = "admin@loriccoandco.com" as const;

/** JSON-LD node ids shared between the site-wide graph and the blog pages. */
export const BUSINESS_ID = `${SITE_ORIGIN}/#business` as const;
export const PERSON_ID = `${SITE_ORIGIN}/#richard` as const;

export const DEFAULT_OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "LoRicco & Co.: Websites, AI, and technical consulting, with a portrait of principal Richard T. LoRicco.",
} as const;

export function absoluteUrl(path: `/${string}` = "/") {
  return `${SITE_ORIGIN}${path}`;
}

export const AUTHOR = {
  name: "Richard T. LoRicco",
  jobTitle: "Principal: Attorney (LL.M., J.D., MBA) and Software Engineer",
  url: "https://www.richardloricco.com",
  image: `${SITE_ORIGIN}/portrait-bw.jpg`,
} as const;
