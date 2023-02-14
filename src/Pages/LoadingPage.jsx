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
      <div className='max-w-screen-lg flex flex-col items-center justify-center m-auto pt-32 md:pt-[5%] '>
        <img src={'https://media.giphy.com/media/mf8UbIDew7e8g/giphy.gif'} className="w-8/12 md:w-6/12" alt=""  data-aos="zoom-in-up" />
        <div className='m-auto mt-5' data-aos="zoom-in-down">
        <h1 className="text-5xl text-white font-signature ml-2 capitalize">Aniket Parmar</h1>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage;