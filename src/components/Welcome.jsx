import React, {useEffect} from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import {BsArrowUpRight, BsShopWindow} from "react-icons/bs"

import { useSelector, useDispatch } from "react-redux";
import { userToBusiness } from '../Actions/Register';

import Loader from './Loader'

const Welcome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {loading, error} = useSelector((state) => state.user)  

  const convertToBusiness = async (e) => {
    e.preventDefault()
    await dispatch(userToBusiness())
    navigate("/list-shop")
  }

  useEffect(()=>{
    if(error){
        toast.error(error)
        dispatch({type:"clearErrors"})
    }
},[error, dispatch])

  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center justify-center'>
      <Link to="/" className='border w-[305px] flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-700 hover:scale-110 hover:bg-gray-100 text-xl p-12 rounded-md'>
        <p className='mb-3'>Continue to Shopify</p>
        <BsArrowUpRight />
      </Link>
      <p className='mx-8 my-4'>OR</p>
      <div onClick={convertToBusiness} className='border w-[305px] shadow-md hover:shadow-xl transition-all duration-700 hover:scale-110 hover:bg-gray-100 text-xl p-12 rounded-md '>
        {loading? <Loader /> : <div className='flex flex-col items-center justify-center'>
          <p className='mb-3'>List your shop/business</p>
          <BsShopWindow />
        </div>}
      </div>
    </div>
  )
}

export default Welcome
