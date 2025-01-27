"use client"

import CardProject from '@/components/common/card-project'
import { nuri } from '@/lib/utils/image'
import React from 'react'
import projects from './project'

const page = () => {
    
  return (
    <div className='px-10 lg:px-[114px] py-28 lg:py-12 relative z-10'>
        <h1 className='text-[30px] md:text-[40px] lg:text-[50px] w-full md:w-2/3 lg:w-1/3 font-bold'>
          Project that I have <span className='text-primary'>done</span>
        </h1>
        <div className='flex flex-col gap-8 md:gap-10 lg:gap-12 w-full pt-8 md:pt-10 lg:pt-12'>
            {projects.map((item, index) => (
                <CardProject 
                title={item.title} 
                key={index} 
                type={item.type} 
                link={item.link} 
                programs={item.programs} 
                desc={item.desc} 
                image={item.image} 
                isReversed={index % 2 !== 0}
                />
            ))}
        </div>
    </div>
  )
}

export default page
