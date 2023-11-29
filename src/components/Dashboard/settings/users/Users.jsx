import React from "react";
// import { useNavigate } from "react-router-dom";

import {AiOutlineEye} from 'react-icons/ai';
import {BsPencil, BsTrash} from 'react-icons/bs';

import raees from "../../../../data/profile/user.jpg"
import aasiya from "../../../../data/profile/aasiya.jpg"
import sadiq from "../../../../data/profile/sadiq.png"

const Users = () => {

//   const navigate = useNavigate();

  const usersData = [
    {
        image: raees,
        name: "Raees Alam (you)",
        email:"raees786@ameen.com",
        contact: "0123456789",
        position: "Owner",
    },
    {
        image: sadiq,
        name: "Sadiq",
        email:"sadiq@ameen.com",
        contact: "0123456789",
        position: "Manager",
    },
    {
        image: aasiya,
        name: "Aasiya Raees Alam",
        email:"aasiya786@ameen.com",
        contact: "0123456789",
        position: "Business analyst",
    },
];

  return (
    <div className="md:px-4 md:py-12 min-h-[80vh] ">
      <div className="p-2 md:p-5 my-6 shadow-xl bg-gray-100">
        <h1 className="text-xl mb-2">Users</h1>

        

        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Sr no.
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Image
                </th>
                <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Contact
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Position
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>

            

            {usersData.map((user,i) => (
              <tbody className="divide-y divide-gray-100 ">
                <tr className="bg-white justify-center">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img src={user.image} alt={user.name} className="h-[6rem] rounded-full" />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.contact}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span
                      className={`p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200 ${
                        user.position === "Manager" &&
                        "text-green-800 bg-red-100"}
                        ${user.position === "Owner" && "text-green-800 bg-green-200"
                      } rounded-lg bg-opacity-50`}
                    >
                      {user.position}
                    </span>
                    
                  </td>
                  <td className="p-3 text-sm flex mt-9 items-center text-gray-700 whitespace-nowrap">
                        <div className="hover:cursor-pointer">
                            <AiOutlineEye className="h-4 mt-1 text-blue-600"/>
                        </div>
                        <div className="hover:cursor-pointer mx-6">
                            <BsPencil className="h-4 mt-1 text-blue-400" />
                        </div>
                        <div className="hover:cursor-pointer">
                            <BsTrash className="h-4 mt-1 text-red-600"/>
                        </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          {/* {buisnessDetails.jobsAdded.length===0?<div className="text-center my-4">You have not yet posted any Job</div>:<></>} */}
        </div>

        <div className="flex flex-col w-full md:hidden">
          {usersData.map((user,i)=> (
            <div className="bg-white space-y-3 p-4 my-2 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <img src={user.image} alt={user.name} className="h-[4rem] sm:h-[6rem] rounded-full" />
                <div className="flex flex-col text-left w-[60%] text-sm">
                    <div className="text-sm text-left font-medium text-black">
                    {user.name}
                    </div>
                    <div className="text-gray-500 text-left ">
                    {user.email}
                    </div>
                    <div className="text-gray-500 text-left ">
                    {user.contact}
                    </div>
                </div>
              </div>
              <div className="flex h-7 justify-between items-center">
                <span
                  className={`p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200 
                  ${user.position === "Manager" &&"text-green-800 bg-red-100"}
                  ${user.position === "Owner" && "text-green-800 bg-green-200"}
                  rounded-lg bg-opacity-50`}
                >
                  {user.position}
                </span>
                <div className="p-3 text-sm flex justify-between text-gray-700 whitespace-nowrap">
                    <div className="hover:cursor-pointer">
                        <AiOutlineEye className="h-4 mt-1 text-blue-600"/>
                    </div>
                    <div className="hover:cursor-pointer  mx-4">
                        <BsPencil className="h-4 mt-1 text-blue-400" />
                    </div>
                    <div className="hover:cursor-pointer">
                        <BsTrash className="h-4 mt-1 text-red-600"/>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;