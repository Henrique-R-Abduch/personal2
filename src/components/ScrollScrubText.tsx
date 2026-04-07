import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollScrubTextProps = {
  text: string;
  className?: string;
  start?: string;
  end?: string;
};

export const ScrollScrubText: React.FC<ScrollScrubTextProps> = ({
  text,
  className = "",
  start = "top 80%",
  end = "bottom 40%",
}) => {
  const rootRef = useRef<HTMLHeadingElement | null>(null);

  const words = useMemo(() => text.split(" "), [text]);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const spans = el.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        color: "#FFFFFF",
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: 1,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [start, end, text]);

  return (
    <h2
      ref={rootRef}
      className={className}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block will-change-[color]"
          style={{ color: "#ffffff26" }}
        >
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
};