"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { getProjectLiveUrl } from "@/lib/projectLiveUrls";

export type ProjectCardItem = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  statuses: { label: string; note: string }[];
  image: string;
};

function Cover({
  src,
  alt,
  scale,
}: {
  src: string;
  alt: string;
  scale: MotionValue<number>;
}) {
  return (
    <motion.div className="absolute inset-0 origin-center" style={{ scale }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </motion.div>
  );
}

export function ProjectCard({ project }: { project: ProjectCardItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const coverScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.15, 1, 1.15],
  );
  const liveUrl = getProjectLiveUrl(project.slug);

  return (
    <div ref={ref} className="w-full">
      <motion.div
        style={{ scale: cardScale }}
        className="origin-center will-change-transform"
      >
        <Link
          href={`/projects/${project.slug}`}
          className="relative flex min-h-[520px] w-full flex-col overflow-hidden rounded-[28px] sm:min-h-[603px] sm:rounded-[40px] md:min-h-[100svh] md:rounded-[56px]"
        >
          <Cover src={project.image} alt={project.title} scale={coverScale} />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex flex-1 flex-col justify-between px-3.5 pb-[18px] pt-6 sm:pt-8 md:px-6 md:pb-14 md:pt-14">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex flex-col gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="w-fit rounded-full bg-white/10 px-3 py-1.5 text-xs text-[#EEEEEE] backdrop-blur-sm md:px-6 md:py-2.5 md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="hidden flex-col gap-0 md:flex">
                {project.statuses.map((status, i) => (
                  <div key={`${status.label}-${status.note}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#EEEEEE]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#EEEEEE]">
                          {status.label}
                        </p>
                        <p className="text-sm text-white/50">{status.note}</p>
                      </div>
                    </div>
                    {i < project.statuses.length - 1 && (
                      <div className="my-3 h-px w-full bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-3xl px-0 pt-12 md:px-8 md:pt-32"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(153,153,153,0.1) 50%, rgba(0,0,0,0.4) 100%)",
              }}
            >
              <p className="max-w-xl text-sm leading-relaxed text-[#EEEEEE] sm:text-base">
                {project.description}
              </p>
              <h2 className="mt-3 text-[32px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[41px] md:text-[51px] md:leading-[52px] md:tracking-[-0.038em]">
                {project.title}
              </h2>
              {liveUrl ? (
                <span
                  role="link"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(liveUrl, "_blank", "noopener,noreferrer");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(liveUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="mt-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Открыть демо →
                </span>
              ) : null}
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
