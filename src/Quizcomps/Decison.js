import React, { useContext } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import { Question } from '../Helpers/questions';
import Newtryagain from './Newtryagain';
import Newendscreen from './Newendscreen';


const Decision = () => {

  const {score ,life } = useContext(Quizcontext);
  return (
    
    <div>
{score===Question.length ? 
   
   <Newendscreen/>
: life===0 ? <Newendscreen/>:<Newtryagain/>}
   
</div>
  )
}

export default Decision;
