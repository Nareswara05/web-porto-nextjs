import React from 'react';

const ExperienceWork = () => {
    const experiences = [
        {
            id: 1,
            period: 'Okt 2025 - Mar 2026',
            role: 'Project Manager & Frontend Web Developer',
            company: 'Aston Sistem Indonesia',
            description: [
                'Architected early-stage system foundations, including Entity-Relationship Diagrams (ERDs) and initial prototypes, to translate business concepts into technical blueprints.',
                'Managed end-to-end project lifecycles by establishing workflows, defining strict timelines, and detailing comprehensive feature specifications.',
                'Led ongoing client communications and facilitated strategic milestone meetings using structured presentation decks to align stakeholder expectations.',
                'Developed responsive front-end interfaces while enforcing collaborative engineering best practices utilizing Version Control Systems (Git/VCS).',
                'Mentored cross-functional team members and proactively resolved technical blockers to maintain project momentum and ensure timely delivery.'
            ]
        },
        {
            id: 2,
            period: 'Feb 2025 - Mar 2025',
            role: 'Internship UI/UX Designer',
            company: 'Fundex.id',
            description: [
                'Spearheaded the UI/UX redesign of the Fundex landing page to elevate visual appeal and user engagement.',
                'Analyzed and optimized end-to-end user flows, eliminating friction points to deliver a seamless and highly intuitive user experience.',
                'Developed comprehensive design systems and moodboards from scratch to ensure visual consistency and streamline the design-to-development handoff.'
            ]
        },
        {
            id: 3,
            period: 'Okt 2024 - Mar 2025',
            role: 'Internship Frontend Developer & Project Manager',
            company: 'PT Data Utama Dinamika',
            description: [
                'Architected and developed highly functional, production-ready websites tailored to solve specific client challenges.',
                'Led collaborative team workflows and managed strict project timelines to ensure efficient, on-time delivery.',
                'Translated complex client needs into scalable web features and seamlessly integrated APIs for dynamic user experiences.',
                'Acted as the primary client liaison, clearly articulating product value, core functionalities, and competitive advantages to stakeholders.',
                'Ensured flawless system performance through rigorous testing, continuous optimization, and rapid bug resolution.'
            ]
        },
        {
            id: 4,
            period: 'Mar 2024 - Mar 2025',
            role: 'Frontend Developer & UI/UX Designer',
            company: 'ByteBuilder IT Solution',
            description: [
                'Facilitated strategic client meetings to align on project objectives, present design concepts, and translate business requirements into actionable technical solutions.',
                'Conducted in-depth user interviews and research to identify core pain points, driving data-informed solutions that maximize user comfort and satisfaction.',
                'Crafted interactive, high-fidelity, and responsive UI designs using Figma to deliver an intuitive and visually engaging user experience.',
                'Engineered robust and responsive web interfaces using Next.js, seamlessly integrating APIs to guarantee smooth data flow and optimal application functionality.'
            ]
        },
        {
            id: 5,
            period: 'Nov 2023 - Des 2023',
            role: 'Internship UI/UX Designer',
            company: 'PT Nuri Gaya Citra',
            description: [
                'Designed the User Interface for a Cash on Delivery (COD) feature during a virtual internship.',
                'Conducted user research to empathize with user needs and identify key pain points.',
                'Ideated and provided actionable design solutions based on user feedback.',
                'Executed the end-to-end UI design process, from initial wireframing to final high-fidelity mockups.'
            ]
        }
    ];

    return (
        <div className='flex flex-col gap-8 w-full mt-4'>
            <div>
                <h1 className='font-bold text-xl md:text-[28px] text-white'>Work Experience</h1>
            </div>
            {/* Timeline Container */}
            <div className='relative border-l-2 border-white/10 ml-3 md:ml-4 space-y-8 md:space-y-10 w-full'>
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className='relative pl-6 md:pl-10 w-full group'
                        data-aos="fade-up"
                    >
                        {/* Timeline Dot */}
                        <div className='absolute -left-[9px] top-6 md:top-8 w-4 h-4 rounded-full bg-[#1A1A1A] border-2 border-primary z-10 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(59,246,134,0.6)] transition-all duration-300' />
                        
                        {/* Card */}
                        <div className='relative w-full bg-white/5 backdrop-blur-md px-6 py-6 md:px-8 md:py-8 flex flex-col rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-300 overflow-hidden'>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className='flex flex-col md:flex-row justify-between gap-6 z-10'>
                                <div className='flex flex-col gap-3 w-full md:w-3/4'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-white font-bold text-xl md:text-2xl group-hover:text-primary transition-colors duration-300'>{exp.role}</h1>
                                        <h2 className='text-gray-300 font-medium text-sm md:text-lg'>{exp.company}</h2>
                                    </div>
                                    <ul className='text-gray-400 font-normal text-xs md:text-sm list-disc list-outside ml-4 space-y-1.5'>
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col md:items-end gap-3 md:gap-2 w-full md:w-1/4'>
                                    <p
                                        style={{
                                            background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                        }}
                                        className='font-semibold text-xs md:text-sm bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full w-fit shadow-sm'
                                    >
                                        {exp.period}
                                    </p>
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
