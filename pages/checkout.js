

import React, { useState } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import Stripe from "stripe"
import { useRouter } from 'next/router';
import { useNotification } from "../notifications/NotificationContext";


export default function  CheckoutPage({paymentIntent, amount}) {
    const router = useRouter()
    // stripe business logic
    const stripe = useStripe();
    const elements = useElements();

    const [isLoading, setIsLoading]  = useState(false);
    const [isFormFisabled, setIsFormFisabled] = useState(true)
    const [name , setname] = useState("");
    const dispatch = useNotification()


    const handleInputChange = async (e) => {
        if(e == true || !stripe || !elements){
            setIsFormFisabled(true)
        }else{
            setIsFormFisabled(false)
        }
    }



    const handleNameChange = (e) => {
        setname(e)
    }




    // handle the payment processing
    const handleCardAdded = async(event) => {
        event.preventDefault();
        setIsLoading(true)
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
        stripe.confirmCardPayment(paymentIntent.client_secret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: name,
                },
            }
        }).then(() => {
            setIsLoading(false)
            dispatch({
                payload : {
                    type: "SUCCESS",
                    title: "Paiement",
                    message:"Votre participation à la cagnotte a été enregistré, merci beaucoup"
                }
            })
            setTimeout(() => {
                router.push("/")
            },  3000)
        }).catch((err)=> {
            setIsLoading(false)
            dispatch({
                payload : {
                    type: "ERROR",
                    title: "Paiement",
                    message:"Une erreur s'est produite lors du paiement, Veuillez reesayer." + " " + err.message
                }
            })
        })
        
    }

    return (
        <div className="flew flex-wrap">
            <div className="flex items-start justify-center min-h-screen  px-4  text-center sm:block sm:p-4">



    <form className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6 px-4 items-center">
        <div className="flex flex-col relative p-4 space-y-3">

            <div className="flex flex-col items-center justify-center p-2 space-y-3 px-14">
                <div className="text-2xl font-montserrat font-semibold top-0 sticky">Participer à la cagnotte</div>
                <div className="pt-5">
                    <CardElement onChange={(e) => handleInputChange(e.empty)} className="w-96 text-lg font-montserrat border bg-gray-200 h-10 items-center p-2" style={{base: {fontSize: '18px'}}} onReady={(el) => el.focus()}/>
                </div>
                <input onChange={((e) => {handleNameChange(e.target.value)})} placeholder="Nom complet"  className="w-96 text-lg font-montserrat border bg-gray-200 h-10 items-center p-2 px-4"></input>

                <div className="flex flex-row pt-10 justify-start w-full">
                    <button onClick={handleCardAdded} disabled={ !name.length || isFormFisabled}
                        type="submit"
                        className="transition ease-out duration-700   flex w-96  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium disabled:opacity-40"
                    >
                        {
                            isLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg> : null
                        }
                        <div className="font-montserrat text-sm text-white">Payer {amount} €</div>

                    </button>
                </div>


            </div>

        </div>
    </form>
</div>
        </div>

    )
}


export async function getServerSideProps(context) {
    const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: context.query.amount * 100,
        currency: "eur"
      }).catch((err) => {
          throw err
      });
      
    return {
      props: {
        paymentIntent,
        amount: context.query.amount
      },
    }
  }


