import React from 'react'
import './Profile.css'
import energy from './images/lighting.png';
import man1 from './images/otaku.png';
import Counter from './Counter';
import prof1 from './images/otaku.png';
import prof2 from './images/otaku (1).png';
import prof3 from './images/otaku3.png';
import prof4 from './images/otaku4.png';
import prof5 from './images/otaku5.png';
import prof6 from './images/otaku6.png';
import prof7 from './images/otaku7.png';
import { motion } from 'framer-motion';

const Peoplemodal = ({show , handleclose}) => {
  if(!show) return null;
  return (
    <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}}  exit={{opacity:0,y:50}}  className=' inset-0 z-30 absolute backdrop-blur-sm rounded-xl  '>

        <div className='peoplebox modalboxalign '>
            <div className=' h-16 w-full flex justify-center rounded-xl'>
          <div className='flex flex-row'>
            <input className='text-lg  font-sans placeholder:text-center top-6 bg-black border-2 border-slate-600 placeholder:text-white placeholder:text-sm placeholder:font-semibold absolute h-6 w-64 left-36 rounded-xl text-white' placeholder='Search Friends...'/>
            <div className='flex flex-row'>
            <img src={energy} alt='energy' className='absolute h-7 w-7 left-5 top-3'/>
            <h3 className='text-xl font-sans absolute left-11 top-3 text-yellow-400 ml-1'>50</h3>
            </div>
        <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={handleclose} className=' bg-slate-500 px-4 rounded-md opacity-75  text-slate-200 absolute right-3 top-6 '>close</motion.button>
          </div>

      <div>
        <ul>
        <div className='relative flex flex-col pbalign mb-5 -left-44 '>
            <li className='flex flex-row '>
              <img src={man1} alt='man' className='h-14 w-14   rounded-full'/>
              <h3 className='relative top-3 left-10 text-xl  font-sans text-white'>Nick Jonas </h3>
              <Counter />
          </li>
         </div>
         <div className='relative flex flex-col pbalign mb-5 -left-44'>
            <li className='flex flex-row '>
              <img src={prof7} alt='man' className='h-14 w-14   rounded-full'/>
              <h3 className='relative top-3 left-10 text-xl  font-sans text-white'>Stewart </h3>
              <Counter />
          </li>
         </div>
         <div className='relative flex flex-col pbalign mb-5 -left-44'>
            <li className='flex flex-row '>
              <img src={prof2} alt='man' className='h-14 w-14   rounded-full'/>
              <h3 className='relative top-3 left-10 text-xl  font-sans text-white'>Barney Jones </h3>
              <Counter />
          </li>
         </div>
         <div className='relative flex flex-col pbalign mb-5 -left-44'>
            <li className='flex flex-row '>
              <img src={prof3} alt='man' className='h-14 w-14   rounded-full'/>
              <h3 className='relative top-3 left-10 text-xl  font-sans text-white'>Michael kilua </h3>
              <Counter />
          </li>
         </div>
         <div className='relative flex flex-col pbalign mb-5 -left-44'>
            <li className='flex flex-row '>
              <img src={prof4} alt='man' className='h-14 w-14   rounded-full'/>
              <h3 className='relative top-3 left-10 text-xl  font-sans text-white'>Robert </h3>
              <Counter />
          </li>
         </div>
         <div className='relative flex flex-col pbalign mb-5 -left-44'>
            <li className='flex flex-row '>
              <img src={prof5} alt='man' className='h-14 w-14   rounded-full'/>
              <h3 className='relative top-3 left-10 text-xl  font-sans text-white'> Simon </h3>
              <Counter />
          </li>
         </div>
         
       
         

        </ul>
        </div>
      
           
            </div>

          
         </div>
      

    </motion.div>
  )
}

export default Peoplemodal
