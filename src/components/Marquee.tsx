export default function Marquee() {
  return (
    <div className="marquee-container border-y border-[var(--border)]">
      <div className="marquee-content">
        {/* Duplicate text for seamless loop */}
        <span className="marquee-text">
          Strategic counsel — Trusted advocacy —{" "}
        </span>
        <span className="marquee-text">
          Strategic counsel — Trusted advocacy —{" "}
        </span>
        <span className="marquee-text">
          Strategic counsel — Trusted advocacy —{" "}
        </span>
        <span className="marquee-text">
          Strategic counsel — Trusted advocacy —{" "}
        </span>
      </div>
    </div>
  );
}
