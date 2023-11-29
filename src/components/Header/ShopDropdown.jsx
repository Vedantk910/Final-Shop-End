import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allProductsOfShop, getShopDetails, myShops } from '../../Actions/Shop';

import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import {BsPlusCircle} from "react-icons/bs"
import { Link, useLocation } from 'react-router-dom';
import Loader from '../Loader';

const ShopDropdown = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const {shops, loading} = useSelector(state => state.shop)
    const {isAuthenticated} = useSelector(state => state.user)
    console.log(shops)

    const [ shop, setShop] = useState(null);
    // console.log(shop)
    const [ openShopBar, setOpenShopBar] = useState(false);

    const clickHandler = (item) => {
        setShop(item)
        console.log(item)
        setOpenShopBar(!openShopBar);
        dispatch(allProductsOfShop(item._id))
        dispatch(getShopDetails(item._id))
    }

    useEffect(()=>{
        dispatch(myShops())
    },[])

    useEffect(()=>{
        if(shop){
            setShop(shops)
        }
    },[shops])
    
    useEffect(()=>{
        if(shops){
            setShop(shops[0])
        }
        shops && shops[0] && dispatch(allProductsOfShop(shops[0]._id))
        if(shop)
          return
        shops && shops[0] && dispatch(getShopDetails(shops[0]._id))
    },[shops])

  return (loading ? <p>loading shops...</p> :
    <div className={`text-lg w-full relative ${location.pathname==="/dashboard/inventory" && isAuthenticated?"block" : 'hidden' } `}>
        { <div onClick={()=>setOpenShopBar(!openShopBar)} className="hover:cursor-pointer flex items-center">
            {shops && shop? shop.shopname : 'No shop found'}
            {openShopBar ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>}
        { <div className="bg-white w-full absolute right-4 shadow-lg top-8 rounded-lg">
                {openShopBar && shops && shops.map((item)=>(
                    <div 
                        key={item._id}
                        onClick={()=>clickHandler(item)} 
                        className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"
                    > 
                        {item.shopname}
                </div>))}
                {openShopBar && <Link
                    to="/list-shop"
                    className="flex px-3 py-1 text-gray-600 items-center hover:text-black hover:bg-gray-100 hover:cursor-pointer"
                > 
                    Add Shop <BsPlusCircle className='ml-2' />
                </Link>}
            </div>
        }
    </div>
  )
}

export default ShopDropdown