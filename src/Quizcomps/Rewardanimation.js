import React, { useState } from 'react';
import animation from './animation.json'
import Lottie from 'lottie-react';

const Rewardanimation = () => {

    const[isplaying,setisplaying] = useState(false);


    const play = ()=>{
        setisplaying(true);
        
    }

 

    const stopanimation=()=>{
        setisplaying(false);
    }
  return (
    <div>
   <Lottie className='relative h-64 w-64 -top-8 left-12' animationData={animation} autoplay={isplaying} loop={false} onComplete={stopanimation} setstate = {setisplaying} play={onplay} />
       
      
    </div>
  )
}

export default Rewardanimation
