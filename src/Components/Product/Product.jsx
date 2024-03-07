import React from 'react'
import Image1 from '../../assets/Product/Image1.png'
import Image2 from '../../assets/Product/Image2.jpg'
import Image3 from '../../assets/Product/Image3.jpg'
import Image4 from '../../assets/Product/Image4.jpg'
import Image5 from '../../assets/Product/Image5.jpg'
import { FaStar } from "react-icons/fa6"

const ProuctsData = [
    {
        id: 1,
        img: Image1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Image2,
        title: "Women Western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Image3,
        title: "Goggels",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400"
    },
    {
        id: 4,
        img: Image4,
        title: "Printed T-shirt",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600"
    },
    {
        id: 5,
        img: Image5,
        title: "Fashin T-shirt",
        rating: 4.0,
        color: "Pink",
        aosDelay: "800"
    },
]

export default function Product() {
    return (
        <div className='pt-14 pb-5 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className="container">
                {/* Header Section  */}
                <div className="text-center my-10 max-w-[600px] mx-auto ">
                    <p data-aos="fade-up" className='text-primary/70 font-bold'>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-4xl font-bold mb-1'>Products</h1>
                    <p data-aos="fade-up" className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* Body Section  */}
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* card section  */}
                        {
                            ProuctsData.map((data) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={data.id}
                                    className="space"

                                >
                                    <img src={data.img} alt="" className='h-[200px] w-[150px] object-cover rounded-md' />
                                    <div className="">
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm text-gray-600'> {data.color}</p>
                                        <div className="flex items-center gap-1">
                                            <FaStar className='text-yellow-400' />
                                            <span>{data.rating}/5</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className="w-full  text-center mt-16 mx-auto" >

                    <button className='px-4 py-2  bg-primary text-white font-semibold rounded-md'>View All Button</button>
                </div>
            </div>
        </div>
    )
}
