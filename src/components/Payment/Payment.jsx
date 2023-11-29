import React from "react"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import InjectCheckout from "./CheckoutComponent";
import "./cardsection.css"

const stripePromise = loadStripe(String(process.env.REACT_APP_STRIPE_PUBLIC_KEY));
const Payment = () => {
    console.log("stripePromise",stripePromise)

    return (
        <div className="mt-16">
            <p>Mellow</p>
            <Elements
                stripe={stripePromise}
            >
                <InjectCheckout />
            </Elements>
        </div>
    )
}

export default Payment