import React from 'react'
import { BiSolidColorFill } from "react-icons/bi";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaClipboardList, FaPuzzlePiece } from "react-icons/fa";

import CardDo from './common/card-do';
const WhatIDo = () => {
    const data = [
        {
            id: 1,
            icon: BiSolidColorFill,
            title: 'UI Design',
            desc: 'I craft intuitive and visually appealing interfaces tailored to user needs.'
        },
        {
            id: 2,
            icon: BsGlobeAsiaAustralia,
            title: 'Web Development',
            desc: 'I build responsive, high-performing websites with modern technologies.'
        },
        {
            id: 3,
            icon: FaClipboardList,
            title: 'UX Researcher',
            desc: 'I analyze user behavior to create designs that improve user experiences.'
        },
        {
            id: 4,
            icon: FaPuzzlePiece ,
            title: 'Problem Solving',
            desc: 'I deliver creative solutions to complex design and development challenges.'
        },
    ]
  
    return (
        <div className='flex xl:flex-row flex-col gap-12 lg:justify-between'>
            <div>
                <h1 className='font-bold text-xl md:text-[28px] '>What Can I do?</h1>
                <h2 className='text-sm lg:text-[16px] font-normal pt-2 pr-2'>
                  I can build websites from 
                  <span className='text-primary font-semibold'> UI design</span> 
                  to solving user problems and 
                  <span className='text-secondary font-semibold'> developing</span> 
                  them based on the designs.
                </h2>
            </div>
            <div className='xl:flex gap-4 xl:flex-row grid grid-cols-2'>
                {data.map((item) => (
                    <CardDo key={item.id} icon={item.icon} title={item.title} desc={item.desc}/>
                ))}
            </div>
        </div>
    )
}

export default WhatIDo;
