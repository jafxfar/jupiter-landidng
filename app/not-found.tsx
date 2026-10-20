import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section
          id="hero"
          className="section-pad flex min-h-[70svh] flex-col items-center justify-center pb-16 pt-32 text-center"
        >
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
            404! Страница не найдена
          </h1>
          <p className="mt-4 font-[family-name:var(--font-playfair)] text-3xl italic text-white/80 md:text-5xl">
            Ошибка страницы
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-fg transition hover:brightness-110"
          >
            На главную
          </Link>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
