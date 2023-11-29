import React, { useEffect, useState } from 'react'
import {MdLockOutline} from 'react-icons/md'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeMerchantPassword } from '../../../../Actions/Merchant';
//import { changeUserPassword } from '../../../../Actions/User';

const Security = () => {
  const dispatch=useDispatch();
  const[pass, setPass]=useState("");
  const[newpass, setNewpass]=useState("");
  const[confirmpass, setConfirmpass]=useState("");

  const{loading,message,error}=useSelector(state=>state.merchant);

  const[view, setView] = useState(false);
  const[viewnew, setViewnew] = useState(false);
  const[viewconf, setViewconf] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeMerchantPassword(pass,newpass,confirmpass));
    //dispatch(changeUserPassword(pass,newpass,confirmpass));
  }


  useEffect(()=>{
    if(error){
      toast.error(error)
    }
    if(message){
      toast.success(message)
    }
    dispatch({
      type:"clearErrors"
  })
  },[error,message])
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center min-h-[70vh]'>

      <p className='text-left w-[256px]'>Current password</p>
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
        <MdLockOutline className='text-gray-400 m-2' />
        <input type={`${view? "text":"password"}`} value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
        <button onClick={(e)=>{e.preventDefault(); setView(!view)}}>
          {!view?<AiOutlineEyeInvisible className='text-gray-400 m-2' /> :
            <AiOutlineEye className='text-gray-400 m-2' />
          }
        </button>
      </div>


      <p className='text-left w-[256px] mt-3 mb-1'>New password</p>
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
        <MdLockOutline className='text-gray-400 m-2' />
        <input type={`${viewnew? "text":"password"}`} value={newpass} onChange={(e)=>setNewpass(e.target.value)} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
        <button onClick={(e)=>{e.preventDefault(); setViewnew(!viewnew)}}>
          {!viewnew?<AiOutlineEyeInvisible className='text-gray-400 m-2' /> :
            <AiOutlineEye className='text-gray-400 m-2' />
          }
        </button>
      </div>


      <p className='text-left w-[256px] mt-3 mb-1'>Confirm password</p>
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
        <MdLockOutline className='text-gray-400 m-2' />
        <input type={`${viewconf? "text":"password"}`} value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
        <button onClick={(e)=>{e.preventDefault(); setViewconf(!viewconf)}}>
          {!viewconf?<AiOutlineEyeInvisible className='text-gray-400 m-2' /> :
            <AiOutlineEye className='text-gray-400 m-2' />
          }
        </button>
      </div>
       <button type="submit" disabled={loading} className="border py-2 px-4 border-gray-700 hover:text-white mt-8 hover:bg-gray-700 text-gray-700 rounded-md">{loading?"Loading...":"Submit"}</button>

      <ToastContainer /> 
    </form>
  )
}

export default Security
