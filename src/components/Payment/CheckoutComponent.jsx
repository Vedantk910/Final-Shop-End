import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import "./cardsection.css"

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "blue",
        fontSize: "16px",
        fontFamily: "sans-serif",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "#CFD7DF",
        },
      },
      invalid: {
        color: "red",
        ":focus": {
          color: "red",
        },
      },
    },
  };

const CheckoutComponent = (props) => {

    const handleSubmit =async (event)=>{
        event.preventDefault()
        console.log(event)
        const {stripe, elemets} = props
        if(!stripe || !elemets) return;
        console.log("Stripe and elements found")
        const card = elemets.getElementById(CardElement)
        const result =await stripe.createToken(card)
        if(result.error){
            console.log("Result error", result.error.message)
        }
        else{
            console.log("Result token",result.token)
        }

    }

    return(
        <form
            onSubmit={handleSubmit}
        >
            <p>Enter card details</p>
            <p></p>
            <label>
                <div className="cardTitle">Fill the card details</div>
                <CardElement options={CARD_ELEMENT_OPTIONS} />
            </label>
            <button
                type="submit"
                // disabled={!props.stripe}
                className='border-2 mb-12 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'
            >
                Make payment
            </button>
        </form>
    )
}

// export default CheckoutComponent

export default function InjectCheckout(){
    return <ElementsConsumer>
        {
            ({stripe, elemets})=>(
                <CheckoutComponent stripe={stripe} elemets={elemets}/>
            )
        }
    </ElementsConsumer>
}