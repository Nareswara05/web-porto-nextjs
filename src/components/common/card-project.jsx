import React from 'react'
import Image from 'next/image'
import { IoArrowForward } from "react-icons/io5";

const CardProject = ({ image, title, type, desc, link, programs }) => {
    return (
        <div className='flex gap-16 w-full '>
            <div className='bg-[#323443] p-12 rounded-xl relative'>
                <div className='p-2 bg-[#3F4152] rounded-lg text-md w-fit absolute right-3 top-3'>
                    <div className='-rotate-45 text-lg'>
                        <IoArrowForward />
                    </div>
                </div>
                <Image src={image} alt={title} width={300} height={100} className='rounded-xl' />
            </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='font-semibold text-[18px] text-[#DEDEDE]'>{type}</h1>
                    <h1 className='font-bold text-[40px]'>{title}</h1>
                    <h1 className='font-normal text-[18px] w-[500px] text-gray-200'>{desc}</h1>
                </div>
                <div className='flex gap-3'>
                    {programs.map((program, index) => (
                        <div key={index} className='bg-[#323443] p-2 text-3xl rounded-xl' style={{ color: program.color }}>
                            <program.logo />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardProject
