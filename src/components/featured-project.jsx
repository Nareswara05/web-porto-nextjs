import { nuri } from '@/lib/utils/image'
import React from 'react'
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
import CardProject from './common/card-project'

const FeaturedProject = () => {
    const projects =[
        {
            title: 'Project 1',
            type : 'Web Development',
            desc : 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
            link : 'https://www.google.com',
            programs: [
                { logo: RiReactjsFill, color: '#61DBFB' },
                {logo : RiTailwindCssFill, color : '#61DBFB'},
            ],
            image : nuri,
        },
    ]
    return (
        <div className='flex flex-col gap-16 items-center justify-center'>
            <div className='pb-2 w-fit  border-secondary border-b-2'>
                <h1 className='text-center text-white text-[40px] font-bold'> Featured Project</h1>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                {projects.map((item) => (
                    <CardProject title={item.title} type={item.type} link={item.link} programs={item.programs} desc={item.desc} image={item.image} />
                ))}
            </div>

        </div>
    )
}

export default FeaturedProject