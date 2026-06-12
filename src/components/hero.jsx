'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { me } from '@/lib/utils/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { SiNextdotjs, SiReact, SiTailwindcss, SiFigma } from 'react-icons/si';

const socials = [
  { icon: FaGithub,   href: 'https://github.com/Nareswara05',   label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com',              label: 'LinkedIn' },
  { icon: FaInstagram,href: 'https://instagram.com',             label: 'Instagram' },
];

const floatingBadges = [
  { icon: SiNextdotjs, label: 'Next.js',   style: 'top-6 -left-6 md:-left-12' },
  { icon: SiReact,     label: 'React',     style: 'top-1/2 -right-4 md:-right-10' },
  { icon: SiTailwindcss, label: 'Tailwind', style: 'bottom-16 -left-4 md:-left-10' },
  { icon: SiFigma,     label: 'Figma',     style: 'bottom-4 right-6 md:right-10' },
];

const Hero = () => {
  return (
    <section className="hero-section relative flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24 lg:pt-0 gap-12 lg:gap-0">

      {/* ── LEFT CONTENT ── */}
      <div className="hero-left flex flex-col gap-6 lg:gap-8 z-10 lg:w-1/2">

        {/* Status badge */}
        <div className="hero-badge-wrap">
          <span className="hero-status-badge">
            <span className="hero-status-dot" />
            Available for opportunities
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <p className="hero-greeting">Hello there! I&apos;m</p>
          <h1 className="hero-name">
            Nares<span className="hero-name-accent">wara</span>
          </h1>
          <div className="hero-roles">
            <span className="hero-role-pill hero-role-1">Fullstack Developer</span>
            <span className="hero-role-pill hero-role-2">UI/UX Designer</span>
            <span className="hero-role-pill hero-role-3">Project Manager</span>
          </div>
        </div>

        {/* Sub-text */}
        <p className="hero-desc">
          Crafting <span className="hero-highlight-green">beautiful</span> interfaces &amp; building{' '}
          <span className="hero-highlight-blue">scalable</span> web experiences — from pixel-perfect design to production-ready code.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <a href="#about" className="hero-cta-primary">
            Explore My Work
            <HiArrowDown className="hero-cta-icon" />
          </a>
          <a href="/CV_Nares.pdf" download className="hero-cta-secondary">
            Download CV
            <HiDownload className="hero-cta-icon" />
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 pt-2">
          <span className="hero-socials-label">Find me on</span>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero-social-btn"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── RIGHT VISUAL ── */}
      <div className="hero-right relative flex items-center justify-center lg:w-1/2">

        {/* Glow rings */}
        <div className="hero-glow-outer" />
        <div className="hero-glow-inner" />

        {/* Profile image */}
        <div className="hero-img-wrapper">
          <Image
            src={me}
            alt="Nareswara"
            className="hero-img"
            priority
          />
          <div className="hero-img-overlay" />
        </div>

        {/* Floating tech badges */}
        {floatingBadges.map(({ icon: Icon, label, style }) => (
          <div key={label} className={`hero-float-badge ${style}`}>
            <Icon className="text-lg" />
            <span className="text-xs font-semibold">{label}</span>
          </div>
        ))}

        {/* Experience card */}
        <div className="hero-exp-card">
          <span className="hero-exp-num">2+</span>
          <span className="hero-exp-text">Years of<br/>Experience</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;