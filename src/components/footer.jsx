"use client"


import React, { useState, useEffect } from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CardSocmed from './common/card-socmed';

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateInitialized, setDateInitialized] = useState(false);

  useEffect(() => {
    setDateInitialized(true);

    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const data = [
    {
      logo: FaInstagram,
      socmed: 'https://www.instagram.com/thatrevv/',
    },
    {
      logo: FaLinkedin,
      socmed: 'https://www.linkedin.com/in/nareswaramaulana',
    },
    {
      logo: FaDribbble,
      socmed: 'https://dribbble.com/Revvvz',
    },
    {
      logo: FaGithub,
      socmed: 'https://github.com/Nareswara05',
    },
  ];

  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center justify-center relative z-20 my-20" id="contact">
      <h1 className="text-md md:text-[24px] font-semibold text-center">Nareswara Maulana Aletha Alhaq</h1>
      <div className="flex gap-2">
        <h1 className="text-[#A1A1AA] text-[14px]">
          {dateInitialized ? formatDate(currentDate) : 'Loading...'}
        </h1>
        <h1 className="text-[#A1A1AA] font-semibold text-[14px]">
          {dateInitialized ? formatTime(currentDate) : 'Loading...'}
        </h1>
      </div>
      <div className="flex gap-4">
        {data.map((item, index) => (
          <CardSocmed key={index} logo={item.logo} socmed={item.socmed} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
