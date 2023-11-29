import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { showAllLocalShops, showAllShops } from '../Actions/Shop';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Loader from './Loader';
import {location} from "../App"

const Home = () => {
  console.log("Location form home", location)


  const dispatch = useDispatch();
  const [dist, setDist] = useState(-1)
  const { allShops, loading, error } = useSelector(state => state.shop);

  useEffect(()=>{
    if(dist && location){
      console.log("Dist", dist)
      dispatch(showAllLocalShops(location, dist))
    }
  },[dist])

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch({
      type: "clearErrors"
    })
  }, [error, dispatch])
  return (
    <div className='mt-20 ml-8 relative'>
      <div className='flex static top-20 flex-wrap gap-4'>
        <p onClick={()=>setDist(-1)} className={`border rounded-lg ${dist==-1? "bg-blue-300": ""} border-blue-700 hover:bg-blue-300 hover:cursor-pointer transition-all duration-200 shadow-md px-3 py-1`}>
          All shops
        </p>
        <p onClick={()=>setDist(1)} className={`border rounded-lg ${dist==1? "bg-blue-300": ""} border-blue-700 hover:bg-blue-300 hover:cursor-pointer transition-all duration-200 shadow-md px-3 py-1`}>
          1 Km
        </p>
        <p onClick={()=>setDist(2)} className={`border rounded-lg ${dist==2? "bg-blue-300": ""} border-blue-700 hover:bg-blue-300 hover:cursor-pointer transition-all duration-200 shadow-md px-3 py-1`}>
          2 Km
        </p>
        <p onClick={()=>setDist(3)} className={`border rounded-lg ${dist==3? "bg-blue-300": ""} border-blue-700 hover:bg-blue-300 hover:cursor-pointer transition-all duration-200 shadow-md px-3 py-1`}>
          3 Km
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-center min-h-screen'>

        {/* {loading && <Loader></Loader>} */}
        {allShops && allShops.map((shop) => (
          <Link
            className='relative shadow-lg rounded-md h-[348px] w-[282px] m-6 hover:cursor-pointer'
            // onClick={() => { setShowModal(true); setMovie(shop) }}
            to={`/shop/products/${shop._id}`}
            key={shop._id}
          >
            <div className='absolute top-2 left-2'>
              {shop.rating != 0 &&
                <>
                  <AiFillStar />
                  {shop.rating}
                </>
              }
            </div>
            <img
              src={shop.shopimage.url}
              alt={shop.shopname}
              className='rounded-md h-[348px] w-[282px] object-cover'
            />
            <div className={`absolute bottom-0 bg-white w-full px-1 text-center py-2 rounded-b-md`}>
              <p className="text-xl">{shop.shopname}</p>
              <p>{shop.description}</p>
            </div>
          </Link>
        ))}

        {allShops && allShops.length === 0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>No shops found..</p>}

      </div>
    </div>
  )
}

export default Home