import React from 'react'

function Contact({isDarkMode}) {
  return (
    <div  style={isDarkMode===true?{backgroundColor:"rgb(8, 16, 28)",color:"white"}:{backgroundColor:"rgb(144, 175, 224)",color:"black"}} id='about' name="Contacts" className='max-w-screen md:w-full  mx-auto pt-10 pb-20 md:pt-28 '>
      <form>
        <label htmlFor="Name">
        </label>
        
      </form>
    </div>
  )
}

export default Contact