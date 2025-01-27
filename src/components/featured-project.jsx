import React, { useEffect } from 'react';
import { IoMdMenu } from "react-icons/io";
import projects from '@/app/project/project';
import CardProject from './common/card-project';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProject = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, easing: "ease-out", once: false });
    }, []);

    return (
        <div 
            className='flex flex-col gap-16 justify-center' 
            id="project"
            data-aos="fade-up"
        >
            <div 
                className='pb-2 w-fit border-secondary border-b-2 mx-auto'
                data-aos="fade-right"
            >
                <h1 className='text-center text-white text-3xl md:text-[40px] font-bold'> Featured Project</h1>
            </div>
            <div 
                className='flex flex-col gap-10 w-full'
            >
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
            <Link href="/project">
                <button 
                    className="md:px-10 px-6 w-fit text-white py-4 bg-[#323443] bg-opacity-20 hover:bg-opacity-40 text-sm md:text-lg rounded-xl flex gap-2 items-center"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    <IoMdMenu />
                    See More
                </button>
            </Link>
        </div>
    );
}

export default FeaturedProject;
