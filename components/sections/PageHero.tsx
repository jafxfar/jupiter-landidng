"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientLogos } from "@/data/content";
import { Marquee } from "@/components/motion/Marquee";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";

type PageHeroProps = {
  title: string;
  titleAccent: string;
  /** @deprecated Use showObject. Kept for call-site compat. */
  showVideo?: boolean;
  showObject?: boolean;
  compact?: boolean;
};

export function PageHero({
  title,
  titleAccent,
  showVideo,
  showObject,
  compact = false,
}: PageHeroProps) {
  const objectVisible = showObject ?? showVideo ?? true;

  return (
    <section
      id="hero"
      className={`relative flex flex-col overflow-hidden bg-black ${
        compact ? "min-h-[70svh]" : "min-h-[100svh]"
      }`}
    >
      <HeroBackdrop showObject={objectVisible} />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center px-6 pb-20 pt-32 text-center">
        <motion.h1
          className="font-sans text-[64px] font-normal leading-none tracking-[-0.06em] text-white md:text-[96px] md:tracking-[-0.08em] min-[1200px]:text-[112px]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.h1
          className="mt-1 bg-clip-text font-[family-name:var(--font-playfair)] text-[52px] font-normal italic leading-none tracking-[-0.04em] text-transparent md:text-[80px] min-[1200px]:text-[100px]"
          style={{
            backgroundImage:
              "linear-gradient(178deg, rgb(153, 153, 153) 19%, rgb(255, 255, 255) 76%)",
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {titleAccent}
        </motion.h1>
      </div>

      <motion.div
        className="relative z-10 border-t border-white/10 py-3.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Marquee className="opacity-70">
          {clientLogos.map((src) => (
            <div
              key={src}
              className="flex h-5 w-[110px] items-center justify-center px-3"
            >
              <Image
                src={src}
                alt=""
                width={92}
                height={20}
                className="h-5 w-auto brightness-0 invert opacity-80"
              />
            </div>
          ))}
        </Marquee>
      </motion.div>

      <motion.a
        href="#content"
        aria-label="Прокрутить вниз"
        className="absolute bottom-[56px] left-1/2 z-20 flex h-10 w-[98px] -translate-x-1/2 items-center justify-center rounded-full border border-accent/50 bg-black/25 backdrop-blur-sm"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 5.5L7 9.5L11 5.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </section>
  );
}
