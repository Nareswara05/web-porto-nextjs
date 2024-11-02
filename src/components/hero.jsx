import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Button from './common/button';


const Hero = () => {
    return (
        <div className="flex flex-col h-screen text-center md:py-44 justify-center items-center gap-2  z-10 relative">
            <h1 className="font-semibold text-3xl md:text-[32px] text-white">Hello there!, i am <span style={{
                background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
            }}>
                Nareswara
            </span>
            </h1>
            <div className='flex flex-col items-center  md:gap-10 md:pt-4 text-center ju'>
                <h1 className="md:text-[60px] lg:text-[70px] text-lg font-semibold text-white">I’m specialising in </h1>
                <div className='lg:text-[60px]  text-2xl font-extrabold text-center md:text-5xl'>
                    <TypeAnimation
                        sequence={[
                            'Web Developer', 1000,
                            'Software Engineer', 1000,
                            'UI Designer', 1000,
                            'UX Researcher', 1000,
                        ]}
                        wrapper="span"
                        style={{
                            background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                        repeat={Infinity}
                        className='text-center'
                    />
                </div>
            </div>
            {/* <button className='button-with-gradient-border flex items-center gap-1'>
                About Me
                <div className='text-xl rotate-90'>
                    <RiArrowRightDoubleLine />
                </div>
            </button> */}
            
                <Button />
        </div>
    )
}

export default Hero