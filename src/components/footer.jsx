"use client"


import React, { useState, useEffect } from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CardSocmed from './common/card-socmed';

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateInitialized, setDateInitialized] = useState(false);

  useEffect(() => {
    // Initialize the date on the client side
    setDateInitialized(true);

    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
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
      socmed: 'https://dribbble.com/nareswaramaulana',
    },
    {
      logo: FaGithub,
      socmed: 'https://github.com',
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-center justify-center relative z-20 my-20">
      <h1 className="text-[24px] font-semibold text-center">Nareswara Maulana Aletha Alhaq</h1>
      <div className="flex gap-2">
        <h1 className="text-[#A1A1AA] text-[18px]">
          {dateInitialized ? formatDate(currentDate) : 'Loading...'}
        </h1>
        <h1 className="text-[#A1A1AA] font-semibold text-[18px]">
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