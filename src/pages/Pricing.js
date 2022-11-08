import React from 'react'
import PriceCards from '../components/PriceCards'
import PriceFooter from '../components/PriceFooter'
import PriceHeading from '../components/PriceHeading'

const Pricing = () => {
  return (
    <div className='bg-slate-900'>
      <div className="flex flex-col h-45 px-16 pt-40 space-y-16 space-x-8 md:flex-row bg-slate-900 md:mt-0 md:py-20 md:h-[85vh] md:items-center">
        <PriceHeading></PriceHeading>
        <PriceCards></PriceCards>
      </div>
      <PriceFooter></PriceFooter>
    </div>
  )
}

export default Pricing