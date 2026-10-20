"use client";

import type { ExpertiseIcon } from "@/data/about";
import { Appear } from "@/components/motion/Appear";

type ExpertiseItem = {
  num: string;
  company: string;
  role: string;
  year: string;
  text: string;
  icon: ExpertiseIcon;
};

function ExpertiseIconSvg({ name }: { name: ExpertiseIcon }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "bulb") {
    return (
      <svg {...common}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />
      </svg>
    );
  }
  if (name === "tools") {
    return (
      <svg {...common}>
        <path d="m14.7 6.3 3 3" />
        <path d="M4 20 13 11" />
        <path d="m15 5 4 4" />
        <path d="M9 15l-5 5" />
        <path d="m18 8 2-2a2.1 2.1 0 0 0-3-3l-2 2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 19 19 5l-6 2-6 12 5-3Z" />
    </svg>
  );
}

export function ExpertiseCards({ items }: { items: ExpertiseItem[] }) {
  return (
    <div className="mt-14 grid gap-4 md:grid-cols-3">
      {items.map((item, i) => (
        <Appear key={item.company} delay={0.06 * i}>
          <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/12 bg-black">
            <div
              className="relative flex h-28 items-end justify-center pb-0"
              style={{
                background:
                  "radial-gradient(ellipse 120% 100% at 50% 0%, #2a2a2a 0%, #0a0a0a 70%)",
              }}
            >
              <div className="relative z-10 mb-[-18px] flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                <ExpertiseIconSvg name={item.icon} />
              </div>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-7 pt-8">
              <p className="text-sm text-muted">{item.num}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-medium tracking-tight">
                  {item.company}
                </h3>
                <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 text-xs text-white/80">
                  {item.year}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/75">{item.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          </article>
        </Appear>
      ))}
    </div>
  );
}
