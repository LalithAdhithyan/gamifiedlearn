import React, { useContext } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import { Question } from '../Helpers/questions';
import Javaendscreen from './Javaendscreen';
import Javatryagain from './Javatryagain';

const Javadecision = () => {

  const {score ,life } = useContext(Quizcontext);
  return (
    
    <div>
{score===Question.length ? 
   
   <Javaendscreen/>
: life===0 ? <Javaendscreen/>:<Javatryagain/>}
   
</div>
  )
}

export default Javadecision;
