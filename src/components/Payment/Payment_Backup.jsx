import React,{useEffect, useState} from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_rgWMA3zxjAtwaB6iV8b5W40x"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Payment = () => {

    const handlePayment = () => {
        console.log("Making payment")
    }

    return (
        <div className='mt-16 min-h-[90vh] flex flex-col items-center justify-center'>
            <p>Hello I am payment</p>
            <button
                onClick={handlePayment}
                className='border-2 mb-12 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'
            >
                Pay me
            </button>
            <Elements stripe={stripeTestPromise}>
			    <PaymentForm />
		    </Elements>
        </div>
    )
}

export default Payment