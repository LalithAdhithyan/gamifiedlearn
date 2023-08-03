import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext';
import Lottie from 'lottie-react'
import './Profile.css';
import levelup from './levelupanimation.json'
import levelupconft from './levelupanim.json'
import diamond from './images/diamond.png';
import coin from './images/coin.png'
import leveljs from './level.json'
import { toast,Toaster } from 'react-hot-toast';



const Newlevel = ({show,handleclose}) => {
    const {levelno,setpoints,settokens,setshowlevelup} = useContext(Quizcontext);
    const[disablebtn,setdisablebtn]= useState(false);

    if(!show){
        return null;
    }

   

 
    const collectrewards =()=>{
        setpoints((points)=>(points+100))
        settokens((tokens)=>(tokens+5))
        setdisablebtn(true);
        toast("Reward collected!!")

      
    }
  return (
    <div className='newleveldiv absolute   z-30 '>

<Toaster position='top-left' reverseOrder={false} toastOptions={{
        
        style:{
          border: '1px solid darkgreen',
          color: 'grey',
          padding: '4px',
          boxShadow:'0px 0px 10px rgba(0, 0, 255, 0.5)',
        }
        
       }}/>
      <div className='flex flex-col'>
        <h3 className=' tracking-widest top-4 newl'>
      You've Reached a new level!!!
        </h3>
        <div className='flex flex-col'>
            <Lottie className='relative h-72 left-80 top-20 w-96' animationData={leveljs} loop={false}/>
            <h3 className='absolute  leveltextp font-semibold text-7xl'>{levelno}</h3>
           <Lottie className='absolute confpos ' animationData={levelupconft} loop={true}/>
<button onClick={()=>setshowlevelup(false)} className='text-slate-300 absolute right-8 top-3 text-xl tracking-wider border-2 rounded-lg hover:text-black hover:bg-slate-400 px-3 border-slate-300 font-semibold '>X</button>
           <div className='flex flex-row crewarddiv'>
         <img src={coin} className='relative h-8 w-h-8 mr-4'></img>
         <h3 className='text-2xl font-bold relative top-0 text-slate-300 mr-12'>5</h3>
         <img src={diamond} className='relative h-8 w-8 mr-4'></img>
         <h3 className='text-2xl font-bold relative top-0 tracking-wide text-slate-300 '>100</h3>
         </div>
        <button  className='button8 px-7'disabled={disablebtn} onClick={collectrewards}>Collect Reward!</button>


        </div>

      </div>
    </div>
  )
}

export default Newlevel
