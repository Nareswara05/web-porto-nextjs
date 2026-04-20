"userserver"

import { asn, bbo, betteru_app, betteru_landing, birrul, dinacom, fundex, gotankAdmin, gotankDriver, gotankUser, kostku, nuri, nutrimate, padelix, plai, ppdb, ruscare, ruscareMentor, smartchoice, snbp, techcom, widarto, yasuMatcha } from '@/lib/utils/image';
import { BiLogoGoLang } from 'react-icons/bi';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiAmazon, SiFlutter, SiGooglecloud, SiGooglemaps, SiGooglesearchconsole, SiJavascript, SiLaravel, SiMeta, SiMysql, SiNextdotjs, SiTensorflow, SiTypescript } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';



const projects = [
    {
        title: 'Smartchoice Pemilu Website',
        type: 'Website Development',
        desc: 'This project was created to commemorate the PEMILU 2024 Indonesia, where we chose to create information about candidate pairs, starting from biodata, vision and mission, and videos during the presidential debate. Here there is also a real count to find out the votes of Indonesian citizens during the PEMILU 2024',
        link: 'https://github.com/Nareswara05/nextjs-smartchoice',
        programs: [
            { logo: SiNextdotjs, color: '#00000', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: BiLogoGoLang, color: '#29beb0 ', prev: 'golang' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
        ],


        image: smartchoice,
    },
    {
        title: 'Neosantara Culture Website',
        type: 'Website Development',
        desc: 'This project was created for the TECHOMFEST 2023 website competition, which has the theme of Indonesian culture. This project was created by me and 2 of my friends, here I am the UI/UX Designer and Frontend Developer. Where we created this website based on research that we have carried out on several users.',
        link: 'https://react-techkomfest-noesantara.vercel.app/',
        programs: [
            { logo: RiReactjsFill, color: '#61DBFB', prev: 'reactjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
        ],


        image: techcom
    },
    {
        title: 'KostKu App',
        type: 'App Development',
        desc: 'This project was made together with my friend as a requirement for my final assignment at my school. Here I created the Kostku application, an application made to make it easier for people to find boarding houses in the area. Here I am a frontend developer',
        link: 'https://github.com/Nareswara05/KostKu',
        programs: [
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiFlutter, color: '#02569B', prev: 'flutter' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
        ],

        image: kostku
    },
    {
        title: 'SmartCarrier Website',
        type: 'Website Development',
        desc: 'This project was created for the Dinacom 2024 competition, with the theme From Smart Cities to Intelligent Governance. Where we create websites that can help the community, namely training and job search websites. After our research, it turned out that the main problem with the community was a lack of information regarding employment opportunities and a lack of adequate skills to get a job. Therefore, we created this SmartCarrier website.',
        link: 'https://github.com/Fadzaa/nextjs-smartcarrier',
        programs: [
            { logo: SiNextdotjs, color: '#00000', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
        ],


        image: dinacom,
    },
    {
        title: 'Clone Website SNBP',
        type: 'Website Development',
        desc: 'This project was created to practice my skills in website slicing. It occurred to me to create this website because at that time there was an SNBP announcement in Indonesia',
        link: 'https://github.com/Nareswara05/Nextjs-SNBP-web',
        programs: [
            { logo: SiNextdotjs, color: '#00000', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
        ],


        image: snbp,
    },
    {
        title: 'RusCare Website Consultation',
        type: 'Website Development',
        desc: 'This website was created to fulfill my final assignment project at my school. Where I created a website for students to book consultations with guidance and counseling teachers. This website is specifically for Raden Umar Said Vocational School students.',
        link: 'https://ruscare.vercel.app/',
        programs: [
            { logo: SiNextdotjs, color: '#fffff', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
        ],




        image: ruscare,
    },
    {
        title: 'RusCare Website Consultation For Teacher',
        type: 'Website Development',
        desc: 'This website was created to fulfill my final assignment at my school. Where I created a website for guidance and counseling teachers at Raden Umar Said Vocational School. This website is to help teachers manage consultation schedules for students',
        link: 'https://ruscare-mentor.vercel.app/',
        programs: [
            { logo: SiNextdotjs, color: '#fffff', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
        ],




        image: ruscareMentor,
    },
    {
        title: 'SD Birrul Walidain Profile',
        type: 'Web Development',
        desc: 'My team and I were trusted by one of the companies in our city to create a website profile for one of the schools in our city, where we made it according to what the client wanted.',
        link: '',
        programs: [
            { logo: SiNextdotjs, color: '#ffffff', prev: 'nextjs' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            { logo: SiTypescript, color: '#3178C6', prev: 'typescript' },
        ],





        image: birrul,
    },
    {
        title: 'PPDB SD Birrul Walidain ',
        type: 'Web Development',
        desc: 'My team and I were trusted by one of the companies in our city to create a website PPDB for one of the schools in our city, where we made it according to what the client wanted.',
        link: '',
        programs: [
            { logo: SiNextdotjs, color: '#ffffff', prev: 'nextjs' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiMysql, color: '#00758F', prev: 'mysql' },
            { logo: SiTypescript, color: '#3178C6', prev: 'typescript' },
        ],





        image: ppdb,
    },
    {
        title: 'Nuri E-Commerce App Design',
        type : 'UI Design',
        desc : 'This is a project that I worked on when I was an intern at the company PT Nuri Gaya Citra as a UI/UX Designer. Where I was asked to complete the design of the COD feature for e-commerce applications, starting from interviewing users, understanding what users feel. Create user interfaces that are easy to understand, complete prototyping and testing for users.',
        link : 'https://www.figma.com/design/nqsLkiuYaR9oxvOPPNgNgk/Project-Based-Virtual-Internship?node-id=0-1&t=cOoAgpAhkpNnQWtY-1',
        programs: [
            { logo: FiFigma, color: '#0ACF83', prev: 'figma' },
        ],




        image : nuri,
    },
    {
        title: 'Redesign Website TemanASN',
        type: 'UI Design',
        desc: 'I was asked to recreate the user interface on the TemanASN website, I started improving it in terms of user comfort, the size of each button, contrasting colors and several size changes.',
        link: 'https://www.figma.com/design/nqsLkiuYaR9oxvOPPNgNgk/Project-Based-Virtual-Internship?node-id=0-1&t=cOoAgpAhkpNnQWtY-1',
        programs: [
            { logo: FiFigma, color: '#0ACF83', prev: 'figma' },
        ],




        image: asn,
    },
    {
        title: 'BetterU App',
        type: 'App Development',
        desc: 'This application made me and my team get 3rd place in the 2025 Dinus Application Competition. Where the theme of this competition was about Society 5.0, we made an application in the form of a daily calorie counter and a food calorie counter',
        link: 'https://better-u.vercel.app/',
        programs: [
            { logo: SiFlutter, color: '#02569B', prev: 'flutter' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiAmazon, color: '#FF9900', prev: 'aws' },
            { logo: SiTensorflow, color: '#FF6F00', prev: 'tensorflow' },
            { logo: SiMeta, color: '#4267B2', prev: 'meta llama' },
        ],
        image: betteru_app,
    },
    
    {
        title: 'BetterU Landing Page',
        type: 'Web Development',
        desc: 'This website is also used to provide information related to the BetterU Application',
        link: 'https://better-u.vercel.app/',
        programs: [
            { logo: SiNextdotjs, color: '#fffff', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
        ],
        image: betteru_landing,
    },
    {
        title: 'Buah Baru Online Website Design',
        type : 'UI Design',
        desc : 'This project was a request from one of my clients, he asked me to make a UI design for an online fruit sales website in Yogyakarta',
        link : '#',
        programs: [
            { logo: FiFigma, color: '#0ACF83', prev: 'figma' },
        ],
        image : bbo,
    },
    {
        title: 'FundEx Website Redesign',
        type : 'UI Design',
        desc : 'When I was interning at FundEx.Id, I was given the task of redesigning the landing page of the FundEx website by providing Moodboards and Design Systems.',
        link : '#',
        programs: [
            { logo: FiFigma, color: '#0ACF83', prev: 'figma' },
        ],
        image : fundex,
    },
    {
        title : 'GoTank Website Admin',
        type : 'Web Development',
        desc : 'This project is a comprehensive administrative dashboard designed for GoTank, an innovative platform focused on streamlining water distribution services. The system serves as a central command center to manage PDAM customer orders with precision and efficiency. Beyond order fulfillment, the dashboard empowers administrators to maintain high service standards through an integrated Customer Complaint Management system. It also features Real-Time Fleet Tracking, allowing for live monitoring of driver locations during water deliveries to ensure transparency and punctuality. To support data-driven decision-making, I integrated a Sales Analytics module that provides detailed recaps and insights into business performance.',
        link : '#',
        programs: [
            { logo: SiNextdotjs, color: '#fffff', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiGooglecloud, color:'#4285F4', prev: 'google cloud' }
        ],
        image : gotankAdmin,
    },
    {
        title : 'GoTank Application for Public',
        type : 'App Development',
        desc : 'Developed as a seamless interface for PDAM Salatiga customers, this application digitizes the entire water procurement journey. It empowers users to transition from traditional methods to a modern, digital ecosystem—enabling everything from instant water ordering and payments to real-time delivery tracking. The app also serves as a direct communication bridge, allowing users to file and monitor complaints efficiently, ensuring a transparent and reliable service experience.',
        link : '#',
        programs: [
            { logo: SiFlutter, color: '#02569B', prev: 'flutter' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
            { logo: SiGooglecloud, color:'#4285F4', prev: 'google cloud' },
            { logo: SiGooglemaps, color:'#42f47dff', prev: 'google maps' },
        ],
        image : gotankUser,
    },
    {
        title : 'GoTank Application for Driver',
        type : 'App Development',
        desc : 'Designed as a dedicated tool for PDAM Salatiga’s delivery fleet, this application streamlines the end-to-end water distribution process. It functions as a digital co-pilot, enabling drivers to receive automated task assignments and access precision navigation to customer locations. By digitizing the workflow—from initial dispatch to final delivery—the app ensures operational transparency and allows drivers to provide real-time progress reports, significantly improving fulfillment speed and service reliability.',
        link : '#',
        programs: [
            { logo: SiFlutter, color: '#02569B', prev: 'flutter' },
            { logo: SiLaravel, color: '#FF2D20', prev: 'laravel' },
        ],
        image : gotankDriver,
    },
    {
        title : 'Widarto Impact',
        type : 'Web Development',
        desc : 'I got this project, where I overhauled almost 70% of the website content, starting from changing the theme, changing the database structure, adding a contact us feature that is connected to email.',
        link : '#',
        programs: [
            {
                logo : SiLaravel,
                color : '#FF2D20',
                prev : 'laravel'
            },
            {
                logo : SiMysql,
                color : '#00758F',
                prev : 'mysql'
            },
            {
                logo : RiTailwindCssFill,
                color : '#06B6D4',
                prev : 'tailwindcss'
            },
        ],
        image : widarto,
    },
    {
        title : 'Yasu Matcha',
        type : 'UI Design',
        desc : 'I got a project to design a website for a product called Yasu Matcha, where I did brainstorming, meeting with clients, making wireframes and making Hi-Fi Design.',
        link : '#',
         programs: [
            { logo: FiFigma, color: '#0ACF83', prev: 'figma' },
        ],
        image : yasuMatcha,
    },
    {
        title : 'Plai Cafe',
        type : 'UI Design',
        desc : 'I got a project to design a website for a cafe in Yogyakarta called Plai Cafe where I did brainstorming, meeting with clients, making wireframes and making Hi-Fi Design.',
        link : '#',
        programs: [
            { logo: FiFigma, color: '#0ACF83', prev: 'figma' },
        ],
        image : plai,
    },
    {
        title : 'Padelix',
        type : 'UI Design',
        desc : 'I was asked to make changes to sections on the Padelix website, where I changed several sections according to the client request.',
        link : '#',
         programs: [
            { logo: FiFigma, color: '#0ACF83', prev: 'figma' },
        ],
        image : padelix,
    },
    {
        title : 'Nutrimate - AI Nutrition Tracker',
        type : 'Web Development',
        desc : 'I participated in the ITFest Web Development Competition at UMK and won second place. I created a nutrition tracking website, where we can see how much nutrition our body needs, how much food nutrition we consume, recommendations for suitable foods for our body, and see how many calories we burn during exercise. This website is powered by Artificial Intelligence, where we only need to mention the name of the food and the type of exercise, and the AI ​​will analyze the nutrition and how many calories are burned.',
        link : '#',
        programs: [
            { logo: SiNextdotjs, color: '#fffff', prev: 'nextjs' },
            { logo: SiJavascript, color: '#F7DF1E', prev: 'javascript' },
            { logo: RiTailwindCssFill, color: '#06B6D4', prev: 'tailwindcss' },
            { logo: SiAmazon, color: '#FF9900', prev: 'aws' },
            { logo: SiMeta, color: '#4267B2', prev: 'meta llama' },
        ],
        image : nutrimate,
    },
]

export default projects;