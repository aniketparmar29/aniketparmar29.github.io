import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import a1 from '../assets/project/sephora/home.png'
import a2 from '../assets/project/sephora/section.png'
import a3 from '../assets/project/sephora/Payment.png'
import a4 from '../assets/project/sephora/singin.png'
import b1 from '../assets/project/skinstore/home.png'
import b2 from '../assets/project/skinstore/section.png'
import b3 from '../assets/project/skinstore/payment.png'
import b4 from '../assets/project/skinstore/singin.png'
import c1 from '../assets/project/tatacliq/home.png'
import c2 from '../assets/project/tatacliq/section.png'
import c3 from '../assets/project/tatacliq/admin.png'
import c4 from '../assets/project/tatacliq/wishlist.png'
import ImageSlider from "./ImageSlider";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux} from "react-icons/si";
const Project = ({isDarkMode}) => {
  useEffect(()=>{
    AOS.init({delay:200});
},[])
const sephora = [
  {
    id: 1,
    src: a1,
  },
  {
    id: 2,
    src: a2,
  },
  {
    id: 3,
    src: a4,
  },
  {
    id: 4,
    src: a3,
  }
];
const skinstore =[
  {
    id:1,
    src:b1,
  },
  {
    id:2,
    src:b2,
  },
  {
    id:3,
    src:b3,
  },
  {
    id:4,
    src:b4,
  }
]
const tatacliq =[
  {
    id:1,
    src:c1,
  },
  {
    id:2,
    src:c2,
  },
  {
    id:3,
    src:c3,
  },
  {
    id:4,
    src:c4,
  }
]
let style_md = "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";
  return (
    <div className=" m-auto  z-1  w-[100%] pb-5" style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 38)",color:"white"}:{backgroundColor:"rgb(144, 175, 244)",color:"black"}} name="Projects">
      <div data-aos="fade-right">
          <p className="text-5xl text-center hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Projects
          </p>
        </div>

        <div className="max-w-screen-lg z-1  mx-auto px-2 shadow-xl shadow-gray-600 mt-0 md:mt-10  ">
        <div className="max-w-screen-lg z-1 mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 z-1 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden" data-aos="fade-up">
          <ImageSlider  data={sephora} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" data-aos="fade-right" >Sephora Clone
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl"  data-aos="fade-right">
            Sephora is a Beauty And Cosmetics Product Ecommerce webApp
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5' data-aos="zoom-out">
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6"  >
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              <a href="https://github.com/aniketparmar29/Sephora-Clone" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6"  data-aos="zoom-out">
              <a href="https://aquamarine-pasca-26e8fd.netlify.app/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " data-aos="fade-left" >
        <a href="https://aquamarine-pasca-26e8fd.netlify.app/" target={"_blank"} rel='noreferrer'>
        <img className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer " src={a1} alt="logo" />
        </a>
        </div>
      </div>
      </div>
      {/* skin store project */}
        <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={skinstore} imgStyle= {style_md} data-aos="fade-up"/>
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" data-aos="fade-right">SkinStore Clone
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl" data-aos="fade-right" >
            SkinStore offers premium beauty products like lipstick, Eyeliners, and many more products with the latest in innovative clinical skincare and luxury spa products.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'  data-aos="zoom-out">
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6" >
            <div className="mt-4 sm:mt-6"data-aos="zoom-out">
              <a href="https://github.com/aniketparmar29/SkinStore-Clone" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              <a href="https://elegant-sprite-192e51.netlify.app/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " data-aos="fade-left" >
        <a href="https://elegant-sprite-192e51.netlify.app/" target={"_blank"} rel='noreferrer'> 
      <img className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer " src={b1} alt="logo" />
        </a>
        </div>
      </div>
      </div>
      {/* Fitmeal  */}
      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={tatacliq} imgStyle= {style_md} data-aos="fade-up"/>
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" data-aos="fade-right">tatacliq Clone
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl"  data-aos="fade-right">
            tatacliq is Ecommerce Services based website used by wide range of customers.The intention was to introduce the concept of healthy eating in Hyderabad.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5' data-aos="zoom-out">
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiReact size="32px" color="#61DBFB" className="hover:animate-spin hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiRedux size="32px" color="#764abc" className="hover:animate-spin hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              <a href="https://github.com/blackcode1996/vigorous-driving-4005" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6"  data-aos="zoom-out">
              <a href="https://formalclick.netlify.app/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " data-aos="fade-left" >
      <a href="https://formalclick.netlify.app/" target={"_blank"} rel='noreferrer'>
      <img className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer " src={c1} alt="logo" />
      </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Project;