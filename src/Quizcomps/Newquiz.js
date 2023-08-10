import React, { useContext, useEffect } from 'react'
import { newquestions } from '../Helpers/newquestions';
import { useState } from 'react';
import { Quizcontext } from '../Helpers/Quizcontext';
import Lottie from 'lottie-react';
import bga from './ bgmation.json';






const NewQuiz = () => {

  const{setgamestate,settokens,tokens,score,setscore} = useContext(Quizcontext);
  const [ curques,setcurques] = useState(0);
  const[optionchose,setoptionchosen] = useState("");
  const[timeremaining,settimeremaining] = useState(10);
  const[able,setable] = useState(true);
  const[progress,setprogress] =useState(0);







  useEffect(()=>{
    const timer = timeremaining > 0 && setInterval(()=>{
      settimeremaining((prev) => prev -1)
    },1000);
    return ()=> clearInterval(timer);
  },[timeremaining]);
  useEffect(()=>{
  const timer = timeremaining===0 && setTimeout(()=>{
    const nextquestion = curques + 1 ;
    if(nextquestion < newquestions.length){
      setcurques(nextquestion);
      settimeremaining(10);
      setprogress(progress+20);
    }else{
      setprogress(progress+20);
      setTimeout(()=>{
        setgamestate("decision")
       
      },1040)
      
    }
    
  },1000);  
   return ()=> clearTimeout(timer);
  },[timeremaining,curques])





const nextquestion=()=>{
 if(newquestions[curques].answer===optionchose){
  setscore(score+1);
  
 }
 setable(true)
 settimeremaining(10);
 setcurques(curques+1);
 setprogress(progress+20);
 
}





const finishquiz=()=>{
  if(newquestions[curques].answer===optionchose){
     setscore(score+1);
   }
     

    if(score>=4){
      settokens(tokens+5)
    }else if(score>=3){
      settokens(tokens+3)
    }else if(score>2){
      settokens(tokens+2)
    }else{
      settokens(tokens+1)
    }

       

    
    
   
setprogress(progress+20);
 setTimeout(()=>{
  ("decision");
  
},1030)

}





const setopfunc=(option)=>{
  setoptionchosen(option);
  setable(false);

}





return(




    <div className='text-white bg-black relative '>


    <Lottie animationData={bga} loop={true} classID= 'relative w-10'/>
  
     <div className='quizdiv rounded-xl z-40  backdrop-blur-sm '>
     
       <div className='maincontainer'>
         
         <div className='progress' style={{width:`${progress}%`}}>

         </div>
       </div>



      
  
  
   <h3 className='text-2xl relative top-8 font-extrabold left-5 text-slate-500'>Time Left:<span className='ml-4 text-3xl text-purple-500'>  {timeremaining} </span></h3>
   <h3 className='leftpos text-2xl font-semibold text-slate-300'>Questions Left<span className='text-4xl font-bold ml-5 mr-1 text-purple-500'>{curques+1}</span> / <span className='text-2xl font-bold  mr-1 text-slate-300'>{newquestions.length}</span></h3>
      <h3 className='text-purple-700 text-3xl font-semibold relative left-32 top-32 flex flex-row mb-16'><span className='text-white border-spacing-7 text-3xl font-bold mr-3'>{curques+1}</span>  {newquestions[curques].prompt}</h3>
      <div className='flex flex-row relative mb-36 '>





      <button onClick={()=>setopfunc("A")} className='text-slate-300 relative top-40 left-32 optionbg    focus:bg-purple-700 focus:text-black   hover:text-purple-500  hover:bg-black option text-2xl font-semibold mr-16 cursor-pointer '>{newquestions[curques].optionA}</button>
      <button onClick={()=>setopfunc("B")} className='text-slate-300 relative top-40 left-32 optionbg    focus:bg-purple-700 focus:text-black   hover:text-purple-500  hover:bg-black option text-2xl font-semibold cursor-pointer'>{newquestions[curques].optionB}</button>
      </div>






      <div className='flex flex-row relative'>
      <button onClick={()=>setopfunc("C")} className='text-slate-300 relative top-40 left-32 optionbg    focus:bg-purple-700 focus:text-black  hover:text-purple-500  hover:bg-black option text-2xl font-semibold mr-16 cursor-pointer'>{newquestions[curques].optionC}</button>
      <button onClick={()=>setopfunc("D")} className='text-slate-300 relative top-40 left-32 optionbg    focus:bg-purple-700 focus:text-black  hover:text-purple-500  hover:bg-black option text-2xl font-semibold cursor-pointer'>{newquestions[curques].optionD}</button>
      </div>
        { curques < newquestions.length-1 ?<button disabled={able} onClick={nextquestion} className='button ' >Next Question</button>:<button disabled={able} className='text-black text-xl font-semibold nxtbtn exitbutton'onClick={finishquiz}>Finishquiz</button>}

     </div>

   </div>


 )
}

export default NewQuiz;
