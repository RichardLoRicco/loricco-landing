/*
  The fixed strip above the navbar, carried over from richardloricco.com.
  On the personal site it is a newspaper dateline; here it holds the
  practice's plain facts: credentials, who and where, and how to reach it.
  The credentials sit first so they stay visible when the middle drops on phones.
*/

const EMAIL = "admin@loriccoandco.com";

export default function Dateline() {
  return (
    <div className="dateline" role="region" aria-label="Practice details">
      <div className="dateline-inner">
        <span>
          Attorney &middot; MBA &middot;{" "}
          <span className="dateline-long">Software engineer</span>
          <span className="dateline-short">Engineer</span>
        </span>
        <span className="dateline-middle">LoRicco &amp; Co. LLC &middot; New Haven, CT</span>
        <a href={`mailto:${EMAIL}`} className="dateline-link">
          {EMAIL}
        </a>
      </div>
    </div>
  );
}
