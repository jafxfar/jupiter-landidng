"use client";

import {
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ value, suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });
  const [display, setDisplay] = useState(`0${suffix}`);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(`${Math.round(latest)}${suffix}`);
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return (
    <span ref={ref} className="relative inline-block">
      <span className={`invisible ${className}`} aria-hidden>
        {value}
        {suffix}
      </span>
      <span
        className={`absolute inset-0 ${className}`}
        style={{
          backgroundImage: "linear-gradient(180deg, #ffffff 0%, #999999 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {display}
      </span>
    </span>
  );
}
