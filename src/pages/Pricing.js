import React from 'react'

const Pricing = () => {
  return (
    <div className='bg-slate-900'>
      <div className="flex flex-col h-45 px-16 pt-40 space-y-16 space-x-8 md:flex-row bg-slate-900 md:mt-0 md:py-20 md:h-[85vh] md:items-center">

        {/* Heading */}
        <div className="flex flex-col space-y-5 text-center md:text-left md:w-1/3 md:pr-6">
          <h1 className='text-white text-3xl font-semibold font-retroGaming md:text-5xl'>Let's Start Now!</h1>
          <p className='text-white text-4md font-extralight'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo aspernatur recusandae exercitationem nobis, fugit, deleniti doloribus suscipit soluta architecto optio dicta voluptatum, sunt voluptas vel. Asperiores voluptates voluptatem enim!"</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col h-full w-[80%] space-y-5 space-x-0 md:flex-row md:items-end md:w-2/3 md:space-x-5 md:space-y-0">
          {/* Card 1 */}
          <div className="flex flex-col py-5 space-y-9 drop-shadow-md bg-slate-500 text-white h-[87%] md:w-1/3 rounded-xl justify-between">
            {/* Content */}
            <div className='space-y-4 text-center'>
              <p>Basic</p>
              <h2 className='text-5xl font-bold md:text-5xl'>$2.00</h2>
              <hr className='w-[80%] mx-auto border-2 bg-white' />
              <ul className='list-disc w-[70%] mx-auto text-left space-y-3 font-semibold'>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            
            {/* CTA */}
            <button className='bg-white font-bold text-slate-500 w-[60%] mx-auto h-[40px] rounded-xl hover:bg-slate-600 hover:text-white'>Get Started</button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col py-5 space-y-9 drop-shadow-md bg-slate-800 text-white h-[87%] md:w-1/3 rounded-xl justify-between md:h-full">
            {/* Content */}
            <div className='space-y-4 text-center'>
              <p>Ultimate</p>
              <h2 className='text-5xl font-bold'>$5.00</h2>
              <hr className='w-[80%] mx-auto border-2 bg-white' />
              <ul className='list-disc w-[70%] mx-auto text-left space-y-3 font-semibold'>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            
            {/* CTA */}
            <button className='bg-white font-bold text-slate-800 w-[60%] mx-auto h-[40px] rounded-xl hover:bg-slate-600 hover:text-white'>Get Started</button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col py-5 space-y-9 drop-shadow-md bg-slate-800 text-white h-[87%] md:w-1/3 rounded-xl justify-between">
            {/* Content */}
            <div className='space-y-4 text-center'>
              <p>Premium</p>
              <h2 className='text-5xl font-bold'>$2.00</h2>
              <hr className='w-[80%] mx-auto border-2 bg-white' />
              <ul className='list-disc w-[70%] mx-auto text-left space-y-3 font-semibold'>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            
            {/* CTA */}
            <button className='bg-white font-bold text-slate-800 w-[60%] mx-auto h-[40px] rounded-xl hover:bg-slate-600 hover:text-white'>Get Started</button>
          </div>
        </div>

      </div>

      <hr className="w-[88%] h-[1px] mx-auto my-9 border-none bg-white md:my-0" />

      <div className="flex flex-col-reverse h-[7rem] justify-between bg-slate-900 md:flex-row mx-0 items-center md:h-[10vh] px-[4rem] text-white pb-1">
        {/* Logo */}
        <div className="flex justify-around space-x-3 items-center">
          <h4 className='text-3xl font-semibold'>ROEL</h4>
          <div className='text-[13px] flex flex-col font-extralight space-y-[-7px]'>
            <p>Serveroel</p>
            <p>uwutechroell inc</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-between items-center w-full font-semibold md:justify-around md:w-[25%]">
          <p className='text-4md text-bold hover:cursor-pointer hover:text-slate-300 md:6lg'>Youtube</p>
          <p className='text-4md text-bold hover:cursor-pointer hover:text-slate-300 md:6lg'>Instagram</p>
          <p className='text-4md text-bold hover:cursor-pointer hover:text-slate-300 md:6lg'>LinkedIn</p>
        </div> 
      </div>

    </div>
  )
}

export default Pricing