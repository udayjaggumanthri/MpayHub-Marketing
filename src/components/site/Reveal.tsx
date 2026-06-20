import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  y = 16,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: visible ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}