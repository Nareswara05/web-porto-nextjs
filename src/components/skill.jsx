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
        borderColor: 'hover:border-[#E44D26]',
        backgroundColor: 'hover:bg-[#E44D26]',
    },
    {
        logo: FaCss3,
        title: 'CSS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#1E90FF]',
        borderColor: 'hover:border-[#1E90FF]',
        backgroundColor: 'hover:bg-[#1E90FF]',
    },
    {
        logo: IoLogoJavascript,
        title: 'JavaScript',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#F7E04C]',
        borderColor: 'hover:border-[#F7E04C]',
        backgroundColor: 'hover:bg-[#F7E04C]',
    },
    {
        logo: FaReact,
        title: 'React JS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#61DAFB]',
        borderColor: 'hover:border-[#61DAFB]',
        backgroundColor: 'hover:bg-[#61DAFB]',
    },
    {
        logo: SiNextdotjs,
        title: 'Next JS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#00E5A7]',
        borderColor: 'hover:border-[#00E5A7]',
        backgroundColor: 'hover:bg-[#00E5A7]',
    },
    {
        logo: RiTailwindCssFill,
        title: 'Tailwind CSS',
        difficulty: 'Advanced',
        color: 'group-hover:text-[#38B2AC]',
        borderColor: 'hover:border-[#38B2AC]',
        backgroundColor: 'hover:bg-[#38B2AC]',
    },
    {
        logo: SiFlutter,
        title: 'Flutter',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#03A9F4]',
        borderColor: 'hover:border-[#03A9F4]',
        backgroundColor: 'hover:bg-[#03A9F4]',
    },
    {
        logo: FaPhp,
        title: 'PHP',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#9B5DE5]',
        borderColor: 'hover:border-[#9B5DE5]',
        backgroundColor: 'hover:bg-[#9B5DE5]',
    },
    {
        logo: SiLaravel,
        title: 'Laravel',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#FF4F4F]',
        borderColor: 'hover:border-[#FF4F4F]',
        backgroundColor: 'hover:bg-[#FF4F4F]',
    },
    {
        logo: SiMysql,
        title: 'MySQL',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#5DADE2]',
        borderColor: 'hover:border-[#5DADE2]',
        backgroundColor: 'hover:bg-[#5DADE2]',
    },
    {
        logo: SiTypescript,
        title: 'TypeScript',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#3178C6]',
        borderColor: 'hover:border-[#3178C6]',
        backgroundColor: 'hover:bg-[#3178C6]',
    },
    {
        logo: FaJava,
        title: 'Java',
        difficulty: 'Intermediate',
        color: 'group-hover:text-[#00B0FF]',
        borderColor: 'hover:border-[#00B0FF]',
        backgroundColor: 'hover:bg-[#00B0FF]',
    },
];


//   const data = [
//     {
//         logo: FaHtml5,
//         title: 'HTML',
//         difficulty: 'Advanced',
//         color: 'text-[#E44D26]',
//         borderColor: 'border-[#E44D26]',
//     },
//     {
//         logo: FaCss3,
//         title: 'CSS',
//         difficulty: 'Advanced',
//         color: 'text-[#1E90FF]',
//         borderColor: 'border-[#1E90FF]',
//     },
//     {
//         logo: IoLogoJavascript,
//         title: 'JavaScript',
//         difficulty: 'Advanced',
//         color: 'text-[#F7E04C]',
//         borderColor: 'border-[#F7E04C]',
//     },
//     {
//         logo: FaReact,
//         title: 'React JS',
//         difficulty: 'Advanced',
//         color: 'text-[#61DAFB]',
//         borderColor: 'border-[#61DAFB]',
//     },
//     {
//         logo: SiNextdotjs,
//         title: 'Next JS',
//         difficulty: 'Advanced',
//         color: 'text-[#00E5A7]',
//         borderColor: 'border-[#00E5A7]',
//     },
//     {
//         logo: RiTailwindCssFill,
//         title: 'Tailwind CSS',
//         difficulty: 'Advanced',
//         color: 'text-[#38B2AC]',
//         borderColor: 'border-[#38B2AC]',
//     },
//     {
//         logo: SiFlutter,
//         title: 'Flutter',
//         difficulty: 'Intermediate',
//         color: 'text-[#03A9F4]',
//         borderColor: 'border-[#03A9F4]',
//     },
//     {
//         logo: FaPhp,
//         title: 'PHP',
//         difficulty: 'Intermediate',
//         color: 'text-[#9B5DE5]',
//         borderColor: 'border-[#9B5DE5]',
//     },
//     {
//         logo: SiLaravel,
//         title: 'Laravel',
//         difficulty: 'Intermediate',
//         color: 'text-[#FF4F4F]',
//         borderColor: 'border-[#FF4F4F]',
//     },
//     {
//         logo: SiMysql,
//         title: 'MySQL',
//         difficulty: 'Intermediate',
//         color: 'text-[#5DADE2]',
//         borderColor: 'border-[#5DADE2]',
//     },
//     {
//         logo: SiTypescript,
//         title: 'TypeScript',
//         difficulty: 'Intermediate',
//         color: 'text-[#3178C6]',
//         borderColor: 'border-[#3178C6]',
//     },
//     {
//         logo: FaJava,
//         title: 'Java',
//         difficulty: 'Intermediate',
//         color: 'text-[#00B0FF]',
//         borderColor: 'border-[#00B0FF]',
//     },
// ];





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
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Skill;
