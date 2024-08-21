import React from 'react'

const CardDo = ({icon : Icon, title, desc}) => {
  return (
    <div className='relative w-[240px] h-[190px] bg-[#323443] px-4 bg-opacity-20 flex flex-col items-center rounded-2xl'>
        <div className='p-4 border border-secondary bg bg-[#323443] bg-opacity-70 rounded-full absolute -top-8  text-white text-4xl flex justify-center items-center w-fit h-fit'>
            <Icon/>
        </div>
        <h1 className='text-white font-bold text-[16px] pt-12'>{title}</h1>
        <p className='text-white font-normal text-center text-[12px] pt-2'>{desc}</p>
    </div>
  )
}

export default CardDo