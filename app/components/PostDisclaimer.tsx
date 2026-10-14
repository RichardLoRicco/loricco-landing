/*
  Rendered by the post template after the body on every post, so a draft can
  never ship without it (the generator rejects a body that repeats it).
  Attorney-advertising posture: the blog is general information about how I
  work, not legal advice and not an offer to represent anyone.
*/
export default function PostDisclaimer() {
  return (
    <p className="post-disclaimer marginalia" style={{ textTransform: "none", letterSpacing: 0 }}>
      These posts are general information about how I work and what I have
      read, not legal advice for any particular situation, and reading them
      does not make you a client. If something here applies to your firm or
      business, write to me and we can talk about it.
    </p>
  );
}
