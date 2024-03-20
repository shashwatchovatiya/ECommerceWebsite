import React from 'react'
import Slider from 'react-slick'
import image1 from '../../assets/Test/1.jpg'
import image2 from '../../assets/Test/2.jpg'
import image3 from '../../assets/Test/3.jpg'
import image4 from '../../assets/Test/4.jpg'

const  TestimonialsData = [
    {
        id:1,
        name :'James',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : image1
    },
    {
        id:2,
        name :'Elizabeth',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : image2
    },
    {
        id:3,
        name :'Thomas',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : image3
    },
    {
        id:4,
        name :'Amelia',
        text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe repellendus cum voluptatem numquam amet est rem enim recusandae quod.',
        img : image4
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
                <div>
                    <Slider {...settings}>
                        {
                            TestimonialsData.map((data)=>(
                               <div className="">
                                 <div 
                                    key={data.id}
                                    className="flex Shashwat gap-10 shadow-lg py-8 px-6 mx-4 rounded-xl bg-pink-200"
                                > 
                                    <div className="">
                                        <img src={data.img} alt="Internet is not connect" className='w-[180px] h-[50px] object-cover rounded-full' />
                                    </div>
                                    <div className="">
                                        <p className='text-sm'>{data.text}</p>
                                        <h1 className='text-2xl font-semibold'>{data.name}</h1>
                                    </div>
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
