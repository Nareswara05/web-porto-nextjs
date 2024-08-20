import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaPhp, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import CardSkill from './common/card-skill';
import { SiNextdotjs, SiFlutter, SiMysql, SiLaravel, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";

const Skill = () => {
  const data = [
    {
        logo: FaHtml5,
        title: 'HTML',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#E44D26]', 
        borderColor: 'group-hover:border-[#E44D26] ',
    },
    {
        logo: FaCss3,
        title: 'CSS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#1572B6]', 
        borderColor: 'group-hover:border-[#1572B6]',
    },
    {
        logo: IoLogoJavascript,
        title: 'JavaScript',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#F7DF1E]', 
        borderColor: 'group-hover:border-[#F7DF1E]',
    },
    {
        logo: FaReact,
        title: 'React JS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#61DAFB]', 
        borderColor: 'group-hover:border-[#61DAFB]',
    },
    {
        logo: SiNextdotjs,
        title: 'Next JS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#000000]', 
        borderColor: 'group-hover:border-[#000000]',
    },
    {
        logo: RiTailwindCssFill,
        title: 'Tailwind CSS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#38B2AC]', 
        borderColor: 'group-hover:border-[#38B2AC]',
    },
    {
        logo: SiFlutter,
        title: 'Flutter',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#02569B]', 
        borderColor: 'group-hover:border-[#02569B]',
    },
    {
        logo: FaPhp,
        title: 'PHP',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#777BB3]', 
        borderColor: 'group-hover:border-[#777BB3]',
    },
    {
        logo: SiLaravel,
        title: 'Laravel',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#FF2D20]', 
        borderColor: 'group-hover:border-[#FF2D20]',
    },
    {
        logo: SiMysql,
        title: 'MySQL',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#4479A1]', 
        borderColor: 'group-hover:border-[#4479A1]',
    },
    {
        logo: SiTypescript,
        title: 'TypeScript',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#3178C6]', 
        borderColor: 'group-hover:border-[#3178C6]',
    },
    {
        logo: FaJava,
        title: 'Java',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#007396]', 
        borderColor: 'group-hover:border-[#007396]',
    },
];

  

  return (
    <div className='flex flex-col gap-16 justify-center items-center'>
      <div className='pb-2 w-fit border-primary border-b-2'>
        <h1 className='text-center text-white text-[40px] font-bold'>Skills</h1>
      </div>
      <div className='grid grid-cols-3 w-full gap-6 items-center justify-center'>
        {data.map((item, index) => (
          <CardSkill 
            key={index} 
            logo={item.logo} 
            title={item.title} 
            difficulty={item.difficulty} 
            color={item.color}
            borderColor={item.borderColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Skill;
