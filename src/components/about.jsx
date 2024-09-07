import React from 'react'
import Image from 'next/image'
import { me, profile } from '@/lib/utils/image'
import { HiOutlineDownload } from "react-icons/hi";
import CardDo from './common/card-do';
import WhatIDo from './what-i-do';
import { TbDownload } from "react-icons/tb";



const About = () => {
    return (
        <div id="about" className='flex justify-center items-center flex-col gap-16'>
            <div className='pb-2 w-fit  border-secondary border-b-2'>
                <h1 className='text-center text-white text-3xl md:text-[40px] font-bold'>About Me</h1>
            </div>
            <div className='flex lg:flex-row flex-col-reverse items-center md:justify-between lg:mt-8 h-fit w-full'>
                <div className='flex flex-col justify-between items-start'>
                    <div>
                        <h1
                            style={{
                                background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                            className='text-[32px] font-bold'
                        >
                            Hello!
                        </h1>
                        <h1 className='lg:text-lg text-justify   text-sm  font-normal lg:max-w-[500px] xl:max-w-[600px]'>
                            My name is Nareswara Maulana Aletha Alhaq, but you can call me Nares. I am a student at SMK Raden Umar Said Kudus with a keen interest in <span className='text-primary'>FrontEnd Web Development</span> and <span className='text-secondary'>UI/UX Design</span>. I love turning design mockups into interactive, user-friendly websites using modern web technologies. My passion for UI/UX design comes from a desire to create intuitive and enjoyable user experiences. I am proficient with tools like Figma and Adobe XD, and I value collaboration and communication in team settings.
                        </h1>
                    </div>
                    <a
                        href="/CV_Nares.pdf"
                        download="CV_Nares.pdf"
                        className="w-full"
                    >
                        <button
                            type="button"
                            className="bg-transparent mt-8 text-center w-full sm:w-48 md:w-64 xl:w-72 rounded-2xl h-14 relative text-white lg:text-md font-medium border-[#27272A] border group"
                        >
                            <p className="transform -translate-x-5 text-sm">Download CV</p>
                            <div
                                className="bg-[#27272A] text-2xl backdrop-blur-xl rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-full z-10 duration-500"
                            >
                                <TbDownload />
                            </div>
                        </button>
                    </a>




                </div>
                <Image
                    src={me}
                    className="lg:w-[350px] h-[200px] md:h-[350px] rounded-xl object-cover"
                    alt=''
                />
            </div>
            <div>
                <WhatIDo />
            </div>
        </div>
    )
}

export default About