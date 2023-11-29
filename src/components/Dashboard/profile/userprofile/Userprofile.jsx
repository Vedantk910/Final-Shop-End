import React, { useEffect, useState } from "react";
import userpic from "../../../../data/profile/omkar.jpeg";
import { AiOutlineEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import dayjs from "dayjs";
import "dayjs/locale/en"; // import the English locale for month names

// import DatePicker from 'react-date-picker'
import "react-date-picker/dist/DatePicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  editMerchantProfile,
  getMerchantProfile,
} from "../../../../Actions/Merchant";
import { toast } from "react-toastify";
import Loader from "../../../Loader";

const Userprofile = ({ merchant }) => {
  const dispatch = useDispatch();
  const [editProfile, setEditProfile] = useState(false);
  const [user, setUser] = useState(merchant);
  const [image, setImage] = useState(null);

  const {
    loading,
    message,
    error,
  } = useSelector((state) => state.merchant);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    //readyState = 0 => initialState
    //readyState = 1 => processing
    //readyState = 2 => Processed
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      editMerchantProfile(
        user.name,
        user.email,
        user.contact,
        user.dob,
        user.pincode,
        image
      )
    );
    dispatch(getMerchantProfile());
    setEditProfile(false);
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (error) {
      toast.error(error);
    }

    dispatch({
      type: "clearErrors",
    });
  }, [error, message]);

  return (
    <div className="flex flex-col justify-center p-4 items-center">
      <p className="text-3xl text-gray-700 font-semibold mb-12 border-b pb-2">
        user details
      </p>
      <img
        src={image || user.avatar.url || "/defaultAvatar.png"}
        alt="user_pic"
        className="h-[13rem] w-[13rem] md:h-[17rem] md:w-[17rem]  object-cover border shadow-2xl rounded-full"
      />
      {editProfile && <input
        type="file"
        name="image"
        placeholder="Item image"
        accept="image/*"
        required={true}
        onChange={handleImageChange}
        className="bg-gray-100 w-64 mt-12 p-2 flex items-center mb-3 outline-none text-sm flex-1"
      />}
      {/* <p className='text-3xl font-bold my-6'>{user.name}</p> */}

      {/* User Details */}
      {editProfile ? (
        <div className="flex flex-col justify-center text-center items-center">
          <input
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            value={user.name}
            type="text"
            className="md:px-4 text-center my-6 w-[10rem] md:w-full md:mx-2 font-bold text-gray-600 text-2xl md:text-3xl border-b outline-none"
          />
          <form className="text-gray-700 text-sm md:text-base">
            <div className="flex my-3">
              <span className="font-semibold">Email: </span>
              <input
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                value={user.email}
                type="text"
                className="px-2 md:px-4 w-[8rem] md:w-full md:mx-2 border-b outline-none"
              />
            </div>
            <div className="flex my-3">
              <span className="font-semibold">Contact: </span>
              <input
                onChange={(e) => {
                  setUser({ ...user, contact: e.target.value });
                }}
                value={user.contact}
                type='tel' 
                maxlength={10} 
                minlength={10}
                className="px-2 md:px-4 w-[8rem] md:w-full md:mx-2 border-b outline-none"
              />
            </div>
            <div className="flex my-3">
              <span className="font-semibold">DOB: </span>
              {/* <DatePicker
              selected={user.dob}
              onChange={date => setUser({...user, dob: date})}
            /> */}
              <input
                onChange={(e) => {
                  setUser({ ...user, dob: e.target.value });
                }}
                value={user.dob}
                type="date"
                className="px-2 md:px-4 md:mx-2 w-[8rem] md:w-full border-b outline-none"
              />
            </div>
            <div className="flex my-3">
              <span className="font-semibold">zipcode: </span>
              <input
                onChange={(e) => {
                  setUser({ ...user, pincode: e.target.value });
                }}
                value={user.pincode}
                type="text"
                className="px-2 md:px-4 md:mx-2 w-[8rem] md:w-full border-b outline-none"
              />
            </div>
            <button
              onClick={submitHandler}
              disabled={loading}
              className="w-full flex justify-center items-center text-gray-600 hover:text-green-600 mt-8"
            >
              <p className="mr-1">{loading?"Updating...":"Save Changes"}</p>
              <TiTick className="text-lg text-green-600" />
            </button>
          </form>
        </div>
      ) : (
        <>
          <p className="text-2xl md:text-3xl font-bold my-6">{user.name}</p>
          <div className="text-gray-700 text-sm md:text-base">
            <p className="my-3 flex">
              <span className="font-semibold">Email: </span>
              <p className="px-4 mx-2 border-b border-white">
                {user.email}
              </p>{" "}
            </p>
            <p className="my-3 flex">
              <span className="font-semibold">Contact: </span>
              <p className="px-4 mx-2 border-b border-white">
                {user.contact}
              </p>{" "}
            </p>
            <p className="my-3 flex">
              <span className="font-semibold">DOB: </span>
              <p className="px-4 mx-2 border-b border-white">{dayjs(user.dob).locale("en").format("D MMMM, YYYY")}</p>{" "}
            </p>
            <p className="my-3 flex">
              <span className="font-semibold">zipcode: </span>
              <p className="px-4 mx-2 border-b border-white">
                {user.pincode}
              </p>{" "}
            </p>
            <button
              onClick={() => {
                setEditProfile(true);
              }}
              className="w-full flex justify-center items-center text-gray-600 hover:text-blue-800 mt-8"
            >
              <p className="mr-2">Edit Profile</p>
              <AiOutlineEdit />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Userprofile;
