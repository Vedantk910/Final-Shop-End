import React,{useEffect, useState} from 'react'
import {IoIosArrowBack} from "react-icons/io"
import cube from "./cube.png"
import Loader from '../../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addProduct, allProductsOfShop, getShopDetails} from '../../../Actions/Shop';
import { useNavigate, useParams } from 'react-router-dom';

const AddItem = () => {
    const {loading, error} = useSelector((state) => state.product);

    const params=useParams();
    const navigate=useNavigate();
    const dispatch = useDispatch()

    const [image, setImage] = useState(null)

    useEffect(()=>{
      if(params.id){
      dispatch(getShopDetails(params.id))
      }
  },[])


  const oldItem={
    name:null,
    category:null,
    price:null,
    sold:null,
    stock:null,
    description:null,
    image:null
  }
  const [newItem, setNewitem]=useState(oldItem);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewitem({ ...newItem, [name]: value });
    
  }
    const handleImageChange = (e) => {
        const file = e.target.files[0]

        const Reader = new FileReader();
        Reader.readAsDataURL(file)

        //readyState = 0 => initialState
        //readyState = 1 => processing
        //readyState = 2 => Processed
        Reader.onload = () => {
            if(Reader.readyState === 2) {
                setImage(Reader.result);
            }
        }
    }
    
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addProduct(params.id,newItem.name,newItem.category,newItem.price,newItem.sold,newItem.stock,newItem.description,image));
        await dispatch(allProductsOfShop(params.id))
        navigate(`/dashboard/inventory`)
    };

  return (
    <div className='mt-20'>
        <Link to={'/dashboard/inventory'} className="flex items-center w-[5rem] mt-20 border border-gray-500 py-1 px-2 hover:text-white text-gray-700 hover:bg-gray-500 ml-3 md:ml-8 rounded-lg"><IoIosArrowBack/> Back</Link>

        {<form onSubmit={submitHandler} className='flex flex-col justify-center items-center my-8'>
                <img className='h-[13rem] w-[13rem] mb-4 object-cover rounded-full' src={image || cube} alt="post" />
                <p className='my-2'>Upload Image: </p>
                <input 
                    type='file' 
                    name='image'  
                    placeholder="Item image" 
                    accept='image/*' 
                    required={true}
                    onChange={handleImageChange}
                    className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' 
                />
                <input type='text' name='name' required={true} value={newItem.name} onChange={handleChange}  placeholder="Item name" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            {/* </div> */}
                <input type='text' name='category' required={true} value={newItem.category} onChange={handleChange}  placeholder="Item categry" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='price' required={true} value={newItem.price} onChange={handleChange}  placeholder="Item price in ₹" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='stock' required={true} value={newItem.stock} onChange={handleChange}  placeholder="Total in inventory" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='sold' required={true} value={newItem.sold} onChange={handleChange}  placeholder="total sold" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <textarea type='text' name='description' required={true} value={newItem.description} onChange={handleChange} rows={3}  placeholder="Item description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                
                <button type="submit" disabled={loading} className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>{loading? "Loading..." : "Add item"}</button>

        </form> }           
    </div>
  )
}

export default AddItem