"use client";

import Image from "next/image";
import Link from "next/link";
import { pricing } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Appear>
          <SectionTag>{pricing.tag}</SectionTag>
        </Appear>
        <Appear delay={0.1}>
          <h2 className="mt-6 text-3xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="font-sans">{pricing.titleLead}</span>
            <br />
            <span className="font-[family-name:var(--font-playfair)] italic">
              {pricing.title}
            </span>
          </h2>
        </Appear>
        <Appear delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {pricing.description}
          </p>
        </Appear>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <Appear key={plan.name} delay={0.08 * i}>
              <article
                className={`relative flex h-full flex-col rounded-[32px] border p-6 md:p-8 ${
                  plan.popular
                    ? "border-white/30 bg-white/[0.07]"
                    : "border-white/10 bg-card"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-muted">{plan.num}</span>
                  {plan.popular && (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg">
                      Популярный
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-medium">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.subtitle}</p>
                <div className="mt-8">
                  <p className="text-4xl tracking-tight">{plan.price}</p>
                  <p className="mt-1 text-sm text-muted">{plan.period}</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-accent hover:text-accent"
                >
                  Начать →
                </Link>
                <p className="mt-8 text-xs uppercase tracking-wider text-muted">
                  Plan Detail
                </p>
                <ul className="mt-4 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm leading-relaxed text-white/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted">{plan.timeline}</p>
              </article>
            </Appear>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pricing.quotes.map((quote, i) => (
            <Appear key={quote.name} delay={0.1 * i}>
              <blockquote className="rounded-[28px] border border-white/10 bg-card p-6 md:p-8">
                <p className="text-base leading-relaxed text-white/90">
                  {quote.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={quote.avatar}
                    alt={quote.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{quote.name}</p>
                    <p className="text-xs text-muted">{quote.role}</p>
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
