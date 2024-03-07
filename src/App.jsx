import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Product from './Components/Product/Product'
import  AOS  from 'aos';
import "aos/dist/aos.css";
import TopProduct from './Components/TopProduct/TopProduct';
import Banner from './Components/Banner/Banner';
import Email from './Components/Email/Email';

function App() {
  useEffect(()=>{
    AOS.init({
      offset :100,
      duration : 800,
      easing : "ease-in-sine",
      delay :100,
    });
  })
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <TopProduct />
      <Banner />
      <Email />
      <Product />
    </>
  )
}

export default App
