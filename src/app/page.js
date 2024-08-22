"use client"

import About from '@/components/about';
import FeaturedProject from '@/components/featured-project';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import ParticleComponent from '@/components/particle';
import Skill from '@/components/skill';
import React, { Component } from 'react';



export default function Home() {
  return (
      <div className='flex flex-col gap-20 relative z-20 px-[40px] md:px-[60px]  lg:px-[114px] py-20'>
        <Hero />
        <About />
        <Skill/>
        <FeaturedProject/>
      </div>
  )
}
