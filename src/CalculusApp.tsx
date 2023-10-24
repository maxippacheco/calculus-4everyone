import React, {useEffect} from 'react';
import { AppRouter } from "./routers"


const CalculusApp = () => {
  useEffect(()=>{
  if(typeof window?.MathJax !== "undefined"){
    window.MathJax.typeset()
  }
  },[])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default CalculusApp