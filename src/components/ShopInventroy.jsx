import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { allProductsOfShop } from '../Actions/Shop';
import { addToCart } from '../Actions/User';
import Loader from './Loader';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const Home = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { products, loading, error } = useSelector(state => state.product);


    useEffect(() => {
        // dispatch(allProductsOfShop(params.id))
        if (error) {
            toast.error(error);
        }
        dispatch({
            type: "clearErrors"
        })

    }, [error])


    useEffect(() => {
        dispatch(allProductsOfShop(params.id))
    }, [])

    return (
        <div className='m-12 mt-24'>
            <button className="border rounded flex row items-center py-2 px-4 gap-2" onClick={() => { window.location.href = "/" }}>
                <AiOutlineArrowLeft />
                Go back
            </button>
            <div className='flex gap-2'>
                {products && products.map((item) => (
                    <ItemCards key={item.name} {...item} />
                ))}

                {products && products.length === 0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>no items in the shop</p>}

            </div>
        </div>
    )
}

export default Home

const ItemCards = (item) => {
    const { cart, message } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    console.log("Cart Message", message)
    console.log("The cart", cart)

    const handleAddtoCard = async () => {
        await dispatch(addToCart(item._id, 1))
        await navigate("/cart")
    }

    return (
        <div
            className='p-4 relative max-w-xs w-full shadow-xl hover:cursor-pointer mb-4'
            to={`/shop/${item._id}`}
            key={item._id}
        >
            {item.stock > 0 ? <div className="border rela top-2 left-2 w-fit mt-4 rounded-full bg-green-500">
                <p className="p-2 text-center">In Stock</p>
            </div> : <div className="border rounded-full bg-red-500">
                <p className="p-2 text-center">Out of Stock</p>
            </div>}
            <img src={item.image.url} alt={item.shopname} className="h-[200px] w-[200px] object-cover m-auto" />
            <p className="text-center mt-4 font-bold text-green-500">Rs {item.price} /-</p>
            <p className="text-center mt-2 font-bold">{item.name}</p>
            <p className='text-center mt-2 text-gray-400'>{item.description}</p>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            {item.stock ?
                <div>
                    <button className="w-full bg-green-500 p-2" onClick={handleAddtoCard}>Add to Cart</button>
                </div> : <div className="text-red-500 p-2">Out of Stock</div>}
        </div>
    )
}