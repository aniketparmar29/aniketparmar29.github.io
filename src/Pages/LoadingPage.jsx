import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const LoadingPage = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
},[])
  return (
    <div className='w-full min-h-screen mx-auto bg-black '>
      <div className='max-w-screen-lg flex flex-col items-center justify-center m-auto lg:-mt-14 md:pt-[5%] '>
        <img src={'https://i0.wp.com/boingboing.net/wp-content/uploads/2015/10/pJReN4H1.gif?w=970'} className="w-8/12 md:w-6/12" alt=""  data-aos="zoom-in-up" />
        <div className='m-auto'>
        <h1 className="text-5xl text-white font-signature ml-2 -mt-2 mb-[3.60rem] capitalize">Aniket Parmar</h1>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage;