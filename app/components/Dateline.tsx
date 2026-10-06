/*
  The fixed strip above the navbar, carried over from richardloricco.com.
  On the personal site it is a newspaper dateline; here it holds the
  practice's plain facts: availability, who and where, and how to reach it.
*/

const EMAIL = "admin@loriccoandco.com";

export default function Dateline() {
  return (
    <div className="dateline" role="region" aria-label="Practice details">
      <div className="dateline-inner">
        <span className="dateline-status">Accepting new clients</span>
        <span className="dateline-middle">LoRicco &amp; Co. LLC &middot; New Haven, CT</span>
        <a href={`mailto:${EMAIL}`} className="dateline-link">
          {EMAIL}
        </a>
      </div>
    </div>
  );
}
