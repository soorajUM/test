import React, { useState } from 'react'
interface ddprops{
    heading:string;
    options:{
      label:string,
      href:string
    }[]
    

}

const Dropdown = ({options,heading}:ddprops) => {
  const [visibility,setvisibility]= useState(true)
  
  return ( 
    <div onClick={()=>{setvisibility(true)}} onMouseLeave={()=>{setvisibility(false)}} 
    className=' text-base bg-gray-500 w-40 cursor-pointer relative text-center'>
    <div className='hover:bg-gray-600'>{heading}</div>
      {visibility && (<div className='absolute text-base bg-gray-500 text-center w-full'>
      <ul>
    {options?.map((value, index)=>
    <li className='hover:bg-gray-600 ' value={index} >
      <a href={value.href} className='cursor-pointer'>{value.label}</a>
    </li>)}
    </ul>

    </div>)}

    </div> 
  )
}
  

export default Dropdown
