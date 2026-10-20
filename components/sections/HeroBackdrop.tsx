"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type HeroBackdropProps = {
  /** When false, only a light mesh overlay is shown (no planet). */
  showObject?: boolean;
};

export function HeroBackdrop({ showObject = true }: HeroBackdropProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden bg-black">
      {/* Full-bleed video background (as before) */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-[center_70%] min-[1200px]:object-[center_75%]"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/about-bg.png"
      >
        <source src="/assets/video/hero-ball.mp4" type="video/mp4" />
      </video>

      {showObject ? (
        /* Anchored to first-viewport bottom so it peeks (hero can be taller than 100svh) */
        <div className="absolute inset-x-0 top-[calc(100svh-20vh)] flex justify-center sm:top-[calc(100svh-22vh)] min-[1200px]:top-[calc(100svh-24vh)]">
          <motion.div
            className="relative h-[min(52vh,560px)] w-[min(92vw,700px)] sm:h-[min(56vh,620px)] sm:w-[min(75vw,760px)]"
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <Image
              src="/assets/images/hero-planet.webp"
              alt=""
              fill
              priority
              className="object-contain object-top"
              sizes="(max-width: 768px) 92vw, 760px"
            />
          </motion.div>
        </div>
      ) : (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/assets/images/mesh.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
      )}

      {/* Soft highlight near bottom peek */}
      {showObject ? (
        <div
          className="absolute left-1/2 top-[calc(100svh-6vh)] h-[70px] w-[240px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, transparent 70%)",
          }}
        />
      ) : null}

      {/* Light fades — keep object readable */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
    </div>
  );
}
