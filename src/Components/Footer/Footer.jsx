import React from 'react'
import img from '../../assets/footer.jpg'
import logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa"

const FooterImg = {
    backgroundImage: `url(${img})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}

export default function Footer() {
    return (
        <div style={FooterImg}
            // data-aos="zoom-in" 
            className='bg-gray-100 pb-36 dark:bg-gray-800 text-white '>
            <div className="container">
                <div className="grid md:grid-cols-3 py-10 ">
                    {/* Logo */}
                    <div className="">
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="" className='w-16' />
                            <h1 className='text-3xl font-bold'>Shopsy</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure cupiditate quibusdam.</p>
                    </div>
                    {/* Important  link */}
                    <div className="flex gap-5 space-x-5 pl-9 pt-7">
                        <div className="">
                            <h1 className='text-xl font-bold'>Important Links</h1>
                            <ul className='flex- flex-col gap-5 space-y-3 mt-3'>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>Home</li>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>About</li>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>Contact</li>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>Blog</li>
                            </ul>
                        </div>


                        {/* Link */}
                        <div className="">
                            <h1 className='text-xl font-bold'> Links</h1>
                            <ul className='flex- flex-col gap-5 space-y-3 mt-3'>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>Home</li>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>About</li>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>Contact</li>
                                <li className='hover:translate-x-1 hover:text-primary duration-150'>Blog</li>
                            </ul>
                        </div>

                    </div>
                    {/* icons */}
                    <div className="pt-7 mx-auto md:mx-0 ">
                        <div className="flex gap-5">
                            <FaInstagram className='size-7 hover:text-primary duration-200' />
                            <FaFacebook className='size-7 hover:text-primary duration-200' />
                            <FaLinkedin className='size-7 hover:text-primary duration-200' />
                        </div>
                        <div className="flex gap-4 items-center mt-4">
                            <FaRegAddressCard className='size-5' />
                            <p className='font-semibold'>  Ahmedabad,Gujarat</p>
                        </div>
                        <div className="flex gap-4 items-center mt-4">
                            <FaMobileAlt className='size-5' />
                            <p className='font-semibold'> +91 1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}