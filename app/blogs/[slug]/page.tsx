import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogs, getBlog } from "@/data/blogs";
import { Appear } from "@/components/motion/Appear";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

async function BlogContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  return (
    <main>
      <section
        id="hero"
        className="section-pad relative overflow-hidden pb-10 pt-32 md:pt-40"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Appear>
            <p className="text-sm text-muted">{post.date}</p>
          </Appear>
          <Appear delay={0.08}>
            <h1 className="mt-4 text-4xl leading-none tracking-tight md:text-6xl">
              {post.title}
            </h1>
          </Appear>
          <Appear delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {post.dek}
            </p>
          </Appear>
        </div>
      </section>

      <section className="section-pad pb-8">
        <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-[28px] md:rounded-[40px]">
          <Image
            src={post.bannerImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <article id="content" className="section-pad py-16 md:py-24">
        <div className="mx-auto max-w-2xl space-y-14">
          {post.sections.map((section, i) => (
            <Appear key={section.title ?? i} delay={0.04 * i}>
              <section>
                {section.title ? (
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {section.title}
                  </h2>
                ) : null}
                <div className={section.title ? "mt-5 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 32)}
                      className="text-base leading-relaxed text-white/85 md:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-base text-white/85"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Appear>
          ))}

          <Appear>
            <div className="border-t border-white/10 pt-10">
              <Link
                href="/"
                className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-white/40"
              >
                ← На главную
              </Link>
            </div>
          </Appear>
        </div>
      </article>
    </main>
  );
}

export default function BlogPostPage({
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
        <BlogContent params={params} />
      </Suspense>
      <Footer />
    </>
  );
}
