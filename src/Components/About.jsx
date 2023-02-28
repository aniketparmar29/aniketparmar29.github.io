import React,{useEffect} from 'react'
import AOS from "aos";


function About({isDarkMode}) {
  useEffect(()=>{
    AOS.init({delay:200});
},[])

  return (
    <div style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#2874F0",color:"black"}} id='about' name="About" className='about max-w-screen md:w-full  mx-auto pt-10 pb-20 md:pt-28 '>
    <h1 data-aos="fade-down" className='text-5xl text-center hover:underline hover:text-blue-900 hover:underline-offset-8'>About</h1>
    <div className='max-w-screen md:max-w-screen-lg  mx-auto grid lg:grid-cols-2 items-center'>
      <div data-aos="fade-right" className="px-8 py-12 max-w-lg mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
    <p className='text-2xl'>An enthusiastic web developer, team player, and problem solver who is
hardworking, with over 1000 hours of coding experience, 100+ hours of data structure and algorithm
knowledge, and has developed clones of well-known websites. Has experience in creating projects with a
team and is looking forward to working as an accountable and competent employee in an exciting tech
company</p>
      </div>
      <div>
      <img data-aos="fade-left" className='mx-auto rounded-2xl shadow-xl shadow-blue-900/100 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12' src="https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966" alt="Aniket Parmar" />
      </div>
    </div>
    </div>
  )
}

export default About