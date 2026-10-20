"use client";

import { about } from "@/data/content";
import { CountUp } from "@/components/motion/CountUp";
import { RevealText } from "@/components/motion/RevealText";
import { SectionTag } from "@/components/ui/SectionTag";

export function About() {
  return (
    <section id="about" className="section-pad pb-0 pt-12 sm:pt-16 md:pt-24">
      <div className="relative mx-auto flex max-w-[1216px] flex-col gap-12 overflow-hidden rounded-b-[32px] pb-16 sm:gap-16 sm:rounded-b-[56px] sm:pb-[120px] md:gap-20">
        <div className="flex flex-col items-center">
          <SectionTag>{about.tag}</SectionTag>
          <div className="mt-8 w-full max-w-[415px]">
            <RevealText
              text={about.text}
              variant="color"
              className="text-center text-2xl font-medium leading-[30px] tracking-tight"
            />
          </div>
        </div>

        <div className="relative px-1 md:px-0">
          <div
            className="pointer-events-none absolute inset-x-[-100px] -top-8 bottom-0 -z-0 opacity-50"
            style={{
              backgroundImage: "url(/assets/images/dot-pattern.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 grid gap-10 md:grid-cols-3 md:gap-6">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[200px] flex-col justify-center gap-12 text-center md:text-left"
              >
                <div>
                  <p className="text-base leading-6 text-[#999999]">
                    {stat.label}
                  </p>
                  <div className="mt-3 h-px w-full bg-[#2F2F2F]" />
                </div>
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-[72px] font-medium leading-none tracking-[-0.05em] md:text-[96px] md:leading-[96px] md:tracking-[-0.053em]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
