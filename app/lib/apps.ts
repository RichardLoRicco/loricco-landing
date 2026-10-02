/*
  The studio's app portfolio: one list read by the Studio section, the footer,
  the hero facts and the JSON-LD. Change an app here and nowhere else.

  Sources (checked 2026-10-02):
  - Live apps and release months: the public App Store lookup API.
  - In review / in development: each app's repo and its <app>.loriccoandco.com site.
  Only link a site once it answers, and only link the App Store once the
  listing is public. When an app ships, set status "live", add appStoreUrl
  and since, and move it up in the list.
*/

export type AppStatus = "live" | "review" | "development";

/**
  How the featured panel paints itself for one app. The panel is dark, so every
  text colour here must clear 4.5:1 on the surface (the accent is used for text).
  Any app with a theme can be featured by moving `featured: true`.
*/
export type FeaturedTheme = {
  /** Class in globals.css that paints the panel background. */
  surface: string;
  border: string;
  /** Headline and primary text. */
  text: string;
  /** Kicker, the headline highlight and the focus ring. */
  accent: string;
  /** Description copy. */
  body: string;
  /** Small labels (the Price / Platform / Status terms). */
  label: string;
  /** The site button at rest and on hover. */
  button: { bg: string; text: string; hoverBg: string; hoverText: string };
  /** Colour of the phone frame around the screenshots. */
  bezel: string;
  kicker: [string, string];
  /** The end of the tagline drawn in the accent, e.g. "Scrombie." */
  highlight?: string;
  /** Optional row of art under the description, e.g. a face's decay stages. */
  stages?: { src: string; label: string; color: string }[];
  /** Caption for `stages`, read by screen readers. */
  stagesLabel?: string;
};

export type StudioApp = {
  slug: string;
  name: string;
  /** One line, the app's own pitch. */
  tagline: string;
  description: string;
  category: string;
  status: AppStatus;
  /** Square icon in /public. */
  icon: string;
  iconAlt: string;
  /** True when `icon` is a mascot standing in for an unfinished app icon. */
  iconIsMascot?: boolean;
  /** Accent, used for hairlines and tints only (never for text). */
  color: string;
  siteUrl?: string;
  appStoreUrl?: string;
  /** Download price as the App Store shows it, or the planned price. */
  price?: string;
  /** Qualifier printed after the price in the featured panel, e.g. "once". */
  priceNote?: string;
  /** Month it went live, e.g. "Aug 2026". */
  since?: string;
  /** Short status note shown under the badge, e.g. "Due November". */
  note?: string;
  /** Shown in the large featured slot instead of the grid. One at a time, and it needs `featuredTheme`. */
  featured?: boolean;
  featuredTheme?: FeaturedTheme;
  screenshots?: { src: string; alt: string }[];
  /** schema.org applicationCategory */
  schemaCategory: string;
};

