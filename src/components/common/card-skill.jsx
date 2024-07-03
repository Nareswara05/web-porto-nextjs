import React from 'react'

const CardSkill = ({ logo: Logo, title, difficulty }) => {
    return (
        <div className='w-[320px]   rounded-xl bg-[#323443] bg-opacity-80 border border-secondary p-4 flex items-center'>
            <div className='flex gap-4 items-center '>
                <div className='text-4xl'>
                    <Logo />
                </div>
                <div>
                    <h1 className='text-white font-semibold text-[20px]'>{title}</h1>
                    <p className='font-normal text-[14px]' 
                    style={{
                        background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}>{difficulty}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSkill