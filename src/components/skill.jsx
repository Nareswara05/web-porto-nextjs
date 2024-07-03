import React from 'react'
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
        },
        {
          logo: FaCss3,
          title: 'CSS',
          difficulty: 'Advanced',
        },
        {
          logo: IoLogoJavascript,
          title: 'Javascript',
          difficulty: 'Advanced',
        },
        {
          logo: FaReact,
          title: 'React JS',
          difficulty: 'Advanced',
        },
        {
          logo: SiNextdotjs,
          title: 'Next JS',
          difficulty: 'Advanced',
        },
        {
          logo: RiTailwindCssFill,
          title: 'Tailwind CSS',
          difficulty: 'Advanced',
        },
        {
          logo: SiFlutter,
          title: 'Flutter',
          difficulty: 'Intermediate',
        },
        {
          logo: FaPhp,
          title: 'PHP',
          difficulty: 'Intermediate',
        },
        {
          logo: SiLaravel,
          title: 'Laravel',
          difficulty: 'Intermediate',
        },
        {
          logo: SiMysql,
          title: 'MySQL',
          difficulty: 'Intermediate',
        },
        {
          logo: SiTypescript,
          title: 'TypeScript',
          difficulty: 'Intermediate',
        },
        {
          logo: FaJava,
          title: 'Java',
          difficulty: 'Intermediate',
        },
      ];

    return (
        <div className='flex flex-col gap-16 justify-center items-center'>
            <div className='pb-2 w-fit  border-primary border-b-2'>
                <h1 className='text-center text-white text-[40px] font-bold'> Skills</h1>
            </div>
            <div className='flex flex-wrap gap-6 items-center justify-center'>
            {data.map((item, index) => (
                <CardSkill key={index} logo={item.logo} title={item.title} difficulty={item.difficulty} />
            ))}
            </div>
        </div>
    )
}

export default Skill