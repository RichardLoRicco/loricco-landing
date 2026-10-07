import RunningHead, { DatelineCredentials } from "./RunningHead";

/*
  The fixed strip above the navbar, carried over from richardloricco.com.
  On the personal site it is a newspaper dateline; here it holds the
  practice's plain facts: credentials, who and where, and how to reach it.
  The credentials sit first so they stay visible when the middle drops on phones.
  The middle cell is a running head that follows the section being read; on
  phones, where the middle is hidden, the left cell takes it over.
*/

const EMAIL = "admin@loriccoandco.com";

export default function Dateline() {
  return (
    <div className="dateline" role="region" aria-label="Practice details">
      <div className="dateline-inner">
        <DatelineCredentials />
        <RunningHead />
        <a href={`mailto:${EMAIL}`} className="dateline-link">
          {EMAIL}
        </a>
      </div>
    </div>
  );
}
