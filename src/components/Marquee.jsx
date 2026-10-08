const ITEMS = ["SOFTWARE DEVELOPMENT", "PRODUCT THINKING", "TEAM LEADERSHIP", "BUSINESS & TECH"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k}>
            {row.map((t, i) => (
              <span className="marquee-item mono" key={i}>
                {t}
                <span className="star">✱</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
