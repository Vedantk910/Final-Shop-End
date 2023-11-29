import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Security from './security/Security'
// import Users from './users/Users'

function Settings() {

  const [navitem, setNavitem] = useState("security")

  const [UserDetails, setUserDetails] = useState({
    name: "Raees Alam",
    dob: "12-jan-2022",
    email: "raees786@ameen.com",
    contact: (1079654321),
    address: "Fatehpur, Gujarat -01",
    password: "password@123",
  })


  return (
    <>
      {/* <Navbar setNavitem={setNavitem} navitem={navitem} /> */}
      {navitem === "security" && <Security UserDetails={UserDetails} setUserDetails={setUserDetails} />}
      {/* {navitem === "users" && <Users />} */}
    </>
  )
}

export default Settings
