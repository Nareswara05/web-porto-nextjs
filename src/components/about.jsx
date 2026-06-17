'use client';

import React from "react";
import Image from "next/image";
import { TbDownload } from "react-icons/tb";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFigma } from "react-icons/si";
import { me } from "@/lib/utils/image";
import WhatIDo from "./what-i-do";

const floatingBadges = [
  { icon: SiNextdotjs, label: 'Next.js',   style: 'top-6 -left-6 md:-left-12' },
  { icon: SiReact,     label: 'React',     style: 'top-1/2 -right-4 md:-right-10' },
  { icon: SiTailwindcss, label: 'Tailwind', style: 'bottom-16 -left-4 md:-left-10' },
  { icon: SiFigma,     label: 'Figma',     style: 'bottom-4 right-6 md:right-10' },
];

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-20">
      <div className="flex flex-col items-center gap-3">
        <span className="about-section-label">Who I Am</span>
        <h2 className="text-3xl md:text-[42px] font-bold text-white text-center leading-tight">About Me</h2>
        <div className="w-16 h-[3px] rounded-full" style={{ background: 'linear-gradient(to right,#3BF686,#4CA9FF)' }} />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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

        <div className="hero-right relative flex items-center justify-center lg:w-1/2 flex-shrink-0">
          <div className="hero-glow-outer" />
          <div className="hero-glow-inner" />

          <div className="hero-img-wrapper">
            <Image
              src={me}
              alt="Nareswara"
              className="hero-img"
              priority
            />
            <div className="hero-img-overlay" />
          </div>

          {floatingBadges.map(({ icon: Icon, label, style }) => (
            <div key={label} className={`hero-float-badge ${style}`}>
              <Icon className="text-lg" />
              <span className="text-xs font-semibold">{label}</span>
            </div>
          ))}

          <div className="hero-exp-card">
            <span className="hero-exp-num">2+</span>
            <span className="hero-exp-text">Years of<br/>Experience</span>
          </div>
        </div>
      </div>

      <WhatIDo />
    </section>
  );
};

export default About;

