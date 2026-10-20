"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RevealTextProps = {
  text: string;
  className?: string;
  highlightWord?: string;
  delay?: number;
  /** "fade" = opacity/y stagger (hero). "color" = gray→white scroll reveal (about). */
  variant?: "fade" | "color";
};

function ColorWord({
  word,
  index,
  total,
  progress,
  className,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  className: string;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 2.5) / total);
  const color = useTransform(
    progress,
    [start, end],
    ["#808080", "#ffffff"],
  );

  return (
    <motion.span className={className} style={{ color }}>
      {word}
    </motion.span>
  );
}

export function RevealText({
  text,
  className = "",
  highlightWord,
  delay = 0,
  variant = "fade",
}: RevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [mounted, setMounted] = useState(false);
  const words = text.split(" ");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.45"],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (variant === "color") {
    return (
      <p ref={ref} className={className} aria-label={text}>
        {words.map((word, i) => {
          const wordClass = "inline-block mr-[0.28em]";
          if (!mounted) {
            return (
              <span
                key={`${word}-${i}`}
                className={wordClass}
                style={{ color: "#808080" }}
              >
                {word}
              </span>
            );
          }
          return (
            <ColorWord
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              className={wordClass}
            />
          );
        })}
      </p>
    );
  }

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const isHighlight =
          highlightWord &&
          word.replace(/[.,—–]/g, "").toLowerCase() ===
            highlightWord.toLowerCase();
        const wordClass = `inline-block mr-[0.3em] ${
          isHighlight ? "text-white" : "text-muted"
        }`;

        if (!mounted) {
          return (
            <span key={`${word}-${i}`} className={wordClass}>
              {word}
            </span>
          );
        }

        return (
          <motion.span
            key={`${word}-${i}`}
            className={wordClass}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.45,
              delay: delay + i * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
