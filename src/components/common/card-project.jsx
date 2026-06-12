import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

const CardProject = ({ image, title, type, desc, link, programs, isReversed }) => {
  return (
    <div className={`card-project flex ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col gap-8 lg:gap-12 items-center`}>

      {/* Image */}
      <div className="card-project-img-wrap lg:w-[52%] w-full flex-shrink-0 group/img">
        <div className="card-project-img-inner">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 52vw"
            quality={85}
            className="card-project-img"
          />
          <div className="card-project-img-overlay" />
          {/* {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-project-visit"
            >
              <IoArrowForward className="-rotate-45 text-lg" />
              <span className="text-sm font-semibold">Visit</span>
            </Link>
          )} */}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 lg:flex-1">
        <div className="flex flex-col gap-3">
          <span className="card-project-type">{type}</span>
          <h3 className="card-project-title">{title}</h3>
          <p className="card-project-desc">{desc}</p>
        </div>

        {/* Tech stack */}
        {programs?.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="text-xs text-white/40 uppercase tracking-widest font-medium">Built with</span>
            <div className="flex flex-wrap gap-2">
              {programs.map((program, index) => (
                <div key={index} className="relative group/tech">
                  <button
                    title={program.prev}
                    className="card-project-tech-btn"
                    style={{ color: program.color }}
                  >
                    <program.logo className="text-xl" />
                  </button>
                  <div className="card-project-tooltip">{program.prev}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProject;
