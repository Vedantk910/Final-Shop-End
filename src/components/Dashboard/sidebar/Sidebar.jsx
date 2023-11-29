import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ImProfile} from 'react-icons/im';
import { GrShieldSecurity } from 'react-icons/gr';
import { IoMdArrowBack } from 'react-icons/io';
import { MdOutlineSpaceDashboard, MdLogout, MdInventory, MdInsights } from 'react-icons/md';

import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ option, setOption }) => {

  const navigate = useNavigate();
  const location = useLocation()

  const logout = () => {
    // localStorage.clear();
    // setAnchorEl(null);
    navigate("/");
    toast.success("Logout successful!");
  };

  return (
    <div className="col-span-2 border-r font-semibold border-gray-200 min-h-[90vh] w-[90px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">


        <Link
          to="/dashboard"
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${location.pathname === "/dashboard" && "border-gray-900"
            }`}
        >
          <span>
            <MdOutlineSpaceDashboard className="nav-icon" />
          </span>
          <h1
            className={`${location.pathname === "/dashboard"? "text-black font-semibold" : "text-gray-600"} group-hover:text-black xl:flex hidden`}
          >
            Dashboard
          </h1>
        </Link>



        <Link
          to="/dashboard/inventory"
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${location.pathname === "/dashboard/inventory" && "border-gray-900"
            }`}
        >
          <span>
            <MdInventory className="nav-icon" />
          </span>
          <h1
            className={`${location.pathname === "/dashboard/inventory"? "text-black font-semibold" : "text-gray-600"} group-hover:text-black xl:flex hidden`}
          >
            Your Inventory
          </h1>
        </Link>
{/* 


        <Link
          to="/dashboard/customer-insights"
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${location.pathname === "/dashboard/customer-insights" && "border-gray-900"
            }`}
        >
          <span>
            <CgInsights className="nav-icon" />
          </span>
          <h1
            className={`${location.pathname === "/dashboard/customer-insights"? "text-black font-semibold" : "text-gray-600"}  group-hover:text-black xl:flex hidden`}
          >
            Customer Insights
          </h1>
        </Link> */}



        <Link
          to="/dashboard/sales-insights"
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${location.pathname === "/dashboard/sales-insights" && "border-gray-900"
            }`}
        >
          <span>
            <MdInsights className="nav-icon" />
          </span>
          <h1
            className={`${location.pathname === "/dashboard/sales-insights"? "text-black font-semibold" : "text-gray-600"} group-hover:text-black xl:flex hidden`}
          >
            Sales Insights
          </h1>
        </Link>



        <div className="w-full border-t border-gray-200" />

        <Link
          to="/dashboard/profile"
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${location.pathname === "/dashboard/profile" && "border-gray-900"
            }`}
        >
          <span>
            <ImProfile className="nav-icon" />
          </span>
          <h1
            className={`${location.pathname === "/dashboard/profile"? "text-black font-semibold" : "text-gray-600"}   group-hover:text-black xl:flex hidden`}
          >
            Profile
          </h1>
        </Link>

        <Link
          to="/dashboard/settings"
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${location.pathname === "/dashboard/settings" && "border-gray-900"
            }`}
        >
          <span>
            <GrShieldSecurity className="nav-icon" />
          </span>
          <h1
            className={`${location.pathname === "/dashboard/settings"? "text-black font-semibold" : "text-gray-600"}   group-hover:text-black xl:flex hidden`}
          >
            Account Security
          </h1>
        </Link>

        {/* Only Logout as of now */}

        <div
          onClick={logout}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}
        >
          <span>
            <MdLogout className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden`}
          >
            Sign out
          </h1>
        </div>

        <div
          onClick={() => { navigate("/customer") }}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${option === "BackButton" && "border-gray-900"
            }`}
        >
          <span>
            <IoMdArrowBack className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${option === "BackButton" && "text-black font-semibold"
              }`}
          >
            Back
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
