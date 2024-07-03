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
    <div>
      <ParticleComponent />
      <Navbar />
      <div className='flex flex-col gap-12 relative z-10 px-[114px] py-20'>
        <Hero />
        <About />
        <Skill/>
        <FeaturedProject/>
      </div>
    </div>
  )
}
