import React from 'react'

// import {ImProfile} from 'react-icons/im';
// import {FiUsers} from 'react-icons/fi';
import {MdSecurity} from 'react-icons/md';

const Navbar = ({navitem ,setNavitem}) => {
  return (
    <div className='grid grid-cols-2 md:text-lg'>
      {/* <button onClick={()=>setNavitem("profile")} className={`flex ${navitem==="profile"? "bg-gray-100 font-semibold" : ""} hover:bg-gray-100 justify-center border py-4 items-center text-center`}><p className='hidden sm:block'>Profile</p> <ImProfile className="ml-1 text-xl" /> </button> */}
      <button onClick={()=>setNavitem("security")} className={`flex ${navitem==="security"? "bg-gray-100 font-semibold" : ""} hover:bg-gray-100 justify-center border py-4 items-center text-center`}><p className='hidden sm:block'>Security</p><MdSecurity className="ml-1 text-xl"/></button>
      {/* <button onClick={()=>setNavitem("users")} className={`flex ${navitem==="users"? "bg-gray-100 font-semibold" : ""} hover:bg-gray-100 justify-center border py-4 items-center text-center`}><p className='hidden sm:block'>Users</p> <FiUsers className="ml-1 text-xl" /></button> */}
    </div>
  )
}

export default Navbar
