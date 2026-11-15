"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/lib/context";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { id: "home", label: t.nav.home, href: "#home" },
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "experience", label: t.nav.experience, href: "#experience" },
    { id: "skill", label: t.nav.skills, href: "#skill" },
    { id: "project", label: t.nav.projects, href: "#project" },
    { id: "contact", label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skill", "project", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 lg:px-12 pt-3 sm:pt-4 pointer-events-none">
      {/* Top Brutalist Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-black/15 dark:bg-white/10 z-50 border-b-2 border-black">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-[#FFE600] origin-left border-r-2 border-black"
        />
      </div>

      <div className="max-w-7xl mx-auto pointer-events-auto mt-1">
        <div className="brutal-box flex items-center justify-between px-4 py-3 bg-[#F4F0EA] dark:bg-[#171717]">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => setActive("home")}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo-nareswara.png"
              alt="Nareswara Brutalist Logo"
              width={165}
              height={42}
              priority
              className="h-8 sm:h-10 w-auto object-contain group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActive(item.id)}
                  className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider border-2 transition-all ${
                    isActive
                      ? "bg-[#FFE600] text-black border-black shadow-[3px_3px_0px_0px_#000] -translate-y-0.5"
                      : "border-transparent text-black dark:text-[#F4F0EA] hover:border-black dark:hover:border-[#F4F0EA] hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Controls: Lang & Theme + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label="Toggle Language"
              title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
              className="brutal-btn px-2.5 py-1.5 text-xs bg-[#00F0FF] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] font-black"
            >
              <span>{lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              className={`brutal-btn p-2 text-base border-2 border-black shadow-[3px_3px_0px_0px_#000] ${
                theme === "light"
                  ? "bg-[#A3E635] text-black"
                  : "bg-[#FF5C00] text-white"
              }`}
            >
              {theme === "light" ? <HiMoon className="w-4 h-4" /> : <HiSun className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              className="lg:hidden brutal-btn p-2 bg-[#FFE600] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000]"
            >
              {open ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="lg:hidden mt-2 brutal-box p-4 bg-[#F4F0EA] dark:bg-[#171717] flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActive(item.id);
                    setOpen(false);
                  }}
                  className={`px-4 py-3 text-sm font-black uppercase tracking-wider border-2 transition-all ${
                    isActive
                      ? "bg-[#FFE600] text-black border-black shadow-[4px_4px_0px_0px_#000]"
                      : "bg-white dark:bg-[#222] text-black dark:text-[#F4F0EA] border-black dark:border-[#F4F0EA]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
