import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { getProject, projectDetails } from "@/data/projects";
import { getProjectLiveUrl } from "@/lib/projectLiveUrls";
import { Appear } from "@/components/motion/Appear";
import { SectionTag } from "@/components/ui/SectionTag";

export function generateStaticParams() {
  return projectDetails.map((p) => ({ slug: p.slug }));
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const liveUrl = getProjectLiveUrl(project.slug);

  return (
    <main>
      <section
        id="hero"
        className="section-pad relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40"
      >
        <div className="mx-auto max-w-6xl">
          <Appear>
            <p className="text-sm text-muted">
              {project.tags.join(" · ")}
            </p>
          </Appear>
          <Appear delay={0.08}>
            <h1 className="mt-4 max-w-4xl text-4xl leading-none tracking-tight sm:text-5xl md:text-7xl">
              {project.title}
            </h1>
          </Appear>
          <Appear delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.dek}
            </p>
          </Appear>
          {liveUrl ? (
            <Appear delay={0.16}>
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition hover:brightness-110"
              >
                Открыть продукт →
              </a>
            </Appear>
          ) : null}
        </div>
      </section>

      <section className="section-pad pb-8">
        <div className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden rounded-[32px] md:rounded-[48px]">
          <Image
            src={project.bannerImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section id="content" className="section-pad py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Appear>
            <SectionTag>Обзор</SectionTag>
          </Appear>
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-12">
            {project.overview.map((para) => (
              <Appear key={para.slice(0, 20)}>
                <p className="text-lg leading-relaxed text-white/85 md:text-xl">
                  {para}
                </p>
              </Appear>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Appear>
              <SectionTag>Подход</SectionTag>
            </Appear>
            <Appear delay={0.08}>
              <h2 className="mt-6 text-4xl tracking-tight md:text-5xl">
                {project.approachTitle}
              </h2>
            </Appear>
            <ul className="mt-8 space-y-4">
              {project.approachBullets.map((bullet, i) => (
                <Appear key={bullet} delay={0.06 * i}>
                  <li className="flex items-start gap-3 text-base text-white/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                </Appear>
              ))}
            </ul>
          </div>
          <Appear delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
              <Image
                src={project.heroImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </Appear>
        </div>
      </section>

      <section className="section-pad pb-8">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 px-6 py-14 md:rounded-[56px] md:px-14 md:py-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0), linear-gradient(180deg, #121212 0%, #050505 100%)",
            backgroundSize: "16px 16px, cover",
          }}
        >
          <Appear>
            <SectionTag>Адаптив</SectionTag>
          </Appear>
          <Appear delay={0.08}>
            <h2 className="mt-6 max-w-2xl text-4xl tracking-tight md:text-5xl">
              Создано для любого{" "}
              <span className="font-[family-name:var(--font-playfair)] italic">
                экрана
              </span>
            </h2>
          </Appear>
          <Appear delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.responsiveText}
            </p>
          </Appear>
          <Appear delay={0.16}>
            <Link
              href="/projects"
              className="mt-10 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-white/40"
            >
              ← Все проекты
            </Link>
          </Appear>
        </div>
      </section>

      <FAQ />
      <Contact />
    </main>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <main className="section-pad flex min-h-screen items-center pt-28">
            <p className="text-muted">Загрузка…</p>
          </main>
        }
      >
        <ProjectContent params={params} />
      </Suspense>
      <Footer />
    </>
  );
}
