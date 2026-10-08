import Reveal from "./Reveal";
import { useInView, useCountUp } from "../hooks";

function Stat({ to, decimals = 0, pad = 0, label, text, active }) {
  const v = useCountUp(to, active, 1500, decimals);
  const shown = text ? text(v) : String(v).padStart(pad, "0");
  return (
    <div className="stat">
      <div className="stat-num mono coral-text">{shown}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <section className="section container split" id="about">
      <Reveal className="label mono">01 / ABOUT</Reveal>
      <div className="split-body">
        <Reveal as="h2" className="h2" delay={60}>
          Curious by nature.
          <br />
          <span className="dim">Builder by choice.</span>
        </Reveal>

        <Reveal delay={140}>
          <p className="lead">
            A tech-driven engineering graduate turned PGDM candidate, I’m exploring
            how thoughtful technology and sharp business decisions can create
            meaningful growth.
          </p>
          <p className="body-muted">
            From shipping collaborative products to learning how organizations make
            decisions, I bring a practical engineering perspective, clean code, and
            the energy to take an idea from first sketch to working experience.
          </p>
        </Reveal>

        <div className="stats" ref={ref}>
          <Stat to={2026} label="PGDM · IMDR Pune" active={inView} text={(v) => `${Math.round(v)}–28`} />
          <Stat to={7.57} decimals={2} label="Engineering CGPA" active={inView} />
          <Stat to={3} pad={2} label="Languages spoken" active={inView} text={(v) => String(Math.round(v)).padStart(2, "0")} />
        </div>
      </div>
    </section>
  );
}
