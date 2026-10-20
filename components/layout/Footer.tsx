"use client";

import Link from "next/link";
import { contact, footerSocials, navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="section-pad relative overflow-hidden border-t border-white/10 pb-10 pt-16 md:pt-20">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
        <div>
          <p className="mb-4 text-sm text-muted">Адрес</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-white/90 md:text-base">
            {contact.address}
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm text-muted">Контакты</p>
          <a
            href={`mailto:${contact.email}`}
            className="block text-base text-white/90 transition hover:text-white md:text-lg"
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="mt-3 block text-base text-white/90 transition hover:text-white md:text-lg"
          >
            {contact.phone}
          </a>
        </div>
        <div>
          <p className="mb-4 text-sm text-muted">Ссылки</p>
          <div className="flex flex-col gap-3">
            {navLinks
              .filter((l) => l.href !== "/#service")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium tracking-tight text-white/90 transition hover:text-white md:text-xl"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm text-muted">Соцсети</p>
          <div className="flex flex-col gap-3">
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium tracking-tight text-white/90 transition hover:text-white md:text-xl"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none relative z-0 mx-auto mt-10 max-w-6xl select-none overflow-hidden md:mt-14"
        aria-hidden
      >
        <p className="whitespace-nowrap text-center font-[family-name:var(--font-playfair)] text-[18vw] font-normal italic leading-none tracking-[-0.04em] text-white/[0.06] md:text-[12rem]">
          Jupiter
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-6 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted md:flex-row md:items-center">
        <p>© 2026 Jupiter. All Right Reserved</p>
        <a
          href="#hero"
          className="text-sm text-white/80 transition hover:text-white"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}
