import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import a2 from '../assets/project/hathibrand/index.jpg'
import a1 from '../assets/project/hathibrand/home.png'
import a3 from '../assets/project/hathibrand/Admin.png'
import a4 from '../assets/project/hathibrand/checkout.png'
import b1 from '../assets/project/skinstore/home.png'
import b2 from '../assets/project/skinstore/section.png'
import b3 from '../assets/project/skinstore/payment.png'
import b4 from '../assets/project/skinstore/singin.png'
import c1 from '../assets/project/tatacliq/home.png'
import c2 from '../assets/project/tatacliq/section.png'
import c3 from '../assets/project/tatacliq/admin.png'
import c4 from '../assets/project/tatacliq/wishlist.png'
import d1 from '../assets/project/mycodingai/home.png'
import d2 from '../assets/project/mycodingai/resposive.png'
import d3 from '../assets/project/mycodingai/serach.png'
import ImageSlider from "./ImageSlider";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux,SiExpress,SiNodedotjs, SiMysql, SiTailwindcss, SiChakraui} from "react-icons/si";
const Project = ({isDarkMode}) => {
  useEffect(()=>{
    AOS.init({delay:1});
},[])
const hathibrannd = [
  {
    id: 2,
    src: a1,
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
const MycodingAi =[
  {
    id:1,
    src:d1,
  },
  {
    id:2,
    src:d2,
  },
  {
    id:3,
    src:d3,
  }
]
let style_md = "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";
  return (
    <div  style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"white",color:"black"}} className={` m-auto  z-1  w-[100%] pb-5 project `}  name="Projects">
      <div >
          <p className="text-5xl text-center mb-5 hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Projects
          </p>
        </div>
        {/* hathibrand pro */}
        <div style={isDarkMode===true?{backgroundColor:"#ff7474",color:"white"}:{backgroundColor:"#C0EEF2",color:"black"}} className={`lg:max-w-screen-lg w-[80%] z-1 m-20  mx-auto px-2 shadow-lg ${isDarkMode===true?"shadow-cyan-400":"shadow-white"} mt-0 md:mt-10 `}>
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='lg:p-12 p-5 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={hathibrannd} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" >Hathibrand
            </h1>
            <p className="w-full  mt-2  sm:mt-2 sm:text-xl"  >
            Hathibrand is source for premium quality incense sticks & Cosmetics. Shop our extensive selection of fragrances and enjoy.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'  >
            <div><SiReact size="32px" color="#61DBFB" className="hover:animate-spin hover:cursor-pointer"/></div>
            <div><SiRedux size="32px" color="#764abc" className="hover:animate-spin hover:cursor-pointer"/></div>
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiChakraui size="32px" color="cyan" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiNodedotjs size="32px" color="green" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiMysql size="32px" color="blue" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiTailwindcss size="32px" color="cyan" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6" >
            <div className="mt-4 sm:mt-6">
              <a href="https://github.com/aniketparmar29/hathibrand" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6" >
              <a href="https://hathibrand.in/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block piji "  >
        <a href="https://hathibrand.in/" target={"_blank"} rel='noreferrer'> 
      <img className="imgji " src={a2} alt="logo" />
        </a>
        </div>
      </div>
      </div>
        {/* skinstore pro */}
        <div style={isDarkMode===true?{backgroundColor:"#ff7474",color:"white"}:{backgroundColor:"#C0EEF2",color:"black"}} className={`lg:max-w-screen-lg w-[80%] z-1 m-20  mx-auto px-2 shadow-lg ${isDarkMode===true?"shadow-cyan-400":"shadow-white"} mt-0 md:mt-10 `}>
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='lg:p-12 p-5 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={skinstore} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" >SkinStore Clone
            </h1>
            <p className="w-full  mt-2  sm:mt-2 sm:text-xl"  >
            SkinStore offers premium beauty products like lipstick, Eyeliner, and many more products with the latest in innovative clinical skincare and luxury spa products.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'  >
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6" >
            <div className="mt-4 sm:mt-6">
              <a href="https://github.com/aniketparmar29/SkinStore-Clone" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6" >
              <a href="https://elegant-sprite-192e51.netlify.app/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block piji "  >
        <a href="https://elegant-sprite-192e51.netlify.app/" target={"_blank"} rel='noreferrer'> 
      <img className="imgji " src={b1} alt="logo" />
        </a>
        </div>
      </div>
      </div>
      {/* my coding ai project */}
        <div  style={isDarkMode===true?{backgroundColor:"#ff7474",color:"white"}:{backgroundColor:"#C0EEF2",color:"black"}} className={`lg:max-w-screen-lg w-[80%] z-1 m-20  mx-auto px-2 shadow-lg ${isDarkMode===true?"shadow-cyan-400":"shadow-white"} mt-0 md:mt-10 `}>
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='lg:p-12 p-5 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={MycodingAi} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" >My Coding AI
            </h1>
            <p className="w-full  mt-2  sm:mt-2 sm:text-xl"  >
            My coding AI is a clone of CHATGTP where you search and learn from it ai based app arond open ai. open ai is ai base multi national company that provide ai based solution . they provide some free api as well.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'  >
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiExpress size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiNodedotjs size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6" >
            <div className="mt-4 sm:mt-6">
              <a href="https://github.com/aniketparmar29/myhelperai" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6" >
              <a href="https://myhelperai.vercel.app/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block  "  >
        <a href="https://myhelperai.vercel.app/" target={"_blank"} rel='noreferrer'> 
      <img className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer " src={d1} alt="logo" />
        </a>
        </div>
      </div>
      </div>
      {/* tatacliq  */}
      <div  style={isDarkMode===true?{backgroundColor:"#ff7474",color:"white"}:{backgroundColor:"#C0EEF2",color:"black"}} className={`lg:max-w-screen-lg w-[80%] z-1 m-20  mx-auto px-2 shadow-lg ${isDarkMode===true?"shadow-cyan-400":"shadow-white"} mt-0 md:mt-10 `}>
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='lg:p-12 p-5 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={tatacliq} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" >Tatacliq Clone
            </h1>
            <p className="w-full  mt-2  sm:mt-2 sm:text-xl"  >
            TATA CLiQ is Shop Online with India's most trusted destination Our sleek, immersive design allows you to easily navigate between categories and brand stores to find a wide selection of womenswear, menswear, kidswear, footwear, watches, accessories, footwear, watches and accessories online.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5' >
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiReact size="32px" color="#61DBFB" className="hover:animate-spin hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiRedux size="32px" color="#764abc" className="hover:animate-spin hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6" >
              <a href="https://github.com/blackcode1996/Tata-Cliq-clone" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6"  >
              <a href="https://tata-cliq-clone.vercel.app/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block piji"  >
      <a href="https://tata-cliq-clone.vercel.app/" target={"_blank"} rel='noreferrer'>
      <img className="imgji" src={c1} alt="logo" />
      </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Project;