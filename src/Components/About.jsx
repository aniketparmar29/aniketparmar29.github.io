import React,{useEffect} from 'react'
import AOS from "aos";


function About({isDarkMode}) {
  useEffect(()=>{
    AOS.init({delay:200});
},[])

  return (
    <div style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"white",color:"black"}} id='about' name="About" className='about max-w-screen md:w-full  mx-auto pt-10 pb-20 md:pt-28 '>
    <h1 data-aos="fade-down" className='text-5xl text-center hover:underline hover:text-blue-900 hover:underline-offset-8'>About</h1>
    <div className='max-w-screen md:max-w-screen-lg  mx-auto grid lg:grid-cols-2 items-center'>
      <div data-aos="fade-right" className="px-8 py-12 max-w-lg mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
    <p className='text-2xl'> Enthusiastic web developer with four months of hands-on experience in PHP and MySQL within MVC architecture. Transitioned from MERN stack to PHP, demonstrating adaptability and a strong foundation in coding and algorithms. Developed clones of popular websites, accumulating over 1000 hours of coding experience. A collaborative team player and problem solver eager to contribute as a dedicated and skilled professional in a dynamic tech environment.</p>
      </div>
      <div>
      <img data-aos="fade-left" className='mx-auto rounded-2xl shadow-xl shadow-blue-900/100 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12' src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/media/9a946a4bf36643b0b9c7ece0eb478f83.gif" alt="Aniket Parmar" />
      </div>
    </div>
    </div>
  )
}

export default About