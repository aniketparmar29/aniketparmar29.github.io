import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import useDarkMode from '../hooks/useDarkMode'
import Skills from '../Components/Skills';
import GithubCal from '../Components/GithubCal';
import {TypeAnimation} from 'react-type-animation'
import {FaGithubSquare,FaGithub,FaLinkedin,FaLinkedinIn,FaFileDownload,FaDownload} from 'react-icons/fa';
import {RiArrowUpCircleFill,RiArrowUpCircleLine} from 'react-icons/ri'
import {Link} from 'react-scroll'
import Resume from '../Download/Aniket-Parmar-Resume.pdf';
import Contact from '../Components/Contact';
import Project from '../Components/Project';
import Footer from '../Components/Footer';
function Home() {

  const [isDarkMode,toggleDarkMode]=useDarkMode();
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
  return (
    <div name="Home">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <div style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#2874F0",color:"black"}} id='about' className='max-w-screen md:w-full home mx-auto pt-10 pb-20 md:pt-28 '>
        <div className="max-w-screen md:max-w-screen-lg text-center lg:text-left mx-auto grid lg:grid-cols-2 items-center">
            <div className="px-8 py-12 max-w-lg  sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
              <div>

            <TypeAnimation
                sequence={[
                'I Am Aniket Parmar',
                2000, 
                'Full Stack Web developer', 
                2000, 
                'Enthusiastic Coder', 
                2000,
              ]}
              wrapper="div"
              cursor={true}
                repeat={Infinity}
                // style={{ fontSize: '2rem' }}
                className={isDarkMode===true?"text-blue-400 xl:text-4xl text-2xl animate-none md:animate-pulse ":"text-blue-900 xl:text-4xl text-2xl animate-none md:animate-pulse z-0"}
            />
              </div>
            <div className='mt-5 flex justify-center  xl:justify-start space-x-8'>
              <button>
              <a href="https://github.com/aniketparmar29" target="_blank" rel="noopener noreferrer">
                {isDarkMode && <FaGithubSquare size={50}/>}
                {!isDarkMode && <FaGithub size={50}/>}
                </a>
              </button>
              <button>
                <a href="https://www.linkedin.com/in/aniket-parmar-a42597239/" target="_blank" rel="noopener noreferrer">
              {isDarkMode && <FaLinkedin size={50}/>}
              {!isDarkMode && <FaLinkedinIn size={50}/>}
                </a>
              </button>
              <a href="https://drive.google.com/file/d/1LbPArwTFWUcw_OZZNMw0JCojAp1GcFa7/view?usp=share_link" rel='noreferrer' target={"_blank"}>
              <button onClick={handleDownload} className='flex-col mt-2 justify-center items-center'>
                <div>
              {isDarkMode && <FaFileDownload size={50}/>}
              {!isDarkMode && <FaDownload size={40}/>}
                </div>
                <p className={isDarkMode===true?'-ml-[0.15rem]':'-ml-[0.4rem]'}>Resume</p>
              </button>
              </a>
            </div>
            </div>
            <div>
                <img className='mx-auto rounded-2xl shadow-xl shadow-blue-900/100 w-8/12  object-cover object-center md:w-8/12  lg:w-7/12' src="https://avatars.githubusercontent.com/u/80318654?v=4" alt="Aniket Parmar" />
            </div>
        </div>
    </div>
    
        <About isDarkMode={isDarkMode}/>
    
        <Skills isDarkMode={isDarkMode}/>
    
      <GithubCal isDarkMode={isDarkMode}/>
    <div style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}} className=" xl:flex 2xl:flex lg:flex gap-20 justify-between">
    
      <Project isDarkMode={isDarkMode}/>

  </div>
    
      <Contact isDarkMode={isDarkMode}/>
    
      <Footer isDarkMode={isDarkMode}/>
        <button className='fixed z-100 bottom-4 right-2'><Link to='Home' smooth duration={1200}>{isDarkMode && <RiArrowUpCircleFill className='text-blue-400 hover:text-blue-500' size={50}/>}
              {!isDarkMode && <RiArrowUpCircleLine className='text-blue-800 hover:text-blue-900'size={50}/>}</Link></button>
    </div>
  )
}

export default Home