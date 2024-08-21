import CardProject from '@/components/common/card-project'
import { nuri } from '@/lib/utils/image'
import React from 'react'
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'

const page = () => {
    const projects =[
        {
            title: 'Project 1',
            type : 'Web Development',
            desc : 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
            link : 'https://www.google.com',
            programs: [
                { logo: RiReactjsFill, color: '#61DBFB', prev: 'reactjs' },
                {logo : RiTailwindCssFill, color : '#61DBFB', prev : 'tailwindcss' },
            ],
            image : nuri,
        },
    ]
  return (
    <div className='px-[114px] py-32 relative z-10'>
        <h1 className='text-[50px] w-1/3 font-bold'>Project that i has been <span className='text-primary'>done</span></h1>
        <div className='flex flex-col gap-3 w-full pt-10'>
                {projects.map((item) => (
                    <CardProject title={item.title} key={item.id} type={item.type} link={item.link} programs={item.programs} desc={item.desc} image={item.image} />
                ))}
            </div>
    </div>
  )
}

export default page