"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/lib/context";
import { me } from "@/lib/utils/image";
import { TbDownload } from "react-icons/tb";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFigma } from "react-icons/si";
import { BiSolidColorFill } from "react-icons/bi";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaClipboardList, FaPuzzlePiece } from "react-icons/fa";
import { BrutalReveal, BrutalStagger, BrutalItem } from "./brutal-motion";

const serviceIcons = [
  BiSolidColorFill,
  BsGlobeAsiaAustralia,
  FaClipboardList,
  FaPuzzlePiece,
];

const serviceColors = [
  "bg-[#FFE600]",
  "bg-[#00F0FF]",
  "bg-[#A3E635]",
  "bg-[#FF5C00] text-white",
];

const About = () => {
  const { t } = useApp();

  return (
    <section id="about" className="py-12 flex flex-col gap-12">
      {/* Section Header */}
      <BrutalReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black dark:border-[#F4F0EA] pb-4">
          <div className="flex flex-col gap-2">
            <span className="brutal-tag bg-[#FF5C00] text-white border-black w-fit">
              {t.about.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-[#F4F0EA]">
              {t.about.title}
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold uppercase opacity-70">
            SMK RADEN UMAR SAID KUDUS // INDONESIA
          </span>
        </div>
      </BrutalReveal>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Bio Card */}
        <BrutalReveal className="lg:col-span-7 flex" y={24}>
          <div className="brutal-box p-6 sm:p-10 bg-white dark:bg-[#171717] flex flex-col justify-between gap-8 w-full">
            <div className="flex flex-col gap-5">
              <div className="inline-block px-4 py-2 bg-[#FFE600] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] font-black text-lg sm:text-xl uppercase w-fit">
                {t.about.hello}
              </div>

              <p className="text-base sm:text-lg font-medium leading-relaxed text-black dark:text-[#F4F0EA]">
                {t.about.p1}
              </p>

              <p className="text-base sm:text-lg font-medium leading-relaxed text-black/80 dark:text-[#F4F0EA]/80">
                {t.about.p2}
              </p>

              {/* Core Stack Mini Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: SiNextdotjs, label: "NEXT.JS" },
                  { icon: SiReact, label: "REACT" },
                  { icon: SiTailwindcss, label: "TAILWIND" },
                  { icon: SiFigma, label: "FIGMA" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#F4F0EA] dark:bg-[#262626] border-2 border-black dark:border-[#F4F0EA] font-mono text-xs font-black"
                  >
                    <Icon className="text-base" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-3 border-black dark:border-[#F4F0EA] flex flex-wrap items-center justify-between gap-4">
              <a
                href="/CV_Nares.pdf"
                download="CV_Nares.pdf"
                className="brutal-btn px-6 py-3.5 bg-[#A3E635] text-black border-black text-sm sm:text-base"
              >
                <span>{t.about.downloadCv}</span>
                <TbDownload className="text-xl" />
              </a>

              <div className="font-mono text-xs font-bold uppercase px-3 py-2 border-2 border-black dark:border-[#F4F0EA] bg-[#00F0FF] text-black">
                STATUS: ACTIVE_BUILDER
              </div>
            </div>
          </div>
        </BrutalReveal>

        {/* Right Portrait Frame */}
        <BrutalReveal className="lg:col-span-5 flex" delay={0.08} y={24}>
          <div className="brutal-box p-4 sm:p-6 bg-[#00F0FF] border-black flex flex-col justify-between gap-4 relative w-full">
            {/* Top Bar of Frame */}
            <div className="flex items-center justify-between border-b-3 border-black pb-3 text-black font-mono text-xs font-black">
              <span>PORTRAIT_NARES.JPG</span>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-[#FF5C00] border border-black inline-block" />
                <span className="w-3 h-3 bg-[#FFE600] border border-black inline-block" />
                <span className="w-3 h-3 bg-[#A3E635] border border-black inline-block" />
              </div>
            </div>

            {/* Image Container */}
            <div className="relative w-full aspect-[4/4.3] border-4 border-black bg-black overflow-hidden shadow-[6px_6px_0px_0px_#000]">
              <Image
                src={me}
                alt="Nareswara Maulana Aletha Alhaq"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Bottom Sticker Badge */}
            <div className="bg-[#FFE600] text-black border-3 border-black p-3 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between">
              <span className="text-3xl font-black tracking-tighter">3+</span>
              <span className="font-mono text-xs font-black uppercase text-right">
                {t.about.expBadge}
              </span>
            </div>
          </div>
        </BrutalReveal>
      </div>

      {/* What Can I Do Sub-Section */}
      <div className="flex flex-col gap-6 pt-4">
        <BrutalReveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-black uppercase px-2 py-1 bg-[#FFE600] text-black border-2 border-black">
                {t.about.whatIDoTag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase mt-2">
                {t.about.whatIDoTitle}
              </h3>
            </div>
            <p className="text-sm sm:text-base font-medium max-w-md opacity-80">
              {t.about.whatIDoSub}
            </p>
          </div>
        </BrutalReveal>

        <BrutalStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.services.map((srv, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            const accent = serviceColors[idx % serviceColors.length];
            return (
              <BrutalItem key={srv.id} className="flex">
                <div className="brutal-box brutal-box-interactive p-6 bg-white dark:bg-[#171717] flex flex-col justify-between gap-6 w-full">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 ${accent} text-black border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center`}
                    >
                      <Icon className="text-2xl" />
                    </div>
                    <span className="font-mono text-2xl font-black opacity-30">
                      /{srv.id}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-black uppercase tracking-tight">
                      {srv.title}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed opacity-80">
                      {srv.desc}
                    </p>
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

export default About;
