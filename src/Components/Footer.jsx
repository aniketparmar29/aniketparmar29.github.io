import React from 'react'

function Footer({isDarkMode}) {
  return (
    <div className='text-center footer  font-serif text-lg py-2  left-[32rem] bottom-0'style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"white",color:"black"}} >
      © 2023 Aniket Parmar | All rights reserved</div>
  )
}

export default Footer