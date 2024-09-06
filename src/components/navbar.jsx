"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
    const nav = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '#about' },
        { id: 3, name: 'Skill', path: '#skill' },
        { id: 4, name: 'Project', path: '#project' },
        { id: 5, name: 'Contact', path: '#contact' },
    ]
    return (
        <nav className="fixed justify-center flex w-screen top-8 z-50">
            <ul className='flex gap-4 md:gap-12 w-fit  backdrop-blur-lg border px-6 md:px-10 py-5 border-[#27272A] rounded-full'>
                {nav.map((item) => (
                    <a href={item.path} className="font-medium text-sm md:text-[16px]" key={item.id} >{item.name}</a>
                ))}
            </ul>
        </nav>
        // <nav className='md:py-8 py-4 px-8 md:px-[114px] z-50 w-full  bg-[#0C0C0C]  fixed  flex items-center justify-between border-b border-gray-300'>
        //     <h1 className='text-secondary font-bold text-[20px]'>
        //         Nareswara
        //     </h1>
        //     <button
        //         className="flex flex-col h-12 w-12  rounded justify-center items-center group md:hidden"
        //         onClick={() => setIsOpen(!isOpen)}
        //     >
        //         <div
        //             className={`${genericHamburgerLine} ${isOpen
        //                 ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
        //                 : "opacity-50 group-hover:opacity-100"
        //                 }`}
        //         />
        //         <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        //         <div
        //             className={`${genericHamburgerLine} ${isOpen
        //                 ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
        //                 : "opacity-50 group-hover:opacity-100"
        //                 }`}
        //         />
        //     </button>
        //     <ul className='md:flex gap-12 hidden'>
        //         {nav.map((item) => (
        //             <Link href={item.path} className="font-medium text-[16px]" key={item.id} >{item.name}</Link>
        //         ))}
        //     </ul>
        //     {isOpen && (
        //         <div className="absolute top-20 backdrop-blur-sm inset-x-8 border border-[#27272A] bg-transparent px-12 py-12 rounded-xl">
        //         <ul className="flex flex-col  font-bold ">
        //                 {nav.map((item) => (
        //                     <li key={item.id} className="hover:bg-primary hover:text-white p-2 rounded-2xl ">
        //                         <Link href={item.path}>
        //                             <h3 className=" text-lg  sm:text-2xl w-max">{item.name}</h3>
        //                         </Link>
        //                     </li>
        //                 ))}

        //             </ul>
        //         </div>
        //     )}
        // </nav>
    )
}

export default Navbar