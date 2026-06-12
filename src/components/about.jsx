'use client';

import React, { useState } from "react";
import { TbDownload } from "react-icons/tb";
import { FaReact, FaFigma, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { HiCode, HiLightBulb, HiUsers } from "react-icons/hi";
import WhatIDo from "./what-i-do";

const stats = [
  { icon: HiCode,      value: '20+',  label: 'Projects',   color: '#3BF686' },
  { icon: HiUsers,     value: '5+',   label: 'Companies',  color: '#4CA9FF' },
  { icon: HiLightBulb,value: '3+',   label: 'Years Exp.', color: '#c084fc' },
];

const techBadges = [
  { icon: SiNextdotjs,    label: 'Next.js',     delay: '0s'    },
  { icon: FaReact,        label: 'React',       delay: '0.4s'  },
  { icon: SiTailwindcss,  label: 'Tailwind',    delay: '0.8s'  },
  { icon: FaFigma,        label: 'Figma',       delay: '1.2s'  },
  { icon: FaGithub,       label: 'GitHub',      delay: '1.6s'  },
];

const About = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="about" className="flex flex-col gap-20">

      {/* Section header */}
      <div className="flex flex-col items-center gap-3">
        <span className="about-section-label">Who I Am</span>
        <h2 className="text-3xl md:text-[42px] font-bold text-white text-center leading-tight">About Me</h2>
        <div className="w-16 h-[3px] rounded-full" style={{ background: 'linear-gradient(to right,#3BF686,#4CA9FF)' }} />
      </div>

      {/* 2-col layout */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT — Bio */}
        <div className="flex flex-col gap-6 lg:flex-1">
          <h3 className="about-hello">Hello! 👋</h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            My name is <span className="text-white font-semibold">Nareswara Maulana Aletha Alhaq</span>, but you can call me{' '}
            <span className="text-white font-semibold">Nares</span>. I am a student at SMK Raden Umar Said Kudus
            with a keen interest in{' '}
            <span className="font-semibold" style={{ color: '#3BF686' }}>Frontend Web Development</span> and{' '}
            <span className="font-semibold" style={{ color: '#4CA9FF' }}>UI/UX Design</span>.
          </p>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            I love turning design mockups into interactive, user-friendly websites using modern web technologies.
            Proficient with <span className="text-white/80">Figma</span> and{' '}
            <span className="text-white/80">Adobe XD</span>, and I value collaboration in team settings.
          </p>

          <a href="/CV_Nares.pdf" download="CV_Nares.pdf">
            <button className="about-cv-btn group">
              <span>Download CV</span>
              <span className="about-cv-icon group-hover:rotate-12 transition-transform duration-300">
                <TbDownload />
              </span>
            </button>
          </a>
        </div>

        {/* RIGHT — Interactive panel */}
        <div className="about-panel lg:flex-shrink-0">

          {/* Ambient glow */}
          <div className="about-panel-glow" />

          {/* Name card */}
          <div className="about-name-card">
            <div className="about-avatar-ring">
              <div className="about-avatar-inner">N</div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-tight">Nareswara</span>
              <span className="text-white/45 text-xs mt-0.5">Frontend Dev · UI/UX Designer</span>
            </div>
            <div className="about-online-dot" />
          </div>

          {/* Stats row */}
          <div className="about-stats-row">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div
                key={label}
                className="about-stat-card"
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                style={hovered === label ? { borderColor: color + '55', background: color + '0D' } : {}}
              >
                <Icon className="text-lg" style={{ color }} />
                <span className="about-stat-val" style={{ color }}>{value}</span>
                <span className="about-stat-lbl">{label}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-semibold">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {techBadges.map(({ icon: Icon, label, delay }) => (
                <div
                  key={label}
                  className="about-tech-badge"
                  style={{ animationDelay: delay }}
                >
                  <Icon className="text-sm" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Availability bar */}
          <div className="about-avail-bar">
            <span className="about-avail-dot" />
            <span className="text-xs text-white/55 font-medium">Available for new opportunities</span>
          </div>

        </div>
      </div>

      {/* What I Do */}
      <WhatIDo />
    </section>
  );
};

export default About;
