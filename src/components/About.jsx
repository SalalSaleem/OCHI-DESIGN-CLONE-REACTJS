import React from 'react'

function About() {
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
      <div className='bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] w-full h-full bg-cover bg-center'></div>
        </div>
    </div>
  )
}

export default About