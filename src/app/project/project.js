import { dinacom, nuri, ruscare, smartchoice } from '@/lib/utils/image';
import { BiLogoGoLang } from 'react-icons/bi';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiFlutter, SiLaravel, SiMysql, SiNextdotjs } from 'react-icons/si';


const projects =[
        {
            title: 'KostKu App',
            type : 'App Development',
            desc : 'This project was made together with my friend as a requirement for my final assignment at my school. Here I created the Kostku application, an application made to make it easier for people to find boarding houses in the area. Here I am a frontend developer',
            link : 'https://github.com/Nareswara05/KostKu',
            programs: [
                { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
                { logo: SiFlutter, color: '#02569B', prev: 'flutter' },
                { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            ],
            
            image : "https://media.licdn.com/dms/image/v2/D562DAQHy4tXkXCZXJg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700924577071?e=1726128000&v=beta&t=2TP_FETgwx3y0Rf_W_RVox9g2EGtETHTI4GlHywt9xw",
        },
        {
            title: 'Neosantara Culture Website',
            type : 'Website Development',
            desc : 'This project was created for the TECHOMFEST 2023 website competition, which has the theme of Indonesian culture. This project was created by me and 2 of my friends, here I am the UI/UX Designer and Frontend Developer. Where we created this website based on research that we have carried out on several users.',
            link : 'https://react-techkomfest-noesantara.vercel.app/',
            programs: [
                { logo: RiReactjsFill, color: '#61DBFB', prev: 'reactjs' },
                { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
                { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
                { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            ],
            
            
            image : "https://media.licdn.com/dms/image/v2/D562DAQFHdP6hRgCPgg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704249405275?e=1726131600&v=beta&t=sN5LFjenICCjHdH6IhhS_QnrrRcVlJMfrcKYqJTogcg",
        },
        {
            title: 'SmartCarrier Website',
            type : 'Website Development',
            desc : 'This project was created for the Dinacom 2024 competition, with the theme From Smart Cities to Intelligent Governance. Where we create websites that can help the community, namely training and job search websites. After our research, it turned out that the main problem with the community was a lack of information regarding employment opportunities and a lack of adequate skills to get a job. Therefore, we created this SmartCarrier website.',
            link : 'https://github.com/Fadzaa/nextjs-smartcarrier',
            programs: [
                { logo: SiNextdotjs, color: '#00000', prev: 'nextjs' },
                { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
                { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
                { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            ],
            
            
            image : dinacom,
        },
        {
            title: 'Smartchoice Pemilu Website',
            type : 'Website Development',
            desc : 'This project was created to commemorate the PEMILU 2024 Indonesia, where we chose to create information about candidate pairs, starting from biodata, vision and mission, and videos during the presidential debate. Here there is also a real count to find out the votes of Indonesian citizens during the PEMILU 2024',
            link : 'https://github.com/Nareswara05/nextjs-smartchoice',
            programs: [
                { logo: SiNextdotjs, color: '#00000', prev: 'nextjs' },
                { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
                { logo: BiLogoGoLang, color: '#29beb0 ', prev: 'golang' },
                { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            ],
            
            
            image : smartchoice,
        },
        {
            title: 'RusCare Website Consultation',
            type : 'Website Development',
            desc : 'This website was created to fulfill my final assignment project at my school. Where I created a website for students to book consultations with guidance and counseling teachers. This website is specifically for Raden Umar Said Vocational School students.',
            link : 'https://ruscare.vercel.app/',
            programs: [
                { logo: SiNextdotjs, color: '#fffff', prev: 'nextjs' },
                { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
                { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
                { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            ],
            
            
            
            
            image : ruscare,
        },
        {
            title: 'Nuri E-Commerce App Design',
            type : 'UI Design',
            desc : 'This is a project that I worked on when I was an intern at the company PT Nuri Gaya Citra as a UI/UX Designer. Where I was asked to complete the design of the COD feature for e-commerce applications, starting from interviewing users, understanding what users feel. Create user interfaces that are easy to understand, complete prototyping and testing for users.',
            link : 'https://www.figma.com/design/nqsLkiuYaR9oxvOPPNgNgk/Project-Based-Virtual-Internship?node-id=0-1&t=cOoAgpAhkpNnQWtY-1',
            programs: [
                { logo: SiNextdotjs, color: '#fffff', prev: 'nextjs' },
                { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
                { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
                { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            ],
            
            
            
            
            image : "https://media.licdn.com/dms/image/v2/D562DAQEWZW4nzFF9CA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719359282328?e=1726153200&v=beta&t=xX72-oRtQbm3ZmzMLMOOoAnOcIgwnHPsKk5UFH3T8mc",
        },
    ]

export default projects;