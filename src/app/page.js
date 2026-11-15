"use client";

import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import ExperienceWork from "@/components/experience-work";
import Skill from "@/components/skill";
import FeaturedProject from "@/components/featured-project";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-8">
      <Hero />
      <About />
      <ExperienceWork />
      <Skill />
      <FeaturedProject />
    </main>
  );
}
