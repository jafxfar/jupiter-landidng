"use client";

import { process } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

export function Process() {
  return (
    <section id="process" className="section-pad py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Appear>
          <SectionTag>{process.tag}</SectionTag>
        </Appear>

        <Appear delay={0.1}>
          <h2 className="mt-6 text-3xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="font-[family-name:var(--font-playfair)] italic">
              {process.titleLead}
            </span>
            <br />
            <span className="font-sans">{process.title}</span>
          </h2>
        </Appear>

        <Appear delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {process.description}
          </p>
        </Appear>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Appear key={step.num} delay={0.08 * i}>
              <article className="h-full rounded-[28px] border border-white/10 bg-card p-6">
                <span className="text-sm text-muted">{step.num}</span>
                <h3 className="mt-8 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            </Appear>
          ))}
        </div>
      </div>
    </section>
  );
}
