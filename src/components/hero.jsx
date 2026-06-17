'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';

const socials = [
  { icon: FaGithub,   href: 'https://github.com/Nareswara05',   label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com',              label: 'LinkedIn' },
  { icon: FaInstagram,href: 'https://instagram.com',             label: 'Instagram' },
];

const stats = [
  { value: '20+', label: 'Projects' },
  { value: '5+',  label: 'Companies' },
  { value: '3+',  label: 'Years Exp.' },
];

const Counter = ({ value, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = target;
    const stepTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  const suffix = value.toString().replace(/[0-9]/g, '');
  return <>{count}{suffix}</>;
};

const Hero = () => {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center min-h-screen pt-24 pb-12 gap-8 text-center max-w-4xl mx-auto px-4">
      <div className="hero-badge-wrap flex justify-center">
        <span className="hero-status-badge">
          <span className="hero-status-dot" />
          Available for opportunities
        </span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="hero-greeting">Hello there! I&apos;m</p>
        <h1 className="hero-name">
          Nares<span className="hero-name-accent">wara</span>
        </h1>
        <div className="hero-roles justify-center">
          <span className="hero-role-pill hero-role-1">Fullstack Developer</span>
          <span className="hero-role-pill hero-role-2">UI/UX Designer</span>
          <span className="hero-role-pill hero-role-3">Project Manager</span>
        </div>
      </div>

      <p className="hero-desc mx-auto">
        Crafting <span className="hero-highlight-green">beautiful</span> interfaces &amp; building{' '}
        <span className="hero-highlight-blue">scalable</span> web experiences — from pixel-perfect design to production-ready code.
      </p>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        <a href="#about" className="hero-cta-primary">
          Explore My Work
          <HiArrowDown className="hero-cta-icon" />
        </a>
        <a href="/CV_Nares.pdf" download className="hero-cta-secondary">
          Download CV
          <HiDownload className="hero-cta-icon" />
        </a>
      </div>

      <div className="flex items-center justify-center gap-4 pt-2">
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

      <div className="hero-stats justify-center mt-6">
        {stats.map(({ value, label }, index) => (
          <React.Fragment key={label}>
            {index > 0 && <div className="hero-stat-divider" />}
            <div className="hero-stat items-center">
              <span className="hero-stat-num">
                <Counter value={value} />
              </span>
              <span className="hero-stat-label">{label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Hero;