import React from 'react'
import Image from 'next/image'
import { profile } from '@/lib/utils/image'
import { HiOutlineDownload } from "react-icons/hi";
import CardDo from './common/card-do';
import WhatIDo from './what-i-do';


const About = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <div className='pb-2 w-fit  border-secondary border-b-2'>
                <h1 className='text-center text-white text-[40px] font-bold'>About Me</h1>
            </div>
            <div className='flex justify-between mt-8 h-fit w-full'>
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
                        <h1 className='text-base font-normal max-w-[600px]'>
                        My name is Nareswara Maulana Aletha Alhaq, but you can call me Nares. I am a student at SMK Raden Umar Said Kudus with a keen interest in <span className='text-primary'>FrontEnd Web Development</span> and <span className='text-secondary'>UI/UX Design</span>. I love turning design mockups into interactive, user-friendly websites using modern web technologies. My passion for UI/UX design comes from a desire to create intuitive and enjoyable user experiences. I am proficient with tools like Figma and Adobe XD, and I value collaboration and communication in team settings.                   
                        </h1>
                    </div>
                    <button className='px-6 py-4 bg-[#323443] flex items-center gap-2 rounded-xl hover:border hover:scale-110 transform transition-all hover:border-secondary duration-500 '>
                        Download CV
                        <div className='text-xl'>
                            <HiOutlineDownload />
                        </div>
                    </button>
                </div>
                <Image
                    src={profile}
                    className="w-[350px] h-[350px] rounded-xl object-cover"
                />
            </div>
            <div>
                <WhatIDo/>
            </div>
        </div>
    )
}

export default About