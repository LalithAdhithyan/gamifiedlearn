import React from 'react'
import Mainmenu from './Mainmenu';
import Quiz from './Quiz';
import { useState } from 'react';
import { Quizcontext } from '../Helpers/Quizcontext';
import Rocketpage from './Rocketpage';
import Startquiz from './Startquiz';
import Decision from './Decison';
import Newtryagain from './Newtryagain';
import Newendscreen from './Newendscreen';
import Profile from './Profile';
import Leaderboard from './Leaderboard';
import NewQuiz from './Newquiz';
import NewStartquiz from './NewStartquiz';
import NewMainmenu from './NewMainmenu';




function Quizhome() {

    const [gamestate,setgamestate] = useState("profile");
    // const [newgamestate,setnewgamestate] = useState("profile");
    const [score,setscore] = useState(0);
    const [life,setlife]= useState(3);
    const [points,setpoints]=useState(257);
    const [tokens,settokens] = useState(34);
    const [energy,setenergy] = useState(50);
    const [unlock,setunlock] = useState(false);
    const [showpopup ,setshowpopup] = useState(false);
    const[showbadge ,setshowbadge]= useState(false);
    const [rewards,setrewards]=useState(false);
  return (
    <div>
 <Quizcontext.Provider value={{gamestate,setgamestate,setscore,score,life,setlife,points,setpoints,tokens,settokens,energy,setenergy,unlock,setunlock,showbadge ,setshowbadge,showpopup,setshowpopup,rewards,setrewards}}>
  {gamestate==="quiz" && <Quiz/>}
  {gamestate==="mainmenu" && <Mainmenu/>}
  {gamestate==="animate" && <Rocketpage/>}
  {gamestate==="startquiz"&&<Startquiz/>}
  {gamestate==="decision"&&<Decision/>}
  {gamestate==="newtryagain" &&<Newtryagain/>}
  {gamestate=== "newendscreen"&&<Newendscreen/>}
  {gamestate==="profile"&&<Profile/>}
  {gamestate==="leaderboard"&&<Leaderboard/>}
  {gamestate==="newquiz"&&<NewQuiz/>}
  {gamestate==="newstartquiz"&&<NewStartquiz/>}
  {gamestate==="newmainmenu"&&<NewMainmenu/>}


  </Quizcontext.Provider>
    </div>
  )
}

export default Quizhome
