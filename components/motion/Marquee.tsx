"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: "normal" | "slow";
  className?: string;
  reverse?: boolean;
};

export function Marquee({
  children,
  speed = "normal",
  className = "",
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden mask-fade-x ${className}`}>
      <div
        className={`flex w-max ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0 items-stretch gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 items-stretch gap-4 pr-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
