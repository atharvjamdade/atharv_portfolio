import { useState } from "react";
import Reveal from "./Reveal";

const EMAIL = "atharv02j@gmail.com";

const Mail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
const Phone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
);
const Linkedin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h4v12H3zM5 3a2 2 0 110 4 2 2 0 010-4zM10 9h4v2c.8-1.4 2.2-2.2 4-2.2 3 0 4 2 4 5V21h-4v-6c0-1.5-.6-2.4-2-2.4S14 13.5 14 15v6h-4z" /></svg>
);
const Pin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
const Send = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3L3 10.5l7 3 3 7z" /><path d="M21 3L10 13.5" /></svg>
);
const ArrowUR = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-left">
          <Reveal className="label mono">05 / SAY HELLO</Reveal>
          <Reveal as="h2" className="h2 contact-title" delay={80}>
            Have an idea?
            <br />
            <span className="coral-text">Let’s make it happen.</span>
          </Reveal>
          <Reveal as="p" className="body-muted contact-sub" delay={160}>
            I’m open to conversations around software, product, and opportunities
            where technology meets business.
          </Reveal>

          <Reveal as="ul" className="contact-list" delay={240}>
            <li><span className="coral-text"><Mail /></span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><span className="coral-text"><Phone /></span><a href="tel:+917020213238">+91 70202 13238</a></li>
            <li>
              <span className="coral-text"><Linkedin /></span>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn <span className="coral-text sm-arrow"><ArrowUR /></span>
              </a>
            </li>
            <li><span className="coral-text"><Pin /></span><span>Wai, Satara, Maharashtra</span></li>
          </Reveal>
        </div>

        <Reveal className="form-card" delay={120}>
          <form onSubmit={onSubmit}>
            <label className="field">
              <span className="mono">Your name</span>
              <input name="name" value={form.name} onChange={onChange} placeholder="Jane Smith" required />
            </label>
            <label className="field">
              <span className="mono">Email address</span>
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" required />
            </label>
            <label className="field">
              <span className="mono">Your message</span>
              <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder="Tell me a little about your idea..." required />
            </label>
            <button type="submit" className="btn-send">
              {sent ? "Opening your mail app…" : "Send message"} <Send />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
