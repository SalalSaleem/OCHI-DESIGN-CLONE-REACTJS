import React from 'react'

function ThreeCards() {
  return (
    <div className='w-full flex flex-wrap p-20 h-screen bg-zinc-900'>
        <div className='flex justify-center items-center w-1/2'>
            <div className='bg-[#004D43] w-full flex flex-col p-5 justify-between h-[80%] rounded-lg'>
              <div className='h-full flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>
                <div>
                  <p className='text-[#CDEA68] border-2 w-fit py-[0.2vw] px-[0.5vw] rounded-full border-[#CDEA68]'>&#169;2019-2022</p>
                </div>
            </div>
        </div>
        <div className='bg-zinc-400 w-1/2 flex items-center px-5'>
            <div className='bg-orange-700 w-1/2 mx-5 h-[80%] rounded-lg'> 
              <div className='bg-red-900 h-10 w-full'></div>
              <div className='bg-green-900 h-10 w-full'></div>
            </div>
            <div className='bg-purple-700 w-1/2 h-[80%] rounded-lg'></div>
        </div>
    </div>
   
   
   
   )
}

export default ThreeCards