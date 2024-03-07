import React from 'react'
import img from '../../assets/orange.jpg'

const BannerImg = {
    backgroundImage :  `url(${img})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
    height :"100%",
    width:"100%"
}

export default function Email() {
  return (
    <div style={BannerImg} data-aos="zoom-in" className='bg-gray-100 pb-10 dark:bg-gray-800 text-white'> 
        <div className="container backdrop-blur-sm py-10">
            <div className="space-y-6 max-w-xl mx-auto">
                <h1 className='text-2xl font-semibold md:text-4xl !text-center'>Get Notified About New Products
               
                </h1>
                <input 
                    className='w-full mx-auto p-2'
                    type="text" 
                    data-aos="fade-up" 
                    placeholder='Enter Your Email Id' />
            </div>
        </div>
    </div>
  )
}
