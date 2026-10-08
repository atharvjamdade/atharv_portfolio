import { useEffect, useRef } from "react";

const ArrowUR = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export default function Hero() {
  const orbitRef = useRef(null);

  /* gentle parallax on the orbit with the mouse */
  useEffect(() => {
    const el = orbitRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      el.style.setProperty("--px", `${x}px`);
      el.style.setProperty("--py", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero container" id="home">
      <div className="hero-left">
        <div className="status mono anim-1">
          <span className="dot" />
          <span>OPEN TO OPPORTUNITIES</span>
        </div>

        <h1 className="hero-title">
          <span className="line"><span className="line-inner anim-line" style={{ animationDelay: "0.1s" }}>Engineering</span></span>
          <span className="line"><span className="line-inner anim-line" style={{ animationDelay: "0.22s" }}>ideas</span></span>
          <span className="line coral"><span className="line-inner anim-line" style={{ animationDelay: "0.34s" }}>into impact.</span></span>
        </h1>

        <p className="hero-sub anim-2">
          I’m Atharv, an Electronics &amp; Telecommunication engineer and management
          student building at the intersection of technology, people, and possibility.
        </p>

        <div className="hero-cta anim-3">
          <a href="#work" className="btn-primary">
            Explore my work <ArrowUR />
          </a>
          <a href="#contact" className="btn-link">
            Let’s connect
            <span className="coral-text"><ArrowUR /></span>
          </a>
        </div>
      </div>

      <div className="hero-right" ref={orbitRef}>
        <div className="orbit-wrap anim-fade">
          <div className="ring ring-outer" />
          <div className="ring ring-inner">
            <span className="initials">AJ</span>
          </div>
          <div className="badge-02 mono">02</div>
        </div>
        <div className="loc mono">
          <div className="loc-top"><span className="dot" />Based in Maharashtra</div>
          <div className="loc-bottom">Available for the next challenge</div>
        </div>
      </div>
    </section>
  );
}
