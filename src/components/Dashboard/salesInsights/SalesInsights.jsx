import React from 'react'

import BarChart from './BarChart'
import Linechart from './Linechart'

const SalesInsights = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 mt-4'>
      <p className='text-3xl font-bold text-gray-700'>Sales insights</p>
      <div className='grid w-full grid-cols-1 mt-12 md:grid-cols-2 gap-12'>
          <Linechart />
          <BarChart />
      </div>
    </div>
  )
}

export default SalesInsights