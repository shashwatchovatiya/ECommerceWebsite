import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import DarkMode from './DarkMode';


export default function Navbar() {
    return (
        <header className=' shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/* Upper Navbar */}
            <div className="bg-primary/40 py-2 ">
                <div className="container flex justify-between items-center">
                    <div className="">
                        <a href="" className='flex gap-2 font-bold text-2xl sm:text-3xl items-center'>
                            <img src={logo} alt="Logo" className='w-10 ' />
                            Shopsy
                        </a>
                    </div>


                    {/* Searchbar */}
                    <div className="flex gap-4 ">
                        <div className="relative  group sm-block">
                            <input
                                type="text"
                                placeholder='Searchbar'
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
                            />
                            <IoMdSearch className='text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                          {/* Order */}
                    <button
                        onClick={() => alert("Oreder is not start")}
                        className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-3 group '
                    >
                        <span
                            className='group-hover:block hidden transition-all duration-200'
                        > Order
                        </span>
                        <FaCartShopping  className=' text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>
                    {/* DarkMode Switch  */}
                    <div className="">
                        <DarkMode />
                    </div>
                    </div>
                </div>
            </div>
            {/* Lower Navbar */}
            <div className=""></div>
        </header>
    )
}
