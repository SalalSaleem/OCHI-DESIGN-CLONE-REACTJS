import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-40 px-20'>
        {["We Create","Eye-opening","presentations"].map((item,key)=>{
          return <div className='masker'>
            <div className='w-fit flex'>
            {key === 1 && (<motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKKrmPasXgrCYuSHV3EsMZBrdMHNN6BgvSw&s"  animate={{width:"8vw"}} transition={{ease:[0.45, 0, 0.55, 1] ,delay:.4 , duration : 0.9}} className='w-[0px] rounded mx-2 h-[5vw] bg-green-700 relative'></motion.img>)}
          <h1 key={key} className="uppercase leading-[4.7vw] tracking-tight text-7xl font-['Founders_Grotesk'] font-semibold">{item}</h1>
          </div>
        </div>
        })}
       </div>
       <div>
        <p>
          <h2>
            <p>
              <div>
                <p>
                  <div></div>
                </p>
              </div>
            </p>
          </h2>
        </p>
       </div>
       <div className='border-t-[1px] mt-36 flex justify-between py-4 px-10 text-sm'>
        {["For public and private companies","From the first pitch to IPO"].map((items,key)=><p key={key}>{items}</p>)}
       <div className='flex'>
        <div className='border-[1px] rounded-full px-3 py-1'><p>Start the project</p></div>
        <div className='flex justify-center items-center border-[1px] rounded-full ml-2 px-2 py-1'><span className='-rotate-45'><FaArrowRight /></span></div>
       </div>
       </div>
    </div>
  )
}

export default LandingPage