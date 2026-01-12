export default function Marquee() {
  return (
    <div className="marquee-container border-y border-[var(--border)]">
      <div className="marquee-content">
        {/* Duplicate text for seamless loop */}
        <span className="marquee-text">
          Fighting for the injured — Maximum compensation —{" "}
        </span>
        <span className="marquee-text">
          Fighting for the injured — Maximum compensation —{" "}
        </span>
        <span className="marquee-text">
          Fighting for the injured — Maximum compensation —{" "}
        </span>
        <span className="marquee-text">
          Fighting for the injured — Maximum compensation —{" "}
        </span>
      </div>
    </div>
  );
}
