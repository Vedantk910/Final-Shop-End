import { useEffect, useState } from 'react';
import {AiOutlineEye} from 'react-icons/ai';
import {BsPencil, BsTrash, BsPlusCircle} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConfirmDelete from './ConfirmDelete';
import Edititem from './Edititem';

import Viewitem from './Viewitem';

const List = ({items, setItems, type, setType, setState}) => {

  const dispatch = useDispatch()

  const {products, message, error} = useSelector(state => state.product)
  const {shop} = useSelector(state => state.shop)
  console.log(products)

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  //console.log(showModal3)
  const [theItem, setTheItem] = useState("");
  const [oneproduct, setOneProduct] = useState(null);
  // useEffect(()=>{
  //   dispatch(getShopDetails(params.id))
  // },[])

  useEffect(()=>{
  },[products])

  useEffect(()=>{

    if(message){
      toast.success(message)
    }

    if(error){
      toast.error(error)
    }

    dispatch({
      type:"clearErrors"
    })

  },[message, error])

  return (
    <div className="md:px-4 md:pb-12 md:pt-4 min-h-[80vh] ">
      <div className="p-2 md:p-5 my-6 shadow-xl bg-gray-100">
        <div className='flex flex-wrap mb-4 justify-between items-center'>
          {/* <h1 className="md:text-xl">Your inventory</h1> */}

          {shop && <Link to={`/dashboard/inventory/add/${shop._id}`} className='border bg-gray-200 text-gray-800 font-semibold px-2 md:px-12 py-2 flex items-center hover:bg-gray-500 hover:text-white hover:cursor-pointer'><BsPlusCircle className='mr-3' />Add Item</Link>}

          {/* <div>
            <select
             className='py-2 px-1'
             value={type}
             onChange={(e)=>setType(e.target.value)}
            >
              <option value="st">Select type:</option>
              <option value="All">All</option>
              <option value="Assault rifle">Assault rifle</option>
              <option value="SMG">SMG</option>
              <option value="Sniper Rifle">Sniper Rifle</option>
              <option value="Melee">Melee</option>
              <option value="Throwable">Throwable</option>
            </select>
          </div> */}
        </div>

        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Sr no.
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Image
                </th>
                <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Type
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  In Inventory
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Sold
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Price (in ₹)
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>

            

            {/* {items.map((item,i) => ( (type === item.type || type ==="All" || type==="st") && */}
            {products && products.map((product,i) => (
              <tbody key={product._id} className="divide-y divide-gray-100 ">
                <tr className="bg-white justify-center">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img src={product.image.url} alt={product.name} className="h-[6rem] object-cover rounded-full" />
                  </td>
                  <td className="p-3 text-md font-semibold text-gray-700 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.category}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span
                      className={`p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200
                        ${product.stock < 10 && "text-green-800 bg-red-300"}
                        ${product.stock > 20 && "text-green-800 bg-green-200"}
                         rounded-lg bg-opacity-50`}
                    >
                      {product.stock}
                    </span>
                    
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.sold}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {product.price}
                  </td>
                  <td className="p-3 text-sm flex mt-9 items-center text-gray-700 whitespace-nowrap">
                        <Link to={`/dashboard/inventory/view/${product._id}`} className="hover:cursor-pointer">
                            <AiOutlineEye className="h-4 mt-1 text-blue-600"/>
                        </Link>
                        <Link to={`/dashboard/inventory/update/${product._id}`} className="hover:cursor-pointer mx-6">
                            <BsPencil className="h-4 mt-1 text-blue-400" />
                        </Link>
                        <div onClick={()=>{setShowModal3(true);setOneProduct(product)}} className="hover:cursor-pointer">
                            <BsTrash className="h-4 mt-1 text-red-600"/>
                        </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          {/* {buisnessDetails.jobsAdded.length===0?<div className="text-center my-4">You have not yet posted any Job</div>:<></>} */}
        </div>

        <div className="flex flex-col w-full md:hidden">
          {products && products.map((product)=> (
            <div key={product._id} className="bg-white space-y-3 p-4 my-2 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <img src={product.image.url} alt={product.name} className="h-[4rem] object-cover sm:h-[6rem] rounded-full" />
                <div className="flex flex-col text-left w-[60%] text-sm">
                    <div className="text-sm text-left font-medium text-black">
                    {products.name}
                    </div>
                    <div className="text-gray-500 text-left ">
                    {"Item type: "}{product.category}
                    </div>
                    <div className="text-gray-500 text-left ">
                    {"Total sold: "}{product.sold}
                    </div>
                </div>
              </div>
              <div className="flex h-7 justify-between items-center">
                <span
                  className={`p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200 
                  ${product.stock < 10 &&"text-green-800 bg-red-100"}
                  ${product.stock > 20 && "text-green-800 bg-green-200"}
                  rounded-lg bg-opacity-50`}
                >
                  {"In inventory: "}{product.stock}
                </span>
                <div className="p-3 text-sm flex justify-between text-gray-700 whitespace-nowrap">
                    <div className="hover:cursor-pointer">
                        <AiOutlineEye className="h-4 mt-1 text-blue-600"/>
                    </div>
                    <div className="hover:cursor-pointer  mx-4">
                        <BsPencil className="h-4 mt-1 text-blue-400" />
                    </div>
                    <div onClick={()=>{setShowModal3(true);setOneProduct(product)}} className="hover:cursor-pointer">
                        <BsTrash className="h-4 mt-1 text-red-600"/>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Viewitem showModal={showModal1} setShowModal={setShowModal1} item={theItem} />
      <Edititem showModal={showModal2} setShowModal={setShowModal2} item={theItem} /> */}
      <ConfirmDelete showModal={showModal3} setShowModal3={setShowModal3} product={oneproduct} />
    </div>
  )
}

export default List