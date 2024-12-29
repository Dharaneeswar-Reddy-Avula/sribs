import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export const Country_card = (props) => {
  return (
    <div className='p-[20px] w-full md:w-[250px]  border-[1px] rounded-lg bg-[#1e293b] flex flex-col justify-center md:justify-start items-center md:items-start'>
      {/* If you have an image, you can uncomment and use it */}
      <img src={props.image} className='rounded-full h-[72px] w-[72px] mb-[30px]'/>
      
      <h3 className='text-[white] text-[20px] font-semibold'>{props.country}</h3>
      <p className='mb-[16px] text-[#647488] text-[15px] text-center md:text-left'>
        {props.description}
      </p>
      <span className='text-[#ac95fe] flex items-center gap-[20px]'>Study in {props.country} <FaArrowRightLong /></span>
    </div>
  )
}
