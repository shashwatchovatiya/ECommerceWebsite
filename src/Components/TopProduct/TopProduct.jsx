import React from 'react'
import Image1 from '../../assets/BestProduct/shirt1.png'
import Image2 from '../../assets/BestProduct/shirt2.png'
import Image3 from '../../assets/BestProduct/shirt3.png'
import { FaStar } from "react-icons/fa6"
import { data } from 'autoprefixer'


const ProductData = [
    {
        id: 1,
        img: Image1,
        title: "Casual T-Shirt",
        price: "$24.99",
        descrition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit asperiores modi Sit  "
    },
    {
        id: 2,
        img: Image2,
        title: "Printed T-Shirt",
        price: "$24.99",
        descrition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit  Sasperiores modi "
    },
    {
        id: 3,
        img: Image3,
        title: "Women T-Shirt",
        price: "$24.99",
        descrition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit asperiores modi "
    }
];

// const HandelOrderpopup =()=>{
//     alert("Your Order is Placed Successfully");
// }


export default function TopProduct() {
   
    return (
        <div className='pt-1 pb-12 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className="container ">
                {/* Heder section */}
                <div className="text-center my-10 mb-28 max-w-[600px] mx-auto ">
                    <p data-aos="fade-up" className='text-primary/70 font-bold'>Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className='text-4xl font-bold mb-1'>Best Products</h1>
                    <p data-aos="fade-up" className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* Body Section  */}

                <div 
                    data-aos="zoom-in"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center gap-20 md:gap-5">
                    {ProductData.map((data) => (
                        <div key={data.id} className="rounded-2xl bg-white hover:text-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary  relative shadow-xl duration-300 group max-w-[300px]">
                            {/* Image Section  */}
                            <div className="h-[100px]">
                                <img src={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                            </div>
                            {/* Details Section  */}
                            <div className="p-4 text-center ">
                                {/* Star Section */}
                                <div className="flex justify-center items-center">
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>

                                <h1 className='text-xl  font-bold'>{data.title}</h1>
                                <p className='font-semibold '>Price :- {data.price}</p>
                                <p className='text-sm  text-gray-500 group-hover:text-white line-clamp-2'>{data.descrition}</p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:text-primary group-hover:bg-white' 
                                // onClick={HandelOrderpopup()}
                                >
                                    Order Now</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
