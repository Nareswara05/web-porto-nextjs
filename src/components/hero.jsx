import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { RiArrowRightDoubleLine } from "react-icons/ri";


const Hero = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center gap-2  z-10 relative">
            <h1 className="font-semibold text-[32px]">Hello there!, i am <span style={{
                background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
            }}>
                Nareswara
            </span>
            </h1>
            <div className='flex flex-col items-center'>
                <h1 className="text-[64px] font-semibold">I’m specialising in </h1>
                <div className='text-[64px] font-bold'>
                    <TypeAnimation
                        sequence={[
                            'FrontEnd Web Developer', 1000,
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
                    />
                </div>
            </div>
            <button className='button-with-gradient-border flex items-center gap-1'>
                About Me
                <div className='text-xl rotate-90'>
                    <RiArrowRightDoubleLine />
                </div>
            </button>
        </div>
    )
}

export default Hero