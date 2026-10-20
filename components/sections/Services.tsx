"use client";

import Image from "next/image";
import { services } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

const serviceImages = [
  "/assets/images/service-1.png",
  "/assets/images/service-2.png",
  "/assets/images/service-3.png",
  "/assets/images/service-4.png",
];

export function Services() {
  return (
    <section id="service" className="section-pad relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Appear>
          <SectionTag>{services.tag}</SectionTag>
        </Appear>

        <Appear delay={0.1}>
          <h2 className="mt-6 text-3xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="font-[family-name:var(--font-playfair)] italic">
              {services.titleLead}
            </span>{" "}
            <span className="font-sans">{services.title}</span>
          </h2>
        </Appear>

        <Appear delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {services.description}
          </p>
        </Appear>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.items.map((item, i) => (
            <Appear key={item.num} delay={0.08 * i}>
              <article className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-card p-6 transition duration-500 hover:border-white/20 md:p-8">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                </div>
                <div className="relative flex items-start justify-between gap-4">
                  <span className="text-sm text-muted">{item.num}</span>
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white/5">
                    <Image
                      src={serviceImages[i]}
                      alt=""
                      fill
                      className="object-contain p-2 transition duration-500 group-hover:scale-110"
                      sizes="64px"
                    />
                  </div>
                </div>
                <h3 className="relative mt-10 text-xl font-medium md:text-2xl">
                  {item.title}
                </h3>
                <p className="relative mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </article>
            </Appear>
          ))}
        </div>
      </div>
    </section>
  );
}
