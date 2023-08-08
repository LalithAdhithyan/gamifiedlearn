import React from 'react'
import './Profile.css';
import fire from './firestreak.json'
import Lottie from 'lottie-react';

const LearningStreak = () => {
  return (
    <div className=' absolute backdrop-blur-sm inset-0 z-30'>
      <div className='learningstreakdiv flex flex-col'>
<header className='header w-full h-9 flex flex-row'>
 
  <Lottie animationData={fire} loop={true}/>
  <h3 className='relative text-xl top-2 text-slate-400 tracking-wide'>24</h3>
  <div className='carouseldiv'>

  </div>

  </header>
      </div>
      
    </div>
  )
}

export default LearningStreak
