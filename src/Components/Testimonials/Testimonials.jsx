import React from 'react'
import Slider from 'react-slick'

const  TestimonialsData = [
    {
        id:1,
        name :'James',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id:2,
        name :'Elizabeth',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id:3,
        name :'Thomas',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
    },
    {
        id:4,
        name :'Amelia',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
]
// 
export default function Testimonials() {

    var settings ={
        dots : true,
        arrows : false,
        infinite: true,
        speed :500,
        slidesToScroll :  1,
        autoplay : true,
        autoPlaySpeed: 2000,
        cssEase : "linear",
        pauseOnHover: true,
        pauseOnFocus :true,
        responsive :[
            {
                breakpoint: 10000,
                settings :{
                    slidesToShow : 3,
                    slidesToScroll : 1,
                    infinite: true,
                },
            },
            {
                breakpoint:1024,
                settings :{
                    slidesToShow : 2,
                    slidesToScroll :1,
                    initialSlide : 2,
                },
            },
            {
                breakpoint : 640,
                settings :{
                    slidesToShow : 1,
                    slidesToScroll : 1,
                },
            },
        ],
    };

    return (
        <div className='pt-1 pb-16 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className="container">
                {/* Header Section  */}
                <div className="text-center my-10 max-w-[600px] mx-auto ">
                    <p data-aos="fade-up" className='text-primary/70 font-bold'>What our customers are saying</p>
                    <h1 data-aos="fade-up" className='text-4xl font-bold mb-1'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* Body Section  */}
                <div className=" ">
                    <Slider {...settings}>
                        {
                            TestimonialsData.map((data)=>(
                                <div 
                                    key={data.id}
                                    className="flex flex-col  gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl"
                                > 
                                    <div className="">
                                        <img src={data.img} alt="Internet is not connect" className='w-[80px] h-[80px] object-cover rounded-full' />
                                    </div>
                                    <div className="">
                                        <p className='text-sm'>{data.text}</p>
                                        <h1 className='text-2xl font-semibold'>{data.name}</h1>
                                    </div>
                                </div>
                               
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    )
}
