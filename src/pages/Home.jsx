import React from 'react'
import homeimg from '../assets/images/homeimg.png'
export const Home = () => {
  return (
   <div className='home p-[10px] flex items-center flex-col lg:flex-row justify-center  bg-[url("./assets/images/map.svg")] bg-cover bg-center md:p-[40px]'>
    <div className="home-deatils-wrap flex flex-col lg:w-1/2 h-auto p-[20px] order-2 lg:order-1">
    <span className='text-[18px] text-green-500 font-semibold'>Welcome to the Geeks Abroad Study</span>
    <h1 className='text-[#fff] text-[32px] md:text-[48px] my-[16px] font-semibold'>Powering Your Global Education Dream</h1>
    <p className='text-[20px] mb-[32px] text-[#64748b] text-wrap'>Explore to universities and unique cultural experience worldwide</p>
    <button className='bg-[#754ffe] h-[50px] w-[155px] py-[12px] px-[20px] rounded-md text-white font-semibold'>Enquire now</button>
    </div>
    <div className="image-wrap flex justify-center items-center lg:w-1/2 order-1 lg:order-2">
 <img src={homeimg} />
  
    </div>
   </div>
  )
}
