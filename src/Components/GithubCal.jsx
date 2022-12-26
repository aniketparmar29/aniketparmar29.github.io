import React from 'react'
import GitHubCalendar from "react-github-calendar";
function GithubCal({isDarkMode}) {
  return (
    <>
    <div style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}} id='about' name="About" className='max-w-screen md:w-full flex justify-center items-center xl:p-20 p-auto mx-auto pt-10 pb-20 md:pt-28 '>
        <div>
        <p className="text-5xl text-center mb-10 hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Skills
          </p>
    <GitHubCalendar
    username="aniketparmar29"
    blockSize={15}
    blockMargin={5}
    color={isDarkMode===true? "#90AFE0" : "#08101C"}
    fontSize={15}
></GitHubCalendar>
</div>
        </div>
</>
  )
}

export default GithubCal