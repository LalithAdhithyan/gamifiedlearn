import React from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import { useContext } from 'react'
import Mainmenu from './Mainmenu';
import { BsFillVinylFill } from "react-icons/bs";
import './Main.css'
import Lottie from 'lottie-react'
import backgroundanimation from './bganim.json'
import backgroundanimatio1 from './bganim2.json'
import button from './button.json'
const Startquiz = () => {
    const {gamestate,setgamestate,setscore} = useContext(Quizcontext);

   const handlescore=()=>{
   
      setgamestate("mainmenu")
      setscore(0);
    }
  return (
    <div className='h-screen w-screen bg-black ' >
     
        <div className='rules flex justify-center'>
          <button className=' button6 px-4 top-2 left-5 text-lg text-orange-500 py-1' onClick={()=>setgamestate("profile")}>Return to Profile</button>
            <div className='flex flex-col' >

                <h1 className='text-3xl top-2 relative font-bold text-orange-500'>Thermodynamics</h1>
                <h1 className='text-2xl font-semibold top-20  relative -left-96 text-slate-200'>Things to know before you start :-</h1>
                 <div className='quizpoints'>
                  <div className='flex flex-row mb-4'>
                    <BsFillVinylFill className='mr-5 text-xl text-orange-500 relative top-1'/>
                  <p className='text-xl mb-3 font-semibold text-slate-400'>You are required to answer all the questions</p>
                  </div>

                  <div className='flex flex-row mb-4'>
                    <BsFillVinylFill className='mr-5 text-xl text-orange-500 relative top-1'/>
                  <p className='text-xl mb-3 font-semibold text-slate-400'>You will have 10 sec for each question , if you fail to complete under the given time the question will be marked incorrect</p>
                  </div>
                 
                  <div className='flex flex-row mb-4'>
                    <BsFillVinylFill className='mr-5 text-xl text-orange-500 relative top-1'/>
                  <p className='text-xl mb-3 font-semibold text-slate-400'>You will be able to use one power up per question , however only 4 power ups must be used during the time period of the quiz</p>
                  </div>
                 
                  <div className='flex flex-row mb-4'>
                    <BsFillVinylFill className='mr-5 text-xl text-orange-500 relative top-1'/>
                  <p className='text-xl mb-3 font-semibold text-slate-400'>By clicking the Start button below you will be starting the quiz with a timer of 5 sec</p>
                  </div>
               
                <Lottie onClick={handlescore} animationData={button} loop={true} className='h-24 relative top-80 cursor-pointer'/>
                <h1 onClick={handlescore}    className= 'buttonpos'>Start</h1>
                </div>
                <Lottie className='absolute h-96 top-80 -right-2' animationData={backgroundanimation} loop={true} />
              
            </div>
   
            

   
            
        </div>
      
    </div>
  )
}

export default Startquiz
