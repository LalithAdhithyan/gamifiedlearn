import React from 'react'
import './Profile.css';
import coin from './images/coin.png'
import hammer from './images/hammer.png';
import stoptime from './images/whistle.png';
import extraxp from './images/hand-gesture.png';
import paf from './images/phone-call.png';
import freeze from './images/snowflake.png';
import { motion } from 'framer-motion';
import { useRef } from 'react';




const Coinmodal = ({visible ,handleclose}) => {
    
    const imageref = useRef(null);

    if(!visible) return null;

 
      
         const onenter=()=>{
    imageref.current.classList.add('animate-pulse');
      }

    const onexit=()=>{
    imageref.current.classList.remove('animate-pulse');
    }


   return(

    <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}}  exit={{opacity:0,y:50}}  className=' absolute backdrop-blur-sm inset-0 z-30 '>
  <div className=' modalbox flex flex-col '>
  <button onClick={handleclose} className='text-slate-300 absolute right-4 top-4 rounded-md text-md px-3  bg-slate-800'>close</button>

 
   <h3 className='absolute text-3xl left-60 font-sans font-semibold text-slate-600'>Item Shop</h3>
  


    <div className='flex flex-row absolute left-7 top-3 bg-slate-400 w-20 rounded-lg '>
    
    <img src={coin} className='relative h-7 w-7 mr-3  '/>
    <h1 className='text-xl bg-slate-50 rounded-lg w-9 justify-center flex text-slate-500'>34</h1>
    </div>



<div className='relative top-14'>

  <ul>

    <li >
        <div className='relative mb-3 mt-4 '>
         <div className='relative flex flex-col top-0 left-4'>

             <h3 className='text-xl relative text-slate-200'>50:50</h3>
             <img src={hammer} className='h-14 w-14 ' ref={imageref}/>
        </div>

        <div className=' flex flex-row absolute top-0 left-24'>
            <h3 className='relative top-7 text-lg text-slate-400'>Cuts off two incorrect options</h3>
           <motion.button onMouseEnter={onenter} onMouseLeave={onexit} whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-white  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Purchase</motion.button>
           <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>6</h3>
        </div>
        </div>
    </li>
    <li >
        <div className='relative mb-3'>
         <div className='relative flex flex-col top-0 left-4'>

             <h3 className='text-xl relative text-slate-200'>Freeze</h3>
             <img src={freeze} className='h-14 w-14 ' ref={imageref}/>
        </div>

        <div className=' flex flex-row absolute top-0 left-24 '>
            <h3 className='relative top-7 text-lg text-slate-400'>Freeze</h3>
            <motion.button onMouseEnter={onenter} onMouseLeave={onexit} whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-white  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Purchase</motion.button>
           <img src={coin} className='h-6 w-6 coinalign top-8'/>
           <h3 className='top-7 numberalign text-xl'>6</h3>
        </div>
        </div>
    </li>
    
    <li >
        <div className='relative mb-3'>
         <div className='relative flex flex-col top-0 left-4'>

             <h3 className='text-xl relative text-slate-200'>Call</h3>
             <img src={paf} className='h-14 w-14 '/>
        </div>

        <div className=' flex flex-row absolute top-0 left-24'>
            <h3 className='relative top-7 text-lg text-slate-400'>A friend in need is a friend indeed</h3>
            <motion.button onMouseEnter={onenter} onMouseLeave={onexit} whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-white  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Purchase</motion.button>
           <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 -7 numberalign text-xl'>6</h3>
        </div>
        </div>
    </li>
    
    <li >
        <div className='relative mb-3'>
         <div className='relative flex flex-col top-0 '>

             <h3 className='text-xl relative left-2 text-slate-200'>XP Boost</h3>
             <img src={extraxp} className='h-14 relative left-2 w-14 ' ref={imageref}/>
        </div>

        <div className=' flex flex-row absolute top-0 left-24'>
            <h3 className='relative top-7 text-lg text-slate-400'>Increase Points by 2x Times</h3>
            <motion.button onMouseEnter={onenter} onMouseLeave={onexit} whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-white  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Purchase</motion.button>
           <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>6</h3>
        </div>
        </div>
    </li>
    <li >
        <div className='relative mb-3'>
         <div className='relative flex flex-col top-0 '>

             <h3 className='text-xl relative left-6  text-slate-200'>skip </h3>
             <img src={stoptime} className='h-14 w-14 left-2 relative ' ref={imageref}/>
        </div>

        <div className=' flex flex-row absolute top-0 left-24'>
            <h3 className='relative top-7 text-lg text-slate-400'>Skips a question</h3>
            <motion.button onMouseEnter={onenter} onMouseLeave={onexit} whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-white  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Purchase</motion.button>
           <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>6</h3>
        </div>
        </div>
    </li>
    
    

  </ul>

  </div>

    
  </div>
   </motion.div>
  )
}

export default Coinmodal
