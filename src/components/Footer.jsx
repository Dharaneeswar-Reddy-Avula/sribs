import React from 'react'
import appstore from '../assets/images/appstore.svg'
import playstore from '../assets/images/playstore.svg'
import logo from '../assets/images/geeks-logo.svg'
export const Footer = () => {
  return (
    <footer>
    <div className='flex flex-wrap flex-col md:flex-row p-[10px] justify-center gap-[50px] text-[#647488] border-y-[1px] py-[50px] border-y-[#647488]'>
        <div className="logo w-[270px] flex flex-col gap-[20px]">
            <div className="logo-img">
            <img src={logo}/>
            </div>
            <p className='text-[#647488] text-wrap'>Nascetur nibh feugiat vulputate urna mauris tincidunt porttitor ultricies. Et dis augue praesent congue</p>
            <div className="buttons text-[#647488]">
                <button className='px-[8px] py-[5px] border-[1px] border-[#647488] rounded-lg' >English</button>
            </div>
        </div>
        <div className="company flex flex-col gap-[20px]">
            <h3 className='text-white text-[15px] font-semibold'>Company</h3>
            <ul>
                <li className='py-[3.2px]'><a href="#">About Us</a></li>
                <li className='py-[3.2px]'><a href="#">Contact Us</a></li>
                <li className='py-[3.2px]'><a href="#">News and Blogs</a></li>
                <li className='py-[3.2px]'><a href="#">Career</a></li>
                <li className='py-[3.2px]'><a href="#">Investors</a></li>
            </ul>
        </div>
        <div className="community flex flex-col gap-[20px]">
        <h3 className='text-white text-[15px] font-semibold'>Community</h3>

            <ul>
                <li className='py-[3.2px]'><a href="#">Help and Support</a></li>
                <li className='py-[3.2px]'><a href="#">Affiliate</a></li>
                <li className='py-[3.2px]'><a href="#">Blog</a></li>
                <li className='py-[3.2px]'><a href="#">Geeks Bussiness</a></li>
            </ul>
        </div>
        <div className="Teaching flex flex-col gap-[20px]">
        <h3 className='text-white text-[15px] font-semibold'>Teaching</h3>

            <ul>
                <li className='py-[3.2px]'><a href="#">Become a Teacher</a></li>
                <li className='py-[3.2px]'><a href="#">How to guide</a></li>
                <li className='py-[3.2px]'><a href="#">Documentation</a></li>
            </ul>
        </div>
        <div className="contact flex flex-col gap-[20px]">
            <div className="contact-details flex flex-col gap-[20px] ">
        <h3 className='text-white text-[15px] font-semibold'>Contact</h3>

            <ul>
                <li className='py-[3.2px]'>Toll free: +1234 567 890</li>
                <li className='py-[3.2px]'>Time:9AM to 8:PM IST</li>
                <li className='py-[3.2px]'>Email:example@gmail.com</li>
                </ul>
                </div>
                <div className="apps flex gap-[20px] flex-wrap">
                     <img src={appstore}/>
                     <img src={playstore}/>
                </div>
           
        </div>
    </div>
    <div className="copy-rights text-[#647488] flex flex-col md:flex-row justify-between px-[20px] pt-[16px] pb-[50px]">
        <span className='text-[#647488]'>&copy; 2024 Geeks themes.Powerd Codescandy</span>
        <ul className='flex gap-[20px]'>
        <li>Terms of use</li>
        <li>Cookies Settings</li>
        <li>Privacy Policy</li>
        </ul>
    </div>
    </footer>
  )
}
