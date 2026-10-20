"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { blogs } from "@/data/blogs";
import { Appear } from "@/components/motion/Appear";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Блог" titleAccent="идеи" />

        <section id="content" className="section-pad py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <Appear key={post.slug} delay={0.05 * i}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-card transition duration-500 hover:border-white/25"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm text-muted">{post.date}</p>
                    <h2 className="mt-3 text-xl font-medium tracking-tight md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                      {post.dek}
                    </p>
                  </div>
                </Link>
              </Appear>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
