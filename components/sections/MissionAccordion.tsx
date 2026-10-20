"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { MissionIcon } from "@/data/about";

type MissionCard = {
  num: string;
  title: string;
  description: string;
  price: string;
  icon: MissionIcon;
};

function MissionIconSvg({ name }: { name: MissionIcon }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "layers") {
    return (
      <svg {...common}>
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 12 10 5 10-5" />
        <path d="m2 17 10 5 10-5" />
      </svg>
    );
  }
  if (name === "pen") {
    return (
      <svg {...common}>
        <path d="M12 19c3 0 5-2 5-5V4l-5 3-5-3v10c0 3 2 5 5 5Z" />
        <path d="M12 22v-3" />
      </svg>
    );
  }
  if (name === "nodes") {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8 7.5 10.5 15M16 7.5 13.5 15" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19V11" />
    </svg>
  );
}

function Chevron({ up }: { up?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={up ? "rotate-180" : undefined}
    >
      <path
        d="M3 5.5 7 9.5 11 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MissionAccordion({ cards }: { cards: MissionCard[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="overflow-hidden rounded-[32px] border border-white/12 md:rounded-[40px]">
        {cards.map((card, i) => {
          const isOpen = active === i;
          return (
            <div
              key={card.num}
              className={
                i < cards.length - 1 ? "border-b border-white/12" : undefined
              }
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="w-full text-left"
              >
                <AnimatePresence initial={false} mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      className="relative bg-[#121212] px-6 py-8 md:px-10 md:py-10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-white">
                          <MissionIconSvg name={card.icon} />
                        </div>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
                          <Chevron up />
                        </span>
                      </div>
                      <p className="mt-6 text-sm text-muted">{card.num}</p>
                      <h3 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
                        {card.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                        {card.description}
                      </p>
                      <span className="mt-8 inline-flex rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90">
                        {card.price}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="closed"
                      className="flex items-center gap-4 px-6 py-7 md:gap-6 md:px-10 md:py-8"
                    >
                      <span className="text-white/90">
                        <MissionIconSvg name={card.icon} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted">{card.num}</p>
                        <h3 className="mt-1 text-2xl font-medium tracking-tight md:text-3xl">
                          {card.title}
                        </h3>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70">
                        <Chevron />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
