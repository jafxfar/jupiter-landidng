"use client";

import { useState, type FormEvent } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { Appear } from "@/components/motion/Appear";

const companySizes = [
  "Только я",
  "2–10 человек",
  "11–50 человек",
  "51–200 человек",
  "200+ человек",
];

const serviceOptions = [
  "Айдентика",
  "UX/UI дизайн",
  "Веб-разработка",
  "Запуск и рост",
  "Полное продуктовое партнёрство",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Header />
      <main>
        <PageHero title="Давайте создадим" titleAccent="вместе" />

        <section id="content" className="section-pad py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <Appear>
              <h2 className="text-3xl tracking-tight md:text-4xl">
                Расскажите о проекте
              </h2>
            </Appear>
            <Appear delay={0.08}>
              <p className="mt-4 text-base text-muted">
                Пара деталей — и мы ответим в течение 1–2 рабочих дней.
              </p>
            </Appear>

            <Appear delay={0.12}>
              <form onSubmit={onSubmit} className="mt-12 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Имя</span>
                  <input
                    required
                    name="firstName"
                    placeholder="Азиз"
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Фамилия</span>
                  <input
                    required
                    name="lastName"
                    placeholder="Каримов"
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm text-muted">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.uz"
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Компания</span>
                  <select
                    required
                    name="company"
                    defaultValue=""
                    className="w-full appearance-none rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
                  >
                    <option value="" disabled>
                      Размер компании
                    </option>
                    {companySizes.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Услуги</span>
                  <select
                    required
                    name="services"
                    defaultValue=""
                    className="w-full appearance-none rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
                  >
                    <option value="" disabled>
                      Выберите услугу
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm text-muted">
                    О проекте
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Цели, сроки, ссылки…"
                    className="w-full resize-none rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-white/40"
                  />
                </label>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-fg transition hover:brightness-110"
                  >
                    {sent ? "Отправлено ✓" : "Отправить"}
                  </button>
                </div>
              </form>
            </Appear>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
