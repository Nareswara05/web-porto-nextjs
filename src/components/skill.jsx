import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaPhp, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiFlutter, SiMysql, SiLaravel, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import CardSkill from './common/card-skill';

const skills = [
  { logo: FaHtml5,         title: 'HTML',         difficulty: 'Advanced',     color: 'group-hover:text-[#E44D26]' },
  { logo: FaCss3,          title: 'CSS',           difficulty: 'Advanced',     color: 'group-hover:text-[#1E90FF]' },
  { logo: IoLogoJavascript,title: 'JavaScript',    difficulty: 'Advanced',     color: 'group-hover:text-[#F7E04C]' },
  { logo: FaReact,         title: 'React JS',      difficulty: 'Advanced',     color: 'group-hover:text-[#61DAFB]' },
  { logo: SiNextdotjs,     title: 'Next JS',       difficulty: 'Advanced',     color: 'group-hover:text-[#00E5A7]' },
  { logo: RiTailwindCssFill,title:'Tailwind CSS',  difficulty: 'Advanced',     color: 'group-hover:text-[#38B2AC]' },
  { logo: SiFlutter,       title: 'Flutter',       difficulty: 'Intermediate', color: 'group-hover:text-[#03A9F4]' },
  { logo: FaPhp,           title: 'PHP',           difficulty: 'Intermediate', color: 'group-hover:text-[#9B5DE5]' },
  { logo: SiLaravel,       title: 'Laravel',       difficulty: 'Intermediate', color: 'group-hover:text-[#FF4F4F]' },
  { logo: SiMysql,         title: 'MySQL',         difficulty: 'Intermediate', color: 'group-hover:text-[#5DADE2]' },
  { logo: SiTypescript,    title: 'TypeScript',    difficulty: 'Intermediate', color: 'group-hover:text-[#3178C6]' },
  { logo: FaJava,          title: 'Java',          difficulty: 'Intermediate', color: 'group-hover:text-[#00B0FF]' },
];

const Skill = () => {
  const advanced     = skills.filter(s => s.difficulty === 'Advanced');
  const intermediate = skills.filter(s => s.difficulty === 'Intermediate');

  return (
    <section className="flex flex-col gap-16" id="skill">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase skill-label">
          Tech Stack
        </span>
        <h2 className="text-3xl md:text-[42px] font-bold text-white text-center">Skills</h2>
        <div className="w-16 h-[3px] rounded-full skill-bar-accent" />
      </div>

      {/* Advanced */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="skill-badge skill-badge-advanced">Advanced</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {advanced.map((item, i) => (
            <CardSkill key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Intermediate */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="skill-badge skill-badge-intermediate">Intermediate</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {intermediate.map((item, i) => (
            <CardSkill key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
