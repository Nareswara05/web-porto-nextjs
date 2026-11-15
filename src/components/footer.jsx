"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/lib/context";
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BrutalReveal } from "./brutal-motion";

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/thatrevv/",
    label: "Instagram",
    bg: "hover:bg-[#FF2A85] hover:text-white",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nareswaramaulana",
    label: "LinkedIn",
    bg: "hover:bg-[#00F0FF] hover:text-black",
  },
  {
    icon: FaDribbble,
    href: "https://dribbble.com/Revvvz",
    label: "Dribbble",
    bg: "hover:bg-[#A3E635] hover:text-black",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Nareswara05",
    label: "GitHub",
    bg: "hover:bg-[#FFE600] hover:text-black",
  },
];

const Footer = () => {
  const { t, lang } = useApp();
  const [time, setTime] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const locale = lang === "id" ? "id-ID" : "en-US";
  const dateStr =
    ready && time
      ? time.toLocaleDateString(locale, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";
  const timeStr = ready && time ? time.toLocaleTimeString(locale) : "";

  return (
    <footer
      id="contact"
      className="mt-16 border-t-4 border-black dark:border-[#F4F0EA] bg-[#FFE600] dark:bg-[#171717] text-black dark:text-[#F4F0EA] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 flex flex-col gap-12">
        {/* Big CTA Box */}
        <BrutalReveal y={24}>
          <div className="brutal-box p-8 sm:p-12 bg-white dark:bg-[#0D0D0D] border-black dark:border-[#F4F0EA] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="brutal-tag bg-[#FF5C00] text-white border-black w-fit">
                {t.footer.tag}
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                {t.footer.headline1}
                <br />
                <span className="inline-block mt-1 px-3 py-1 bg-[#A3E635] text-black border-3 border-black shadow-[4px_4px_0px_0px_#000]">
                  {t.footer.headline2}
                </span>
              </h2>
              <p className="text-sm sm:text-base font-medium opacity-80 pt-2">
                {t.footer.sub}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">
              <a
                href="mailto:naresalhaq9@gmail.com"
                className="brutal-btn px-8 py-4 bg-[#00F0FF] text-black border-3 border-black text-sm sm:text-base font-black shadow-[6px_6px_0px_0px_#000]"
              >
                <HiMail className="text-xl" />
                <span>{t.footer.emailBtn}</span>
              </a>

              <a
                href="#home"
                className="brutal-btn px-6 py-3 bg-[#FFE600] text-black border-3 border-black text-xs sm:text-sm font-black"
              >
                <span>{t.footer.backToTop}</span>
              </a>
            </div>
          </div>
        </BrutalReveal>

        {/* Bottom Bar */}
        <BrutalReveal delay={0.06} y={16}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 border-t-3 border-black dark:border-[#F4F0EA]">
            <div className="flex flex-col gap-2">
              <Image
                src="/logo-nareswara.png"
                alt="Nareswara Logo"
                width={210}
                height={54}
                className="h-11 sm:h-12 w-auto object-contain object-left"
              />
              <span className="font-mono text-xs font-bold uppercase opacity-80">
                {t.footer.localTime} {dateStr}  {timeStr}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`brutal-btn w-12 h-12 bg-white dark:bg-[#222] text-black dark:text-[#F4F0EA] border-2 border-black ${bg}`}
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </BrutalReveal>

        <div className="font-mono text-xs font-black uppercase text-center md:text-left opacity-75">
          © {new Date().getFullYear()} NARESWARA. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
