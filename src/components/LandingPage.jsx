import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-40 px-20'>
        {["We Create","Eye-opening","presentations"].map((item,key)=>{
          return <div className='masker'>
          <h1 key={key} className="uppercase leading-[4.7vw] tracking-tight text-7xl font-['Founders_Grotesk'] font-semibold">{item}</h1>
        </div>
        })}
       </div>
       <div className='border-t-[1px] mt-36 flex justify-between py-4 px-10 text-sm'>
        {["For public and private companies","From the first pitch to IPO"].map((items,key)=><p key={key}>{items}</p>)}
       <div>
        <div className='border-[1px] rounded px-2 py-1'><p>Start the project</p></div>
       </div>
       </div>
    </div>
  )
}

export default LandingPage