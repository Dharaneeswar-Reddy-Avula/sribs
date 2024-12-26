import React from 'react'

export const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row  xl:mx-[50px] p-[20px] md:p-[40px] gap-[30px]'>
        <div className="getin-touch lg:w-1/2 py-[50px]">
            <span className='text-green-500 font-semibold text-[18px]'>Contact</span>
            <h2 className='text-white mt-[16px] text-[32px] font-semibold'>Get in Touch With Us</h2>
            <p className='text-[#647488] mb-[40px]'>We're here to help you achieve your study goals and answer any questions you may have. Reach out to us through the following channels:</p>
            <div className="card-bodys flex flex-col md:flex-row gap-[20px]">
            <div className="card-body p-[24px] bg-[#1e293b] border-[1px] rounded-lg md:w-[300px] border-[#647488]">
              <h3 className='mb-[8px] text-white'>India Office</h3>
              <p className='text-[#475569] mb-[16px] text-[15px]'>123 Study Lane, Education City, Country</p>
              <p className='text-[#475569] mb-[4px] text-[15px]'>(+091) 0123 456 789</p>
              <p className='text-[#475569] text-[15px]'>India@enquiry.com</p>
            </div>
            <div className="card-body p-[24px] bg-[#1e293b] border-[1px] rounded-lg md:w-[300px] border-[#647488]">
              <h3 className='mb-[8px] text-white'>Canada Office</h3>
              <p className='text-[#475569] mb-[16px] text-[15px]'>123 Study Lane, Education City, Country</p>
              <p className='text-[#475569] mb-[4px] text-[15px]'>(+091) 0123 456 789</p>
              <p className='text-[#475569] text-[15px]'>India@enquiry.com</p>
            </div>
            </div>
        </div>
        <div className="form p-[20px] md:p-[40px] bg-[#1e293b] lg:w-1/2 rounded-lg">
            <h3 className='text-white mb-[24px] text-[20px]'>For more information or to schedule a consultation, fill out our contact form.</h3>
            <div className="inputs">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[10px]">
                    <div className="Name flex flex-col px-[12px]">
                    <label htmlFor="name" className='mb-[8px] text-[#64748b]'>Name <span className='text-[red]'>*</span></label>
                    <input type="text" name="name" className='bg-[#0b1324] py-[8px] px-[16px] rounded-lg outline-[#754ffe] outline-[3px]'/>
                    </div>
                    <div className="Phone flex flex-col px-[12px]">
                    <label htmlFor="Phone" className='mb-[8px] text-[#64748b]'>Phone <span className='text-[red]'>*</span></label>
                    <input type="text" name="phone" className='bg-[#0b1324] py-[8px] px-[16px] rounded-lg outline-[#754ffe] outline-[3px]'/>
                    </div>
                    <div className="whatsapp flex flex-col px-[12px]">
                    <label htmlFor="whatsapp" className='mb-[8px] text-[#64748b]'>Whatsapp number <span className='text-[red]'>*</span></label>
                    <input type="text" name="whatsapp number" className='bg-[#0b1324] py-[8px] px-[16px] rounded-lg outline-[#754ffe] outline-[3px]'/>
                    </div>
                    <div className="email flex flex-col px-[12px]">
                    <label htmlFor="email" className='mb-[8px] text-[#64748b]'>Email <span className='text-[red]'>*</span></label>
                    <input type="email" name="email" className='bg-[#0b1324] py-[8px] px-[16px] rounded-lg outline-[#754ffe] outline-[3px]'/>
                    </div>
                    <div className="subject flex flex-col px-[12px] xl:col-span-2">
                    <label htmlFor="subject" className='mb-[8px] text-[#64748b]'>Subject <span className='text-[red]'>*</span></label>
                    <input type="text" name="subject" className='bg-[#0b1324] py-[8px] px-[16px] rounded-lg outline-[#754ffe] outline-[3px]'/>
                    </div>
                    <div className="Message flex flex-col px-[12px] xl:col-span-2">
                    <label htmlFor="message" className='mb-[8px] text-[#64748b]'>Message <span className='text-[red]'>*</span></label>
                    <textarea name="message" className='bg-[#0b1324] py-[8px] px-[16px] rounded-lg outline-[#754ffe] outline-[3px]'></textarea>
                    </div>
                    <button className='bg-[#754ffe] h-[50px] w-[155px] py-[12px] px-[20px] rounded-md text-white font-semibold mt-[20px] ml-[20px]'>Send Enquiry</button>
                </div>
            </div>
        </div>
    </div>
  )
}
