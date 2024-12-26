import React from 'react'
import { Country_card } from '../components/Country_card';
import austrailia from '../assets/images/austrailia.png';
import uk from '../assets/images/uk.png';

import usa from '../assets/images/usa.png';

import canada from '../assets/images/canada.png';

export const Country = () => {
    const data = [
        {   image:canada,
            country: "Canada",
            description: "Choose Canada for a world-class education and a bright future. Canada is renowned for its high-quality education"
        },
        {    image:austrailia,
            country: "Australia",
            description: "Embark on your educational journey in Australia for a dynamic and enriching experience."
        },
        {    image:uk,
            country: "UK",
            description: "The UK offers a prestigious education with its renowned universities and rich academic heritage."
        },
        {    image:usa,
            country: "USA",
            description: "The USA is home to some of the world’s prestigious universities and offers a diverse range of programs and research opportunities."
        }
    ];

    return (
        <div className='flex flex-col py-[50px] px-[20px]  bg-[url("./assets/images/map.svg")] bg-cover bg-center '>
        <span className='text-green-500 font-semibold text-[18px] text-center'>Study in Country</span>
        <h2 className='text-white text-center text-[32px] mt-[16px] font-semibold' >Best Country to Study</h2>
        <p className='text-[15px] text-[#64748b] text-center mb-[56px]'>Choosing the best country to study depends on your personal goals and preferences.

</p>
        <div className='flex justify-center gap-[10px] flex-wrap'>
           
            {data.map((item, index) => (
                <Country_card 
                    key={index} 
                    image={item.image}
                    description={item.description}  // Pass only the description text
                    country={item.country}           // Pass the country name
                />
            ))}
        </div>
        </div>
    );
}
