import React from 'react';
import { BiSolidColorFill } from "react-icons/bi";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaClipboardList, FaPuzzlePiece } from "react-icons/fa";
import CardDo from './common/card-do';

const WhatIDo = () => {
  const data = [
    { id: 1, icon: BiSolidColorFill,      title: 'UI Design',        desc: 'Crafting intuitive and visually appealing interfaces tailored to user needs.' },
    { id: 2, icon: BsGlobeAsiaAustralia, title: 'Web Development',  desc: 'Building responsive, high-performing websites with modern technologies.' },
    { id: 3, icon: FaClipboardList,       title: 'UX Research',      desc: 'Analyzing user behavior to create designs that improve user experiences.' },
    { id: 4, icon: FaPuzzlePiece,         title: 'Problem Solving',  desc: 'Delivering creative solutions to complex design and development challenges.' },
  ]

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-bold text-xl md:text-2xl">What Can I Do?</h3>
        <p className="text-white/55 text-sm md:text-base max-w-lg leading-relaxed">
          I can build websites — from creating <span className="text-[#3BF686] font-medium">UI designs</span>, finding solutions to user problems,
          to <span className="text-[#4CA9FF] font-medium">developing</span> production-ready websites.
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {data.map((item) => (
          <CardDo key={item.id} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  )
}

export default WhatIDo;
