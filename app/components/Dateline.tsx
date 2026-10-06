/*
  The fixed strip above the navbar, carried over from richardloricco.com.
  On the personal site it is a newspaper dateline; here it holds the
  practice's plain facts: who, where, and how to reach it.
*/

const EMAIL = "admin@loriccoandco.com";

export default function Dateline() {
  return (
    <div className="dateline" role="region" aria-label="Practice details">
      <div className="dateline-inner">
        <span>
          LoRicco &amp; Co. LLC
          <span className="dateline-location">
            <span aria-hidden="true"> &middot; </span>New Haven, CT
          </span>
        </span>
        <span className="dateline-middle">Attorney &middot; MBA &middot; Software engineer</span>
        <a href={`mailto:${EMAIL}`} className="dateline-link">
          {EMAIL}
        </a>
      </div>
    </div>
  );
}
