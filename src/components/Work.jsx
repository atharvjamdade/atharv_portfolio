import Reveal from "./Reveal";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const PROJECTS = [
  { n: "01", tag: "E-COMMERCE", title: ["Cloth", "Sync"], name: "Cloth Sync", meta: "Web application", cls: "p1 wide", href: "#" },
  { n: "02", tag: "AI / API", title: ["AI", "Chat", "Bot"], name: "AI Chat Bot", meta: "Java · JavaFX", cls: "p2 wide", href: "#" },
  { n: "03", tag: "INNOVATION", title: ["Wireless", "EV", "Charging"], name: "Wireless EV Charging", meta: "Core engineering", cls: "p3", href: "#" },
  { n: "04", tag: "MOBILE UI", title: ["Netflix", "UI"], name: "Netflix UI", meta: "Flutter · Dart", cls: "p4", href: "#" },
  { n: "05", tag: "PRODUCT BUILD", title: ["Quiz", "App"], name: "Quiz App", meta: "Flutter · Dart", cls: "p5", href: "#" },
];

export default function Work() {
  return (
    <section className="section container" id="work">
      <div className="work-head">
        <Reveal className="label mono">02 / SELECTED WORK</Reveal>
        <Reveal className="work-tag" delay={80}>Small projects, big curiosity.</Reveal>
      </div>

      <div className="grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.n} delay={i * 90} className={`card ${p.cls}`}>
            <a href={p.href} className="card-link" aria-label={p.name}>
              <div className="card-top">
                <span className="card-num mono">{p.n}</span>
                <span className="card-tag mono">{p.tag}</span>
                <h3 className="card-title">
                  {p.title.map((t, k) => (
                    <span key={k}>{t}</span>
                  ))}
                </h3>
              </div>
              <div className="card-foot">
                <div>
                  <div className="card-name">{p.name}</div>
                  <div className="card-meta">{p.meta}</div>
                </div>
                <span className="card-arrow"><Arrow /></span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
