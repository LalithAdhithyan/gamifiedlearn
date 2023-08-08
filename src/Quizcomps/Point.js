import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Quizcontext } from '../Helpers/Quizcontext';
import coin from './images/coin.png'


const Point = ({handleclose,visible}) => {

    const {setnewgamestate}= useContext(Quizcontext);
   

    const point = useRef(null);

    if(!visible) return null;



    const onenter=()=>{
        point.current.classList.add('animate-pulse');
          }

    const onexit=()=>{
        point.current.classList.remove('animate-pulse');
            }

 
      
    return (
       <motion.div intial={{opacity:0,y:-50}} animation={{opacity:1,y:0}} exit={{opacity:0,y:50}} className='  absolute backdrop-blur-sm insert-0 z-20'>
       <div className=' modalbox flex flex-col background-color-white'>
      <button onClick={handleclose} className='text-slate-300 absolute right-4 top-4 rounded-md text-md px-3  bg-slate-800'>close</button>
      <h3 className='absolute text-2xl left-60 font-sans font-semibold text-slate-600 color-white'>Daily Rewards</h3>


      <div className='flex flex-row absolute left-7 top-3 bg-slate-400 w-20 rounded-lg '>
    
    <img src={coin} className='relative h-7 w-7 mr-3  '/>
    <h1 className='text-xl bg-slate-50 rounded-lg w-9 justify-center flex text-slate-500'>34</h1>
    </div>


       





<div className='relative top-14'>
<ul>
    <li>

    <div className='relative mb-2 mt-3 '>
         <div className='relative flex flex-col top-up-2 left-2'>

             <h1 className='text-xl relative text-slate-200'></h1>
             </div>
        </div>

    <div>
        <div className=' flex flex-row absolute top-0 left-24'>
            <h3 className='relative top-7 text-lg text-slate-400'>Log in Daily</h3>
            <motion.button onenter={onenter}  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-white  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Collect</motion.button>
       <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>10</h3>
         </div>
            </div>


<li>
    
            <div>
            <div className=' flex flex-row absolute top-20 left-24 '>
            <h3 className='relative top-7 text-lg text-slate-400'onClick={()=>setnewgamestate("Newquiz")}> Complete the Quiz</h3>
            <motion.button onenter={onenter}  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-yellow  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Collect</motion.button>
      <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>15</h3>
            </div>
            </div>
            

</li>


<li>
    
            <div>
            <div className=' flex flex-row absolute top-40 left-24 '>
            <h3 className='relative top-7 text-lg text-slate-400'>Spend 500 coins</h3>
            <motion.button onenter={onenter}  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-yellow  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Collect</motion.button>
      <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>5</h3>
            </div>
            </div>
            

</li>


<li>
    
            <div>
            <div className=' flex flex-row absolute top-60 left-24 '>
            <h3 className='relative top-7 text-lg text-slate-400'>Spend 500 coins</h3>
            <motion.button onenter={onenter}  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-yellow  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Collect</motion.button>
      <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>20</h3>
            </div>
            </div>
            

</li>


<li>
    
            <div>
            <div className=' flex flex-row absolute top-80 left-24 '>
            <h3 className='relative top-7 text-lg text-slate-400'>Spend 500 coins</h3>
            <motion.button onenter={onenter}  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} className='border-1 hover:bg-yellow  px-2 hover:text-slate-400 border-slate-100 absolute top-7 left-72 rounded-xl bg-slate-400 text-lg text-slate-100'>Collect</motion.button>
      <img src={coin} className='h-6 w-6 coinalign top-8 '/>
           <h3 className='top-7 numberalign text-xl'>5</h3>
            </div>
            </div>
            

</li>

    </li>
</ul>
</div>
</div>
       </motion.div>
    )
};

export default Point;
