import React from 'react'
import course_1 from '../assets/images/course-1.jpg';
import course_2 from '../assets/images/course-2.jpg';

import course_3 from '../assets/images/course-3.jpg';

import course_4 from '../assets/images/course-4.jpg';

import { Course_card } from '../components/Course_Card';


export const Courses= () => {
    const data = [
        {   image:course_1,
            course: "PTE Course",
            description: "Master the Pearson Test of English with our targeted practice and expert instruction."
        },
        {    image:course_2,
            course: "IELTS Course",
            description: "Achieve your desired score with comprehensive study materials and practice tests for the International English Language Testing System."
        },
        {    image:course_3,
            course: "TOEFL Course",
            description: "Enhance your English proficiency for academic success with our thorough preparation resources and personalized support."
        },
        {    image:course_4,
            course: "GRE Course",
            description: "Excel in the Graduate Record Examination with our in-depth practice, strategic insights, and expert guidance."
        }
    ];

    return (
        <div className='flex flex-col py-[50px] px-[12px] bg-[url("./assets/images/map.svg")] bg-cover bg-center '>
        <div className="course-cont md:w-[420px]">
        <span className='text-green-500 font-semibold text-[18px] text-left'>Study in Country</span>
        <h2 className='bg-gradient-to-r from-purple-400 via-green-400 to-green-500 bg-clip-text text-transparent text-left text-[32px] mt-[16px] font-semibold' >Best Country to Study</h2>
        <p className='text-[15px] text-[#64748b] text-left mb-[56px] text-wrap'>At [Your Company Name] , we offer a range of specialized training and courses designed to help you succeed in your academic and professional goals. Our offerings include:
</p></div>
        <div className='flex justify-center md:justify-start gap-[20px] flex-wrap'>
           
            {data.map((item, index) => (
                <Course_card 
                    key={index} 
                    image={item.image}
                    description={item.description}  // Pass only the description text
                    course={item.course}           // Pass the country name
                />
            ))}
        </div>
        </div>
    );
}
