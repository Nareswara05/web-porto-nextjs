"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import projects from "@/app/project/project";
import { useApp } from "@/lib/context";
import { HiExternalLink, HiSearch, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { BrutalReveal } from "./brutal-motion";

const typeBadgeStyle = (type) => {
  const normalized = (type || "").toLowerCase();
  if (normalized.includes("ui")) return "bg-[#FF2A85] text-white";
  if (normalized.includes("app")) return "bg-[#A3E635] text-black";
  return "bg-[#FFE600] text-black";
};

const INITIAL_DISPLAY_COUNT = 3;

const FeaturedProject = () => {
  const { t, lang } = useApp();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "ALL", label: t.projects.filterAll, count: projects.length },
    {
      id: "WEB",
      label: t.projects.filterWeb,
      count: projects.filter((p) =>
        p.type.toLowerCase().includes("web")
      ).length,
    },
    {
      id: "APP",
      label: t.projects.filterApp,
      count: projects.filter((p) =>
        p.type.toLowerCase().includes("app")
      ).length,
    },
    {
      id: "UI",
      label: t.projects.filterUi,
      count: projects.filter((p) =>
        p.type.toLowerCase().includes("ui")
      ).length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const typeLower = (item.type || "").toLowerCase();
      const matchesCat =
        activeCategory === "ALL" ||
        (activeCategory === "WEB" && typeLower.includes("web")) ||
        (activeCategory === "APP" && typeLower.includes("app")) ||
        (activeCategory === "UI" && typeLower.includes("ui"));

      const localizedDesc =
        lang === "id" && t.projects.descTranslations[item.title]
          ? t.projects.descTranslations[item.title]
          : item.desc;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        localizedDesc.toLowerCase().includes(q) ||
        (item.programs || []).some((p) =>
          (p.prev || "").toLowerCase().includes(q)
        );

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery, lang, t.projects.descTranslations]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      const section = document.getElementById("project");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="project" className="py-12 flex flex-col gap-10">
      {/* Header */}
      <BrutalReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black dark:border-[#F4F0EA] pb-4">
          <div className="flex flex-col gap-2">
            <span className="brutal-tag bg-[#FF2A85] text-white border-black w-fit">
              {t.projects.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-[#F4F0EA]">
              {t.projects.title}
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold uppercase opacity-75">
            {t.projects.subtitle}
          </span>
        </div>
      </BrutalReveal>

      {/* Filter & Search Bar */}
      <BrutalReveal delay={0.05} y={18}>
        <div className="brutal-box p-4 sm:p-5 bg-white dark:bg-[#171717] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowAll(false);
                  }}
                  className={`px-3.5 py-2 font-mono text-xs sm:text-sm font-black uppercase border-2 border-black transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#FFE600] text-black shadow-[4px_4px_0px_0px_#000] -translate-y-0.5"
                      : "bg-[#F4F0EA] dark:bg-[#262626] text-black dark:text-[#F4F0EA] hover:bg-[#00F0FF] hover:text-black"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="px-1.5 py-0.5 text-[10px] bg-black text-white">
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-black dark:text-[#F4F0EA]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F4F0EA] dark:bg-[#262626] text-black dark:text-[#F4F0EA] placeholder-black/50 dark:placeholder-white/50 font-mono text-xs sm:text-sm font-bold border-2 border-black dark:border-[#F4F0EA] focus:outline-none focus:bg-[#FFE600] focus:text-black focus:placeholder-black/70 transition-colors"
            />
          </div>
        </div>
      </BrutalReveal>

      {/* Counter Status */}
      <div className="flex items-center justify-between font-mono text-xs font-black uppercase">
        <span>
          {t.projects.showing} {visibleProjects.length} {t.projects.of}{" "}
          {filteredProjects.length} {t.projects.projectsLabel}
        </span>
        <span className="hidden sm:inline">GRID_LAYOUT // RAW_ARCHIVE</span>
      </div>

      {/* Projects Brutalist Grid with Framer Motion Animation */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((item, index) => {
            const hasValidLink =
              item.link && item.link.trim() !== "" && item.link.trim() !== "#";
            const localizedType =
              t.projects.typeTranslations[item.type] || item.type;
            const localizedDesc =
              lang === "id" && t.projects.descTranslations[item.title]
                ? t.projects.descTranslations[item.title]
                : item.desc;

            // Stagger delay for newly revealed items
            const staggerIndex =
              index >= INITIAL_DISPLAY_COUNT
                ? index - INITIAL_DISPLAY_COUNT
                : index;

            return (
              <motion.article
                layout
                key={item.title}
                initial={{ opacity: 0, y: 36, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.94 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(staggerIndex * 0.06, 0.5),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="brutal-box brutal-box-interactive bg-white dark:bg-[#171717] flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Top Window Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b-3 border-black dark:border-[#F4F0EA] bg-[#F4F0EA] dark:bg-[#222]">
                    <span className="font-mono text-xs font-black">
                      PRJ_{String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 font-mono text-[10px] font-black uppercase border-2 border-black ${typeBadgeStyle(
                        item.type
                      )}`}
                    >
                      {localizedType}
                    </span>
                  </div>

                  {/* Image Preview */}
                  <div
                    onClick={() =>
                      setSelectedProject({
                        ...item,
                        localizedDesc,
                        localizedType,
                        index,
                      })
                    }
                    className="relative w-full aspect-[16/10] bg-black border-b-3 border-black dark:border-[#F4F0EA] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-[#FFE600] text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]">
                        + ZOOM DETAILS
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-xl font-black uppercase tracking-tight leading-snug text-black dark:text-[#F4F0EA]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-black/75 dark:text-[#F4F0EA]/75 line-clamp-4">
                      {localizedDesc}
                    </p>
                  </div>
                </div>

                {/* Footer: Tech Stack & Action Link */}
                <div className="p-5 pt-0 flex flex-col gap-4">
                  {item.programs?.length > 0 && (
                    <div className="flex flex-col gap-2 pt-3 border-t-2 border-dashed border-black/30 dark:border-white/20">
                      <span className="font-mono text-[10px] font-black uppercase opacity-60">
                        {t.projects.builtWith}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.programs.map((prog, i) => {
                          const Logo = prog.logo;
                          return (
                            <div
                              key={i}
                              title={prog.prev}
                              className="flex items-center gap-1.5 px-2 py-1 bg-[#F4F0EA] dark:bg-[#262626] border border-black dark:border-[#F4F0EA] text-xs font-mono font-bold uppercase"
                            >
                              <Logo className="text-sm flex-shrink-0" />
                              <span className="text-[10px]">{prog.prev}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    {hasValidLink ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn w-full py-2.5 px-4 bg-[#FFE600] hover:bg-[#00F0FF] text-black border-2 border-black text-xs font-black"
                      >
                        <span>{t.projects.visitProject}</span>
                        <HiExternalLink className="text-base" />
                      </a>
                    ) : (
                      <button
                        onClick={() =>
                          setSelectedProject({
                            ...item,
                            localizedDesc,
                            localizedType,
                            index,
                          })
                        }
                        className="brutal-btn w-full py-2.5 px-4 bg-[#F4F0EA] dark:bg-[#262626] text-black dark:text-[#F4F0EA] text-xs font-black"
                      >
                        <span>{t.projects.privateRepo}</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Show All / Show Less Button */}
      {filteredProjects.length > INITIAL_DISPLAY_COUNT && (
        <motion.div layout className="flex justify-center pt-4">
          <button
            onClick={handleToggleShowAll}
            className={`brutal-btn px-8 py-4 text-sm sm:text-base font-black border-3 border-black shadow-[6px_6px_0px_0px_#000] flex items-center gap-3 ${
              showAll
                ? "bg-[#FF5C00] text-white hover:bg-[#FFE600] hover:text-black"
                : "bg-[#A3E635] text-black hover:bg-[#FFE600]"
            }`}
          >
            <span>
              {showAll
                ? t.projects.showLessBtn
                : `${t.projects.showAllBtn} (+${
                    filteredProjects.length - INITIAL_DISPLAY_COUNT
                  })`}
            </span>
            {showAll ? (
              <HiChevronUp className="text-xl" />
            ) : (
              <HiChevronDown className="text-xl animate-bounce" />
            )}
          </button>
        </motion.div>
      )}

      {/* Modal Detail Lightbox for Brutalist Inspection */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="brutal-box max-w-3xl w-full bg-[#F4F0EA] dark:bg-[#171717] overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#FFE600] text-black border-b-4 border-black">
                <span className="font-mono text-xs sm:text-sm font-black uppercase">
                  PROJECT_INSPECTOR // #
                  {String(selectedProject.index + 1).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1 bg-[#FF5C00] text-white border-2 border-black font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000]"
                >
                  CLOSE [X]
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative w-full aspect-video bg-black border-b-4 border-black">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-3 py-1 font-mono text-xs font-black uppercase border-2 border-black ${typeBadgeStyle(
                      selectedProject.type
                    )}`}
                  >
                    {selectedProject.localizedType}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black dark:text-[#F4F0EA]">
                  {selectedProject.title}
                </h3>

                <p className="text-sm sm:text-base font-medium leading-relaxed text-black/85 dark:text-[#F4F0EA]/85">
                  {selectedProject.localizedDesc}
                </p>

                {selectedProject.programs?.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.programs.map((prog, i) => {
                      const Logo = prog.logo;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#262626] border-2 border-black dark:border-[#F4F0EA] font-mono text-xs font-bold uppercase"
                        >
                          <Logo className="text-base" />
                          <span>{prog.prev}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {selectedProject.link &&
                  selectedProject.link.trim() !== "" &&
                  selectedProject.link.trim() !== "#" && (
                    <div className="pt-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn px-6 py-3 bg-[#A3E635] text-black border-black text-sm"
                      >
                        <span>{t.projects.visitProject}</span>
                        <HiExternalLink className="text-lg" />
                      </a>
                    </div>
                  )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProject;
