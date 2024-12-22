import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (

    <div className='w-full h-[50vh] bg-[#004D43] pt-20 pb-10'>
        <div className='text flex text-nowrap overflow-hidden border-t-[1px] border-b-[1px] py-5 font-semibold border-zinc-300'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration : 5}} className='text-9xl	leading-none uppercase'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration : 5}} className='text-9xl	leading-none uppercase'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration : 5}} className='text-9xl	leading-none uppercase'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee