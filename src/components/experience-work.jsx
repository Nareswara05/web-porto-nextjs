import React from 'react';

const experiences = [
  {
    id: 1,
    period: 'Okt 2025 – Mar 2026',
    role: 'Project Manager & Frontend Web Developer',
    company: 'Aston Sistem Indonesia',
    type: 'Internship',
    description: [
      'Architected early-stage system foundations including ERDs and initial prototypes.',
      'Managed end-to-end project lifecycles by establishing workflows and defining strict timelines.',
      'Led ongoing client communications and facilitated strategic milestone meetings.',
      'Developed responsive front-end interfaces enforcing collaborative engineering best practices (Git/VCS).',
      'Mentored cross-functional team members and resolved technical blockers to ensure timely delivery.',
    ],
  },
  {
    id: 2,
    period: 'Feb 2025 – Mar 2025',
    role: 'Internship UI/UX Designer',
    company: 'Fundex.id',
    type: 'Internship',
    description: [
      'Spearheaded the UI/UX redesign of the Fundex landing page to elevate visual appeal.',
      'Analyzed and optimized end-to-end user flows, eliminating friction points.',
      'Developed comprehensive design systems and moodboards from scratch.',
    ],
  },
  {
    id: 3,
    period: 'Okt 2024 – Mar 2025',
    role: 'Internship Frontend Developer & Project Manager',
    company: 'PT Data Utama Dinamika',
    type: 'Internship',
    description: [
      'Architected and developed production-ready websites tailored to solve client challenges.',
      'Led collaborative team workflows and managed strict project timelines.',
      'Translated complex client needs into scalable web features and integrated APIs.',
      'Ensured flawless system performance through rigorous testing and bug resolution.',
    ],
  },
  {
    id: 4,
    period: 'Mar 2024 – Mar 2025',
    role: 'Frontend Developer & UI/UX Designer',
    company: 'ByteBuilder IT Solution',
    type: 'Full-time',
    description: [
      'Facilitated strategic client meetings to align project objectives and present design concepts.',
      'Conducted in-depth user interviews and research to drive data-informed solutions.',
      'Crafted interactive, high-fidelity, responsive UI designs using Figma.',
      'Engineered robust web interfaces using Next.js with seamless API integration.',
    ],
  },
  {
    id: 5,
    period: 'Nov 2023 – Des 2023',
    role: 'Internship UI/UX Designer',
    company: 'PT Nuri Gaya Citra',
    type: 'Internship',
    description: [
      'Designed the User Interface for a Cash on Delivery (COD) feature.',
      'Conducted user research to identify key pain points.',
      'Executed the end-to-end UI design process, from wireframing to high-fidelity mockups.',
    ],
  },
];

const typeColor = {
  'Full-time': { bg: 'rgba(59,246,134,0.12)', border: 'rgba(59,246,134,0.3)', color: '#3BF686' },
  'Internship': { bg: 'rgba(76,169,255,0.12)', border: 'rgba(76,169,255,0.3)', color: '#4CA9FF' },
};

const ExperienceWork = () => {
  return (
    <section className="flex flex-col gap-14">

      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="exp-label">Career Journey</span>
        <h2 className="text-3xl md:text-[42px] font-bold text-white text-center">Work Experience</h2>
        <div className="w-16 h-[3px] rounded-full" style={{ background: 'linear-gradient(to right,#3BF686,#4CA9FF)' }} />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3BF686]/40 via-[#4CA9FF]/20 to-transparent" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => {
            const tc = typeColor[exp.type] ?? typeColor['Internship'];
            return (
              <div key={exp.id} className="relative pl-14 md:pl-20 group">
                {/* Dot */}
                <div className="exp-dot group-hover:scale-125 transition-transform duration-300" />
                {/* Index number */}
                <span className="exp-idx">{String(idx + 1).padStart(2,'0')}</span>

                {/* Card */}
                <div className="exp-card group-hover:border-white/20 transition-colors duration-300">
                  {/* Hover gradient overlay */}
                  <div className="exp-card-glow" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white font-bold text-lg md:text-xl group-hover:text-[#3BF686] transition-colors duration-300 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-white/60 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                      <span className="exp-period-badge">{exp.period}</span>
                      <span className="exp-type-badge" style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-col gap-2 relative z-10">
                    {exp.description.map((d, i) => (
                      <li key={i} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                        <span className="exp-bullet mt-1.5 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceWork;
