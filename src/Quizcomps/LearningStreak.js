import React from 'react'
import './Profile.css';
import fire from './firestreak.json'
import Lottie from 'lottie-react';
import { AiOutlineCaretRight } from "react-icons/ai";
import { motion } from 'framer-motion';
import { FaLock,FaUnlock } from "react-icons/fa";
import diamond from './images/diamond.png'
import energy from './images/lighting.png'


const LearningStreak = ({visible,handleclose}) => {

  if(!visible){
    return null;
  }
  return (
    <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}}  exit={{opacity:0,y:50}} className=' absolute backdrop-blur-sm inset-0 z-30'>
      <div className='learningstreakdiv flex flex-col'>

<header className='header w-full h-9 flex flex-row'>
 <h3 className='absolute left-80 text-xl top-2 font-semibold tracking-wider text-slate-300'>Complete missions to Claim day<span className='text-red-600 font-bold text-2xl'> 2</span> rewards</h3>
 <button onClick={handleclose} className='absolute right-8  text-slate-400 border-2 border-sky-200 py-0.5 px-10  rounded-lg'>Close</button>
  <Lottie animationData={fire} loop={true}/>
  <h3 className='relative text-xl top-2 text-orange-200 tracking-wide'>24</h3>
  <div className='carouseldiv flex flex-row'>

  <div className='completedcarddiv flex flex-col justify-start items-center'>
    <h3 className='text-xl font-semibold text-slate-400 tracking-wider top-2 relative '>Day1</h3>
    <img src={diamond} className='h-10 w-10 left-1  relative top-8 mr-2'/>
    <h3 className='top-12 relative text-2xl font-semibold text-sky-300 left-2  mr-4 '> 50</h3>
   <h3 className='text-slate-300 text-xl font-semibold tracking-wide relative top-16'>Reward Claimed!</h3>

</div>
  <div className='carddiv flex flex-col justify-start items-center'>
    <h3 className='text-xl font-semibold text-slate-400 tracking-wider top-2 relative '>Day2</h3>
    <img src={diamond} className='h-10 w-10 left-1  relative top-8 mr-2'/>
    <h3 className='top-12 relative text-2xl font-semibold text-sky-300 left-2  mr-4 '> 100</h3>
    <div className='relative h-7 w-20 top-16 rounded-lg bg-slate-700'></div>
 <FaUnlock className='text-2xl faunpos'/>

</div>
  <div className='carddiv flex flex-col justify-start items-center'>
    <h3 className='text-xl font-semibold text-slate-400 tracking-wider top-2 relative '>Day3</h3>
    <img src={diamond} className='h-10 w-10 left-1  relative top-8 mr-2'/>
    <h3 className='top-12 relative text-2xl font-semibold text-sky-300 left-2  mr-4 '> 150</h3>
    <div className='relative h-7 w-20 top-16 rounded-lg bg-slate-700'></div>
 <FaLock className='text-2xl faunpos'/>

</div>
  <div className='carddiv flex flex-col justify-start items-center'>
    <h3 className='text-xl font-semibold text-slate-400 tracking-wider top-2 relative '>Day4</h3>
    <img src={diamond} className='h-10 w-10 left-1  relative top-8 mr-2'/>
    <h3 className='top-12 relative text-2xl font-semibold text-sky-300 left-2  mr-4 '> 200</h3>
    <div className='relative h-7 w-20 top-16 rounded-lg bg-slate-700'></div>
 <FaLock className='text-2xl faunpos'/>

</div>
  <div className='carddiv flex flex-col justify-start items-center'>
    <h3 className='text-xl font-semibold text-slate-400 tracking-wider top-2 relative '>Day5</h3>
    <img src={diamond} className='h-10 w-10 left-1  relative top-8 mr-2'/>
    <h3 className='top-12 relative text-2xl font-semibold text-sky-300 left-2  mr-4 '> 500</h3>
    <div className='relative h-7 w-20 top-16 rounded-lg bg-slate-700'></div>
 <FaLock className='text-2xl faunpos'/>

</div>

  </div>

</header>
<div className='missions flex flex-col'>
<h3 className='text-xl text-slate-500 font-semibold relative left-5 top-0'>Missions:</h3>

<div className='flex flex-row top-4 left-10 mb-4  relative '>
<AiOutlineCaretRight className='absolute text-white text-xl -left-8 top-0.5'/><h3 className='text-slate-300 '>Earn 100 points and 3 tokens </h3> <h3 className='absolute text-md font-light tracking-wider left-96 border rounded-md border-yellow-200 px-7 py-0.5 -top-1 text-yellow-300'>Pending</h3>

</div>
<div className='flex flex-row top-4 left-10 mb-4 relative '>
<AiOutlineCaretRight className='absolute text-white text-xl -left-8 top-0.5'/> <h3 className='text-slate-300 '>Take up a quiz on Java </h3><h3 className='absolute text-md font-light tracking-wider left-96 border rounded-md border-yellow-200 px-7 py-0.5 -top-1 text-yellow-300'>Pending</h3>
</div>
<div className='flex flex-row top-4 left-10 mb-4 relative '>
<AiOutlineCaretRight className='absolute text-white text-xl -left-8 top-0.5'/> <h3 className='text-slate-300 '>Complete a quiz on Thermodynamics </h3><h3 className='absolute text-md font-light tracking-wider left-96 border rounded-md border-yellow-200 px-7 py-0.5 -top-1 text-yellow-300'>Pending</h3>
</div>
  </div>
 <button className='text-xl cursor-pointer absolute px-10 right-10 py-0.5 rounded-md  top-96 border-2 border-sky-300 text-sky-200 animate-pulse'>How to maintain streaks?</button>
      </div>
      </motion.div>
  )
}

export default LearningStreak
