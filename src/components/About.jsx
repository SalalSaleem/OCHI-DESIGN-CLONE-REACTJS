import React, { useEffect, useState } from 'react'

function About() {
  const [rotate , setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;
        
        let angle = Math.atan2(deltaY , deltaX)* (180/Math.PI)
        setRotate(angle-180)
    })
  })
  return (
    <div className='bg-[#CDEA68] p-20'>
        <h1 className='text-black text-[3.2vw] leading-[3.3vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='border-t-2 border-zinc-800 w-full mt-20 flex py-5'>
          <div className='mt-[2vw] w-1/2'>
            <h1 className='text-[3vw] text-black'>Our approach:</h1>
            <span className='flex my-4 items-start bg-[black] relative py-2 px-8 rounded-full w-[11vw]'>Read More <span className='bg-[white] right-2 top-4 rounded-full w-[0.6vw] h-[0.6vw] absolute'></span></span>
          </div>
          <div className='w-1/2'>
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='rounded-lg' width={"100%"} />
          </div>
        </div>
        <div className='w-full h-screen'>
      <div className='relative bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] w-full h-full bg-cover bg-center'>
        <div className='w-fit flex gap-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='eyes w-[13vw] h-[13vw] rounded-full bg-white flex justify-center items-center'>
            <div className='bg-zinc-900 h-2/3 w-2/3 relative rounded-full'>
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='w-full px-2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='bg-white w-[2vw] h-[2vw] rounded-full'></div>
            </div>
            </div>
          </div>
          <div className='eyes w-[13vw] h-[13vw] rounded-full bg-white flex justify-center items-center'>
            <div className='bg-zinc-900 relative h-2/3 w-2/3 flex justify-center items-center rounded-full'>
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='w-full px-2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='bg-white w-[2vw] h-[2vw] rounded-full'></div>
            </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default About