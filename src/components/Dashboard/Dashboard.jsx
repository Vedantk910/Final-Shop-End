import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const Dashboard = ({sidebarOpen}) => {

  const navigate=useNavigate();
  const [option, setOption] = useState("User Dashboard");
  const {user}=useSelector(state=>state.user);
  useEffect(()=>{
    user && toast.error("You have Logged in as User")
    user && navigate("/")
  },[user])
  return (
    <div>
      <div className={` w-full  min-h-[90vh] mt-16 flex flex-row  trantition-all duration-300`}>

        <div className={`${sidebarOpen===false? "hidden" : "block"} `}>
         <Sidebar option={option} setOption={setOption}  />
        </div>

        <div className="w-[100%] ease-in-out duration-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;