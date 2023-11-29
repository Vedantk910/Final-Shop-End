import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { allProductsOfShop, deleteProduct, myShops } from '../../../Actions/Shop'

const ConfirmDelete = ({setShowModal3,showModal,product}) => {

    const dispatch = useDispatch()

    const deleteTheProduct =async  () => {
        dispatch(deleteProduct(product._id))
        dispatch(allProductsOfShop(product.shop))
        setShowModal3(false)
    }

  return (
    product && showModal && <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      <div className="bg-white shadow-lg p-8 z-50">
        <button className='w-full text-right relative' onClick={()=>{setShowModal3(false)}}><AiOutlineCloseCircle className='text-2xl right-0 absolute'/></button>

        <div className='mt-3 flex flex-col '>
          <img src={product.image.url} alt={`${product.name}`} className="h-[10rem] md:h-[20rem] object-cover" />
          <p className='my-1'><b>Name:</b>  {product.name}</p>
          <p className='my-1'><b>Description:</b>  {product.description}</p>
          <p className='my-1'><b>In Inventory:</b>  {product.stock}</p>
          <p className='mt-12'>Are you sure you want to remove this product from inventory?</p>
        </div>
        <div className='flex justify-center items-center gap-8'>
            <button onClick={()=>{setShowModal3(false)}} className="bg-red-600 w-[5rem] text-white px-2 py-1 rounded-lg mt-4 hover:bg-red-800">Cancel</button>
            <button onClick={deleteTheProduct} className="bg-green-600 w-[5rem] text-white px-2 py-1 rounded-lg mt-4 hover:bg-green-800">Yes</button>
        </div>
      </div>
      

    </div>
  )
}

export default ConfirmDelete