import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import c1 from '../assets/project/tatacliq/home.png'
import c2 from '../assets/project/tatacliq/section.png'
import c3 from '../assets/project/tatacliq/admin.png'
import c4 from '../assets/project/tatacliq/wishlist.png'
import a1 from '../assets/project/jayhovillage/home.png'
import a2 from '../assets/project/jayhovillage/section.png'
import a3 from '../assets/project/jayhovillage/admin.png'
import a4 from '../assets/project/jayhovillage/wishlist.png'
import ImageSlider from "./ImageSlider";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiMysql,SiPhp,SiBootstrap,SiJquery} from "react-icons/si";
const Project = ({isDarkMode}) => {
  useEffect(()=>{
    AOS.init({delay:1});
},[])
const jayhovillage = [
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

let style_md = "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";
  return (
    <div  style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"white",color:"black"}} className={` m-auto  z-1  w-[100%] pb-5 project `}  name="Projects">
      <div >
          <p className="text-5xl text-center mb-5 hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Projects
          </p>
        </div>
        
      {/* Jay Ho Village  */}
      <div  style={isDarkMode===true?{backgroundColor:"#ff7474",color:"white"}:{backgroundColor:"#C0EEF2",color:"black"}} className={`lg:max-w-screen-lg w-[80%] z-1 m-20  mx-auto px-2 shadow-lg ${isDarkMode===true?"shadow-cyan-400":"shadow-white"} mt-0 md:mt-10 `}>
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='lg:p-12 p-5 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={jayhovillage} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl" >Jay Ho Village
            </h1>
            <p className="w-full  mt-2  sm:mt-2 sm:text-xl"  >
            Developed a comprehensive e-commerce platform for Jay Ho Village, specializing in organic food. Utilized PHP and MySQL for the backend, and implemented an intuitive admin panel for efficient management. Key features include a product catalog, user authentication, and seamless order processing, providing users with a seamless and enjoyable shopping experience.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5' >
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiJquery size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiBootstrap size="32px" color="#764abc" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiMysql size="32px" color="#61DBFB" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>
            <div><SiPhp size="32px" color="#764abc" className="hover:animate-bounce hover:cursor-pointer"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6"  >
              <a href="https://jayhovillage.co.in/" target={"_blank"} rel='noreferrer'>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block piji"  >
      <a href="https://jayhovillage.co.in/" target={"_blank"} rel='noreferrer'>
      <img className="imgji" src={a1} alt="logo" />
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