"use client";

import React from "react";
import { useApp } from "@/lib/context";
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { BrutalReveal, BrutalStagger, BrutalItem } from "./brutal-motion";

const socials = [
  { icon: FaGithub, href: "https://github.com/Nareswara05", label: "GitHub", bg: "hover:bg-[#FFE600]" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nareswaramaulana", label: "LinkedIn", bg: "hover:bg-[#00F0FF]" },
  { icon: FaInstagram, href: "https://www.instagram.com/thatrevv/", label: "Instagram", bg: "hover:bg-[#FF2A85] hover:text-white" },
  { icon: FaDribbble, href: "https://dribbble.com/Revvvz", label: "Dribbble", bg: "hover:bg-[#A3E635]" },
];

const roleColors = [
  "bg-[#FFE600] text-black",
  "bg-[#00F0FF] text-black",
  "bg-[#A3E635] text-black",
];

const Hero = () => {
  const { t } = useApp();

  return (
    <section id="home" className="pt-28 sm:pt-32 pb-12 flex flex-col gap-10">
      {/* Top Status Bar & ID Stamp */}
      <BrutalReveal y={16}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="brutal-tag bg-[#A3E635] text-black flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm">
            <span className="w-3 h-3 bg-black inline-block animate-pulse" />
            <span>{t.hero.status}</span>
          </div>

          
        </div>
      </BrutalReveal>

      {/* Main Brutalist Hero Box */}
      <BrutalReveal delay={0.05} y={24}>
        <div className="brutal-box p-6 sm:p-10 lg:p-14 bg-white dark:bg-[#171717] relative overflow-hidden">
          {/* Decorative Corner Stamp */}
          <div className="hidden md:flex absolute top-6 right-6 w-24 h-24 bg-[#FF5C00] text-white border-4 border-black shadow-[4px_4px_0px_0px_#000] rotate-12 flex-col items-center justify-center font-black text-xs text-center leading-tight select-none">
            <span>100%</span>
            <span>RAW</span>
            <span>CODE</span>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl">
            <p className="font-mono font-bold text-sm sm:text-base tracking-widest uppercase text-[#FF5C00] dark:text-[#FFE600]">
              {t.hero.greeting}
            </p>

            {/* Giant Brutalist Name */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-black dark:text-[#F4F0EA]">
              NARES
              <span className="inline-block bg-[#FFE600] text-black px-3 sm:px-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] ml-1 sm:ml-2 -rotate-1">
                WARA
              </span>
            </h1>

            {/* Role Stickers */}
            <div className="flex flex-wrap gap-3 pt-2">
              {t.hero.roles.map((role, i) => (
                <span
                  key={role}
                  className={`px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider border-3 border-black shadow-[4px_4px_0px_0px_#000] ${
                    roleColors[i % roleColors.length]
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-black/80 dark:text-[#F4F0EA]/85 max-w-2xl border-l-4 border-black dark:border-[#FFE600] pl-4 py-1">
              {t.hero.desc}
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t-4 border-black dark:border-[#F4F0EA]">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#project"
                  className="brutal-btn px-6 py-3.5 text-sm sm:text-base bg-[#FFE600] text-black border-3 border-black"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <HiArrowDown className="w-5 h-5" />
                </a>

                <a
                  href="/CV_Nares.pdf"
                  download="CV_Nares.pdf"
                  className="brutal-btn px-6 py-3.5 text-sm sm:text-base bg-white dark:bg-[#222] text-black dark:text-[#F4F0EA]"
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <HiDownload className="w-5 h-5" />
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-xs uppercase tracking-wider hidden xl:inline">
                  {t.hero.findMe}
                </span>
                <div className="flex gap-2.5">
                  {socials.map(({ icon: Icon, href, label, bg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className={`brutal-btn w-11 h-11 bg-white dark:bg-[#222] text-black dark:text-[#F4F0EA] hover:text-black ${bg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrutalReveal>

      {/* Stats Grid */}
      <BrutalStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {t.hero.stats.map((stat, idx) => {
          const cardBg =
            idx === 0
              ? "bg-[#FFE600] text-black"
              : idx === 1
              ? "bg-[#00F0FF] text-black"
              : "bg-[#A3E635] text-black";
          return (
            <BrutalItem key={stat.label}>
              <div
                className={`brutal-box brutal-box-interactive p-6 flex items-center justify-between ${cardBg} border-black shadow-[6px_6px_0px_0px_#000]`}
              >
                <div className="flex flex-col">
                  <span className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">
                    {stat.value}
                  </span>
                  <span className="mt-2 font-mono text-xs sm:text-sm font-black uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <span className="font-mono text-2xl font-black opacity-30">
                  0{idx + 1}
                </span>
              </div>
            </BrutalItem>
          );
        })}
      </BrutalStagger>

      {/* Brutalist Infinite Marquee Strip */}
      <BrutalReveal delay={0.1} y={16}>
        <div className="brutal-box bg-black text-[#FFE600] border-black py-3 overflow-hidden select-none">
          <div className="animate-marquee font-mono font-black text-sm sm:text-base tracking-widest uppercase">
            <span className="mx-4">{t.hero.marquee}</span>
            <span className="mx-4">{t.hero.marquee}</span>
            <span className="mx-4">{t.hero.marquee}</span>
          </div>
        </div>
      </BrutalReveal>
    </section>
  );
};

export default Hero;
