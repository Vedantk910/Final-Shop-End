import React, { useEffect,useState } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { allProductsOfShop, editProductDetail, showProductDetail } from '../../../Actions/Shop';
import Loader from '../../Loader';

const Edititem = () => {
  const { loading, error, product} = useSelector((state) => state.product);
  const [image, setImage] = useState(null)

  const params=useParams();
  const navigate=useNavigate();
  useEffect (()=>{
    dispatch(showProductDetail(params.id))
    setProduct(product)
  },[])

  useEffect (()=>{
    setProduct(product)
  },[product])

const [newProduct,setProduct]=useState(null);
  const dispatch = useDispatch();
  
const handleImageChange = (value) => {
  const file = value;

  const Reader = new FileReader();
  Reader.readAsDataURL(file);

  Reader.onload = () => {
    if (Reader.readyState === 2) {
      // setPrevImage(Reader.result);
      setImage(Reader.result);
      // setProduct({...newProduct,image:Reader.result});
    }
  };
};
const handleChange = (e) => {
  const { name, value, files } = e.target;

  if(name==="image"){
    handleImageChange(files[0]); 
  }else{
    setProduct({ ...newProduct, [name]: value });
  }  
}
const submitHandler = async (e) => {
  e.preventDefault();
  await dispatch(editProductDetail(params.id,newProduct.name,newProduct.category,newProduct.price,newProduct.sold,newProduct.stock,newProduct.description,image));
  await dispatch(allProductsOfShop(product.shop))
  navigate(`/dashboard/inventory`)
  
};
  return (
    <div className=' inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      {loading? <Loader/>:<div className='p-8 mt-20 bg-white shadow-lg '>
      <Link to={`/dashboard/inventory`} className='w-full flex justify-end item-right relative'><AiOutlineCloseCircle className='text-2xl right-0 absolute'/></Link>
      <button className='w-full text-right relative'></button>

        {product && newProduct && <form onSubmit={submitHandler} className='flex flex-col justify-center items-center mt-4'>
            {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> */}
                <img className='h-[13rem] w-[13rem] mb-4 object-cover rounded-full' src={image || newProduct.image.url} alt="item" />
                <p className='my-2 font-bold'>Edit Image: </p>
                <input type='file' name='image' accept='image/*' className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>

                <p className='mt-2 w-full text-left font-bold'>Name: </p>
                <input type='text' name='name' value={newProduct.name} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
            {/* </div> */}
                <p className='mt-2 w-full text-left font-bold'>Category: </p>
                <input type='text' name='type' value={newProduct.category} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <p className='mt-2 w-full text-left font-bold'>Price: </p>
                <input type='number' name='price' value={newProduct.price} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <p className='mt-2 w-full text-left font-bold'>Sold: </p>
                <input type='number' name='sold' value={newProduct.sold} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange} />
                <p className='mt-2 w-full text-left font-bold'>In stock: </p>
                <input type='number' name='stock' value={newProduct.stock} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <p className='mt-2 w-full text-left font-bold'>Description: </p>
                <textarea type='text' name='description' rows={3}  value={newProduct.description} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <button type="submit" disabled={loading} className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>{loading?"Loading...":"Update details"}</button>

        </form>}          
      </div>
      }
    </div>
  )
}

export default Edititem