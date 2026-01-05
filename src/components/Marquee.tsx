export default function Marquee() {
  return (
    <div className="marquee-container border-y border-[var(--border)]">
      <div className="marquee-content">
        {/* Duplicate text for seamless loop */}
        <span className="marquee-text">
          Strategic <em>counsel</em> — Trusted <em>advocacy</em> —{" "}
        </span>
        <span className="marquee-text">
          Strategic <em>counsel</em> — Trusted <em>advocacy</em> —{" "}
        </span>
        <span className="marquee-text">
          Strategic <em>counsel</em> — Trusted <em>advocacy</em> —{" "}
        </span>
        <span className="marquee-text">
          Strategic <em>counsel</em> — Trusted <em>advocacy</em> —{" "}
        </span>
      </div>
    </div>
  );
}
