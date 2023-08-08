import React, { useContext, useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import Rocketdata from './Rocket.json';
import { Quizcontext } from '../Helpers/Quizcontext';
const Javarpage = () => {

  const {gamestate,setgamestate} = useContext(Quizcontext)
  const [next,setnext] = useState(1);
  useEffect(()=>{
    const interval = setInterval(()=>{
       setnext(next-1)
    },1300)
    if(next===0){
      clearInterval(interval);
      setgamestate("Javaquiz");
    }
  })
  return (
    <div className='text-black'>
    <Lottie animationData={Rocketdata} loop={false}  autoPlay={true} onAnimationEnd={()=>setgamestate("quiz")} />
   
    
    </div>
  )
}

export default Javarpage;
