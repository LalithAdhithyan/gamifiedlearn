import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import './Profile.css'
import quizmastery from './quizmastery.json';
import { useContext } from 'react';
import { Quizcontext } from '../Helpers/Quizcontext';
import bgglow from './Bgglow.json';

const Popuup = ({visible,handleclose}) => {
    const {setshowpopup} =useContext(Quizcontext);

const[timing,settiming] = useState(5);

useEffect(()=>{
    const timer = timing > 0 && setInterval(()=>{
      settiming((prev) => prev -1)
    },7000);
    console.log(timing);

    return ()=>
    setshowpopup(false);
     clearInterval(timer);
  },[timing]);

  useEffect(()=>{
    const timer = timing===0 && setTimeout(()=>{
       setshowpopup(false);
    },[])
    return ()=>clearInterval(timer);
  },[])

  const handleshowbadge=()=>{
    setshowbadge(true);
    setshowpopup(false);
  }

  





    const {setgamestate , setshowbadge}= useContext(Quizcontext);

    if(!visible){
        return null;
    }
  return (
    <div className='absolute popupdiv z-50 flex flex-row '>
      <Lottie animationData={bgglow} className='absolute left-32 h-48'/>
      <Lottie animationData={quizmastery} loop={false} className='h-28 top-12 left-44 absolute'/>
      <h3 className='text-xl text-slate-300 font-semibold tracking-wider relative top-4 left-8'>Congrats! you,ve unlocked a new badge!!</h3>
      <h3 onClick={handleshowbadge} className='absolute text-slate-300 bottom-0 left-32 cursor-pointer opacity-75 text-xl font-thin tracking-wide border-1  px-7 rounded-lg'>Check badges</h3>
    </div>
  )
}

export default Popuup
