import React from 'react'
import Image1 from '../../assets/sale.png'
import Image2 from '../../assets/shopping.png'
import Image3 from '../../assets/women.png'
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 70% off  Home accercery ",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 50% off Mens Wear",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 50% off all Women's Wear",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }
]

export default function Hero() {
    var setting = {
        dots: false,
        arrows: false,
        infintie: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* Background Pattern  */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

            </div>
            {/* Hero Pattern or Section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...setting}>
                    {ImageList.map((data) => (
                        <div className="">
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* Text Content Section  */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10x">
                                    <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold'> {data.title}</h1>
                                    <p className='text-sm'>{data.description}</p>
                                    <div className="">
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                            Order Now
                                        </button>
                                    </div>
                                </div>

                                {/* Image Content Section  */}
                                <div className="order-1 sm:order-2">
                                    <div className="relative z-10">
                                        <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>
        </div>
    )
}
