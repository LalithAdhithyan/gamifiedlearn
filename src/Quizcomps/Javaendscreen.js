import React, { useContext } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import Lottie from 'lottie-react';
import trophy from './trophyanim.json';
import coin from './coin.json';
import diamond  from './diamondanim.json';
import { Question } from '../Helpers/questions';
import confetti from './confettianim.json';

const Javaendscreen = () => {
    const {score ,setscore,settimeevent,setgamestate,setshowpopup,setunlock,level,setlevel,levelno,setlevelno,setshowlevelup} = useContext(Quizcontext);
     const handletoastj=()=>{
 
   setgamestate("profile")
   settimeevent(true)

     }

    return (
  
      <div className='h-screen w-screen bg-black'>
      
      <Lottie animationData={confetti} loop={true} className='absolute h-full w-full '/>
        <div className='completeddiv'>
  <h3 className='text-white'>{score}</h3>
          <div className='fullscore flex flex-col justify-center align-middle'>
            <h3 className='congpos text-white'>Quiz Result!</h3>
  
       <Lottie animationData={trophy}  loop={false} className=' w-96 -top-9 left-80 relative'/>
       <h1 className='congopos text-yellow-500'>Congratulations!</h1>
   <p className='relative text-xl left-28 -top-11 text-slate-300'>congratulations on completing the quiz , complete more quizzez to earn more coins!!!!</p>
  
  
   <div className='yourscore flex flex-col text-white relative left-1/2 text-2xl'>
  
   
    <div>
    <h3 className='relative -left-16 text-slate-300 mb-4 text-3xl font-semibold'>Your Score!</h3>
    <h3 className='relative -left-16 text-4xl font-semibold'><span className='mr-2 text-4xl text-green-300'>{score*10}</span>/<span className='ml-2 text-slate-300 text-3xl'>{Question.length*10}</span></h3>
    
    </div>
    
     
   
  
  
    <div className='coinsearned'>
      <h3 className='relative top-3 left-14 text-slate-300 text-3xl font-medium'>
        Tokens Earned
      </h3>
  
      <h3 className='text-slate-300 text-3xl font-medium left-96 -top-6 relative'>
        Points earned
      </h3>
  
      <h3 className='absolute left-60 text-slate-500 text-5xl font-bold  bottom-24'>X {score==5 ? 5 : score>=3 ? 3 :score >2 ? 2 : 1}</h3>
      <h3 className='multiplierpos text-slate-500 text-5xl font-bold '>X  {score==5 ? 10 : score>=3 ? 5 :score >2 ? 5 : 1}</h3>
   <Lottie animationData={coin} loop={false} className='relative w-96 -top-52 -left-9'/>
   <Lottie animationData={diamond} loop={false} className=' w-52  diampos'/>
   </div>
   
   </div> 
   <div className='buttondiv flex flex-row'>
  <button className='button2 px-5 mr-56' onClick={()=>{setgamestate("leaderboard")}}>Go to Leaderboards</button>
  
  <button className='button2 px-5 'onClick={handletoastj}>Go to Profile</button>
   </div>
   </div>
        </div>
      </div>
  
    )  
}

export default Javaendscreen;
