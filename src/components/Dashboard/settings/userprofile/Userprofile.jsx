import React, { useState } from 'react'
import userpic from "../../../../data/profile/user.jpg"
import {AiOutlineEdit} from "react-icons/ai"
import {TiTick} from "react-icons/ti"

// import DatePicker from 'react-date-picker'
import "react-date-picker/dist/DatePicker.css"

const Userprofile = ({user, setUser}) => {

  const[editProfile, setEditProfile] = useState(false)

  const submitHandler = () => {
    setEditProfile(false);
  }

  return (
    <div className='flex flex-col justify-center p-4 items-center'>
      <p className='text-3xl text-gray-700 font-semibold mb-12 border-b pb-2'>user details</p>
      <img src={userpic} alt="user_pic" className='h-[13rem] md:h-[17rem] object-cover border shadow-2xl rounded-full' />
      {/* <p className='text-3xl font-bold my-6'>{user.name}</p> */}

      {/* User Details */}
      {editProfile? <div className='flex flex-col justify-center text-center items-center'>
        <input onChange={(e)=>{setUser({...user, name: e.target.value})}} value={user.name} type="text" className='md:px-4 text-center my-6 w-[10rem] md:w-full md:mx-2 font-bold text-gray-600 text-2xl md:text-3xl border-b outline-none' />
        <form className='text-gray-700 text-sm md:text-base'>
          <div className='flex my-3'>
            <span className='font-semibold'>Email: </span>
            <input onChange={(e)=>{setUser({...user, email: e.target.value})}} value={user.email} type="text" className='px-2 md:px-4 w-[8rem] md:w-full md:mx-2 border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Contact: </span>
            <input onChange={(e)=>{setUser({...user, contact: e.target.value})}} value={user.contact} type="number" className='px-2 md:px-4 w-[8rem] md:w-full md:mx-2 border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>DOB: </span>
            {/* <DatePicker
              selected={user.dob}
              onChange={date => setUser({...user, dob: date})}
            /> */}
            <input onChange={(e)=>{setUser({...user, dob: e.target.value})}} value={user.dob} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-full border-b outline-none' />
          </div>
          <div className='flex my-3'>
            <span className='font-semibold'>Address: </span>
            <input onChange={(e)=>{setUser({...user, address: e.target.value})}} value={user.address} type="text" className='px-2 md:px-4 md:mx-2 w-[8rem] md:w-full border-b outline-none' />
          </div>
          <button onClick={submitHandler} className="w-full flex justify-center items-center text-gray-600 hover:text-green-600 mt-8"><p className='mr-1'>Save Changes</p><TiTick className='text-lg text-green-600' /></button>
        </form>
      </div> : 
      <>
        <p className='text-2xl md:text-3xl font-bold my-6'>{user.name}</p>
        <div className='text-gray-700 text-sm md:text-base'>
          <p className='my-3 flex'><span className='font-semibold'>Email: </span><p className='px-4 mx-2 border-b border-white'>{user.email}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>Contact: </span><p className='px-4 mx-2 border-b border-white'>{user.contact}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>DOB: </span><p className='px-4 mx-2 border-b border-white'>{user.dob}</p> </p>
          <p className='my-3 flex'><span className='font-semibold'>Address: </span><p className='px-4 mx-2 border-b border-white'>{user.address}</p> </p>
          <button onClick={()=> {setEditProfile(true)}} className="w-full flex justify-center items-center text-gray-600 hover:text-blue-800 mt-8"><p className='mr-2'>Edit Profile</p><AiOutlineEdit /></button>
        </div>
      </>
      }
    </div>
  )
}

export default Userprofile