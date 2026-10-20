"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type AppearProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
};

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export function Appear({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  ...props
}: AppearProps) {
  const [mounted, setMounted] = useState(false);
  const offset = offsets[direction];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
