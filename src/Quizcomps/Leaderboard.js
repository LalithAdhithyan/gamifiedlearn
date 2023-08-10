import React, { useEffect, useState } from 'react'
import './leaderboard.css';
import { useContext } from 'react';
import { Quizcontext } from '../Helpers/Quizcontext';
import Lottie from 'lottie-react';
import backbg from './ldbganim.json'
import ldbg from './ldboard.json'
import man from './images/Man.png';
import prof2 from './images/otaku (1).png';
import prof3 from './images/otaku3.png';
import prof4 from './images/otaku4.png';
import prof5 from './images/otaku5.png';
import prof6 from './images/otaku6.png';
import prof7 from './images/otaku7.png';
import robot from './images/Robot.jpeg';



const Leaderboard = () => {
   const {setgamestate,points} = useContext(Quizcontext);

   const[ishovered,setishovered]=useState(null);
    

   const Mouseover=(e)=>{
   switch(e.target.id){
    case "1":
        setishovered(1);
        break
    case "2":
        setishovered(2);
        break
    case "3":
        setishovered(3);
        break
    case "4":
        setishovered(4);
        break
    case "5":
        setishovered(5);
        break
    case "6":
        setishovered(6);
        break
    case "7":
        setishovered(7);
        break
    case "8":
        setishovered(8);
        break
   }
   }


const Leaderboarddata=[
   {
    
       name:"Ronald ackerman",
       Points:points,
       img:man
       
   },
   {
  
       name:"Jon snow",
       Points:310,
       img:prof2
      
       

   },
   {
       Rank:1,
       name:"Voldemort",
       Points:380,
       img:prof3
     
   },
   {
   
       name:"Robert ash",
       Points:256,
       img:prof4
   
   },
   {
    
       name:"Johna cruz",
       Points:210,
       img:prof5
       
   },
   {
       Rank:1,
       name:"Tim cook",
       Points:240,
       img:prof6
 
   },
   {
     
       name:"Catherine",
       Points:170,
       img:prof7
       
   },
   {
   
       name:"Jim carrey",
       Points:270,
       img:robot
       
   }
]
   const[leader,setleader] = useState([]);
 
  

  
 useEffect(()=>{
   const sorteddata = Leaderboarddata.sort((a,b)=>b.Points-a.Points)  ;
   setleader(sorteddata);
 },[])


  return (
    <div className='h-screen bg-black flex flex-row z-40 '>
    <Lottie animationData={backbg} loop={true}  className='absolute -z-0 '/>
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


  
  <ul>
   {leader.map((student,index)=>(
        <li key={index}>
        <div className='relative lista h-16 rounded-lg flex flex-row mt-5 mb-4'>
            <h3 className='relative text-red-300 text-3xl  font-bold rank'>{index+1}</h3>
            {/* <img src={gold} className='absolute left-24 top-3 h-12 w-12  '/> */}
            <img src={student.img} className='relative rounded-full h-12 w-12 imgpos'/>
            <h3 className='namemain text-white'>{student.name}</h3>
            <h3 className='point1 text-2xl font-bold'>{student.Points}</h3>
               </div>
        </li>
   )

   )}
 
  </ul>
         

        </div>

        <div className='profileboard'>
         <div className='flex flex-row'>
          <div className='flex flex-col'>
          <img src={man} className='h-40 w-40 left-14 top-9 rounded-full relative  '/>
          <h3 className='text-slate-300 text-2xl font-bold absolute top-52 left-10'>Ronald ackerman</h3>
          </div>
          <div className='flex flex-col'>
        <h3 className='text-slate-400 relative text-3xl font-semibold left-32 top-11'>Score</h3>
        <h3 className='text-slate-300 font-bold text-8xl relative left-20 top-14'>{points}</h3>
        <h3 className='text-3xl font-semibold top-14 text-slate-200 relative left-28'>Rank<span className='text-red-400 ml-5 text-5xl'>2</span></h3>
          </div>
         </div>
        </div>
        <div className='updateboard flex flex-col'>
        <div  className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 onMouseOver={Mouseover} id='1' onMouseOut={()=>setishovered(null)}  className='text-slate-300 relative left-6  top-2 cursor-pointer'>Joshua weissman earned 13 points <span className='absolute left-96 text-sm font-thin'>2 minutes ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-6 rounded-md tracking-wide font-light  bg-opacity-80 left-3 absolute'>{ishovered===1 && "Earned by completing Quiz on java"}</h2>}
        </div>
        <div   className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 onMouseOver={Mouseover} id='2' onMouseOut={()=>setishovered(null)} className='text-slate-300 relative left-6 cursor-pointer top-2  '>Robert ash earned 20 points <span className='absolute left-96 text-sm font-thin'>4 minutes ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-4 rounded-md tracking-wide font-light bg-opacity-80 left-3 absolute'>{ishovered===2 && "Earned by completing Mcq on Chemistry"}</h2>}
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 onMouseOver={Mouseover} id='3' onMouseOut={()=>setishovered(null)}  className='text-slate-300 relative left-6 cursor-pointer top-2  '>johana cruz earned 2 points <span className='absolute left-96 text-sm font-thin '>12 minutes ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-4 rounded-md tracking-wide font-light bg-opacity-80 left-3 absolute'>{ishovered===3 && "Earned by completing Quiz on Tlrf"}</h2>}
        </div>
        <div   className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 onMouseOver={Mouseover} id='4' onMouseOut={()=>setishovered(null)} className='text-slate-300 relative left-6 cursor-pointer top-2  '>catherine stark earned 10 points <span className='absolute left-96 text-sm font-thin'>35 minutes ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-4 rounded-md tracking-wide font-light bg-opacity-80 left-3 absolute'>{ishovered===4 && "Earned by completing Course on Quantum theory"}</h2>}
        </div>
        <div   className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 onMouseOver={Mouseover} id='5' onMouseOut={()=>setishovered(null)} className='text-slate-300 relative left-6 cursor-pointer top-2  '>Jim carrey earned 5 points <span className='absolute left-96 text-sm font-thin'>a hour ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-4 rounded-md tracking-wide font-lightbg-opacity-80 left-3 absolute'>{ishovered===5 && "Earned by completing Analysis on Modern biology"}</h2>}
        </div>
        <div   className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 onMouseOver={Mouseover} id='6' onMouseOut={()=>setishovered(null)} className='text-slate-300 relative left-6 cursor-pointer top-2  '>Voldemort earned 4 points <span className='absolute left-96 text-sm font-thin'>2 hours ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-4 rounded-md tracking-wide font-light bg-opacity-80 left-3 absolute'>{ishovered===6 && "Earned by completing Assignment on Modern physics"}</h2>}
        </div>
        <div   className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3 onMouseOver={Mouseover} id='7' onMouseOut={()=>setishovered(null)} className='text-slate-300 relative left-6 cursor-pointer top-2  '>michael earned 2 points <span className='absolute left-96 text-sm font-thin'>4 hours ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-4 rounded-md tracking-wide font-light bg-opacity-80 left-3 absolute'>{ishovered===7 && "Earned by completing an assesment in DSA java"}</h2>}
        </div>
        <div className='text-slate-300 h-10 upmessage relative top-2 mb-1'>
         <h3  onMouseOver={Mouseover} id='8' onMouseOut={()=>setishovered(null)}  className='text-slate-300 relative left-6 cursor-pointer top-2  '>Joshua Hunter earned 13 points <span className='absolute left-96 text-sm font-thin'>12 hours ago</span></h3>
         {ishovered&&<h2 className=' px-6 bg-red-400 text-white -top-4 rounded-md tracking-wide font-light bg-opacity-80 left-3 absolute'>{ishovered===8 && "Earned by completing Quiz on Thermodynamics"}</h2>}
        </div>
   
        </div>

        <button onClick={()=>setgamestate("profile")} className='button7 px-10 text-3xl py-3'>Go to profile</button>
      
    </div>
  )
}

export default Leaderboard
