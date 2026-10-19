
const EMAIL = "admin@loriccoandco.com";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="page-gutter pb-12">
      {/* Signature block, as it closes richardloricco.com */}
      <div
        className="flex flex-wrap items-end justify-between gap-8 pt-8"
        style={{ borderTop: "1px solid var(--rule-color)" }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 0.9,
              color: "var(--accent)",
              fontVariationSettings: '"opsz" 144, "SOFT" 80',
            }}
          >
            RTL
          </p>
        </div>
      </div>

      <div
        className="mt-8 flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="nav-mark" style={{ fontSize: "1rem" }}>
          LoRicco <em>&amp;</em> Co.
        </p>
        <p className="marginalia">
          &copy; {year} LoRicco &amp; Co. LLC &middot; Richard T. LoRicco
        </p>
        <a href={`mailto:${EMAIL}`} className="dateline-link meta">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}