export const apps: StudioApp[] = [
  // ── On the App Store (newest first) ──
  {
    slug: "bowelbuddy",
    name: "BowelBuddy",
    tagline: "Track your gut without making it weird.",
    description:
      "Log a visit in seconds, spot your patterns, and bring real notes to your next doctor's appointment.",
    category: "Digestive health",
    status: "live",
    icon: "/apps/bowelbuddy/icon.webp",
    iconAlt: "BowelBuddy app icon: a capybara relaxing in a hot spring",
    color: "#7FA37A",
    siteUrl: "https://bowelbuddy.loriccoandco.com/",
    appStoreUrl: "https://apps.apple.com/us/app/bowelbuddy-poop-tracker/id6793264185",
    price: "Free",
    since: "Aug 2026",
    schemaCategory: "HealthApplication",
  },
  {
    slug: "claro",
    name: "Claro",
    tagline: "Quit drinking, one day at a time.",
    description:
      "Cravings support, sober streaks, guided breathing, and no-shame check-ins for quitting alcohol.",
    category: "Quit drinking",
    status: "live",
    icon: "/apps/claro/icon.webp",
    iconAlt: "Claro app icon: Claro the elephant",
    color: "#2C7F8F",
    siteUrl: "https://claro.loriccoandco.com/",
    appStoreUrl: "https://apps.apple.com/us/app/claro-quit-drinking-tracker/id6762022094",
    price: "Free",
    since: "May 2026",
    schemaCategory: "HealthApplication",
  },
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "Your daily fuel to stay moving.",
    description:
      "Daily fitness motivation with quotes, streaks, and Atlas the bear keeping you accountable.",
    category: "Fitness",
    status: "live",
    icon: "/apps/atlas/icon.webp",
    iconAlt: "Atlas app icon: Atlas the bear",
    color: "#B08630",
    siteUrl: "https://atlas.loriccoandco.com/",
    appStoreUrl: "https://apps.apple.com/us/app/atlas-fitness-motivation/id6760481617",
    price: "Free",
    since: "Apr 2026",
    schemaCategory: "HealthApplication",
  },
  {
    slug: "milo",
    name: "Milo",
    tagline: "Quit nicotine, one breath at a time.",
    description:
      "Tracks cravings and nicotine-free streaks, with breathing exercises for the hard moments.",
    category: "Quit nicotine",
    status: "live",
    icon: "/apps/milo/icon.webp",
    iconAlt: "Milo app icon: Milo the otter",
    color: "#6FA3AB",
    siteUrl: "https://quitwithmilo.com/",
    appStoreUrl: "https://apps.apple.com/us/app/milo-quit-vaping-smoking/id6758960403",
    price: "Free",
    since: "Apr 2026",
    schemaCategory: "HealthApplication",
  },
  {
    slug: "grilltonight",
    name: "Grill Tonight",
    tagline: "Should you grill tonight?",
    description:
      "Reads the weather where you are and gives you a straight yes or no on firing up the grill.",
    category: "Weather",
    status: "live",
    icon: "/apps/grilltonight/icon.webp",
    iconAlt: "Grill Tonight app icon: a kettle grill with flames",
    color: "#D4652A",
    siteUrl: "https://grilltonight-landing.vercel.app/",
    appStoreUrl: "https://apps.apple.com/us/app/grill-tonight/id6760918522",
    price: "$2.99",
    since: "Apr 2026",
    schemaCategory: "WeatherApplication",
  },

  // ── In App Review ──
  {
    slug: "startonight",
    name: "Star Tonight",
    tagline: "Can I see the stars tonight?",
    description:
      "Cloud cover, the moon, darkness, light pollution and transparency roll into one score from 0 to 100, plus the best hour to head outside. Same idea as Grill Tonight, pointed at the sky.",
    category: "Stargazing",
    status: "review",
    icon: "/apps/startonight/icon.webp",
    iconAlt: "Star Tonight app icon: a bright four-pointed star on a night sky",
    color: "#2E3A8C",
    siteUrl: "https://startonight.loriccoandco.com/",
    price: "$2.99",
    priceNote: "once",
    note: "Submitted Oct 2026",
    featuredTheme: {
      surface: "featured-sky",
      border: "#232a5c",
      text: "#f0ede6",
      accent: "#8fa0ff",
      body: "#c3c6dc",
      label: "#9ea3c4",
      button: { bg: "#f0ede6", text: "#0b1030", hoverBg: "#2038c8", hoverText: "#ffffff" },
      bezel: "#0d1022",
      kicker: ["Newest", "Featured"],
    },
    screenshots: [
      {
        src: "/apps/startonight/shot-tonight.webp",
        alt: "Star Tonight's Tonight screen: a score of 85, YES, and a best window of 9 to 10pm in Torrey, Utah",
      },
      {
        src: "/apps/startonight/shot-week.webp",
        alt: "Star Tonight's week view: nightly scores for the next five nights, with Sunday at 100",
      },
      {
        src: "/apps/startonight/shot-red-light.webp",
        alt: "Star Tonight in red-light mode, which keeps your night vision while you check the score",
      },
    ],
    schemaCategory: "WeatherApplication",
  },

  // ── In development (closest to launch first) ──
  {
    slug: "hark",
    name: "Hark",
    tagline: "The teleprompter that listens.",
    description:
      "Your script scrolls at your pace, using on-device speech recognition. Audio never leaves your phone.",
    category: "Teleprompter",
    status: "development",
    icon: "/apps/hark/icon.webp",
    iconAlt: "Hark app icon: a pair of quotation marks over an underline",
    color: "#D9A03F",
    siteUrl: "https://hark.loriccoandco.com/",
    schemaCategory: "ProductivityApplication",
  },
  {
    slug: "toucan",
    name: "Toucan",
    tagline: "One can't. Two can.",
    description:
      "A streak you share with one other person. You both check in every day, or it dies for both of you.",
    category: "Habits",
    status: "development",
    icon: "/apps/toucan/icon.webp",
    iconAlt: "Toucan app icon: two toucans facing each other",
    color: "#E03A0E",
    siteUrl: "https://toucan.loriccoandco.com/",
    schemaCategory: "LifestyleApplication",
  },
  {
    slug: "quiethours",
    name: "Quiet Hours",
    tagline: "A clearer picture of your night.",
    description:
      "A bedside noise monitor that logs loud stretches overnight and turns them into a report you can share. It measures levels and never records audio.",
    category: "Noise monitor",
    status: "development",
    icon: "/apps/quiethours/icon.webp",
    iconAlt: "Quiet Hours app icon: a sound level gauge arcing from green to red",
    color: "#4A5578",
    siteUrl: "https://quiethours.loriccoandco.com/",
    schemaCategory: "UtilitiesApplication",
  },
  {
    slug: "snowday",
    name: "Snow Day",
    tagline: "Will school be cancelled tomorrow?",
    description:
      "Pick your town and get the odds, built from tonight's hourly snowfall, what your town usually gets, and winter weather alerts.",
    category: "Weather",
    status: "development",
    icon: "/apps/snowday/icon.webp",
    iconAlt: "Snow Day app icon: Mel the snowman in an orange beanie with a pencil nose",
    color: "#E07A2E",
    siteUrl: "https://snowday.loriccoandco.com/",
    note: "Due November",
    schemaCategory: "WeatherApplication",
  },
  {
    slug: "tighter",
    name: "Tighter",
    tagline: "How many fit inside a playing card?",
    description:
      "Print the target, shoot it, photograph it. Tighter finds every hole on your phone and shows whether your groups are getting tighter.",
    category: "Target practice",
    status: "development",
    icon: "/apps/tighter/icon.webp",
    iconAlt: "Tighter app icon: an orange bullseye inside a dark ring",
    color: "#F26B1D",
    siteUrl: "https://tighter.loriccoandco.com/",
    schemaCategory: "SportsApplication",
  },
  {
    slug: "metclock",
    name: "MetClock",
    tagline: "Red for work, blue for rest.",
    description:
      "One clock for EMOM, AMRAP, Tabata and For Time. The whole screen changes color with the workout, so a glance tells you whether it's work, rest or the last few seconds.",
    category: "Workout timer",
    status: "development",
    icon: "/apps/metclock/icon.webp",
    iconAlt: "MetClock app icon: a barbell loaded with red, blue and yellow bumper plates",
    color: "#D62828",
    schemaCategory: "HealthApplication",
  },
  {
    slug: "scrombie",
    name: "Scrombie",
    tagline: "Fresh me vs. Scrombie.",
    description:
      "Pick a face, one of eight drawn characters or your own selfie, and watch it drain from Fresh to Tired, Drained, Hollow and Scrombie as you doomscroll. You set the daily budget, share cards show the damage, and Pro's Lockdown shields your scroll apps until midnight.",
    category: "Screen time",
    status: "development",
    icon: "/apps/scrombie/icon.webp",
    iconAlt: "Scrombie app icon: a cartoon face, fresh on one side and cracked and decayed on the other",
    color: "#1FB5D6",
    siteUrl: "https://scrombie.loriccoandco.com/",
    price: "Free",
    priceNote: "Pro optional",
    featured: true,
    // Colours from scrombie/Sources/Support/Theme.swift, as on scrombie.loriccoandco.com.
    featuredTheme: {
      surface: "featured-scrombie",
      border: "#24282f",
      text: "#f2f2f0",
      accent: "#b3ecaa",
      body: "#b4b8bc",
      label: "#8f949a",
      button: { bg: "#b3ecaa", text: "#0c0d10", hoverBg: "#f2f2f0", hoverText: "#0c0d10" },
      bezel: "#050607",
      kicker: ["Featured", "Screen time"],
      highlight: "Scrombie.",
      stagesLabel: "One face, five stages",
      stages: [
        { src: "/apps/scrombie/stage-0.webp", label: "Fresh", color: "#f2a65a" },
        { src: "/apps/scrombie/stage-1.webp", label: "Tired", color: "#e0b87a" },
        { src: "/apps/scrombie/stage-2.webp", label: "Drained", color: "#b3b89e" },
        { src: "/apps/scrombie/stage-3.webp", label: "Hollow", color: "#8c9e8f" },
        { src: "/apps/scrombie/stage-4.webp", label: "Scrombie", color: "#b3ecaa" },
      ],
    },
    screenshots: [
      {
        src: "/apps/scrombie/shot-home-scrombie.webp",
        alt: "Scrombie's Today screen at the last stage: a cracked grey face, 5% vitality left after 2h 30m on a 1h budget",
      },
      {
        src: "/apps/scrombie/shot-home-drained.webp",
        alt: "Scrombie's Today screen at Drained: the face gone pale and tired, 46% vitality after 45 minutes",
      },
      {
        src: "/apps/scrombie/shot-week.webp",
        alt: "Scrombie Week: a bar chart of seven days of scroll time against the budget, 5h 52m doomscrolled",
      },
    ],
    schemaCategory: "LifestyleApplication",
  },
  {
    slug: "haven",
    name: "Haven",
    tagline: "Support for the messy middle.",
    description:
      "Mood check-ins after a breakup, SOS tools for the worst moments, and a guided 60-day recovery program.",
    category: "Breakup recovery",
    status: "development",
    icon: "/apps/haven/hazel.webp",
    iconAlt: "Hazel the rabbit, Haven's companion",
    iconIsMascot: true,
    color: "#B48895",
    siteUrl: "https://haven.loriccoandco.com/",
    schemaCategory: "HealthApplication",
  },
];

export const liveApps = apps.filter((a) => a.status === "live");
export const featuredApp = apps.find((a) => a.featured && a.featuredTheme);
export const counts = {
  live: liveApps.length,
  review: apps.filter((a) => a.status === "review").length,
  development: apps.filter((a) => a.status === "development").length,
};

/** "05" style figures, as the rest of the page prints them. */
export const pad2 = (n: number) => String(n).padStart(2, "0");

/** Spelled-out small numbers for running copy. */
export function spell(n: number): string {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  return words[n] ?? String(n);
}
