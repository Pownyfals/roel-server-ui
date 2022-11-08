import React from 'react'

const Card = () => {
  return (
        <div className='flex flex-wrap justify-center bg-[#282828] h-96 pt-10'>
            <div className='border w-96 h-56 transition ease-in hover:bg-slate-500 mx-10 text-white hover:text-black'>
              <h1 className='font-extralight text-3xl text-center mt-10'>Minecraft Server</h1>
            </div>
            <div className='border w-96 h-56 transition ease-in hover:bg-slate-500 mx-10 text-white hover:text-black'>
              <h1 className='font-extralight text-3xl text-center mt-10'>Game Server</h1>
            </div>
        </div>
  )
}

export default Card