"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Team } from "@/components/sections/Team";
import { MissionAccordion } from "@/components/sections/MissionAccordion";
import { ExpertiseCards } from "@/components/sections/ExpertiseCards";
import { aboutPage } from "@/data/about";
import { CountUp } from "@/components/motion/CountUp";
import { RevealText } from "@/components/motion/RevealText";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

export default function AboutPage() {
  const { hero, intro, stats, passionBadge, mission, expertise } = aboutPage;

  return (
    <>
      <Header />
      <main>
        <PageHero title={hero.title} titleAccent={hero.titleAccent} />

        <section id="content" className="section-pad pb-0 pt-20 md:pt-28">
          <div className="relative mx-auto flex max-w-[1216px] flex-col gap-16 overflow-hidden rounded-b-[32px] pb-10 sm:rounded-b-[56px] sm:pb-16 md:gap-20">
            <div className="flex flex-col items-center">
              <SectionTag>О нас</SectionTag>
              <div className="mt-8 flex w-full max-w-[560px] flex-col gap-5">
                {intro.map((text) => (
                  <RevealText
                    key={text.slice(0, 24)}
                    text={text}
                    variant="color"
                    className="text-center text-xl font-medium leading-[1.35] tracking-tight md:text-2xl md:leading-[30px]"
                  />
                ))}
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
                {stats.map((stat) => (
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

            <div className="relative z-10 flex justify-center md:justify-end">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm text-white/90 backdrop-blur-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M8 4.5v3.2L10 9.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                {passionBadge}
              </span>
            </div>
          </div>
        </section>

        <section className="section-pad py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Appear>
              <h2 className="text-center text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
                <span className="font-[family-name:var(--font-playfair)] italic">
                  {mission.title}{" "}
                </span>
                <span className="font-sans">{mission.titleAccent}</span>
              </h2>
            </Appear>

            <Appear delay={0.1}>
              <div className="mt-12 md:mt-16">
                <MissionAccordion cards={mission.cards} />
              </div>
            </Appear>

            <Appear delay={0.16}>
              <div className="mt-10 flex justify-center md:mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-fg transition hover:brightness-110"
                >
                  {mission.cta}
                </Link>
              </div>
            </Appear>
          </div>
        </section>

        <section className="section-pad pb-8 pt-8 md:pt-16">
          <div className="mx-auto max-w-6xl">
            <Appear>
              <SectionTag>{expertise.tag}</SectionTag>
            </Appear>

            <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <Appear delay={0.08}>
                <h2 className="text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
                  <span className="font-[family-name:var(--font-playfair)] italic">
                    {expertise.title}
                  </span>
                  <br />
                  <span className="font-sans">{expertise.titleAccent}</span>
                </h2>
              </Appear>
              <Appear delay={0.12}>
                <p className="max-w-md text-base leading-relaxed text-muted lg:justify-self-end lg:text-right md:text-lg">
                  {expertise.dek}
                </p>
              </Appear>
            </div>

            <ExpertiseCards items={expertise.items} />
          </div>
        </section>

        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
