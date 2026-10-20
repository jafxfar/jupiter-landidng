"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectDetail } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";

const PAGE_SIZE = 6;

export function ProjectsList({ projects }: { projects: ProjectDetail[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const scrollToSlug = useRef<string | null>(null);
  const shown = projects.slice(0, visible);
  const hasMore = visible < projects.length;
  const nextCount = Math.min(PAGE_SIZE, projects.length - visible);

  useEffect(() => {
    const slug = scrollToSlug.current;
    if (!slug) return;
    scrollToSlug.current = null;
    document
      .getElementById(`project-card-${slug}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [visible]);

  function loadMore() {
    const firstNew = projects[visible];
    if (firstNew) scrollToSlug.current = firstNew.slug;
    setVisible((n) => n + PAGE_SIZE);
  }

  return (
    <section
      id="content"
      className="flex flex-col gap-3 px-3 py-3 md:gap-3 md:px-6 md:py-3"
    >
      {shown.map((project) => (
        <div key={project.slug} id={`project-card-${project.slug}`}>
          <ProjectCard project={project} />
        </div>
      ))}

      {hasMore && (
        <div className="flex flex-col items-center gap-3 py-10 md:py-14">
          <p className="text-sm text-white/50">
            Показано {shown.length} из {projects.length}
          </p>
          <button
            type="button"
            onClick={loadMore}
            aria-label={`Показать ещё ${nextCount} из ${projects.length}`}
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/20 px-8 text-sm text-white transition hover:bg-white/10"
          >
            Показать ещё
          </button>
        </div>
      )}
    </section>
  );
}
