import React from 'react'

function Contact({isDarkMode}) {
  return (
    <div  style={isDarkMode===true?{backgroundColor:"teal",color:"white"}:{backgroundColor:"cyan",color:"black"}} id='about' name="Contacts" className='max-w-screen md:w-full  mx-auto pt-10 pb-20 md:pt-28 '>
      <form>
        <label htmlFor="Name">
        </label>
        
      </form>
    </div>
  )
}

export default Contact