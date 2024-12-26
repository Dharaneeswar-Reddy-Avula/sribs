import React from 'react'
import about_1 from '../assets/images/about-img-1.jpg'
import about_2 from '../assets/images/about-img-2.png'
import about_3 from '../assets/images/about-img-3.jpg'
import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

export const About = () => {
  return (
    <div>
        <div className="About  p-[20px] lg:p-[60px] flex lg:flex-row flex-col gap-[30px] ">
             <div className="about-images grid grid-cols-2 w-full lg:w-1/2 place-items-end justify-items-start  gap-[20px]">
              <img src={about_1} className='justify-self-end w-full'/>
              <img src={about_2} className='justify-self-start w-full'/>
              <img src={about_3} className='col-span-2 justify-self-center w-full'/>
             </div>
             <div className="about-data lg:w-1/2 flex flex-col justify-center">
              <span className='text-green-500 text-[18px] font-semibold'>About-Your Trusted Partner</span>
              <h2 className='text-white text-[32px] my-[16px] font-semibold leading-tight'>Achieving Academic Excellence Study Abroad</h2>
              <p className='text-[#64748b] mb-[24px] text-[18px]'>At <span className='text-[#754ffe]'>[Your Company Name]</span>, we are dedicated to empowering students to achieve their academic dreams abroad. Join us and embark on your journey to academic excellence. With expert resources and personalized 
              support.</p>
              <div className="ourmission">
                <h3 className='text-white text-[20px] mb-[10px] flex gap-[20px] items-center'><span className='font-semibold'><GoGoal /></span>
                Our Mission</h3>
                <p className='text-[#64748b] mb-[24px] text-[18px]'>At <span className='text-white'>[Your Company Name]</span> , our mission is to empower students to reach their full potential by providing comprehensive resources and personalized support for their study abroad journey.</p>
              </div>
              <div className="ourvision">
                <h3 className='text-white text-[20px] mb-[10px] flex items-center gap-[20px]'><span className='text-[white]'><FaEye /></span>
                Our Vision</h3>
                <p className='text-[#64748b] mb-[24px] text-[18px]'>At <span className='text-white'>[Your Company Name]</span>.our vision is to create a world where every student has the opportunity to pursue their academic aspirations abroad, regardless of their background or circumstances.</p>
              </div>

             </div>
        </div>
    </div>
  )
}
