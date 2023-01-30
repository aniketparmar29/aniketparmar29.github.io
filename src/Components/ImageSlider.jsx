import React, { useState } from 'react'
import { useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const ImageSlider = ({data,imgStyle }) => {
  const [image,setImage] = useState(0);
  const [mystyle,setMyStyle] = useState("cursor-pointer");

  const style =()=>{
    if(image===3 || image===1){
         setMyStyle("cursor-not-allowed")
    }
  }
  useEffect(()=>{
     style();
  },[image])

  return (
    <div className='max-w-screen-lg h-full flex justify-center relative'>
        <div className='flex items-center rounded-full hover:opacity-60 justify-center w-8 h-8  z-10 bg-black opacity-40 absolute top-[50%] hover:${mystyle} left-[2%]' >
        <button disabled={image===0} onClick={()=>setImage(prev=>prev-1)}>
        <BiChevronLeft size="36px" color="white"/>
        </button>
        </div >
        <div>
       <img  className={imgStyle}  src={data[image].src} alt="img"/>
        </div>
       <div className='flex items-center rounded-full hover:opacity-60  justify-center w-8 h-8 z-10 bg-black  opacity-40 absolute top-[50%] right-[2%] hover:${mystyle}'>
       <button  disabled={image===3} onClick={()=>setImage(prev=>prev+1)}>
        <BiChevronRight size="36px" color="white"/>
        </button>
       </div>
    </div>
  )
}

export default ImageSlider;