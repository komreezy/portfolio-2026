export default function Marquee() {
  const text = "Creating thoughtful design — Building meaningful products — ";

  return (
    <div className="marquee-container border-y border-[var(--border)]">
      <div className="marquee-content">
        {/* Duplicate text for seamless loop */}
        <span className="marquee-text">
          Creating <em>thoughtful</em> design — Building <em>meaningful</em> products —{" "}
        </span>
        <span className="marquee-text">
          Creating <em>thoughtful</em> design — Building <em>meaningful</em> products —{" "}
        </span>
        <span className="marquee-text">
          Creating <em>thoughtful</em> design — Building <em>meaningful</em> products —{" "}
        </span>
        <span className="marquee-text">
          Creating <em>thoughtful</em> design — Building <em>meaningful</em> products —{" "}
        </span>
      </div>
    </div>
  );
}
