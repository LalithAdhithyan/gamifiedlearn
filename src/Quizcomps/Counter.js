import React, { useState } from 'react';
import './Profile.css';
import energy from './images/lighting.png';
import { toast ,Toaster } from 'react-hot-toast';

const Counter = () => {
  const notif=()=>{
    toast.success(`${count} Energy sent successfully!!`)
    setcount(count===0);
  }

    const [count,setcount]= useState(0);
  return (

    <div className='flex flex-row absolute  left-96 top-4 w-36 rounded-xl'>
        <img src={energy} className='h-5 w-5 mr-2 absolute -left-36'/>
        <h3 className='mr-3 absolute text-xl -left-28 -top-1 text-yellow-300'>{count}</h3>
        

<div className='absolute -top-1.5 -left-16'>
     <button className='mr-3 text-xl text-white' onClick={()=>setcount(count+1)}>+</button>
        
        <button  className='mr-3 text-xl text-white' onClick={ count ===0 ? ()=>setcount(count===0):()=>setcount(count-1)}>-</button>
        <button className='mr-3 text-xl text-white' onClick={()=>setcount(count===0)}>Reset</button>
        <button className='absolute left-36 text-xl text-white' onClick={notif}> Send</button>
        <Toaster/>
 </div>

</div>
  )
}

export default Counter
