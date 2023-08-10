import React, { useEffect, useState } from 'react'
import './Main.css';
import { useContext } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import Rocket from './Rocket';
import background from './Background.json';
import Lottie from 'lottie-react';

const Mainmenu = () => {
  const{gamestate,setgamestate} = useContext(Quizcontext);
  const[count,setcount] = useState(3);

  useEffect(()=>{
    const interval = setInterval(()=>{
        setcount(count-1);
    },1000);
    if(count===0){
        clearInterval(interval);
        setgamestate('animate');
    }
  })


  return (

    <div className =' bg-black h-screen w-screen'>
      

      <Lottie animationData={background} className='backgroundloader' loop={true} />
    
          <div>
    <h1 className='text-slate-300 font-bold counter '>{count} </h1>
    </div> 

      
    </div>
  )
}

export default Mainmenu
