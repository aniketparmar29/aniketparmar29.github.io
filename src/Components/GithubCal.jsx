import React,{useEffect} from 'react'
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
function GithubCal({isDarkMode}) {
  useEffect(()=>{
    AOS.init({delay:200});
},[])
  return (
    <>
    <div style={isDarkMode===true?{backgroundColor:"teal",color:"white"}:{backgroundColor:"cyan",color:"black"}} id='about' name="About" className='max-w-screen md:w-full flex justify-center items-center xl:p-20 p-auto mx-auto pt-10 pb-20 md:pt-28 '>
        <div>
        <p data-aos="fade-right" className="text-5xl text-center mb-10 hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Github Calender
          </p>
    <GitHubCalendar
    username="aniketparmar29"
    blockSize={15}
    blockMargin={5}
    color={isDarkMode===true? "#90AFE0" : "#ff7474"}
    fontSize={15}
    data-aos="fade-up"
></GitHubCalendar>
</div>
        </div>
</>
  )
}

export default GithubCal