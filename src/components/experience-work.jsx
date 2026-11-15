"use client";

import React from "react";
import { useApp } from "@/lib/context";
import { BrutalReveal } from "./brutal-motion";

const badgeColors = [
  "bg-[#FFE600] text-black",
  "bg-[#00F0FF] text-black",
  "bg-[#A3E635] text-black",
  "bg-[#FF5C00] text-white",
  "bg-[#FF2A85] text-white",
];

const ExperienceWork = () => {
  const { t } = useApp();

  return (
    <section id="experience" className="py-12 flex flex-col gap-10">
      {/* Section Header */}
      <BrutalReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black dark:border-[#F4F0EA] pb-4">
          <div className="flex flex-col gap-2">
            <span className="brutal-tag bg-[#00F0FF] text-black border-black w-fit">
              {t.experience.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-[#F4F0EA]">
              {t.experience.title}
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold uppercase opacity-75">
            {t.experience.subtitle}
          </span>
        </div>
      </BrutalReveal>

      {/* Brutalist Experience List */}
      <div className="flex flex-col gap-6">
        {t.experience.items.map((exp, idx) => {
          const accent = badgeColors[idx % badgeColors.length];
          return (
            <BrutalReveal key={exp.id} delay={idx * 0.04} y={20}>
              <div className="brutal-box brutal-box-interactive bg-white dark:bg-[#171717] overflow-hidden">
                {/* Top Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b-3 border-black dark:border-[#F4F0EA] bg-[#F4F0EA] dark:bg-[#222]">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 font-mono text-sm font-black border-2 border-black shadow-[2px_2px_0px_0px_#000] ${accent}`}
                    >
                      #{exp.id}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-white dark:bg-black text-black dark:text-[#F4F0EA] border-2 border-black dark:border-[#F4F0EA] font-mono text-xs font-bold uppercase">
                      {exp.period}
                    </span>
                    <span
                      className={`px-3 py-1 font-mono text-xs font-black uppercase border-2 border-black ${
                        exp.type === "Full-time" || exp.type === "Penuh Waktu"
                          ? "bg-[#A3E635] text-black"
                          : "bg-[#FFE600] text-black"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black dark:text-[#F4F0EA]">
                    {exp.role}
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 bg-[#F4F0EA]/60 dark:bg-[#222]/60 border-2 border-black/20 dark:border-white/15 text-sm font-medium leading-relaxed"
                      >
                        <span className="w-2.5 h-2.5 mt-1.5 bg-[#FF5C00] border border-black flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BrutalReveal>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceWork;
