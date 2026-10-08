import Reveal from "./Reveal";

const TOOLS = [
  { t: "Java", hi: true },
  { t: "JavaFX" },
  { t: "Flutter" },
  { t: "Dart" },
  { t: "SQL", hi: true, accent: true },
  { t: "Git / GitLab" },
  { t: "Postman" },
  { t: "Firebase" },
  { t: "Problem solving", hi: true },
  { t: "Project leadership" },
  { t: "Team collaboration" },
  { t: "Clean coding" },
];

export default function Toolkit() {
  return (
    <section className="section container split toolkit" id="toolkit">
      <Reveal className="label mono">03 / TOOLKIT</Reveal>
      <div className="split-body">
        <Reveal as="h2" className="h2" delay={60}>
          Tools I use
          <br />
          <span className="dim">to make things real.</span>
        </Reveal>
        <div className="chips">
          {TOOLS.map((c, i) => (
            <Reveal
              key={c.t}
              as="span"
              delay={120 + i * 45}
              className={`chip ${c.hi ? "hi" : ""} ${c.accent ? "accent" : ""}`}
            >
              {c.t}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
