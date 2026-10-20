"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { clientLogos, hero, socials } from "@/data/content";
import { RevealText } from "@/components/motion/RevealText";
import { Marquee } from "@/components/motion/Marquee";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";

const socialIcons: Record<string, ReactNode> = {
  Facebook: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
      <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 4.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.2-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 9.5A2.5 2.5 0 1114.5 12 2.5 2.5 0 0112 9.5z" />
    </svg>
  ),
  Dribbble: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.6 5.4a8 8 0 01.9 3.1 18.3 18.3 0 00-5.4-.3c-.3-.7-.6-1.4-1-2.1a12.1 12.1 0 015.5-.7zM12 4a8 8 0 014.6 1.5 10.2 10.2 0 00-4.8.8A27 27 0 009.5 4.4 8 8 0 0112 4zM7.8 5.3A24 24 0 0110 7.5a18.4 18.4 0 00-5.3 3.6A8 8 0 017.8 5.3zM4.1 12.2a16.5 16.5 0 016-3.8c.3.7.6 1.4.8 2.1A22 22 0 004.7 14a8.1 8.1 0 01-.6-1.8zm1.6 4.1a20 20 0 016.5-3.4 14 14 0 011.4 5.7 8 8 0 01-7.9-2.3zm9.5 2.4a16 16 0 00-1.3-5.7 16.2 16.2 0 014.8.4 8 8 0 01-3.5 5.3z" />
    </svg>
  ),
  Behance: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
      <path d="M8.5 11.2c.9 0 1.5-.5 1.5-1.3S9.3 8.7 8.4 8.7H6.3v2.5h2.2zm-.2 4.4c1 0 1.7-.6 1.7-1.5s-.7-1.4-1.8-1.4H6.3v2.9h2zm6.9-1.7c0 .8.5 1.3 1.3 1.3.8 0 1.2-.4 1.2-1h1.7c0 1.7-1.2 2.8-3 2.8-1.9 0-3.1-1.3-3.1-3.2s1.2-3.3 3.1-3.3 2.9 1.2 2.9 3.1v.3h-4.1zm2.3-1.3c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2h2.4zM14 7.8h3.5V9H14V7.8zM22 4H2v16h20V4z" />
    </svg>
  ),
};

const categoryRows = [
  [hero.categories[0], hero.categories[1]],
  [hero.categories[2], hero.categories[3]],
] as const;

function ClientLogoRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {clientLogos.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={72}
          height={18}
          className="h-[14px] w-auto brightness-0 invert opacity-70 md:h-4"
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black"
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 pb-10 pt-[108px] md:pb-12 md:pt-[120px] min-[1200px]:px-10 min-[1200px]:pb-10">
        {/* Upper: left headline / right copy */}
        <div className="grid mt-auto grid-cols-1 gap-1 min-[1800px]:grid-cols-[1fr_minmax(340px,340px)] min-[1200px]:items-start min-[1200px]:justify-between min-[1200px]:gap-4">
          <div>
            <motion.h1
              className="bg-clip-text font-sans text-[clamp(3.25rem,14vw,10rem)] font-normal leading-[0.92] tracking-[-0.07em] text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(178deg, rgb(153, 153, 153) 19%, rgb(255, 255, 255) 76%)",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {hero.title}
            </motion.h1>
            <motion.h1
              className="bg-clip-text font-[family-name:var(--font-playfair)] text-[clamp(3.25rem,14vw,10rem)] font-normal italic leading-[1.15] tracking-[-0.05em] text-transparent sm:leading-[1.4]"
              style={{
                backgroundImage:
                  "linear-gradient(178deg, rgb(153, 153, 153) 19%, rgb(255, 255, 255) 76%)",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {hero.titleAccent}
            </motion.h1>
          </div>

          <motion.div
            className="min-[1800px]:justify-self-end mt-12"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.65 }}
          >
            <RevealText
              text={hero.subtitle}
              highlightWord={hero.highlightWord}
              className="max-w-[510px] text-base leading-relaxed md:text-[21px] md:leading-[33px]"
              delay={0.2}
            />

            <div className="mt-6 border-t border-white/15 pt-5 min-[1200px]:mt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm text-white transition hover:opacity-70"
                >
                  {hero.cta}
                  <span aria-hidden>→</span>
                </Link>
                <div className="flex items-center gap-[7px]">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/85 transition hover:border-accent hover:text-accent"
                    >
                      {socialIcons[s.label]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower band */}
        <div className="mt-10 flex flex-col gap-8 pb-14 pt-0 sm:mt-auto sm:pb-0 min-[1200px]:flex-row min-[1200px]:items-end min-[1200px]:justify-between min-[1200px]:gap-10 min-[1200px]:pt-6">
          <motion.div
            className="w-full max-w-[360px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <p className="font-sans text-base font-medium tracking-[-0.01em] text-white md:text-lg">
              {hero.stripLabel}
            </p>
            <div className="mt-3 border-t border-white/20 pt-3.5 md:mt-4 md:pt-4">
              <div className="grid grid-cols-[auto_auto] gap-x-6 gap-y-2 font-sans text-[15px] font-normal text-white/55 md:gap-x-8 md:gap-y-2.5 md:text-base">
                {categoryRows.map((row) => (
                  <div key={row.join("-")} className="contents">
                    <Link
                      href="/#service"
                      className="hover:text-white/80"
                    >
                      {row[0]}
                    </Link>
                    <Link
                      href="/#service"
                      className="hover:text-white/80"
                    >
                      /{row[1]}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <ClientLogoRow className="mt-6 hidden min-[1200px]:flex" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="w-full max-w-none sm:max-w-[240px] min-[1200px]:shrink-0"
          >
            <p className="mb-3 flex items-center justify-between text-sm min-[1200px]:mb-2.5">
              <span className="text-white/90">{hero.featuredLabel}</span>
              <span className="text-[#999999]">{hero.featuredCount}</span>
            </p>
            <Link
              href={hero.featuredHref}
              className="group relative block h-[148px] w-full overflow-hidden rounded-[16px] border border-white/10 bg-black/45 backdrop-blur-md sm:h-[148px]"
            >
              <Image
                src="/assets/images/phone-mockup.png"
                alt="Featured"
                fill
                className="object-cover object-[center_20%] transition duration-500 group-hover:scale-[1.04]"
                sizes="240px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#service"
        aria-label="Прокрутить вниз"
        className="absolute bottom-4 left-1/2 z-20 flex h-10 w-[98px] -translate-x-1/2 items-center justify-center rounded-full border border-accent/50 bg-black/25 backdrop-blur-sm sm:bottom-10 min-[1200px]:bottom-12"
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

      {/* <1200: full-width logo ticker */}
      <motion.div
        className="relative z-10 mt-auto border-t border-white/10 py-3.5 min-[1800px]:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
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
    </section>
  );
}
