import React from 'react'
import {BsSearch} from "react-icons/bs"

const Bar = () => {
  return (
    <div className='flex border mt-8 w-full pl-3 items-center'>
      <BsSearch />
      <input placeholder='Search for any item...' className=' py-2 px-2 w-full outline-none' />
      <button className='border bg-gray-200 text-gray-800 font-semibold px-2 md:px-12 py-2 inline-block hover:bg-gray-400 hover:text-white hover:cursor-pointer'>Search</button>
    </div>
  )
}

export default Bar
