import React from 'react'
import { useEffect } from 'react';
import { FaMoon,FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar({isDarkMode,toggleDarkMode}) {
   const ophamburger = () =>{
       let hamburger = window.document.querySelector(".hamburger");
       hamburger.classList="hidden hamburger border p-2 xl:hidden md:hidden sm:hidden ";
       let close = window.document.querySelector(".closeham");
       close.classList="block space-y-2 m-3 closeham mr-4 border p-2 px-4 xl:hidden md:hidden sm:hidden ";
       let menui = window.document.querySelector(".menuiji");
       menui.classList=isDarkMode===true?" flex-col  menuiji px-10 py-10 space-x-11 justify-end text-[45px]   sm:hidden xl:hidden   md:hidden ":"bg-slate-300 block flex-col  menuiji px-10 py-10 space-x-11 justify-end text-[45px]   sm:hidden xl:hidden   md:hidden ";
       let navbar = window.document.querySelector(".navbarj");
       navbar.classList="navbarj flex justify-between p-3 sticky   border-b-2 border-slate-900  xl:flex 2xl:flex  md:flex  ";
   }
    const closehamburger = () =>{
       let jam = window.document.querySelector(".closeham");
       jam.classList="hidden closeham xl:hidden md:hidden sm:hidden ";
       let hamburger = window.document.querySelector(".hamburger");
       hamburger.classList="block space-y-2 m-3 hamburger border p-2 xl:hidden md-hidden sm:hidden";
       let menui = window.document.querySelector(".menuiji");
       menui.classList=isDarkMode===true?" hidden   menuiji px-28 py-4 space-x-11 justify-end text-[45px] sm-hidden xl:hidden  md:hidden ":"bg-slate-300 hidden   menuiji px-28 py-4 space-x-11 justify-end text-[45px] sm-hidden xl:hidden  md:hidden ";
       let navbar = window.document.querySelector(".navbarj");
       navbar.classList="navbarj flex justify-between p-3 sticky  border-b-2 border-slate-900  xl:flex 2xl:flex  md:flex ";
   }
    useEffect(()=>{
        
    },[isDarkMode])
  return (
    <div>
        <nav className=' navbarj flex p-3 justify-between sticky border-b-2 border-slate-900 ' style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}} >
            <div className='flex xl:w-[130px] w-[100%] justify-between'>
            <Link to="/"><img className='' src={isDarkMode===true?"https://pbs.twimg.com/media/FkbPnfGWYAEEgJI?format=png&name=360x360":"https://pbs.twimg.com/media/FkbPW5IX0AgIVlj?format=png&name=360x360"} alt="logo" /></Link>
            <div>
            <h1 onClick={closehamburger} className='space-y-2 m-3 xl:hidden md:hidden sm:hidden  border p-2 xl:text-[100px] md:text-[70px] hidden closeham'>X</h1>
            <div onClick={ophamburger} className="hamburger border p-2  xl:hidden md:hidden sm:hidden space-y-2 m-3">
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
            </div>

            </div>
            <ul style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}} className='hidden menui px-2 py-4 space-x-11 justify-end sm:flex  xl:flex 2xl:flex  md:flex'>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 menui1 cursor-pointer'><Link to="/">Home</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="#about">About</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="#skills">Skills</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="#projects">Projects</Link></li>
                <li className='hover:underline hover:text-blue-900 hover:underline-offset-8 cursor-pointer'><Link to="#contacts">Contacts</Link></li>
                {!isDarkMode && <FaMoon size={25} onClick={toggleDarkMode} className='mt-1 cursor-pointer'/>}
                {isDarkMode && <FaSun size={25} onClick={toggleDarkMode} className='mt-1 cursor-pointer text-orange-500 '/>}
            </ul>
            


        </nav>
            <ul style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}}  className=" hidden  menuiji px-2 py-4 space-x-11 justify-end  xl:hidden   md:hidden">
                {!isDarkMode && <FaMoon size={50} onClick={toggleDarkMode} className='mt-1 ml-11 menui12 cursor-pointer'/>}
                {isDarkMode && <FaSun size={50} onClick={toggleDarkMode} className='mt-1 ml-11 menui12 text-orange-500 cursor-pointer'/>}
                <li className='cursor-pointer'><Link to="/">Home</Link></li>
                <li className='cursor-pointer'><Link to="#about">About</Link></li>
                <li className='cursor-pointer'><Link to="#skills">Skills</Link></li>
                <li className='cursor-pointer'><Link to="#contacts">Contacts</Link></li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
    </div>
  )
}

export default Navbar