
"use client"
import { motion, SVGMotionProps } from "motion/react";
import { useEffect, useRef } from 'react';
import { useState } from 'react';
export default function Gooeyfilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputref=useRef<HTMLInputElement>(null);
  const [serachText,setSearchText]=useState("");

  const buttonVariants={
    collapsed:{
      width:"115px",
      marginLeft:"0",
    },
    expanded:{
      width:"200px",
      marginLeft:"50px"
    }
  } 

  const iconBubblevariants={
    collapsed: { x: 56, scale: 0.5 },
    expanded:{
      scale:1,
      opacity:1
    }
  }
  const Tranisition={
     duration:1,
     type:"spring" as const,
     bounce:0.25
  }
  const SVGFilter= () =>{
    return <svg className='absolute hidden h-0 w-0 '>

      <defs>
        <filter id="gooey-filter" x='-50%' y='-50%' width='200%' height='200%'>

          <feGaussianBlur in='SourceGraphic'
          stdDeviation='5' result='blur' />
            
           <feColorMatrix 
           in='blur'
           type='matrix'
           values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10'
           result='goo'
           />
           <feComposite in='SourceGraphic' in2='goo' operator='atop' />
        </filter>
      </defs>

    </svg>
  }

  useEffect(()=>{
    if(isExpanded){
      inputref.current?.focus();
    }
    else{
 setSearchText('');
    }

  },[isExpanded])


  return (
    <div className="relative  h-screen flex items-center justify-center ">
      <SVGFilter />
    <div 
    style={{
      filter:'url(#gooey-filter)'
    }}
    className="relative flex h-10 items-center justify-center">
      <motion.div 
      variants={buttonVariants}
      initial="collapsed"
      animate={isExpanded ?"expanded":"collapsed"}
      transition={Tranisition}
      onClick={() => {
        setIsExpanded(true);
        inputref.current?.focus();
        }}  
      className="h-10 w-full  flex  items-center justify-center">

<button
 onClick={()=>setIsExpanded(true)}
className="h-10 w-full cursor-pointer items-center justify-center flex gap-2 rounded-full bg-black text-white font-medium px-4">
 {!isExpanded && <SearchIcon className='size-4 text-white' />}
<motion.input 
layoutId="input"
ref={inputref}
value={serachText}
onBlur={()=>!serachText && setIsExpanded(false)}
onChange={(e)=>setSearchText(e.target.value)}
placeholder="Search,," className=" h-full w-full bg-transparent text-sm placeholder-white/50  outline-none"/>
</button>

      </motion.div>
   
   <motion.div 
   variants={iconBubblevariants}
   initial="collapsed"
   animate={isExpanded? "expanded" : "collapsed"}
   transition={Tranisition}
   className='absolute top-1/2 -left-14 size-10 bg-black -translate-y-1/2 items-center justify-center flex rounded-full '>
   <SearchIcon className='size-5 text-white' />

   </motion.div>

      
    </div>
    </div>
  );
}

const SearchIcon = (props: SVGMotionProps<SVGSVGElement>) => {
  return (
    <motion.svg
    layoutId="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
  {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </motion.svg>
  );
};