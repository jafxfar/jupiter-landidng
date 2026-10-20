"use client";

import Image from "next/image";
import { team } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { Marquee } from "@/components/motion/Marquee";
import { SectionTag } from "@/components/ui/SectionTag";

function TeamCard({
  member,
}: {
  member: (typeof team)[number];
}) {
  return (
    <article className="w-[260px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-card md:w-[300px]">
      <div className="relative aspect-[4/5]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="300px"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 pt-16">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
            {member.tag}
          </span>
          <h3 className="mt-3 text-lg font-medium">{member.name}</h3>
          <p className="text-sm text-muted">{member.role}</p>
        </div>
      </div>
    </article>
  );
}

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <Appear>
          <SectionTag>Команда</SectionTag>
        </Appear>
        <Appear delay={0.1}>
          <h2 className="mt-6 text-5xl leading-none tracking-tight md:text-6xl">
            <span className="font-[family-name:var(--font-playfair)] italic">
              Наша
            </span>{" "}
            <span className="font-sans">команда</span>
          </h2>
        </Appear>
      </div>

      <Appear delay={0.15} className="mt-12">
        <Marquee speed="slow">
          {team.map((member) => (
            <TeamCard key={`${member.name}-${member.tag}`} member={member} />
          ))}
        </Marquee>
      </Appear>
    </section>
  );
}
