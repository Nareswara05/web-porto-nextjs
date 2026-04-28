"use client"

import About from '@/components/about';
import ExperienceWork from '@/components/experience-work';
import FeaturedProject from '@/components/featured-project';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import ParticleComponent from '@/components/particle';
import Skill from '@/components/skill';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

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
