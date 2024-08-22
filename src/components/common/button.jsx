import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Button = () => {
    return (
        <a href="#about " className="mt-12 relative inline-flex items-center justify-center px-6 py-3  md:px-10 md:py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r bg-opacity-35 from-primary to-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative flex gap-1 items-center text-sm">About Me<MdKeyboardDoubleArrowDown classNameName="text-lg md:text-xl animate-bounce"/></span>
        </a>
    )
}

export default Button