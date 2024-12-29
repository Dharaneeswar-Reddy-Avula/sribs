import React from 'react'
import logo from '../assets/images/geeks-logo.svg'
import { MdMenu } from "react-icons/md";

import { useState } from 'react';
import {  MdClose } from "react-icons/md";

import { LiaAngleDownSolid } from "react-icons/lia";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  return (
    <nav>
    <div className='bg-[#0b1324] h-[80px] w-full py-[10px] relative'>
       
        <div className="bottom flex justify-between lg:p-[10px] gap-[20px] items-center">
            <div className="logo flex items-center gap-[40px]">
                  <img src={logo} className='pb-[20px]'/>
                  <div className="navlinks md:flex text-white hidden ">
                <ul className='md:flex gap-[20px] text-[15px] hidden font-semibold'>
                  
                    <div className="relative group">
  <a href="#" className="cursor-pointer">
    <li className="hover:text-[#754ffe]  flex gap-[10px] items-center text-[#cbd5e1]">Categories <span><LiaAngleDownSolid />
    </span></li>
  </a>
  <div className="absolute top-full left-0  hidden group-hover:flex flex-col bg-[#1e293b] text-white p-[20px] w-[200px] rounded-lg animate-moveup">
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Web Development</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Design</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Mobile App</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">IT Software</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Marketing</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Music</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Life Style</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Business</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Photography</a>
  </div>
</div>
<div className="relative group">
  <a href="#" className="cursor-pointer">
    <li className="hover:text-[#754ffe] pb-[10px] flex gap-[10px] items-center text-[#cbd5e1]">Landings <span><LiaAngleDownSolid /></span></li>
  </a>
  <div className="absolute top-full left-0  hidden group-hover:flex flex-col bg-[#1e293b] text-white p-[20px] w-[200px] rounded-lg animate-moveup">
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded disable">Landings
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Default</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">New</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Abroad
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">New
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Mentor
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Education
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Sass

    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Courses
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Lead Course

    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Request Access

    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Job Listing

    </a>
  </div>
</div>


<div className="relative group">
  <a href="#" className="cursor-pointer">
    <li className="hover:text-[#754ffe] pb-[10px] flex gap-[10px] items-center text-[#cbd5e1]">Pages <span><LiaAngleDownSolid /></span></li>
  </a>
  <div className="absolute top-full left-0  hidden group-hover:flex flex-col bg-[#1e293b] text-white p-[20px] w-[200px] rounded-lg animate-moveup">
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Courses</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Paths</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Blog</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Career
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Portfolio
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Mentor
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Job
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">About
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Help Center
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Pricing
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Contact


    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Dropdown levels

    </a>
  </div>
 




</div>
<div className="relative group">
  <a href="#" className="cursor-pointer">
    <li className="hover:text-[#754ffe] pb-[10px] flex gap-[10px] items-center text-[#cbd5e1]">Accounts <span><LiaAngleDownSolid /></span></li>
  </a>
  <div className="absolute top-full left-0  hidden group-hover:flex flex-col bg-[#1e293b] text-white p-[20px] w-[200px] rounded-lg animate-moveup">
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">  Accounts
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Instructor</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Students</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Admin</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Sign In
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Sign Up
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Forgot Password
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Edit Profile
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Security</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Social Profiles
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Notifications
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Privacy Settings
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Delete Profile
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Linked Accounts
    </a>

  </div>







</div>

</ul>

                  
            </div>
           </div>
            <button className='bg-[#754ffe] h-[40px] w-[140px] py-[4px] lg:px-[20px] rounded-md text-white font-semibold mb-[10px]'>Enquire now</button>
            
        <button
          className="text-2xl md:hidden focus:outline-none text-[#654ffe] border-[2px] border-[#654ffe] rounded-md py-1 px-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
        </div>
         {/* Mobile Menu */}
      {isMenuOpen && (
             <div
              className={`overflow-hidden transition-all duration-300 bg-[black] text-white p-4  z-30 ${
                isDropdownOpen ? "min-h-[300px]" : "max-h-0"
              }`}
            >
          <ul className="space-y-4 ">
            <li>
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleDropdown("categories")}
              >
                Categories <LiaAngleDownSolid />
              </button>
              {isDropdownOpen.categories && (
                <ul className="p-4 space-y-2  bg-[#1e293b] rounded-lg">
                  <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Web Development</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Design</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Mobile App</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">IT Software</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Marketing</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Music</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Life Style</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Business</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Photography</a>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleDropdown("landings")}
              >
                Landings <LiaAngleDownSolid />
              </button>
              {isDropdownOpen.landings && (
                <ul className="p-4 space-y-2  bg-[#1e293b] rounded-lg">
                     <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded disable">Landings
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Default</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">New</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Abroad
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">New
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Mentor
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Education
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Sass

    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Home Courses
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Lead Course

    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Request Access

    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Job Listing

    </a>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleDropdown("pages")}
              >
                Pages <LiaAngleDownSolid />
              </button>
              {isDropdownOpen.pages && (
                <ul className="p-4 space-y-2  bg-[#1e293b] rounded-lg">
                       <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Courses</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Paths</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Blog</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Career
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Portfolio
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Mentor
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Job
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">About
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Help Center
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Pricing
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Contact


    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Dropdown levels

    </a>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleDropdown("accounts")}
              >
                Accounts <LiaAngleDownSolid />
              </button>
              {isDropdownOpen.accounts && (
                <ul className="p-4 space-y-2  bg-[#1e293b] rounded-lg">
                   <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">  Accounts
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Instructor</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Students</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Admin</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Sign In
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Sign Up
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Forgot Password
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Edit Profile
    </a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Security</a>
    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Social Profiles
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Notifications
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Privacy Settings
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Delete Profile
    </a>

    <a href="#" className="px-2 py-1 block hover:bg-[#0b1324] hover:text-[#754ffe] rounded">Linked Accounts
    </a>

                </ul>
              )}
            </li>
          </ul>
        </div>
      )}

    </div>
    </nav>
  )
}
