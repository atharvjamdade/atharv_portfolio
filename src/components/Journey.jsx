import Reveal from "./Reveal";
import { useInView } from "../hooks";

export default function Journey() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section className="section container split journey" id="journey">
      <Reveal className="label mono">04 / JOURNEY</Reveal>
      <div className="split-body">
        <div className={`timeline ${inView ? "is-in" : ""}`} ref={ref}>
          <div className="t-line" />
          <div className="t-item" style={{ transitionDelay: "200ms" }}>
            <span className="t-dot" />
            <div className="t-year mono">2026–28</div>
            <div className="t-content">
              <h3>PGDM · Management</h3>
              <p>Institute of Management Development &amp; Research, Pune (IMDR)</p>
              <span className="t-meta mono">AICTE approved · NBA accredited</span>
            </div>
          </div>
          <div className="t-item" style={{ transitionDelay: "450ms" }}>
            <span className="t-dot" />
            <div className="t-year mono">2022–26</div>
            <div className="t-content">
              <h3>B.E. · Electronics &amp; Telecommunication</h3>
              <p>Sinhgad College of Engineering, Pune</p>
              <span className="t-meta mono">CGPA 7.57</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
