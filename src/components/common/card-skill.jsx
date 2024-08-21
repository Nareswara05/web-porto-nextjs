import React from 'react';

const CardSkill = ({ logo: Logo, title, difficulty, color, borderColor, backgroundColor }) => {
    return (
        <div
            className={`group border border-transparent w-full rounded-xl transition-all duration-300 bg-[#323443] bg-opacity-20 p-4 flex items-center hover:cursor-pointer hover:scale-105  ${borderColor} ${backgroundColor} hover:bg-opacity-5`}
        >
            <div className='flex gap-4 items-center'>
                <div className='text-4xl'>
                    <Logo className={`text-3xl transition-all duration-300 ${color}`} />
                </div>
                <div>
                    <h1
                        className={`text-white transition-all duration-300 font-semibold text-[20px] ${color}`}
                    >
                        {title}
                    </h1>
                    <p
                        className='font-normal text-[14px]'
                        style={{
                            background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {difficulty}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardSkill;
