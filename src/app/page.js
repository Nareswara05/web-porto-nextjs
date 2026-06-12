"use client"

import About from '@/components/about';
import ExperienceWork from '@/components/experience-work';
import FeaturedProject from '@/components/featured-project';
import Hero from '@/components/hero';
import Skill from '@/components/skill';
import React from 'react';

export default function Home() {
  return (
      <div className='flex flex-col gap-20 relative z-20 px-[40px] md:px-[60px]  lg:px-[114px] py-12'>
        <Hero />
        <About />
        <ExperienceWork/>
        <Skill/>
        <FeaturedProject/>
      </div>
  )
}
