import React from 'react';

const PriceCards = () => {
    return(
        <div className="flex flex-col h-full w-[80%] space-y-5 space-x-0 md:flex-row md:items-end md:w-2/3 md:space-x-5 md:space-y-0">
          {/* Card 1 */}
          <div className="flex flex-col py-5 space-y-9 drop-shadow-md bg-[#3a5780] text-white h-[87%] md:w-1/3 rounded-xl justify-between">
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
            <button className='bg-white font-bold text-[#3a5780] w-[60%] mx-auto h-[40px] rounded-xl hover:bg-slate-600 hover:text-white'>Get Started</button>
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
    )
}

export default PriceCards