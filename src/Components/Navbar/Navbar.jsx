import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";

import logo from '../../assets/logo.png';
import DarkMode from './DarkMode';

const Menu = [

    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kide Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Women Wear",
        link: "/#",
    },
    {
        id: 6,
        name: "Electronics",
        link: "/#",
    },


]

const DropdownLinks = [
    {
        id: 1,
        name: "Treanding Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Reated",
        link: "/#",
    },
]


export default function Navbar() {
    console.log(DropdownLinks);
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
                            <FaCartShopping className=' text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        {/* DarkMode Switch  */}
                        <div className="flex items-center">
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            {/* Lower Navbar */}
            <div className="flex justify-center gap-4 ">
                <ul className='sm:flex hidden gap-4 items-center'>
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className='inline-block px-4 py-2 hover:text-primary duration-200'
                                >{data.name}</a>
                            </li>
                        ))
                    }
                    <li className='group relative cursor-pointer'>
                        <a
                            href=''
                            className='flex items-center gap-[2px]'
                        >
                            Trending Items

                            <span>
                                <FaCaretDown
                                    className="transition-all duration-200 group-hover:rotate-180"
                                />
                            </span>
                        </a>
                        
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md   ">
                            <ul>
                                {
                                    DropdownLinks.map((data) => (
                                            //  console.log(DropdownLinks);

                                        <li key={data.id}>
                                           
                                            <a 
                                            href={data.link}
                                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20' 
                                            >
                                                {data.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}
