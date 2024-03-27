import React,{useState} from 'react'
import Loader from './Loader'

const Full_Modal = ({res}) => {
  // console.log(res)
  return (
   <>
   {res?.loading ? <Loader/> : null} 
    
   
   </>
  )
}

export default Full_Modal
