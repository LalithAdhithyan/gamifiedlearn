import diamond from './images/diamond.png';
import coin from './images/coin.png'
import './Profile.css';
import lightning from './images/lighting.png';
import ruby from './images/ruby.png'
import robot from './images/Robot.jpeg';
import { useCallback, useState,useRef,useEffect,useContext } from "react";
import { Quizcontext } from '../Helpers/Quizcontext';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import LearningStreak from './LearningStreak';
import man from './images/Man.png';
import poker from './images/game.png';
import { BiCircle ,BiBox } from "react-icons/bi";
import { BsFillCaretRightFill ,BsFillCaretLeftFill, BsInputCursorText , BsFillEnvelopeFill, BsHourglassBottom,BsList } from "react-icons/bs";
import { toast ,Toaster } from 'react-hot-toast';
import Coinmodal from './Coinmodal';
import Peoplemodal from './Peoplemodal';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Badges from './Badges';
import Newlevel from './Newlevel';
import ldboard from './leaderboardanim.json';
import badge2 from './badge2.json'
import badge4 from './badge4.json';
import badge5 from './badges5.json'
import leveljs from './level.json'
import Popuup from './Popuup';
import firststreakanim from './streak1anim.json';
import timeranim from './Timer.json'
import streakanim2 from './streakanim2.json'












