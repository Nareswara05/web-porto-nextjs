"use client"

import React, { useState, useEffect } from 'react';
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const socials = [
  { icon: FaInstagram, href: 'https://www.instagram.com/thatrevv/',           label: 'Instagram' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/nareswaramaulana',  label: 'LinkedIn'  },
  { icon: FaDribbble,  href: 'https://dribbble.com/Revvvz',                   label: 'Dribbble'  },
  { icon: FaGithub,    href: 'https://github.com/Nareswara05',                label: 'GitHub'    },
];

const Footer = () => {
  const [time, setTime]   = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dateStr = ready && time
    ? time.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : '';
  const timeStr = ready && time ? time.toLocaleTimeString() : '';

  return (
    <footer className="footer-root" id="contact">
      {/* Top divider glow */}
      <div className="footer-divider" />

      <div className="footer-inner">
        {/* CTA headline */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase footer-label">Get In Touch</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Let&apos;s build something<br />
            <span className="footer-name-gradient">great together</span>
          </h2>
          <p className="text-white/50 text-sm max-w-sm leading-relaxed mt-1">
            Open for freelance, full-time opportunities, and interesting collaborations.
          </p>
          <a href="mailto:nareswaramaulana@gmail.com" className="footer-email-btn">
            Say Hello 👋
          </a>
        </div>

        {/* Divider */}
        <div className="footer-mid-line" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-white font-bold text-lg tracking-tight">
              Nares<span className="footer-name-gradient">wara</span>
            </span>
            <span className="text-white/35 text-xs">{dateStr} · {timeStr}</span>
          </div>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social"
              >
                <Icon />
              </Link>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Nareswara.<br className="md:hidden" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
