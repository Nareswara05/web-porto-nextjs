import React from 'react';

const ExperienceWork = () => {
    const experiences = [
        {
            id: 1,
            period: '2023 - Present',
            role: 'Frontend Web Developer',
            company: 'Company Name',
            location: 'Remote / Location'
        },
        {
            id: 2,
            period: '2022 - 2023',
            role: 'UI/UX Designer',
            company: 'Company Name',
            location: 'Remote / Location'
        }
    ];

    return (
        <div className='flex flex-col gap-8 w-full mt-4'>
            <div>
                <h1 className='font-bold text-xl md:text-[28px] text-white'>Work Experience</h1>
            </div>
            <div className='relative border-l-2 border-white/10 ml-3 md:ml-4 space-y-8 md:space-y-10 w-full'>
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className='relative pl-6 md:pl-10 w-full group'
                        data-aos="fade-up"
                    >
                        <div className='absolute -left-[9px] top-6 md:top-8 w-4 h-4 rounded-full bg-[#1A1A1A] border-2 border-primary z-10 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(59,246,134,0.6)] transition-all duration-300' />

                        <div className='relative w-full bg-white/5 backdrop-blur-md px-6 py-6 md:px-8 md:py-8 flex flex-col rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-300 overflow-hidden'>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className='flex flex-col md:flex-row justify-between gap-4 z-10'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-white font-bold text-xl md:text-2xl group-hover:text-primary transition-colors duration-300'>{exp.role}</h1>
                                    <h2 className='text-gray-300 font-medium text-sm md:text-md'>{exp.company}</h2>
                                </div>
                                <div className='flex flex-col md:items-end gap-3 md:gap-2'>
                                    <p
                                        style={{
                                            background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                        }}
                                        className='font-semibold text-xs md:text-sm bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full w-fit shadow-sm'>
                                        {exp.period}
                                    </p>
                                    <p className='text-gray-400 font-normal text-xs md:text-sm flex md:justify-end'>{exp.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceWork;
