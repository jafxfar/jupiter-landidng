"use client";

import { awards } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

export function Awards() {
  return (
    <section id="awards" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Appear>
          <SectionTag>Награды</SectionTag>
        </Appear>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {awards.map((award, i) => (
            <Appear key={`${award.org}-${award.title}`} delay={0.05 * i}>
              <div className="grid gap-3 py-8 md:grid-cols-[180px_1fr_220px] md:items-center">
                <p className="text-sm text-muted">{award.org}</p>
                <h3 className="text-xl md:text-2xl">{award.title}</h3>
                <p className="text-sm text-muted md:text-right">{award.project}</p>
              </div>
            </Appear>
          ))}
        </div>
      </div>
    </section>
  );
}
