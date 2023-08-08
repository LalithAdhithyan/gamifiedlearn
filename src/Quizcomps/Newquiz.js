import React, { useContext, useEffect } from 'react'
import { Quizcontext } from '../Helpers/Quizcontext'
import { useContext } from 'react'

const Newquiz = () => {
    const{newgamestate,setnewgamestate} = useContext(Quizcontext);

    const handlescore=()=>{
   
        setnewgamestate("")
        setscore(0);
      }
    return (
        <div>
            
        </div>
    );
}

export default Newquiz;
