import React from 'react'
import {FaArrowAltCircleRight,FaArrowRight} from 'react-icons/fa'
function Skills({isDarkMode}) {
  return (
    <div id='skills' style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}}>
            <h1 className='text-5xl text-center hover:underline hover:text-blue-900 hover:underline-offset-8'>Skills</h1>
            <ul className='space-y-4'>
                <li className='text-2xl ml-[5%]  hover:underline hover:text-blue-600 hover:underline-offset-4 flex space-x-8'>{isDarkMode && <FaArrowAltCircleRight size={50}/>}
              {!isDarkMode && <FaArrowRight size={40}/>} <div>Frontend</div></li>
              <div className="w-full grid grid-cols-2 mt-8 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png"className="w-20 mx-auto"  alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
                <div className="p-5 px-20  flex-col items-center justify-center mx-auto rounded-2xl shadow-xl shadow-blue-900/50 w-8/12 object-cover object-center md:w-8/12  lg:w-7/12">
                    <img src="https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png" className="w-20 mx-auto" alt="html" />
                    <h3>HTML</h3>
                </div>
              </div>
                <li className='text-2xl ml-[5%]  hover:underline hover:text-blue-600 hover:underline-offset-4 flex space-x-8'>{isDarkMode && <FaArrowAltCircleRight size={50}/>}
              {!isDarkMode && <FaArrowRight size={40}/>} <div> backend</div></li>
                <li className='text-2xl ml-[5%]  hover:underline hover:text-blue-600 hover:underline-offset-4 flex space-x-8'>{isDarkMode && <FaArrowAltCircleRight size={50}/>}
              {!isDarkMode && <FaArrowRight size={40}/>} <div>Tools</div></li>
            </ul>
    </div>
  )
}

export default Skills