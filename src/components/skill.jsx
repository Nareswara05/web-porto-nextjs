"use client";

import React from "react";
import { useApp } from "@/lib/context";
import { FaHtml5, FaCss3, FaReact, FaPhp, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiFlutter,
  SiMysql,
  SiLaravel,
  SiTypescript,
  SiGo,
  SiPython,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BrutalReveal, BrutalStagger, BrutalItem } from "./brutal-motion";

const skills = [
  { logo: FaHtml5, title: "HTML", difficulty: "Advanced", accent: "bg-[#FF5C00] text-white" },
  { logo: FaCss3, title: "CSS", difficulty: "Advanced", accent: "bg-[#00F0FF] text-black" },
  { logo: IoLogoJavascript, title: "JavaScript", difficulty: "Advanced", accent: "bg-[#FFE600] text-black" },
  { logo: FaReact, title: "React JS", difficulty: "Advanced", accent: "bg-[#00F0FF] text-black" },
  { logo: SiNextdotjs, title: "Next JS", difficulty: "Advanced", accent: "bg-[#A3E635] text-black" },
  { logo: RiTailwindCssFill, title: "Tailwind CSS", difficulty: "Advanced", accent: "bg-[#00F0FF] text-black" },
  { logo: SiFlutter, title: "Flutter", difficulty: "Intermediate", accent: "bg-[#00F0FF] text-black" },
  { logo: FaPhp, title: "PHP", difficulty: "Intermediate", accent: "bg-[#FF2A85] text-white" },
  { logo: SiLaravel, title: "Laravel", difficulty: "Intermediate", accent: "bg-[#FF5C00] text-white" },
  { logo: SiMysql, title: "MySQL", difficulty: "Intermediate", accent: "bg-[#FFE600] text-black" },
  { logo: SiTypescript, title: "TypeScript", difficulty: "Intermediate", accent: "bg-[#00F0FF] text-black" },
  { logo: FaJava, title: "Java", difficulty: "Intermediate", accent: "bg-[#FF5C00] text-white" },
  { logo: SiGo, title: "Golang", difficulty: "Intermediate", accent: "bg-[#00F0FF] text-black" },
  { logo: SiPython, title: "Python", difficulty: "Intermediate", accent: "bg-[#FFE600] text-black" },
];

const Skill = () => {
  const { t } = useApp();

  const advanced = skills.filter((s) => s.difficulty === "Advanced");
  const intermediate = skills.filter((s) => s.difficulty === "Intermediate");

  return (
    <section id="skill" className="py-12 flex flex-col gap-10">
      {/* Header */}
      <BrutalReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black dark:border-[#F4F0EA] pb-4">
          <div className="flex flex-col gap-2">
            <span className="brutal-tag bg-[#A3E635] text-black border-black w-fit">
              {t.skills.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-[#F4F0EA]">
              {t.skills.title}
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold uppercase opacity-75">
            14 CORE TOOLS & LANGUAGES
          </span>
        </div>
      </BrutalReveal>

      {/* Advanced Stack */}
      <div className="flex flex-col gap-5">
        <BrutalReveal y={14}>
          <div className="flex items-center gap-4">
            <span className="px-4 py-1.5 bg-[#FFE600] text-black border-3 border-black shadow-[4px_4px_0px_0px_#000] font-mono text-xs sm:text-sm font-black uppercase">
              ★ {t.skills.advanced}
            </span>
            <div className="flex-1 h-1 bg-black dark:bg-[#F4F0EA]" />
          </div>
        </BrutalReveal>

        <BrutalStagger stagger={0.05} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {advanced.map((item) => {
            const Icon = item.logo;
            return (
              <BrutalItem key={item.title} className="flex">
                <div className="brutal-box brutal-box-interactive p-5 bg-white dark:bg-[#171717] flex flex-col justify-between gap-4 group w-full">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 ${item.accent} border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center`}
                    >
                      <Icon className="text-2xl" />
                    </div>
                    <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black dark:border-[#F4F0EA]">
                      {t.skills.levels[item.difficulty]}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-black text-base uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <div className="w-full h-2 mt-2 bg-black/10 dark:bg-white/10 border border-black dark:border-[#F4F0EA]">
                      <div className="w-11/12 h-full bg-[#A3E635]" />
                    </div>
                  </div>
                </div>
              </BrutalItem>
            );
          })}
        </BrutalStagger>
      </div>

      {/* Intermediate Stack */}
      <div className="flex flex-col gap-5 pt-4">
        <BrutalReveal y={14}>
          <div className="flex items-center gap-4">
            <span className="px-4 py-1.5 bg-[#00F0FF] text-black border-3 border-black shadow-[4px_4px_0px_0px_#000] font-mono text-xs sm:text-sm font-black uppercase">
              ⚡ {t.skills.intermediate}
            </span>
            <div className="flex-1 h-1 bg-black dark:bg-[#F4F0EA]" />
          </div>
        </BrutalReveal>

        <BrutalStagger stagger={0.05} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {intermediate.map((item) => {
            const Icon = item.logo;
            return (
              <BrutalItem key={item.title} className="flex">
                <div className="brutal-box brutal-box-interactive p-5 bg-white dark:bg-[#171717] flex items-center gap-4 w-full">
                  <div
                    className={`w-12 h-12 flex-shrink-0 ${item.accent} border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center`}
                  >
                    <Icon className="text-2xl" />
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <h4 className="font-black text-base uppercase tracking-tight truncate">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[11px] font-bold opacity-70 uppercase">
                      {t.skills.levels[item.difficulty]}
                    </span>
                  </div>
                </div>
              </BrutalItem>
            );
          })}
        </BrutalStagger>
      </div>
    </section>
  );
};

export default Skill;
