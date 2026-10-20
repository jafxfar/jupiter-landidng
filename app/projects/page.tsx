"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { ProjectsList } from "@/components/sections/ProjectsList";
import { projectDetails } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Избранные" titleAccent="проекты" />
        <ProjectsList projects={projectDetails} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
