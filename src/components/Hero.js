import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#282828]'>
    <div className='grid grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    {/* First Column */}
    <div className=' bg-[#282828] items-center flex'>
    <div className='w-full self-center px-4 pt-32'>
    <h1 className='text-[#cdddf6] px-20 text-4xl font-semibold justify-center flex text-center'>Start Your Very Own Server!</h1>
    <p className='text-white flex pt-8 text-xl text-center font-extralight'>Our Minecraft Hosting plans begin at $2.50,
       and have the option of easily and automatically upgrading at any point,
       only charging you the difference between the upgraded package cost and  your remaining days on your current plan</p>
       <div className='justify-center flex p-14'>
        <button className='p-5 bg-[#3a5780] rounded-md font-light text-white text-center hover:bg-slate-900'>Compare Our Plan</button>
       </div>
    </div>
    </div>
    {/* Second Column */}
      <div className="bg-[#282828] bg-[length:60vh] bg-center bg-no-repeat bg-heroImage">
      
      </div>
    </div>    
  </div>
  )
}

export default Hero