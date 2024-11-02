import React from 'react';

const CardSkill = ({ logo: Logo, title, difficulty, color, borderColor, backgroundColor }) => {
    return (
        <div
            className={`group h-full sm:justify-start border border-transparent  sm:w-full rounded-xl transition-all duration-300 bg-[#323443] bg-opacity-20 p-4 flex items-center justify-center hover:cursor-pointer hover:scale-105  ${borderColor} ${backgroundColor} hover:bg-opacity-5`}
        >
            <div className='flex sm:gap-4 items-center'>
                <div className='text-4xl'>
                    <Logo className={`text-5xl lg:text-3xl transition-all text-white duration-300 ${color}`} />
                </div>
                <div>
                    <h1
                        className={`text-white transition-all duration-300 font-semibold md:text-[16px] lg:text-[20px] hidden sm:block ${color}`}
                    >
                        {title}
                    </h1>
                    <p
                        className='font-normal text-[14px] hidden sm:block'
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
            <div className=' w-full text-center sm:hidden absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 p-2 bg-[#3F4152] rounded-lg text-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                {title}
              </div>
        </div>
    );
};

export default CardSkill;
