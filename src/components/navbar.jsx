import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const nav =[
        {id:1, name:'Home', path:'/'},
        {id:2, name:'About', path:'/about'},
        {id:3, name:'Contact', path:'/contact'},
        {id:4, name:'Services', path:'/services'},
        {id:5, name:'Portfolio', path:'/portfolio'},
    ]
  return (
        <nav className='py-8 px-[114px] z-50 w-full  bg-[#0C0C0C]  fixed  flex justify-between border-b border-gray-300'>
            <h1 className='text-secondary font-bold text-[20px]'>
                Nareswara
            </h1>
            <ul className='flex gap-12'>
                {nav.map((item) => (
                    <Link href={item.path} className="font-medium text-[16px]" key={item.id} >{item.name}</Link>
                ))}
            </ul>
        </nav>
  )
}

export default Navbar