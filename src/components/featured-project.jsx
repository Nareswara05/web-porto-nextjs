import React from 'react';
import projects from '@/app/project/project';
import CardProject from './common/card-project';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const FeaturedProject = () => {
  return (
    <section className="flex flex-col gap-16" id="project">

      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ background: 'linear-gradient(to right,#4CA9FF,#3BF686)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>
          Portfolio
        </span>
        <h2 className="text-3xl md:text-[42px] font-bold text-white text-center">Featured Projects</h2>
        <div className="w-16 h-[3px] rounded-full" style={{ background: 'linear-gradient(to right,#4CA9FF,#3BF686)' }} />
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-20">
        {projects.slice(0, 2).map((item, index) => (
          <CardProject
            key={item.id}
            title={item.title}
            type={item.type}
            link={item.link}
            programs={item.programs}
            desc={item.desc}
            image={item.image}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link href="/project">
          <button className="fp-see-more-btn group">
            <span>See All Projects</span>
            <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProject;
