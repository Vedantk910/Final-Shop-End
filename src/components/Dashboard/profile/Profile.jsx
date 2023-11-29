import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMerchantProfile } from '../../../Actions/Merchant'

import Storeprofile from './storeprofile/Storeprofile'
import Userprofile from './userprofile/Userprofile'

const Profile = () => {
  const dispatch = useDispatch()
  const params=useParams();
  
  const {merchant}=useSelector(state=>state.merchant)
  const {shop} = useSelector(state => state.shop)
  //console.log(params.id);
  useEffect  (()=>{
    dispatch(getMerchantProfile())
},[])
      

  return (
    <div>
        {<div className='p-3 grid grid-cols-1 mt-4 md:mt-8 md:grid-cols-6 gap-6'>
        <div className='col-span-1 md:col-span-2 border shadow-xl rounded-md min-h-[80vh]'>
         {merchant && <Userprofile merchant={merchant}/>}
        </div>
        <div className='col-span-1 md:col-span-4 border shadow-xl rounded-md min-h-[80vh]'>
        {shop && <Storeprofile shop={shop} shopId={shop._id}/>}
        </div>
      </div>
      }
    </div>
  )
}

export default Profile