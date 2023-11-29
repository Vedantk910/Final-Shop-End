import React, {useState, useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';

import {FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "./Actions/Register";

const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [phone, setPhone] = useState(null);

    const {loading, error} = useSelector((state) => state.user)  
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value.toLowerCase());
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        await dispatch(registerUser(name,email,password, phone))
        navigate("/welcome")
    }
  
    const handlePassChange = (e) => {
      setPass(e.target.value);
    };

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch({type:"clearErrors"})
        }
    },[error, dispatch])


  return (
    <div className='mt-16'>
        <div className='w-full flex flex-col md:flex-row min-h-[80vh] items-center justify-center flex-1 text-center '>

        <div className='w-full hidden md:block md:w-1/2 bg-green-800 text-white px-12 py-36'>  {/* signup Section */}
            <h2 className='text-3xl text-white font-bold mb-2'>Hello, Store!</h2>
            <div className='border-4 w-10 border-white inline-block mb-2' />
            <div className=''>
                <p className='text-xl mb-3'>Expand your business horizon with Dhanda Paani</p>
                <p className='text-xl mb-6'>no-limit reach to your customers</p>
                <p className='mb-10'>Manage your inventory on the go, Join us now !</p>
            </div>
            <p>Already have an account?</p>
            <Link to='/login' className='border-2 mt-4 border-white font-semibold rounded-full px-12 py-2 inline-block hover:bg-white hover:text-green-800'>Login</Link>
        </div>

        <div className='w-full py-8 md:w-1/2'>
            <div className='items-center flex flex-col justify-center'>
                <h2 className='text-3xl font-bold text-green-700 mb-8'>Welcome!</h2>

                
                <p>Please fill out the details to signup</p>
                <div className='border-4 w-10 border-green-700 my-3 inline-block mb-2' />

                {/* Input Divs below */}
                <form onSubmit={handleSignup} className='flex flex-col items-center '>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <AiOutlineUser className='text-gray-400 m-2' />
                        <input type='text' name='Name' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className='bg-gray-100 outline-none text-sm flex-1' />
                        {/* using flex-1 above to expand full width */}
                    </div>
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
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <BsFillTelephoneFill className='text-gray-400 m-2' />
                        <input type='tel' maxlength={10} minlength={10} name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Contact" className='bg-gray-100 outline-none text-sm flex-1' />
                        {/* using flex-1 above to expand full width */}
                    </div>
                    <button type='submit' className='border-2 w-full mt-4 border-green-800 text-green-800 transition-all duration-500 font-semibold rounded-full px-12 py-2 inline-block hover:bg-green-800 hover:text-white hover:cursor-pointer'>{loading? "Loading.." : "Sign up"}</button>
                </form>
                    <button onClick={handleSignup} className='border w-64 border-[#003979] font-semibold mt-4 rounded-full px-8 py-2 text-black hover:shadow-lg flex items-center'>Continue with google <FcGoogle className='ml-2 text-xl'/></button>
            </div>
        </div>

        <div className='w-full block md:hidden md:w-1/2 bg-green-800 text-white px-12 py-36'>  {/* signup Section */}
            <h2 className='text-3xl text-white font-bold mb-2'>Hello, Store!</h2>
            <div className='border-4 w-10 border-white inline-block mb-2' />
            <div className=''>
                <p className='text-xl mb-3'>Expand your business horizon with Dhanda Paani</p>
                <p className='text-xl mb-6'>no-limit reach to your customers</p>
                <p className='mb-10'>Manage your inventory on the go, Join us now !</p>
            </div>
            <p>Already have an account?</p>
            <Link to='/login' className='border-2 mt-4 border-white font-semibold rounded-full px-12 py-2 inline-block hover:bg-white hover:text-green-800'>Login</Link>
        </div>

        </div>
    </div>
  )
}

export default Signup
