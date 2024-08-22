import React from 'react';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

const CardProject = ({ image, title, type, desc, link, programs }) => {
    return (
        <div className='flex lg:flex-row gap-8 flex-col lg:justify-between'>
            <div className='bg-[#323443] bg-opacity-20 p-12 rounded-xl relative'>
                <div className='p-2 bg-[#3F4152] rounded-lg text-md w-fit absolute right-3 top-3'>
                    <div className='-rotate-45 text-lg'>
                        <IoArrowForward />
                    </div>
                </div>
                <Image src={image} alt={title} width={1000} height={1000} className='rounded-xl w-full ' />
            </div>
            <div className='flex flex-col gap-9 lg:justify-between'>
                <div className="w-full">
                    <h1 className='font-semibold text-[14px] md:text-[18px] text-[#DEDEDE]'>{type}</h1>
                    <h1 className='font-bold text-[36px] md:text-[40px]'>{title}</h1>
                    <h1 className='font-normal text-[12px] md:text-[18px] lg:w-[650px] text-gray-200'>{desc}</h1>
                </div>
                <div className='flex gap-3'>
                    {programs.map((program, index) => (
                        <div key={index} className='relative group'>
                            <button
                                title={program.prev}
                                className='bg-[#323443] bg-opacity-20 p-2 text-3xl rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-110'
                                style={{ color: program.color }}
                            >
                                <program.logo />
                            </button>
                            <div className='absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 p-2 bg-[#3F4152] rounded-lg text-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                {program.prev}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardProject;