const Profile=()=> {

 

  const [showmodal ,setshowmodal] = useState(false);
  const [showpmodel,setshowpmodal] = useState(false);
  const [open,setisopen] = useState(false);
  const[showstreak,setshowstreak]=useState(false);
  const {setgamestate,change,setchange,points,setpoints,disabled,setdisabled,unlock,tokens,timeevent,settokens,showlevelup,energy,setenergy,levelno,showbadge,setshowbadge,showpopup,setshowpopup,level} = useContext(Quizcontext);
 
let toastunlocked = false;

const handleclick=()=>{
  setpoints(points+100);
  settokens(tokens+20);
  setenergy(energy+50)
  setchange(false);
}

  const handleclose=()=>{
    setshowmodal(false);
    setshowpmodal(false);
    setshowbadge(false);
    setshowpopup(false);
    setshowstreak(false);
  }

  const handletaskrewards=()=>{
    setpoints(points+10);
    setdisabled(true);
    
  }


  

  const notify = ()=>{
    toast.success("Invite sent!")
   
    
    
  }
  const particlesInit = useCallback(async engine => {
    console.log(engine);
  
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);



  return (
  
    
    
<div className='main bg-gradient-to-r from-black to-slate-900 ... mb-5 '>

  <Popuup visible={showpopup}  handleclose={handleclose}/>

<div className='card'>

  <motion.div onClick={()=>setisopen(!open)} transition={{layout:{duration:1,type:"spring"}}} layout  className='bg-white rounded-lg px-1 absolute left-64 top-40 z-30 ' >

    <motion.button layout className=' absolute  text-3xl  text-slate-300 rounded-xl font-semibold  left-4 top-0 px-2' ><BsList/></motion.button>

   {open && <motion.div layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className=' togglebox absolute'>
      
        <div className='flex flex-col relative top-5 left-8 mb-8'> 
    <h1 className='text-2xl font-sans font-bold mb-4 text-slate-500 '> Basic Information</h1>

    <h3 className='font-bold mb-4 text-slate-400'>Full Name : <span  className='ml-12 font-medium absolute left-32 text-white'> Ronald Ackerman</span></h3>
    <h3 className='font-bold mb-4 text-slate-400'>Pronounciation : <span  className='ml-12 font-medium absolute left-32 text-white'> Ronald </span></h3>
    <h3 className='font-bold mb-4 text-slate-400'>Email Address : <span  className='ml-12 font-medium absolute left-32 text-white'> RonaldAckerman134@gmail.com</span></h3>
    <h3 className='font-bold mb-4 text-slate-400'>Pronouns : <span  className='ml-12 font-medium absolute left-32 text-white'> He/His</span></h3>
    <h3 className='font-bold mb-4 text-slate-400'>Password : <span  className='ml-12 font-medium absolute left-32 text-white'>234jd2</span></h3>
 </div>

 <div className='flex flex-col relative top-5 left-8 '>
 <h1 className='text-2xl font-sans font-bold mb-4 text-slate-500 '> Additional Information</h1>

<h3 className='font-bold mb-4 text-slate-400'>Additional Name : <span  className='ml-12 font-medium absolute left-32 text-white'> Ronnie</span></h3>
<h3 className='font-bold mb-4 text-slate-400'>Birthday : <span  className='ml-12 font-medium absolute left-32 text-white'> 11/05/2002 </span></h3>
<h3 className='font-bold mb-4 text-slate-400'>Educational Level : <span  className='ml-12 font-medium absolute left-32 text-white'> Freshmen </span></h3>
<h3 className='font-bold mb-4 text-slate-400'>Website : <span  className='ml-12 font-medium absolute left-32 text-white'>www.makemyday.com</span></h3>


 </div>
 <div className='flex flex-col relative top-5 left-8 '>
 <h1 className='text-2xl font-sans font-bold mb-4 text-slate-500 '> Contact Information</h1>

<h3 className='font-bold mb-4 text-slate-400'>Mailing Address  : <div className=' relative left-44 -top-6 flex flex-col font-medium text-white'>
  <h3>New York Street</h3>
  <h3>East Avenue</h3>
  <h3>NewYork ,Newyork</h3>
  <h3>100001 , US</h3>
  </div></h3>



<h3 className='font-bold mb-4 text-slate-400'>Phone number : <span  className='ml-12 font-medium absolute left-32 text-white'>72935-234-35656 </span></h3>
<h3 className='font-bold mb-4 text-slate-400'>Buisness number fax : <span  className='ml-12 font-medium absolute left-32 text-white'> 100-2334-6-67-8-778 </span></h3>



 </div>
    
        

      

    </motion.div>
}

  </motion.div>

</div>
  {showstreak &&<AnimatePresence> <LearningStreak handleclose = {handleclose}/></AnimatePresence>}


<AnimatePresence >

<Coinmodal visible={showmodal} handleclose = {handleclose} />

</AnimatePresence>

<AnimatePresence>

<Peoplemodal show={showpmodel} handleclose = {handleclose}/>

</AnimatePresence>

<Newlevel show={showlevelup} handleclose = {handleclose}/>

<div className='overview flex justify-center align-middle text-5xl '>
  <h1>Overview</h1>

</div>
  <header className='bg-black opacity-70 h-10'>
  <section className='flex flex-row opacity-95 absolute left-5 top-2'>
   <div className='text-sky-10 flex bg-slate-900 flex-row rounded-lg w-36'>
    <img src={poker} alt='activity' className='h-7 w-9 opacity-95'/>
    <h1 className='rounded-lg text-slate-200 '> Activity </h1>
   <h3 className='bg-slate-400 rounded-xl mx-3 px-2 absolute right-0 top-0.5 text-white'>35</h3>
  </div>
</section>

<section className='flex flex-row fixed  right-0'>

<div className='flex flex-row absolute right-3 w-96 top-2 rounded-lg mx-3'>

<div className='flex flex-row rounded-lg px-2 bg-slate-900'>
<img src={coin} alt='image' className='h-5 w-5 mr-1 '/>  
<h1 className='relative -top-0.5 text-white'>{tokens}</h1>
</div>
<div className='flex flex-row rounded-lg px-2 mx-3 bg-slate-900'>
<img src={lightning} alt='image' className='h-5 w-5 mr-1 '/>  
<h1 className='relative -top-0.5 text-white'>{energy}</h1>
</div>
<div className='flex flex-row rounded-lg px-2 mr-8 bg-slate-900'>
<img src={diamond} alt='image' className='h-5 w-5 mr-1 '/>  
<h1 className='relative -top-0.5 text-white'>{points}</h1>
</div>



</div>

</section>
<div className='flex flex-row rounded-lg px-1 mx-3 absolute right-28'>
<div className='bg-orange-600 h-5 w-9 rounded-lg absolute flex justify-center -right-4 text-white'>
  80
</div>
<img src={man} alt='image' className='h-10 w-12 mr-1'/>  


</div>
  </header>
{/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "black ",
                    },
                },
                fpsLimit: 240,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
   */}
      <div className='profile flex  flex-col '>
 
  <div className='bg-slate-400 h-32 w-48 rounded-lg absolute top-20 left-12'>

<div className='flex flex-col'> 

<h1 className='absolute top-36 text-slate-300 left-8 mb-3 text-xl'>Ronald Ackerman</h1>
<h1 className='absolute top-44 text-lg left-0  text-slate-500 '>ronalackerman11@gmail.com</h1>
</div>
  
  </div>

  <img src={man} alt='' className='h-48 w-48 absolute top-4 left-11 '/>
   </div>





  <div className='trophies '>
    <div className='flex flex-col justify-center items-center'>
      <h3 className='text-2xl text-slate-400 tracking-wider relative top-2 font-medium'>Learning Streaks</h3>
      <Lottie animationData={firststreakanim} loop={true} className='relative top-6'/>
      <Lottie animationData={streakanim2} loop={false} className='relative -top-11' />
      <button onClick={()=>setshowstreak(true)} className='button10 relative -top-20 px-10'>View Streak</button>

    </div>
 {/* <span className='text-slate-400 flex justify-center text-xl top-3 absolute left-20'>
  Recent Trophies

 </span>
 
 <div className='bg-slate-400 h-44 absolute top-16 left-9 w-56 rounded-lg '>
 </div>
 <img src={trophy} alt='trophy' className='h-48 w-48 top-14 left-8 absolute '/>
 <div className='text-slate-400 top-64 left-20 text-xl absolute flex flex-col'>
  Super Supplier </div> 
  <span className='text-sm  absolute left-14 top-72 text-slate-400'> you've sent over 100 helps!</span>
  <div className='absolute top-60 '>
  <section className='flex flex-row '>
    <img src={diamond} className='h-5 w-5 relative top-20 left-20'/>
    <p className='text-white relative top-20 left-24'>1</p>
  <img src={lightning} className='h-5 w-5 top-20 left-36 relative'/>
  <p className='text-white relative top-20 left-40'>1</p> 
   </section>
   </div> */}
 

  </div>


  <div onClick={()=>setgamestate("leaderboard")}  className='cursor-pointer stats opacity-95 flex flex-col'>
   <h3 className='absolute text-slate-400 top-2 left-20 text-2xl font-semibold tracking-wide'>Leaderboards</h3>
  <Lottie animationData={ldboard} loop={false}  className='h-44 left-3 relative top-10 cursor-pointer'/>
  </div>

  <div className='points flex flex-row'> 
  <h5 className=' font-serif absolute left-3 top-4 text-sky-300'> Your Points</h5>
  
  <div className=''>
  <img src = {diamond} alt = "diam"className='w-30 h-20 fixed left-3 top-12 animate-pulse '></img>
  <p className='fixed text-slate-500 top-16 left-32 font-bold text-6xl animate-pulse'>{points}</p>
  <button className= 'absolute top-1/4 left-2/4 border-2 border-slate-700 rounded px-6 text-slate-600 p-1'>How to earn more points?</button>
  </div>


  <ul className='fixed top-36 left-4 w-auto inline pb-9 text-slate-400'>
    Recent Task Completions
    <li className='flex flex-row  gap-48 pb-2 pt-2 text text-slate-400'>
      <p>Completed unit 1  Satellite Communication</p><img src={diamond} alt='diam' className='w-5 h-5  absolute -right-32 '></img>
      <h3 className='absolute -right-40'>10</h3>
    </li>
    <li className='flex flex-row gap-48 pb-2 text text-slate-400'>
      <p>Completed unit 3 on Digital Signal Processing</p><img src={diamond} alt='diam' className='w-5 h-5 absolute -right-32 '></img>
      <h3 className='absolute -right-40'>10</h3>
    </li>
    <li className='flex flex-row gap-48 pb-2 text text-slate-400'>
      <p>Completed unit 5 on Discrete Mathematics</p><img src={diamond} alt='diam' className='w-5 h-5 absolute -right-32 '></img>
       <h3 className='absolute -right-40'>10</h3>
    </li>
  
  </ul>

  </div>
  

  <div className='next-quest opacity-95 fixed'>

    <h4 className='top-2 left-6 relative mb-9 font-seriftext text-slate-400'>Pending Tasks</h4>
   <ul className='top-3 left-6 relative'>
    <li className='flex flex-row mb-7 '>
  <BsFillCaretRightFill  className='font-bold text-xl text-sky-300 mr-4' /><p className='text-l  text-slate-400 '> Lessons on calorimetry</p> <img src={diamond} alt='diam' className='w-5 h-5  absolute right-44'></img> <h3 className='text-slate-400 diamondalign'>10</h3><img src={ruby} alt='ruby' className='w-5 h-5  absolute right-32'></img>
  <h3 className='text-slate-400 rubyalign'>20</h3>
    </li>

{unlock===true ?
    <div className='flex flex-row'>
    <li className='flex flex-row mb-7 '>
  <BsFillCaretRightFill  className='font-bold text-xl text-sky-300 mr-4' /><button  className='text-slate-400 cursor-pointer line-through'  onClick={()=>setgamestate("startquiz")}>  Quiz on Thermodynamics  </button><span className='text-green-300 relative left-4'>Completed</span>

  {disabled===true ? <div>
 <h3 className='text-slate-300 text-medium left-20 tracking-wider relative'>Rewards collected!</h3>

  </div>:<div>
  <img src={diamond} alt='diam' className='w-5 h-5  absolute right-52'></img><h3 className='text-slate-400 diamondalignafter'>10</h3><img src={ruby} alt='ruby' className='w-5 h-5 absolute right-40'></img> <h3 className='text-slate-400 rubyalignafter'>20</h3>
  <button onClick={handletaskrewards} disabled={disabled} className='text-slate-300 relative left-48 border-1 hover:bg-slate-50 px-3  rounded-lg hover:text-black border-sky-200'>Collect</button>
  </div>}
 
    </li>

    </div>:
 <div>
    <li className='flex flex-row mb-7 '>
  <BsFillCaretRightFill  className='font-bold text-xl text-sky-300 mr-4' /><p className='text-l text-slate-400 cursor-pointer'  onClick={()=>setgamestate("startquiz")}>  Quiz on Thermodynamics</p><img src={diamond} alt='diam' className='w-5 h-5  absolute right-44'></img><h3 className='text-slate-400 diamondalign'>10</h3><img src={ruby} alt='ruby' className='w-5 h-5 absolute right-32'></img> <h3 className='text-slate-400 rubyalign'>20</h3>
    </li>
    </div>
}


    <li className='flex flex-row mb-7 '>
  <BsFillCaretRightFill  className='font-bold text-xl text-sky-300 mr-4' /><p className='text-l  text-slate-400 '>  Assigment on isochoric process</p><img src={diamond} alt='diam' className='w-5 h-5 absolute right-44'></img><h3 className='text-slate-400 diamondalign'>10</h3>
    </li>


   {timeevent===false ? <div>
     <li className='flex flex-row mb-7 '>
  <BsFillCaretRightFill  className='font-bold text-xl text-sky-300 mr-4' /><p className='text-l  text-slate-400 '>  Quiz on java</p><button onClick={()=>setgamestate("Javastartquiz")} className='text-yellow-500 left-96 tracking-widest px-10 tlealign'>TLE</button>
    </li>
    </div>:<div>
     <li className='flex flex-row mb-7 '>
  <BsFillCaretRightFill  className='font-bold text-xl text-sky-300 mr-4' /><p className='text-l  text-slate-400 line-through '>  Quiz on java</p><p className='text-green-200 completedalign   px-10 '>Completed</p>
    </li>
    </div>

} 
   


    <li className='flex flex-row mb-7 '>
  <BsFillCaretRightFill  className='font-bold text-xl text-sky-300 mr-4' /><p className='text-l  text-slate-400 '>  Lesson on gibs energy change</p><img src={diamond} alt='diam' className='w-5 h-5 absolute right-44'></img><h3 className='text-slate-400 diamondalign'>10</h3><img src={ruby} alt='ruby' className='w-5 h-5 absolute right-32'></img>  <h3 className='text-slate-400 rubyalign'>20</h3>
    </li>
   

   </ul> 

   <a href='#' className='absolute left-3 bottom-2 mt-3 text-sky-200 font-serif'> see all</a>
      
   

  </div>



  <div className='tokens'>

    <div className='flex flex-col ' >
      <h3 className='absolute left-24 text-lgtext text-slate-400 '>Your Tokens </h3>
      <img src={coin} alt='coin' className='w-20 h-20 absolute top-12 left-12'/>
      <h1 className='top-14 absolute left-36 text-5xl font-sans text-sky-200'>{tokens}</h1>
      <h1 className='absolute top-36 text-lg left-4 text-slate-300'>Exchange your tokens for real gifts!!</h1>
      <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={()=>setshowmodal(true)} className=' absolute top-48 left-20 border-2 border-yellow-300 rounded-2xl p-1.5 bg-yellow-300 text-slate-900 hover:bg-yellow-100 hover:border-yellow-200'>Spend Tokens</motion.button>
     
      </div>
    
  </div>


  <div className='energy'>
  <div className='flex flex-col ' >
      <h3 className='absolute left-24 text-lgtext text-slate-400 '>Your Energy </h3>
      <img src={lightning} alt='coin' className='w-20 h-20 absolute top-12 left-12'/>
      <h1 className='top-14 absolute left-32 text-5xl font-sans text-sky-200'>{energy}</h1>
      <h1 className='absolute top-36 text-lg left-2 text-slate-300'>Use your energy to give kudos to others</h1>
      <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={()=>setshowpmodal(true)}  className='absolute top-48 left-20 border-2 border-black rounded-2xl p-1.5 bg-slate-900 text-white'>Browse People</motion.button>
    </div>
    
  </div>
  <AnimatePresence>
  <Badges showbadge={showbadge} visible={handleclose}/>
  </AnimatePresence>
  <div className='tog'>
    
    <h3 className='absolute text-2xl font-light left-36 tracking-wide text-slate-400 top-2'>Recent Badges</h3>
 <div className='flex flex-col left-5 top-11 relative'>
<div className='flex flex-row'>
  <div className='badgesbox mr-4 flex flex-col relative'>
   <Lottie animationData={badge5} loop={true}/>
  <h3 className='text-slate-300 relative -top-2 left-5 font-semibold tracking-wider'>Starstruck</h3>
  </div>
  <div className='badgesbox mr-4 flex flex-col relative'>
   <Lottie animationData={badge2} loop={false}/>
  <h3 className='text-slate-300 relative -top-2 left-5 font-semibold tracking-wider'>A+ Student</h3>
  </div>
  <div className='badgesbox mr-4 flex flex-col relative'>
   <Lottie animationData={badge4} loop={true}/>
  <h3 className='text-slate-300 relative -top-2 left-9 font-semibold tracking-wider'>on a roll</h3>
  </div>
 </div>
 <h3 className='text-red-300 text-lg font-semibold relative top-6 -left-0 cursor-pointer' onClick={()=>setshowbadge(!showbadge)}>See More</h3>
 </div>
  
   
 </div>


 <div className='level '>
   <div className=' flex justify-center'>
    <h3 className ='text-3xl font-serif text-slate-300 tracking-wider'>My Level</h3>
   </div>
   <Lottie animationData={leveljs} className='h-60 w-60 absolute left-12 top-6'/>
  
   <h1 className=' levelalign text-slate-400 text-5xl font-semibold'>{levelno}</h1>
    <div>
    <div class="progress2 progress-moved relative top-12 " >
    <div class="progress-bar2 absolute top-44 left-0"style={{width:`${level}%`}} >
    </div>                       
</div> 
  <div className=' absolute top-56 left-7 text-slate-500'>3 points for next level </div><span className='text-slate-300 absolute top-56 left-72'>{level}%</span>
   </div>
   </div>







  <div className='endorsment flex flex-col '>
    <div className='absolute top-4 left-20'>
      
    <h1 className=' text-2xl font-semibold tracking-wide left-10 text-slate-400'>Recent Endorsements </h1>
    </div>
    <div className='absolute top-16 left-12'>
    <h1 className='top text-3xl font-semibold text-slate-300'>10 <span className='text-red-600'>+4</span></h1>
    <h1 className=' text-xl  text-slate-300'>Performance </h1>
    <h1 className='top text-3xl font-semibold text-slate-300'>7 <span className='text-red-600'>+2</span></h1>
    <h1 className='text-xl  text-slate-300'>Leadership </h1>
    <h1  className='top text-3xl font-semibold text-slate-300'>13 <span className='text-red-600'>+6</span></h1>
    <h1 className='text-xl  text-slate-300'>TeamWork </h1>
    </div>
    <div className='absolute top-16 left-56'>
    <h1 className='top text-3xl font-semibold text-slate-300'>12 <span className='text-red-600'>+6</span></h1>
    <h1 className=' text-xl  text-slate-300'>Activity </h1>
    <h1 className='top text-3xl font-semibold text-slate-300'>8 <span className='text-red-600'>+5</span></h1>
    <h1 className='text-xl  text-slate-300'>Accuracy </h1>
    <h1  className='top text-3xl font-semibold text-slate-300'>20 <span className='text-red-600'>+1</span></h1>
    <h1 className='text-xl  text-slate-300'>Time management </h1>
    </div>

  </div>


  <div className='onlinelist relative'>

  <div className='relative timeevents'>
{ timeevent===false ?
    <div className='flex flex-col justify-center items-center'>
<h3 className='text-2xl text-yellow-400 relative top-3 font-semibold'>Time limited Event!!</h3>
<Lottie animationData={timeranim} className='relative top-4' />
<h3 className='relative text-slate-300 text-xl top-4'>Time Left :<span className='text-xl text-red-400 '>24:20:18</span></h3>
<h3 className='text-xl text-slate-300 relative font-medium top-10'>Complete the quiz on java </h3>
<h3 className='text-xl text-slate-300 relative font-medium top-10'>and earn<span className='text-red-500 ml-2  text-2xl relative font-semi-bold'>Extra </span> points !!! </h3>
<div className='flex flex-row justify-start items-start '>
<img src={diamond} className='h-7 w-7 relative top-16 -left-5'/>
<h3 className='text-slate-300 relative top-16 -left-4 text-xl font-semibold '>X 100</h3>
<img src={coin} className='h-7 w-7 relative top-16 left-1'/>
<h3 className='text-slate-300 relative top-16 left-2 text-xl font-semibold '>X 20</h3>
<img src={lightning} className='h-7 w-7 relative top-16 left-5'/>
<h3 className='text-slate-300 relative top-16 left-4 text-xl font-semibold '>X 50</h3>
</div>
<button onClick={()=>setgamestate("Javastartquiz")} className='button9 relative top-24 px-14 py-0.5 left-6'>Take Quiz</button>
  </div>:
  
  <div className='flex flex-col justify-center items-center'>

<Lottie animationData={timeranim} className='relative top-4' loop={false} autoPlay={false} />
<h3 className='relative text-green-300 font-bold tracking-wider text-2xl  top-4'>Event Complete</h3>


<div className='flex flex-row justify-start items-start relative -top-7 '>
<img src={diamond} className='h-7 w-7 relative top-16 -left-5'/>
<h3 className='text-slate-300 relative top-16 -left-4 text-xl font-semibold '>X 100</h3>
<img src={coin} className='h-7 w-7 relative top-16 left-1'/>
<h3 className='text-slate-300 relative top-16 left-2 text-xl font-semibold '>X 20</h3>
<img src={lightning} className='h-7 w-7 relative top-16 left-5'/>
<h3 className='text-slate-300 relative top-16 left-4 text-xl font-semibold '>X 50</h3>
</div>

{ change === true ? <div>
<button onClick={handleclick} className='button9 relative top-24 px-14 py-0.5 left-6'>Collect</button>
</div>:

<div className='text-2xl tracking-wider font-semibold text-slate-300 relative flex flex-col top-16'>
  
 <h3 className='relative left-4'>Rewards collected</h3>
  <h3 className='text-sm relative  font-light text-slate-400 top-3'>Upcoming events will get updated!</h3></div>}

  </div>
}

</div>

<div className='updates flex flex-col justify-start items-center'>
  <h3 className='text-slate-300 relative text-2xl top-5 font-medium tracking-widest'>Updates & Events</h3>
  <h3 className='relative text-slate-500 top-9 -left-24 text-xl tracking-widest font-light mb-5'>Current</h3>
  <div className='flex flex-col top-10 relative'>
  <BiCircle className='absolute -left-5 top-1 mr-1 text-green-100'/> <h3  className='text-slate-300 '>lecture on Data science<button className='ml-2 text-green-400 mb-2'>Join now</button></h3>
  <BiCircle className='absolute -left-5 top-9 mr-1 text-green-100'/> <h3  className='text-slate-300 '>lecture on DSA<button className='ml-2 text-green-400 mb-2'>Join now</button></h3>
</div>
<h3 className='relative text-slate-500 top-16 -left-20 text-xl tracking-widest font-light mb-8'>Upcoming</h3>
<div className='flex flex-col relative top-6 left-20'>
<BiBox className='text-yellow-300 relative text-xl top-8 mb-2 -left-32'/><h3 className=' text-slate-300 -left-24 relative '>lecture on Spring</h3>
<BiBox className='text-yellow-300 relative text-xl top-8 mb-2 -left-32'/><h3 className=' text-slate-300 -left-24 relative '>lecture on Spring MVC</h3>
<BiBox className='text-yellow-300 relative text-xl top-8 mb-2 -left-32'/><h3 className=' text-slate-300 -left-24 relative '>lecture on Mongo DB</h3>
<BiBox className='text-yellow-300 relative text-xl top-8 mb-2 -left-32'/><h3 className=' text-slate-300 -left-24 relative '>summercamp event </h3>
</div>


</div>



    {/* <div>
    <input placeholder='search' className=' pl-11 pr-9  relative left-16 top-6 w-2/3 bg-sky-400 opacity-50  rounded-lg placeholder:text-white placeholder:text-center  '></input>
   </div>
    
   <div>
      <ul >

      <div className='relative top-16 left-4'>
        <li className='flex  mb-9'>
          <img src={robot} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle  left-8 bg-green-400'></span>
          <h3 className='text-slate-300 mr-2'>Norman Osborn</h3>
          <h3 className=' static text-green-500'>online</h3>
                    <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        
        
        </li>
        </div>

        <div className='relative top-16 left-4'>
        <li className='flex  mb-9'>
          <img src={prof7} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle  left-8 bg-green-400'></span>
          <h3 className='text-slate-300 mr-2'> Jon Jonas</h3>
          <h3 className=' static text-green-500'>online</h3>
            <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        
    
        </li>
        </div>
        <div className='relative top-16 left-4'>
        <li className='flex  mb-9'>
          <img src={prof6} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle  left-8 bg-green-400'></span>
          <h3 className='text-slate-300 mr-2 '>Harry Kane</h3>
          <h3 className=' static text-green-500'>online</h3>
            <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        
         
        </li>
        </div>

        <div className='relative top-16 left-4'>
        <li className='flex  mb-9'>
          <img src={prof5} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle  left-8 bg-yellow-400'></span>
          <h3 className='text-slate-300 mr-2'>Shawn Mendes</h3>
          <h3 className=' static text-yellow-500'>dnd</h3>
            <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        
        
        </li>
        </div>

        <div className='relative top-16 left-4'>
        <li className='flex  mb-9'>
          <img src={prof4} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle  left-8 bg-yellow-400'></span>
          <h3 className='text-slate-300 mr-2'>Robert Lewandowski</h3>
          <h3 className=' static text-yellow-500'>dnd</h3>
            <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        
       
        </li>
        </div>

        <div className='relative top-16 left-4'>
        <li className='flex mb-9'>
          <img src={prof3} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle  left-8 bg-yellow-400'></span>
          <h3 className='text-slate-300 mr-2'>Andrew Tate</h3>
          <h3 className=' static text-yellow-500'>dnd</h3>
            <motion.button  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        
    
         </li>
        </div>

        <div className='relative top-16 left-4'>
        <li className='flex mb-9'>
          <img src={prof2} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle  left-8 bg-red-400'></span>
          <h3 className='text-slate-300 mr-2'> Jude bellingham</h3>
          <h3 className=' static text-red-500'>offline</h3>
           <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        

         </li>
        </div>

        <div className='relative top-16 left-4'>
        <li className='flex  mb-9'>
          <img src={prof1} alt='robot' className='rounded-full h-12 w-12 mr-4'/>
          <span className='status-circle left-8 bg-red-400'></span>
          <h3 className='text-slate-300 mr-2'>Harry maguire</h3>
          <h3 className=' static text-red-500'>offline</h3>
         <motion.button whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={notify} className=' hover:border-sky-600 hover:bg-sky-400  absolute  top-6 left-16 border-2 border-sky-900 rounded-lg px-3 opacity-90 text-slate-100 bg-sky-600 mt-1'>send invite</motion.button>
        
         <Toaster position='top-right' reverseOrder={false} toastOptions={{
        
          style:{
            border: '1px solid darkgreen',
            color: 'green',
            padding: '4px',
            boxShadow:'0px 0px 10px rgba(0, 0, 255, 0.5)',
          }
          
         }}/>
          
        </li>
        </div>
</ul>

  </div> */}

  </div>
 

  
</div>
  );
}

export default Profile;
