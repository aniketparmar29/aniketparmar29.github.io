import React,{useEffect} from 'react'
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import ReactTooltip from 'react-tooltip';
function GithubCal({isDarkMode}) {
  useEffect(()=>{
    AOS.init({delay:200});
},[])
  return (
    <>
    <div style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"white",color:"black"}} id='about' name="About" className='max-w-screen md:w-full flex justify-center items-center xl:p-20 p-auto mx-auto pt-10 pb-20 md:pt-28 github'>
        <div>
        <p data-aos="fade-right" className="text-5xl text-center mb-10 hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Github Calender
          </p>
            <GitHubCalendar
    username="aniketparmar29"
    blockSize={15}
    blockMargin={5}
    color={isDarkMode===true? "#ff7474" : "#2ad56f"}
    fontSize={15}
    data-aos="fade-up"
>
<ReactTooltip delayShow={10} html />
</GitHubCalendar>
<div className='lg:ml-[25%] md:ml-[20%] sm:ml[15%]'>
<picture >
  <br />
<source 
  srcset={`https://github-readme-stats.vercel.app/api?username=aniketparmar29&show_icons=true&theme=${isDarkMode===true?"dark":"light"}`}
  media="(prefers-color-scheme: dark)"
/>
<source
  srcset="https://github-readme-stats.vercel.app/api?username=aniketparmar29&show_icons=true"
  media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
/>
<img src="https://github-readme-stats.vercel.app/api?username=aniketparmar29&show_icons=true" alt='stats' />
</picture>
</div>
</div>
        </div>
</>
  )
}

export default GithubCal