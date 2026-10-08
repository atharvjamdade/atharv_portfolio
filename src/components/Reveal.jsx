import { useEffect, useState } from "react";
import { useInView } from "../hooks";

export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [settled, setSettled] = useState(false);

  /* drop the entrance delay once revealed so hover effects stay instant */
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setSettled(true), delay + 900);
    return () => clearTimeout(t);
  }, [inView, delay]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: settled ? "0ms" : `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
