import React from 'react'

import {GoAlert} from "react-icons/go"
import {AiOutlineRise, AiTwotoneStar} from "react-icons/ai"

import { inventory } from '../inventory/Inventory'

// inventory.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))         //For sorting w.r.t proct

const DashHome = () => {

  const trends = [
"Stock cubes",
"Honey",
"Vinegar ",
"Sugar"
  ]

  var i=0;

  return (
    <div className='p-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center'>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Today's sales</p>
          <p className='border-b pb-2'>total sales</p>
          <p className='p-8 text-2xl text-center'>10K</p>
        </div>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Total Items</p>
          <p className='border-b pb-2'>sold today</p>
          <p className='p-8 text-2xl text-center'>1245</p>
        </div>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Monthly sale</p>
          <p className='border-b pb-2'>October's total</p>
          <p className='p-8 text-2xl text-center'>10.1L</p>
        </div>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Inventory turnover ratio</p>
          <p className='border-b pb-2'>this month's</p>
          <p className='p-8 text-2xl text-center'>0.84%</p>
        </div>
      </div>

      <div className='grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 gap-6'>

        <div className='col-span-1 border border-red-300 shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12 pb-3'>
            <p className='text-xl font-semibold flex items-center'>Low stock Items <GoAlert className='ml-2 text-[#FF2400]' /></p>
            <p className='border-b pb-2'>In inventory</p>

              <div className='flex justify-between my-3 font-semibold'>
                <p>Sr no.</p>
                <p>Item name</p>
                <p>left</p>
              </div>

              {/* Sorting first then slicing only 5 items */}
              {inventory.sort((a, b) => parseFloat(a.in_inventory) - parseFloat(b.in_inventory)).slice(0,5).map((item) => ( item.in_inventory < 10 ? <div className='flex justify-between'>
                <p>{++i}</p>
                <p>{item.name}</p>
                <p className='text-gray-800'>{item.in_inventory}</p>
              </div> : <></> ))}

              {i===0 && <p>Stocks are enough!</p>}

          </div>

          <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
            <p className='text-xl font-semibold flex items-center'>Best sold product <AiTwotoneStar className='ml-2 text-amber-400' /></p>
            <p className='border-b pb-2'>Last month</p>
            
            {inventory.sort((a, b) => parseFloat(b.sold) - parseFloat(a.sold)).slice(0,1).map((item) => (<div className='flex my-3 items-center flex-col md:flex-row md:justify-between'>
                <img src={item.image} alt={item.name} className="w-[10rem] rounded-full object-cover shadow shadow-amber-400" />
                <div>
                  <p>Name: {item.name}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Sold: {item.sold}{" "}units </p>
                </div>
            </div>))}

          </div>

          <div className='col-span-1 border border-green-700 shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
            <p className='text-xl font-semibold flex items-center'>Trending items! <AiOutlineRise className='ml-2 text-2xl text-green-700' /></p>
            <p className='border-b pb-2'>recommendations for your shop</p>

            <div className='flex justify-between my-3 font-semibold'>
                <p>Sr no.</p>
                <p>Item name</p>
            </div>
            
            {trends.map((item, i) =>( <div className='flex justify-between'>
              <p>{i+1}</p>
              <p>{item}</p>
            </div>))}

          </div>
      </div>
    </div>
  )
}

export default DashHome
