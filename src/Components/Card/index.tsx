import { any, number } from 'joi'
import React from 'react'
 
interface CardProps{
    data:{
        image: string;
        heading: string;
        descrition: string;
    }[]
 
}
 
   
const Card = ({data}:CardProps) => {
   
 
  return (
    <div className='flex p-10 '>
      {data?.map((Card,index:number)=>(
        <div className='p-10 bg-slate-600'>
           <img className='w-40	h-40' src={Card.image} alt="" />
            <div className=''  key={index}>{Card.heading}</div>
            <div className='' key={index}>{Card.descrition}</div>
        </div>
           ))
        }
    </div>
)}
 
export default Card