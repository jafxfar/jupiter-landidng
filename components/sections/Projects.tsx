"use client";

import Link from "next/link";
import { projects } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-3 px-3 py-3 md:gap-3 md:px-6 md:py-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      <Appear>
        <div className="flex justify-center py-10 md:py-14">
          <Link
            href="/projects"
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/20 px-8 text-sm text-white transition hover:bg-white/10"
          >
            Все проекты
          </Link>
        </div>
      </Appear>
    </section>
  );
}
