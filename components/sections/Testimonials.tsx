"use client";

import Image from "next/image";
import { testimonials } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Appear>
          <SectionTag>{testimonials.tag}</SectionTag>
        </Appear>
        <Appear delay={0.1}>
          <h2 className="mt-6 text-3xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="font-[family-name:var(--font-playfair)] italic">
              {testimonials.titleLead}
            </span>{" "}
            <span className="font-sans">{testimonials.title}</span>
          </h2>
        </Appear>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {testimonials.items.map((item, i) => (
            <Appear key={item.name} delay={0.08 * i}>
              <blockquote className="h-full rounded-[32px] border border-white/10 bg-card p-7 md:p-10">
                <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                  {item.text}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                </div>
              </blockquote>
            </Appear>
          ))}
        </div>
      </div>
    </section>
  );
}
