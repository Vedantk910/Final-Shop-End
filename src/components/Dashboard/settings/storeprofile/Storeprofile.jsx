import React, { useState } from 'react'
import storepic from "../../../../data/shop/shop.png"
import {AiOutlineEdit} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
import {TiTick} from "react-icons/ti"
import {BiLinkExternal} from "react-icons/bi"

// import DatePicker from 'react-date-picker'
import "react-date-picker/dist/DatePicker.css"

const Storeprofile = ({store, setStore}) => {

  const[editStore, setEditStore] = useState(false)
  const iter = [0,1,2,3,4];

  const submitHandler = () => {
    setEditStore(false);
  }

  return (
    <div className='flex flex-col justify-center p-4 items-center'>
      <p className='text-3xl text-gray-700 font-semibold mb-12 border-b pb-2'>store details</p>
      <img src={storepic} alt="store_pic" className='h-[13rem] object-cover md:h-[20rem] border shadow-2xl ' />
      

      {/* store Details */}
      {editStore? <div className='flex flex-col justify-center text-center items-center'>
        <input onChange={(e)=>{setStore({...store, name: e.target.value})}} value={store.name} type="text" className='md:px-4 text-center mt-6 w-[10rem] md:w-full md:mx-2 font-bold text-gray-600 text-xl md:text-2xl border-b outline-none' />
        {/*ratings*/}
        <div className='flex items-center'>
          {iter.map((it) => (
            <div>
              {it<store.ratings? <AiFillStar className="text-2xl text-amber-500"/> : <AiOutlineStar className="text-2xl text-amber-500"/>}
            </div>
          ))}
          <p className='text-xs'>132 ratings </p>
        </div>

        <form className='text-gray-700 w-[100%] mt-4 text-sm md:text-base'>
          <div className='flex my-3'>
            <span className='font-semibold'>Website: </span>
            <input onChange={(e)=>{setStore({...store, website: e.target.value})}} value={store.website} type="text" className='px-2 md:px-4 w-[8rem] md:w-[24rem] md:mx-2 border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Description: </span>
            <input onChange={(e)=>{setStore({...store, description: e.target.value})}} value={store.description} type="text" className='px-2 md:px-4 w-[8rem] md:w-[24rem] md:mx-2 border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Email: </span>
            {/* <DatePicker
              selected={store.dob}
              onChange={date => setStore({...store, dob: date})}
            /> */}
            <input onChange={(e)=>{setStore({...store, email: e.target.value})}} value={store.email} type="email" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-[24rem] border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Contact: </span>
            <input onChange={(e)=>{setStore({...store, contact: e.target.value})}} value={store.contact} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-[24rem] border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Address: </span>
            <input onChange={(e)=>{setStore({...store, address: e.target.value})}} value={store.address} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-[24rem] border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>G-maps: </span>
            <input onChange={(e)=>{setStore({...store, gmaps: e.target.value})}} value={store.gmaps} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-[24rem] border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>ZIP-Code: </span>
            <input onChange={(e)=>{setStore({...store, zipcode: e.target.value})}} value={store.zipcode} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-[24rem] border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Open on: </span>
            <input onChange={(e)=>{setStore({...store, daysopened: e.target.value})}} value={store.daysopened} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-[24rem] border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Timing: </span>
            <input onChange={(e)=>{setStore({...store, timing: e.target.value})}} value={store.timing} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-[24rem] border-b outline-none' />
          </div>
          <button onClick={submitHandler} className="w-full flex justify-center items-center text-gray-600 hover:text-green-600 mt-8"><p className='mr-1'>Save Changes</p><TiTick className='text-lg text-green-600' /></button>
        </form>
      </div> : 
      <>
        <p className='text-xl md:text-2xl font-bold mt-6'>{store.name}</p>
        {/*ratings*/}
        <div className='flex items-center mb-8'>
          {iter.map((it) => (
            <div>
              {it<store.ratings? <AiFillStar className="text-2xl text-amber-500"/> : <AiOutlineStar className="text-2xl text-amber-500"/>}
            </div>
          ))}
          <p className='text-xs'>132 ratings </p>
        </div>
        <div className='text-gray-700 text-sm md:text-base'>
          <p className='my-3 flex'><span className='font-semibold'>Website: </span><a href={`https://${store.website}`} target="_blank" rel="noreferrer" className='md:px-4 ml-2 border-b text-blue-400 flex items-center border-white'>{store.website}<BiLinkExternal className='ml-2'/></a> </p>
          <p className='my-3 flex'><span className='font-semibold'>Description: </span><p className='md:px-4 ml-2 border-b border-white'>{store.description}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>Email: </span><p className='md:px-4 ml-2 border-b border-white'>{store.email}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>Contact: </span><p className='md:px-4 ml-2 border-b border-white'>{store.contact}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>Address: </span><p className='md:px-4 ml-2 border-b border-white'>{store.address}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>G-maps: </span><p className='md:px-4 ml-2 border-b border-white'>{store.gmaps}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>ZIP-code: </span><p className='md:px-4 ml-2 border-b border-white'>{store.zipcode}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>Open on: </span><p className='md:px-4 ml-2 border-b border-white'>{store.daysopened}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>Timing: </span><p className='md:px-4 ml-2 border-b border-white'>{store.timing}</p> </p>
          <button onClick={()=> {setEditStore(true)}} className="w-full flex justify-center items-center text-gray-600 hover:text-blue-800 mt-8"><p className='mr-2'>Edit Details</p><AiOutlineEdit /></button>
        </div>
      </>
      }
    </div>
  )
}

export default Storeprofile