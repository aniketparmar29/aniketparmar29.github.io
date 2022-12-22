import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import useDarkMode from '../hooks/useDarkMode'
import Skills from '../Components/Skills';
import {TypeAnimation} from 'react-type-animation'
import {FaGithubSquare,FaGithub,FaLinkedin,FaLinkedinIn,FaFileDownload,FaDownload} from 'react-icons/fa';
import Resume from '../Download/Aniket-Parmar-Resume.pdf';
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
    <div>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <div style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}} id='about' className='max-w-screen md:w-full  mx-auto pt-10 pb-20 md:pt-28 '>
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
                className={isDarkMode===true?"text-blue-400 xl:text-4xl text-2xl animate-none md:animate-pulse z-0":"text-blue-900 xl:text-4xl text-2xl animate-none md:animate-pulse z-0"}
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
              <button onClick={handleDownload} className='flex-col mt-2 justify-center items-center'>
                <div>
              {isDarkMode && <FaFileDownload size={50}/>}
              {!isDarkMode && <FaDownload size={40}/>}
                </div>
                <p className={isDarkMode===true?'-ml-[0.15rem]':'-ml-[0.4rem]'}>Resume</p>
              </button>
            </div>
            </div>
            <div>
                <img className='mx-auto rounded-2xl shadow-xl shadow-blue-900/100 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12' src="https://avatars.githubusercontent.com/u/80318654?v=4" alt="Aniket Parmar" />
            </div>
        </div>
    </div>
    <hr />
        <About isDarkMode={isDarkMode}/>
    <hr />
        <Skills/>
    </div>
  )
}

export default Home