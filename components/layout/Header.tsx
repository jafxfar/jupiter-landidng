"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black via-black/70 to-transparent px-5 py-5 md:px-8">
        <div className="relative mx-auto flex w-full max-w-[1800px] items-center justify-between">
          <Link
            href="/"
            className="relative z-50 block shrink-0"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/assets/logos/logo.svg"
              alt="Jupiter"
              width={160}
              height={54}
              className="h-10 w-auto min-[1200px]:h-12"
              priority
            />
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur-md min-[1200px]:flex"
            aria-label="Основная навигация"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-white/85 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className={`relative z-50 hidden shrink-0 items-center rounded-full bg-white font-medium text-black transition hover:bg-white/90 min-[1200px]:inline-flex ${
              isHome
                ? "gap-2 px-5 py-2.5 text-sm"
                : "gap-2.5 px-8 py-4 text-base"
            }`}
          >
            Связаться с нами
            <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] min-[1200px]:hidden"
          >
            <motion.span
              className="block h-[1.5px] w-6 bg-white"
              animate={open ? { rotate: 45, y: 3.75 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35 }}
            />
            <motion.span
              className="block h-[1.5px] w-6 bg-white"
              animate={open ? { rotate: -45, y: -3.75 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35 }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-black px-6 pb-10 pt-28 min-[1200px]:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav className="flex flex-1 flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-4xl font-normal tracking-tight text-white md:text-5xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-medium text-black transition hover:bg-white/90"
              >
                Связаться с нами
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
