import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const headlines = [
  "🚀 SkillSwap is now live!",
  "🔍 Find top-rated providers",
  "📅 Book sessions instantly",
  "💡 Learn and grow with experts",
];

const ScrollingHeadline = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollRange, setScrollRange] = useState({ from: 0, to: 0 });

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.offsetWidth;
      setScrollRange({ from: containerWidth, to: -textWidth });
    }
  }, [index]);

  const props = useSpring({
    from: { transform: `translateX(${scrollRange.from}px)` },
    to: { transform: `translateX(${scrollRange.to}px)` },
    reset: true,
    pause: paused,
    config: { duration: 18000 },
    onRest: () => {
      if (!paused) {
        setIndex((prev) => (prev + 1) % headlines.length);
      }
    },
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-[#f96c1f] text-white h-10 flex items-center text-sm font-medium"
    >
      <animated.div
        ref={textRef}
        style={props}
        className="absolute whitespace-nowrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {headlines[index]}
      </animated.div>
    </div>
  );
};

export default ScrollingHeadline;
