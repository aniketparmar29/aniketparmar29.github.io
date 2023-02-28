import React from 'react'
import { useEffect } from 'react';
import { FaMoon,FaSun } from "react-icons/fa";
import { Link } from 'react-scroll';
import Resume from '../Download/fp06_499-Aniket-Parmar-Resume.pdf';
import dark from '../assets/logo/darklogo.png';
import light from '../assets/logo/lightlogo.png'
function Navbar({isDarkMode,toggleDarkMode}) {
    const handleDownload = () => {
        fetch(Resume).then(response => {
          response.blob().then(blob => {
              const fileURL = window.URL.createObjectURL(blob);
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = "Aniket-Parmar-Resume.pdf";
              alink.click();
          })
      })
      }
   const ophamburger = () =>{
       let hamburger = window.document.querySelector(".hamburger");
       hamburger.classList="hidden hamburger border p-2 xl:hidden md:hidden sm:hidden  ";
       let close = window.document.querySelector(".closeham");
       close.classList="block space-y-2 m-3 closeham mr-4 border p-2 px-4  xl:hidden md:hidden sm:hidden ";
       let menui = window.document.querySelector(".menuiji");
       menui.classList=isDarkMode===true?" flex-col  menuiji px-10 py-10 space-x-11 justify-end text-[45px]   sm:hidden xl:hidden   md:hidden ":"bg-slate-300 block flex-col  menuiji px-10 py-10 space-x-11 justify-end text-[45px]   sm:hidden xl:hidden   md:hidden ";
       let navbar = window.document.querySelector(".navbarj");
       navbar.classList="navbarj flex justify-between  sticky   border-b-2 border-slate-900  xl:flex 2xl:flex  md:flex  ";
   }
    const closehamburger = () =>{
       let jam = window.document.querySelector(".closeham");
       jam.classList="hidden closeham xl:hidden md:hidden sm:hidden ";
       let hamburger = window.document.querySelector(".hamburger");
       hamburger.classList="block space-y-2 m-3 hamburger border p-2 xl:hidden md-hidden sm:hidden";
       let menui = window.document.querySelector(".menuiji");
       menui.classList=isDarkMode===true?" hidden   menuiji px-28 py-4 space-x-11 justify-end text-[45px] sm-hidden xl:hidden  md:hidden ":"bg-slate-300 hidden   menuiji px-28 py-4 space-x-11 justify-end text-[45px] sm-hidden xl:hidden  md:hidden ";
       let navbar = window.document.querySelector(".navbarj");
       navbar.classList="navbarj flex justify-between  sticky  border-b-2 border-slate-900  xl:flex 2xl:flex  md:flex ";
   }
    useEffect(()=>{
        
    },[isDarkMode])
  return (
    <div name="Navbar" className='lg:sticky navji md:sticky xl:sticky sticky  top-0 z-50'>
        <nav className=' navbarj flex  justify-between  border-b-2  border-slate-900 ' style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#2874F0",color:"black"}} >
            <div className='flex xl:w-[130px] w-[100%] justify-between'>
            <Link to="Home" smooth duration={1500}><img className='xl:h-[50%] mt-4 pl-[10%]' src={isDarkMode===true?light:dark} alt="logo" /></Link>
            <div>
            <h1 onClick={closehamburger} style={isDarkMode===true?{border:"1px solid white"}:{border:"1px solid black"}} className='space-y-2 m-3 xl:hidden md:hidden sm:hidden  border p-2 xl:text-[100px] md:text-[70px] hidden closeham'>X</h1>
            <div onClick={ophamburger} className="hamburger border p-2  xl:hidden md:hidden sm:hidden space-y-2 m-3" style={isDarkMode===true?{border:"1px solid white"}:{border:"1px solid black"}}>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
            </div>

            </div>
            <ul style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#2874F0",color:"black"}} className='hidden menui px-2 py-4 space-x-11 justify-end sm:flex  xl:flex 2xl:flex  md:flex'>
                <li className='font-bold text-lg hover:underline hover:text-white hover:underline-offset-8 menui1 cursor-pointer'><Link to="Home" smooth duration={1500}>Home</Link></li>
                <li className='font-bold text-lg hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link to="About" smooth duration={1500}>About</Link></li>
                <li className='font-bold text-lg hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link to="Skills" smooth duration={1500}>Skills</Link></li>
                <li className='font-bold text-lg hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link to="Projects" smooth duration={1500}>Projects</Link></li>
                <li className='font-bold text-lg hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link to="Contact" smooth duration={1500}>Contacts</Link></li>
                <li  onClick={handleDownload} className='font-bold text-lg hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><a href="https://drive.google.com/file/d/1LbPArwTFWUcw_OZZNMw0JCojAp1GcFa7/view?usp=share_link" rel='noreferrer' target={"_blank"}>Resume</a></li>
                {!isDarkMode && <FaMoon size={25} onClick={toggleDarkMode} className='mt-1 cursor-pointer'/>}
                {isDarkMode && <FaSun size={25} onClick={toggleDarkMode} className='mt-1 cursor-pointer text-orange-500 '/>}
            </ul>
            


        </nav>
            <ul style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#2874F0",color:"black"}}  className=" hidden  menuiji px-2 py-4 space-x-11 justify-end  xl:hidden   md:hidden">
                {!isDarkMode && <FaMoon size={50} onClick={toggleDarkMode} className='mt-1 ml-11 menui12 cursor-pointer'/>}
                {isDarkMode && <FaSun size={50} onClick={toggleDarkMode} className='mt-1 ml-11 menui12 text-orange-500 cursor-pointer'/>}
                <li className='hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link onClick={closehamburger} to="Home" smooth duration={1500}>Home</Link></li>
                <li className='hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link onClick={closehamburger} to="About" smooth duration={1500}>About</Link></li>
                <li className='hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link onClick={closehamburger} to="Skills" smooth duration={1500}>Skills</Link></li>
                <li className='hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link onClick={closehamburger} to="Projects" smooth duration={1500}>Projects</Link></li>
                <li className='hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><Link onClick={closehamburger} to='Contact' smooth duration={1500} >Contact</Link></li>
                <li onClick={handleDownload} className='hover:underline hover:text-white hover:underline-offset-8 cursor-pointer'><a href="https://drive.google.com/file/d/1LbPArwTFWUcw_OZZNMw0JCojAp1GcFa7/view?usp=share_link" rel='noreferrer' target={"_blank"}>Resume</a></li>

            </ul>
    </div>
  )
}

export default Navbar