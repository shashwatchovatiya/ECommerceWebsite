import React from 'react'
import img from '../../assets/Product/Image2.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { FaGooglePay } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

export default function Banner() {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    {/* Image section  */}
                    <div className="" data-aos="zoom-in">
                        <img 
                            src={img} 
                            alt=""
                            className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_-10px_12px_rgba(0,0,0,1)] object-cover'
                            />
                    </div>
                    {/* Text Section */}
                    <div className="flex flex-col gap-6 sm:pt-0">
                        <h1 className='text-3xl font-bold sm:text-4xl'>Winter Sale upto 50% Off</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vero numquam quibusdam, dicta ipsa reprehenderit natus fugiat explicabo repellat, consectetur at, laborum </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                <p>Quality Product</p>
                            </div>

                            <div className="flex  items-center gap-4" data-aos="fade-up">
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100 dark:bg-red-400'/>
                                <p>Fast Delivery</p>
                            </div>

                            <div className="flex  items-center gap-4" data-aos="fade-up">
                                <FaGooglePay  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                                <p>Easy Payment method</p>
                            </div>

                            <div className="flex  items-center gap-4" data-aos="fade-up">
                                <BiSolidOffer  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-amber-100 dark:bg-amber-400'/>
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
