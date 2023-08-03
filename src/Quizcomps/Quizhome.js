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




function Quizhome() {

    const [gamestate,setgamestate] = useState("profile");
    const [score,setscore] = useState(0);
    const [life,setlife]= useState(3);
    const [points,setpoints]=useState(257);
    const [tokens,settokens] = useState(34);
    const [energy,setenergy] = useState(50);
    const [unlock,setunlock] = useState(false);
    const [showpopup ,setshowpopup] = useState(false);
    const[showbadge ,setshowbadge]= useState(false);
    const [level,setlevel]=useState(60);
    const [levelno,setlevelno] = useState(80);
    const [levelpoints,setlevelpoints] = useState(3);
    const[showlevelup,setshowlevelup]= useState(false);
    const[complete,setcomplete]=useState(false);
  return (
    <div>
 <Quizcontext.Provider value={{complete,setcomplete,gamestate,showlevelup,setshowlevelup,setgamestate,setscore,score,life,setlife,points,setpoints,tokens,settokens,energy,setenergy,unlock,setunlock,showbadge ,setshowbadge,showpopup,setshowpopup,level,setlevel,levelno,setlevelno}}>
  {gamestate==="quiz" && <Quiz/>}
  {gamestate==="mainmenu" && <Mainmenu/>}
  {gamestate==="animate" && <Rocketpage/>}
  {gamestate==="startquiz"&&<Startquiz/>}
   {gamestate==="decision"&&<Decision/>}
   {gamestate==="newtryagain" &&<Newtryagain/>}
  {gamestate=== "newendscreen"&&<Newendscreen/>}
  {gamestate==="profile"&&<Profile/>}
  {gamestate==="leaderboard"&&<Leaderboard/>}
  </Quizcontext.Provider>
    </div>
  )
}

export default Quizhome
