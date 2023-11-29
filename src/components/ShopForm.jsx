import React from 'react'
import { IoIosArrowBack } from "react-icons/io"
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addShop } from '../Actions/Merchant'
import { myShops } from '../Actions/Shop'
import { Link } from 'react-router-dom';

const ShopForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading, message } = useSelector(state => state.shop)

  const [name, setName] = useState("")
  const [image, setImage] = useState(null)
  const [gstin, setGstin] = useState(null)
  const [description, setDescription] = useState(null)
  const [category, setCategory] = useState(null)
  const [state, setState] = useState(null)
  const [city, setCity] = useState(null)
  const [pincode, setPincode] = useState(null)
  const [newLatitude, setLatitude] = useState(null)
  const [newLongitude, setLongitude] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    //   let newLatitude = null
    //   let newLongitude = null
    //   navigator.geolocation.watchPosition(position => {
    //     const{ latitude, longitude } = position.coords;

    //     newLatitude = latitude
    //     newLongitude = longitude
    //     console.log(latitude)
    //     console.log(longitude)

    //     });

    console.log(newLatitude, newLongitude, name);

    await dispatch(addShop(name, description, category, gstin, state, city, pincode, image, newLatitude, newLongitude))
    await dispatch(myShops())
    navigate("/dashboard/inventory")
    // navigate("/dashboard/profile")
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    const Reader = new FileReader();
    Reader.readAsDataURL(file)

    //readyState = 0 => initialState
    //readyState = 1 => processing
    //readyState = 2 => Processed
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    }
  }

  useEffect(() => {
    if (message) {
      toast.success(message)
    }
  }, [message])

  useEffect(() => {
    navigator.geolocation.watchPosition(position => {
      const { latitude, longitude } = position.coords;
      console.log(latitude)
      console.log(longitude)
      setLatitude(latitude)
      setLongitude(longitude)
    });

  }, [])


  return (
    <>
      <Link to={`/dashboard/inventory`} className="flex items-center w-[5rem] mt-20 border border-gray-500 py-1 px-2 hover:text-white text-gray-700 hover:bg-gray-500 ml-3 md:ml-8 rounded-lg"><IoIosArrowBack /> Back</Link>
      <div className='flex items-center min-h-screen justify-center'>
        <form onSubmit={handleSubmit} className=''>
          <p className='text-xl'>Enter shop details</p>

          <img className='h-[13rem] w-[13rem] mb-4 object-cover rounded-full' src={image || "/shopImage.jpg"} alt="post" />
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

          <input type='text' name='type' required={true} value={name} onChange={(e) => setName(e.target.value)} placeholder="Shop name" className='bg-gray-100 mt-6 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
          <input type='text' name='price' required={true} value={gstin} onChange={(e) => setGstin(e.target.value)} placeholder="GSTIN" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
          <input type='text' name='description' required={true} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
          <input type='text' name='category' required={true} value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
          <input type='text' name='state' required={true} value={state} onChange={(e) => setState(e.target.value)} placeholder="State" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
          <input type='text' name='city' required={true} value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
          <input type='text' name='pin code' required={true} value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pin code" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />

          <button type='submit' disabled={loading} className='border-2 mb-12 w-full border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>{loading ? "Loading..." : "Add Shop"}</button>

        </form>
      </div>
    </>
  )
}

export default ShopForm