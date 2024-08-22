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
            desc: 'You will receive a customized plan for your fitness journey, and lots of support.'
        },
        {
            id: 2,
            icon: BsGlobeAsiaAustralia,
            title: 'Web Development',
            desc: 'You will receive a customized plan for your fitness journey, and lots of support.'
        },
        {
            id: 3,
            icon: FaClipboardList,
            title: 'UX Researcher',
            desc: 'You will receive a customized plan for your fitness journey, and lots of support.'
        },
        {
            id: 4,
            icon: FaPuzzlePiece ,
            title: 'Problem Solving',
            desc: 'You will receive a customized plan for your fitness journey, and lots of support.'
        },
    ]


  return (
    <div className='flex xl:flex-row flex-col gap-12 lg:justify-between'>
        <div>
            <h1 className='font-bold text-xl md:text-[28px] '>What Can I do?</h1>
            <h2 className='text-sm lg:text-[16px] font-normal pt-2 pr-2'>I can build websites starting from creating <span className='text-primary font-semibold'>UI designs</span>, finding solutions to user problems, and <span className='text-secondary font-semibold'>developing</span> websites according to the designs that have been made.</h2>
        </div>
        <div className='xl:flex gap-4 xl:flex-row grid grid-cols-2'>
        {data.map((item) => (
                <CardDo key={item.id} icon={item.icon} title={item.title} desc={item.desc}/>
            ))}
    </div>
    </div>
  )
}

export default WhatIDo