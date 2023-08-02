import React from 'react'
import { useContext } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import './Main.css';
import Lottie from 'lottie-react';
import tryagain from './Tryagainanim.json';
import { Question } from '../Helpers/questions';
import heart from './heartanim.json'
const Newtryagain = () => {
 
    const {score ,setgamestate ,setscore, life,points,setpoints} = useContext(Quizcontext);
const handletryagain=()=>{
  setgamestate('startquiz');
  setscore(0);
}
 
  return (
    <div className='bg-black h-screen w-screen'>
   
        <div className='flex flex-col relative left-96'>

<Lottie animationData={tryagain} loop={false} className='tryagain ' />
<h3 className='text-slate-300 rescore font-semibold'>You Scored <span className='ml-5 mr-3 text-4xl'>{score*10}</span>/<span className='ml-2 font-semibold text-3xl'>{Question.length*10}</span></h3>
<h3 className='text-slate-300 tries font-semibold text-2xl'>Go for more points you,ve got </h3>
<div className='heartdiv flex flex-row'>

{life>=3 && <Lottie animationData={heart} loop={true} className=' w-14 '/>}
{life>=2 && <Lottie animationData={heart} loop={true} className=' w-14 '/>}
{life>=1 &&<Lottie animationData={heart} loop={true} className=' w-14 '/>}
<h3 className='text-slate-300 font-semibold text-2xl relative top-11'>lives left</h3>
</div>
</div>

<div className='flex flex-row'>
    <button onClick={handletryagain} className='button4 px-8'>Try Again</button>
    <button onClick={()=>{setgamestate("newendscreen")}} className=' button5 px-8 py-5'>Get Results</button>

</div>
      </div>
 
  )
}

export default Newtryagain
