import React from 'react'

function Featured() {
  return (
    <div className='bg-zinc-600 w-full h-screen'>
        <div className='border-b-2 border-zinc-500 py-10 px-20'>
            <h1 className='text-[3vw]'>Featured projects</h1>
        </div>
        <div className='w-full px-20'>
            <div className='h-full flex gap-20 mt-2 relative'>
                <div className='absolute text-[5vw] text-[#CDEA68] font-bold right-[38vw] top-[12vw]'>
                    {"FYDE".split().map((item,index)=><span>{item}</span>)}
                </div>
                <div className='w-1/2 overflow-hidden'>
                    <div className='rounded-2xl overflow-hidden'>
                        <img className='w-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className='absolute text-[5vw] text-[#CDEA68] font-bold right-[38vw] top-[12vw]'>
                    {"VISE".split().map((item,index)=><span>{item}</span>)}
                </div>
                <div className='w-1/2'>
                    <div className='rounded-2xl overflow-hidden'>
                        <img className='w-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured