import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export const Course_card = (props) => {
  return (
    <div className='p-[20px] w-[300px]  border-[1px] rounded-lg bg-[#1e293b]'>
      {/* If you have an image, you can uncomment and use it */}
      <img src={props.image} className='rounded-lg w-full mb-[30px]'/>
      
      <h3 className='text-[white] text-[15px] font-semibold mb-[8px]'>{props.course}</h3>
      <p className='mb-[16px] text-[#647488] text-[15px]'>
        {props.description}
      </p>
      <span className='text-[#ac95fe] font-semibold flex items-center gap-[20px]'>View Details <FaArrowRightLong /></span>
    </div>
  )
}
