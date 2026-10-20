"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faq } from "@/data/content";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-pad py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Appear>
          <SectionTag>Вопросы</SectionTag>
        </Appear>
        <Appear delay={0.1}>
          <h2 className="mt-6 text-5xl tracking-tight md:text-6xl">Вопросы</h2>
        </Appear>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Appear key={item.question} delay={0.04 * i}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-base font-medium md:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg transition ${
                        isOpen
                          ? "bg-accent text-accent-fg"
                          : "bg-[#2a2a2a] text-white"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-muted md:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Appear>
            );
          })}
        </div>
      </div>
    </section>
  );
}
