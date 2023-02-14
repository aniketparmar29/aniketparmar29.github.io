import { useState,useEffect } from 'react'

const useLoading = (delay) => {
    const [ready,setReady] = useState(false);

    useEffect(()=>{
     
        let id = setTimeout(()=>{
            setReady(true);
     },delay)

     return ()=>{
        clearTimeout(id);
     } 
    },[])
  return {ready};
}

export default useLoading;