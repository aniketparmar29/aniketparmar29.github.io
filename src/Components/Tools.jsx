import React,{useEffect} from "react";
import AOS from "aos";
import npm from '../assets/npm.png'
import VsCode from '../assets/VsCode.png'
const Tools = ({isDarkMode}) => {
  useEffect(()=>{
    AOS.init({delay:200});
},[])
  const techs = [
    {
      id: 1,
      src: VsCode,
      title: "Vs Code",
    },
    {
      id: 2,
      src: "https://camo.githubusercontent.com/b8ee9fd2e9b26a7265ece6dbc6f5c7449928b84f45a08fe5852d6a8dfd915fb3/68747470733a2f2f6769742d73636d2e636f6d2f696d616765732f6c6f676f732f646f776e6c6f6164732f4769742d49636f6e2d31373838432e706e67",
      title: "Git",
    },
    {
      id: 3,
      src: "https://camo.githubusercontent.com/d601c369bb55365c4c2603247a77d1d7aa04af379eb37360db215f3af850ee43/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d74616c2d72657669766f2d736861646f772d74616c2d72657669766f2f3334342f65787465726e616c2d6e65746c6966792d612d636c6f75642d636f6d707574696e672d636f6d70616e792d746861742d6f66666572732d686f7374696e672d616e642d7365727665726c6573732d6261636b656e642d73657276696365732d666f722d7374617469632d77656273697465732d6c6f676f2d736861646f772d74616c2d72657669766f2e706e67",
      title: "Netlify",
    },
    {
      id: 4,
      src: npm,
      title: "npm",
    }
   
  ];


  return (
    <div
      name="Tools"
      className="w-full pt-2 md:pt-2 z-0 hover:z-0 skill"
      style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#2874F0",color:"black"}}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full " >
        <div data-aos="fade-right">
          <p className="text-5xl text-center hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Tools
          </p>
        </div>

        <div  className="w-full grid grid-cols-2 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-8 " data-aos="fade-up"  >
          {techs.map(({ id, src, title }) => (
            <div
            style={isDarkMode===true?{backgroundColor:"#ff7474",color:"white"}:{backgroundColor:"#07F59F",color:"black"}}
              key={id}
              className={`shadow-lg  duration-300 py-2 rounded-lg  ${isDarkMode===true?"shadow-cyan-400":"shadow-white"} hover:scale-110` }  
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;