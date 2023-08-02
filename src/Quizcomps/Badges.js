import React from 'react'
import Lottie from 'lottie-react'
import { useContext } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import { motion } from 'framer-motion'
import './badge.css';
import man from './images/Man.png'
import badge1 from './badge1.json';
import badge2 from './badge2.json'
import badge3 from './badge3.json';
import badge4 from './badge4.json';
import badge5 from './badges5.json'
import badge6 from './badge6.json'
import unlocks from './unlock.json'
import quizmastery from './quizmastery.json';

const Badges = ({showbadge,visible}) => {
  const {unlock} = useContext(Quizcontext);
if(!showbadge){
    return null;
}

  return (
    <motion.div  layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className='badgediv z-40 absolute '>
        <div className="text-slate-300">
          <h3 className='text-slate-300 text-xl font-semibold absolute right-10 border-2 px-10 opacity-50 rounded-lg border-slate-600 top-3 cursor-pointer' onClick={visible}>Close</h3>
       <img src={man} className='h-32 rounded-full relative top-10 left-4 w-32' />
       <div className='relative -top-16 left-40 text-xl font-semibold'>
       <h3 className='mb-1'>Ronald ackerman</h3>
       <h3 className='mb-1'>RonaldAckerman134@gmail.com</h3>
       <h3 className='mb-1'>Player Id: <span className='text-red-400'>#H43Bvdi</span></h3>
       </div>
<button className=' px-7 animate-pulse text-red-300 hintpos'>How to earn badges?</button>
       <div className='relative left-64 -top-8'>
  <h3 className='text-2xl  text-slate-500 font-semibold tracking-wide relative left-36'>Badges unlocked<span className='ml-3 mr-1 text-3xl font-bold tracking-tighter text-red-600'>6 </span>/<span className='text-slate-500 font-bold ml-1 text-2xl'>10</span></h3>
   </div>
   <div className='flex flex-col'>
    <div className='flex flex-row'> 
   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={badge1} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-16 text-slate-300 text-bold text-xl tracking-wide'>Starstruck</h3>
   </div>
   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={badge2} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-16 -top-2 text-slate-300 text-bold text-xl tracking-wide'>A+ Student</h3>
   </div>
   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={badge3} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-9 text-slate-300 text-bold text-xl tracking-wide'>Weekend warrior</h3>
   </div>
   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={badge4} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-20 text-slate-300 text-bold text-xl tracking-wide'>On a roll</h3>
   </div>
 </div>
 <div className='flex flex-row mt-6'>
 <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={badge5} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-16 text-slate-300 text-bold text-xl tracking-wide'>Energy king</h3>
   </div>
   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={badge6} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-12 -top- text-slate-300 text-bold text-xl tracking-wide'>Overachiever</h3>
   </div>


   {unlock == true?
   <div className='badgebox ml-7 flex flex-col'>
   <Lottie animationData={quizmastery} loop={false} className='w-36 relative left-8'/>
   <h3 className='relative left-12 top-0 text-slate-300 text-bold text-xl tracking-wide'>Quiz mastery</h3>
   
   </div>:
   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={unlocks} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-14 -top- text-slate-300 text-bold text-xl tracking-wide'>yet to unlock</h3>
   </div>}



   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={unlocks} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-14 -top- text-slate-300 text-bold text-xl tracking-wide'>yet to unlock</h3>
   </div>

 </div>

 <div className='flex flex-row mt-6'>
 <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={unlocks} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-14 -top- text-slate-300 text-bold text-xl tracking-wide'>yet to unlock</h3>
   </div>
   <div className='badgebox ml-7 flex flex-col'>
    <Lottie animationData={unlocks} loop={false} className=' w-40  relative left-8'/>
    <h3 className='relative left-14 -top- text-slate-300 text-bold text-xl tracking-wide'>yet to unlock</h3>
   </div>
 </div>



   </div>
        </div>
    </motion.div>
  )
}

export default Badges
