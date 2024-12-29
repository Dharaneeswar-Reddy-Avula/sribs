import React from 'react'
import homeimg from '../assets/images/homeimg.png'
export const Home = () => {
  return (
    <>
   <div className='home p-[10px] py-[50px] flex items-center flex-col lg:flex-row justify-center  bg-[url("./assets/images/map.svg")] bg-cover bg-center '>
    <div className="home-deatils-wrap flex flex-col lg:w-1/2 h-auto p-[20px] order-2 lg:order-1">
    <span className='text-[18px] text-green-500 font-semibold'>Welcome to the Geeks Abroad Study</span>
    <h1 className='bg-gradient-to-r from-purple-500 via-green-400 to-green-500 bg-clip-text text-transparent text-[32px] md:text-[48px] my-[16px] font-bold'>Powering Your Global Education Dream</h1>
    <p className='text-[20px] mb-[32px] text-[#64748b] text-wrap'>Explore to universities and unique cultural experience worldwide</p>
    <div className="buttons flex gap-[40px] flex-wrap">
    <button className='bg-gradient-to-r from-purple-500 via-purple-500 50% via-green-400 80% to-green-300 h-[50px] w-[155px] py-[12px] px-[20px] rounded-md text-black font-bold text-[18px] '>Enquire now</button>
    <button className="h-[50px] w-[155px] py-[12px] px-[20px] rounded-md bg-gradient-to-r from-purple-500 via-purple-500 50% via-green-400 80% to-green-300 bg-clip-text text-transparent font-semibold text-[20px] border-green-500 border-[2px] flex justify-center items-center">
  Trade now
</button>
    </div>
    </div>
    <div className="image-wrap flex justify-center items-center lg:w-1/2 order-1 lg:order-2">
 <img src={homeimg} />
  
    </div>
   </div>
    <div className='flex items-around justify-around border-[1px] border-[#647488] p-[30px] rounded-lg lg:w-4/5 mx-auto flex-col md:flex-row'>
         <div className="experience flex flex-col ">
          <h3 className='text-white font-semibold text-[40px] text-center'>25+</h3>
          <span className='text-[#647488] text-center'>Years of <br className='hidden md:block'/>Experience</span> 
          <span className='text-[#647488] text-center'></span>
         </div>
         <div className="experience flex flex-col">
          <h3 className='text-white font-semibold text-[40px] text-center'>450</h3>
          <span className='text-[#647488] text-center'>Top University <br className='hidden md:block'/>Partner</span>
         </div>
         <div className="experience flex flex-col">
          <h3 className='text-white font-semibold text-[40px] text-center'>99%</h3>
          <span className='text-[#647488] text-center'>Successful<br className='hidden md:block'/>visa process <br className='hidden md:block'/>Rate</span> 
         </div>
    </div>
   </>
  )
}
