"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/data/content";
import { Appear } from "@/components/motion/Appear";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad pb-8 pt-16 sm:pt-24 md:pt-32">
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 px-6 py-12 md:rounded-[56px] md:px-12 md:py-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0), linear-gradient(180deg, #121212 0%, #050505 100%)",
          backgroundSize: "16px 16px, cover",
        }}
      >
        <Appear>
          <h2 className="text-4xl leading-none tracking-tight md:text-6xl">
            <span className="font-[family-name:var(--font-playfair)] italic">
              {contact.titleLead}
            </span>
            <br />
            <span className="font-sans">{contact.title}</span>
          </h2>
        </Appear>
        <Appear delay={0.1}>
          <h5 className="mt-6 text-lg text-white/85">{contact.formTitle}</h5>
        </Appear>

        <Appear delay={0.15}>
          <form onSubmit={onSubmit} className="mt-10 grid max-w-2xl gap-4">
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Ваше имя</span>
              <input
                required
                name="name"
                placeholder="Введите полное имя"
                className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Ваш email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="Введите email"
                className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">
                Подробнее о проекте
              </span>
              <textarea
                required
                name="project"
                rows={4}
                className="w-full resize-none rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition hover:brightness-110"
            >
              {sent ? "Отправлено ✓" : "Отправить"}
            </button>
          </form>
        </Appear>
      </div>
    </section>
  );
}
