import React from 'react'
import './leaderboard.css';
import { useContext } from 'react';
import { Quizcontext } from '../Helpers/Quizcontext';
import expprof from './images/otaku3.png'
import Lottie from 'lottie-react';
import backbg from './ldbganim.json'
import ldbg from './ldboard.json'
import gold from './images/goldmedal.png';
import silver from './images/silvermedal.png';
import bronze from './images/bronzemedal.png'
import man from './images/Man.png';
import prof2 from './images/otaku (1).png';
import prof3 from './images/otaku3.png';
import prof4 from './images/otaku4.png';
import prof5 from './images/otaku5.png';
import prof6 from './images/otaku6.png';
import prof7 from './images/otaku7.png';
const Leaderboard = () => {
  const {setgamestate} = useContext(Quizcontext);
  return (
    <div className='h-screen bg-black flex flex-row z-40 '>
    <Lottie animationData={backbg} loop={true}  className='absolute '/>
    <img src={man} className='absolute rounded-full h-7 manalign'/>
    <div className='flex flex-row absolute left-96  top-10'>
    <h3 className=' leaderpos '>Leaderboards </h3>
    <Lottie animationData={ldbg} loop={false} className=' boardpos absolute w-40 left-96'/>
    </div>
        <div className='mainboard flex flex-col rounded-lg'>
          <div className='relative rankb h-16 top-0 flex flex-row mb-3'>
           <h3 className=' text-slate-300 font-bold text-4xl top-2 left-10 relative mr-32'>
            Rank
           </h3>
           <h3 className='text-red-400 font-bold text-4xl top-2 relative mr-72'>Name</h3>
           <h3 className='text-red-400 font-bold text-4xl top-2 relative'>Points</h3>
          </div>

          <div className='relative lista h-16 rounded-lg flex flex-row mt-5 mb-4'>
       <h3 className='relative text-yellow-300 text-3xl  font-bold rank'>1</h3>
       <img src={gold} className='absolute left-24 top-3 h-12 w-12  '/>
       <img src={expprof} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='namemain text-white'>John snow</h3>
       <h3 className='point1'>260</h3>
          </div>
          <div className='relative listc h-16 rounded-lg flex flex-row mb-4'>
       <h3 className='relative text-slate-400 text-3xl  font-bold rank'>2</h3>
       <img src={silver} className='absolute left-24 top-3 h-12 w-12  '/>
       <img src={man} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='namemain text-white'>Ronald ackerman</h3>
       <h3 className='point2'>245</h3>
          </div>
          <div className='relative listd h-16 rounded-lg flex flex-row mb-4'>
       <h3 className='relative text-amber-600 text-3xl  font-bold rank'>3</h3>
       <img src={bronze} className='absolute left-24 top-3 h-12 w-12  '/>
       <img src={prof2} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='namemain text-white'>Voldemort</h3>
       <h3 className='point3'>241</h3>
          </div>
          <div className='relative listb h-16 rounded-lg flex flex-row mb-4'>
       <h3 className='relative text-white text-3xl  font-bold rank'>4</h3>
       <img src={prof3} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='name'>Robert ash</h3>
       <h3 className='point'>235</h3>
          </div>
          <div className='relative listb h-16 rounded-lg flex flex-row mb-4'>
       <h3 className='relative text-white text-3xl  font-bold rank'>5</h3>
       <img src={prof4} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='name'>johna cruz</h3>
       <h3 className='point'>230</h3>
          </div>
          <div className='relative listb h-16 rounded-lg flex flex-row mb-4'>
       <h3 className='relative text-white text-3xl  font-bold rank'>6</h3>
       <img src={prof5} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='name'> Tim cook </h3>
       <h3 className='point'>220</h3>
          </div>
          <div className='relative listb h-16 rounded-lg flex flex-row mb-4'>
       <h3 className='relative text-white text-3xl  font-bold rank'>7</h3>
       <img src={prof6} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='name'>Catherine </h3>
       <h3 className='point'>210</h3>
          </div>
          <div className='relative listb h-16 rounded-lg flex flex-row mb-4'>
       <h3 className='relative text-white text-3xl  font-bold rank'>8</h3>
       <img src={prof7} className='relative rounded-full h-12 w-12 imgpos'/>
       <h3 className='name'>Jim carrey</h3>
       <h3 className='point'>198</h3>
          </div>

        </div>

        <div className='profileboard'>
         <div className='flex flex-row'>
          <div className='flex flex-col'>
          <img src={man} className='h-40 w-40 left-14 top-9 rounded-full relative  '/>
          <h3 className='text-slate-300 text-2xl font-bold absolute top-52 left-10'>Ronald ackerman</h3>
          </div>
          <div className='flex flex-col'>
        <h3 className='text-slate-400 relative text-3xl font-semibold left-24 top-11'>High Score</h3>
        <h3 className='text-slate-300 font-bold text-8xl relative left-20 top-14'>247</h3>
        <h3 className='text-3xl font-semibold top-14 text-slate-200 relative left-28'>Rank<span className='text-red-400 ml-5 text-5xl'>2</span></h3>
          </div>
         </div>
        </div>
        <div className='updateboard flex flex-col'>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>Joshua weissman earned 13 points <span className='absolute left-96 text-sm font-thin'>2 minutes ago</span></h3>
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>Robert ash earned 20 points <span className='absolute left-96 text-sm font-thin'>4 minutes ago</span></h3>
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>johana cruz earned 2 points <span className='absolute left-96 text-sm font-thin '>12 minutes ago</span></h3>
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>catherin stark earned 10 points <span className='absolute left-96 text-sm font-thin'>35 minutes ago</span></h3>
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>Jim carrey earned 5 points <span className='absolute left-96 text-sm font-thin'>a hour ago</span></h3>
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>Voldemort earned 4 points <span className='absolute left-96 text-sm font-thin'>2 hours ago</span></h3>
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>michael earned 2 points <span className='absolute left-96 text-sm font-thin'>4 hours ago</span></h3>
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 className='text-slate-300 relative left-6 top-2  '>Joshua Hunter earned 13 points <span className='absolute left-96 text-sm font-thin'>12 hours ago</span></h3>
        </div>
        </div>

        <button onClick={()=>setgamestate("profile")} className='button7 px-10 text-3xl py-3'>Go to profile</button>
      
    </div>
  )
}

export default Leaderboard
