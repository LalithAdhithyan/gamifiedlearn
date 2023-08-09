import React, { useEffect } from 'react'
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
import Javastartquiz from './Javastartquiz';
import Javaquiz from './Javaquiz';
import Javamenu from './Javamenu';
import Javarpage from './Javarpage';
import Javatryagain from './Javatryagain';
import Javadecision from './Javadecision';
import Javaendscreen from './Javaendscreen';
import LearningStreak from './LearningStreak';





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
    const [timeevent,settimeevent] = useState(false);
    const[showlevelup,setshowlevelup]= useState(false);
    const[complete,setcomplete]=useState(false);
    const [change,setchange]=useState(true);
    const[disabled ,setdisabled] = useState(false);
    useEffect(() => {
      console.log('new time event :: ', timeevent );
    }, [ timeevent ])
  return (
    <div>
 <Quizcontext.Provider value={{complete,setcomplete,settimeevent,disabled,setdisabled,change,setchange,timeevent,gamestate,showlevelup,setshowlevelup,setgamestate,setscore,score,life,setlife,points,setpoints,tokens,settokens,energy,setenergy,unlock,setunlock,showbadge ,setshowbadge,showpopup,setshowpopup,level,setlevel,levelno,setlevelno}}>
  {gamestate==="quiz" && <Quiz/>}
  {gamestate==="mainmenu" && <Mainmenu/>}
  {gamestate==="animate" && <Rocketpage/>}
  {gamestate==="startquiz"&&<Startquiz/>}
   {gamestate==="decision"&&<Decision/>}
   {gamestate==="newtryagain" &&<Newtryagain/>}
  {gamestate=== "newendscreen"&&<Newendscreen/>}
  {gamestate==="profile"&&<Profile/>}
  {gamestate==="leaderboard"&&<Leaderboard/>}
  {gamestate==="Javastartquiz"&&<Javastartquiz/>}
  {gamestate==="Javaendscreen"&&<Javaendscreen/>}
  {gamestate==="Javaquiz"&&<Javaquiz/>}
  {gamestate==="Javamenu"&&<Javamenu/>}
  {gamestate==="Javarpage"&&<Javarpage/>}
  {gamestate==="Javatryagain"&&<Javatryagain/>}
  {gamestate==="Javadecision"&&<Javadecision/>}
  {gamestate==="learningstreak"&&<LearningStreak/>}
  </Quizcontext.Provider>
    </div>
  )
}

export default Quizhome
