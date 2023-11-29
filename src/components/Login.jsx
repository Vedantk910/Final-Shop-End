import React,{useState, useEffect} from 'react'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from '../Actions/Register';
import { LoginUser } from '../Actions/Login';
import { myShops } from '../Actions/Shop';

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const {loading, error , user, merchant} = useSelector(state => state.user)

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    await dispatch(LoginUser(email,password))
  }

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  useEffect(()=>{

    dispatch(LoadUser())

    if(merchant){
      navigate("/dashboard")
      dispatch(myShops())
      toast.success("Login successful!");
    }else if(user){
      navigate("/")
      toast.success("Login successful!");
    }

    if(user || merchant) return;

    if(error){
      toast.error(error)
    }

    dispatch({
      type:"clearErrors"
    })

  },[user, merchant, error])

  return (
    <>
    <div className="mt-16  bg-white">
      <div className='w-full flex flex-col md:flex-row min-h-[80vh] items-center justify-center flex-1 text-center '>

      <div className='w-full py-8 md:w-3/5'>
            <div className='items-center flex flex-col justify-center'>
                <h2 className='text-3xl font-bold text-green-700 mb-8'>Sign in to account</h2>
                {/* <p className='text-xl mb-3'>
                  Signin as 
                  <button onClick={()=>{setLoginAs("customer")}} className={`${LoginAs==="customer"? "border-b-2 border-green-700 font-semibold" : ""} ml-2`}>Customer</button> / 
                  <button onClick={()=>{setLoginAs("business")}} className={`${LoginAs==="business"? "border-b-2 border-green-700 font-semibold" : ""} ml-2`}>Business</button>
                </p> */}
                <button onClick={handleLogin} className='border border-[#003979] font-semibold rounded-lg mb-8 px-12 py-2 text-black hover:shadow-lg flex items-center'>Continue with google <FcGoogle className='ml-2 text-xl'/></button>
                <div className='border-4 w-10 border-green-700 inline-block mb-2' />

                {/* Input Divs below */}
                <form onSubmit={handleLogin} className='flex flex-col items-center '>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <FaRegEnvelope className='text-gray-400 m-2' />
                        <input type='email' name='email' value={email} onChange={handleEmailChange} placeholder="Email" className='bg-gray-100 outline-none text-sm flex-1' />
                        {/* using flex-1 above to expand full width */}
                    </div>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <MdLockOutline className='text-gray-400 m-2' />
                        <input type='password' name='password' value={password} onChange={handlePassChange} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
                        {/* using flex-1 above to expand full width */}
                    </div>
                    <div className='flex justify-between w-64 mb-5'>
                        <div className='text-xs hover:cursor-pointer'>Forgot Password?</div>
                    </div>
                    <button type="submit" className='border-2 border-green-800 text-green-800 font-semibold rounded-full px-12 py-2 inline-block hover:bg-green-800 hover:text-white hover:cursor-pointer'>{loading? "Loading.." : "Login"}</button>
                </form>
            </div>
      </div>

        <div className='w-full md:w-2/5 bg-green-800 text-white px-12 py-36'>  {/* signup Section */}
            <h2 className='text-3xl text-white font-bold mb-2'>Hello, Store!</h2>
            <div className='border-4 w-10 border-white inline-block mb-2' />
            <div className=''>
              <p className='text-xl mb-3'>Expand your business horizon with Dhanda Paani</p>
              <p className='text-xl mb-6'>no-limit reach to your customers</p>
              <p className='mb-10'>Manage your inventory on the go, Join us now !</p>
            </div>
            <Link to='/signup' className='border-2 border-white font-semibold rounded-full px-12 py-2 inline-block hover:bg-white hover:text-green-800'>Signup</Link>
        </div>

      </div>
    </div>
    <ToastContainer /> 
    </>
  )
}

export default Login
