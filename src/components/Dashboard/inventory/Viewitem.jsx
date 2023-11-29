import React, { useEffect } from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { showProductDetail } from '../../../Actions/Shop';
import Loader from '../../Loader';
const Viewitem = () => {

  //if(!showModal) return null;
  const dispatch = useDispatch()
  const params=useParams();
  const {product,loading,error}=useSelector(state=>state.product)
  console.log(product);
    useEffect (()=>{
        dispatch(showProductDetail(params.id))
        
        // setShowModal1(false)
    },[])
  return (
    
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      {loading? <Loader/>:<div className="bg-white shadow-lg p-8 z-50">
        <Link to={`/dashboard/inventory`} className='w-full flex justify-end item-right'><AiOutlineCloseCircle className='text-2xl right-0'/></Link>

        {product && <div className='mt-3 flex flex-col '>
          <img src={product.image.url} alt={product.name} className="h-[10rem] object-cover" />
          <p className='my-1'><b>Name:</b>  {product.name}</p>
          <p className='my-1'><b>Type:</b>  {product.category}</p>
          <p className='my-1'><b>Price:</b>  {product.price}</p>
          <p className='my-1'><b>Sold:</b> {product.sold}</p>
          <p className='my-1'><b>In inventory:</b> {product.stock}</p>
          <p className='mt-2'><b>Item description:</b> {product.description}</p>
        </div>
      }
        
      </div>
      }
    </div>
  )
  
}

export default Viewitem