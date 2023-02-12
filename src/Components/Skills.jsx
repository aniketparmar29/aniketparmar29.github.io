import React,{useEffect} from "react";
import AOS from "aos";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import chakra from "../assets/chakra.png";
const Skills = ({isDarkMode}) => {
  useEffect(()=>{
    AOS.init({delay:200});
},[])
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
    },
    {
      id: 6,
      src: typescript,
      title: "Typescript",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 8,
      src: chakra,
      title: "Chakra UI",
    },

    {
      id: 9,
      src: github,
      title: "GitHub",
    },
    {
      id: 10,
      src: node,
      title: "NodeJS",
    },
    {
      id: 11,
      src: express,
      title: "Express",
    },
    {
      id: 12,
      src: mongodb,
      title: "Mongodb",
    },
   
  ];


  return (
    <div
      name="Skills"
      className="w-full pt-2 md:pt-28 z-0 hover:z-0 "
      style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#00BFFF",color:"black"}}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full " >
        <div data-aos="fade-right">
          <p className="text-5xl text-center hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Skills
          </p>
        </div>

        <div  className="w-full grid grid-cols-2 mt-8 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 " data-aos="fade-up"  >
          {techs.map(({ id, src, title }) => (
            <div
            style={isDarkMode===true?{backgroundColor:"#ff7474",color:"white"}:{backgroundColor:"#2ad56f",color:"black"}}
              key={id}
              className={`shadow-lg  duration-300 py-2 rounded-lg  ${isDarkMode===true?"shadow-cyan-400":"shadow-teal-900"} hover:scale-110` }  
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

export default Skills;