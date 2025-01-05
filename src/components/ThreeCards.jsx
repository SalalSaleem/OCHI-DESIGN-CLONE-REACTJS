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
        <div className='w-1/2 flex items-center px-5'>
            <div className='bg-[#212121] w-1/2 mx-5 h-[80%] rounded-lg'> 
              <div className='flex justify-center items-center pt-10 h-[80%] w-full'>
                <img className='h-[5vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              </div>
              <div className='h-[20%] w-full'>
                <p className='border-2 w-fit ml-5 px-1 rounded-xl'>Rating 5.0 on clutch</p>
              </div>
            </div>
            <div className='bg-[#212121] w-1/2 h-[80%] rounded-lg'>
            <div className='flex justify-center items-center pt-10 h-[80%] w-full'>
                <img className='h-[5vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              </div>
              <div className='h-[20%] w-full'>
                <p className='border-2 w-fit ml-5 px-1 rounded-xl'>Rating 5.0 on clutch</p>
              </div>
            </div>
        </div>
    </div>
   
   
   
   )
}

export default ThreeCards