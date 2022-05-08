

import { useRouter } from "next/router";
import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";


function CagnotteParticipate() {
    const [showModal, setshowModal] = useState(false);

    const toggleModal = () => setshowModal(!showModal);
    CagnotteParticipate.handleClickOutside = () => setshowModal(false)
    const router = useRouter()

    const [amount , setAmount]  = useState("");

    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }


    const handleAmountChange = (e) => {
        if(isNumeric(e)){
            setAmount(e)
        }
    }

    const handlePaymentClicked = (event) => {
        event.preventDefault();
        router.push({
            pathname: "/checkout",
            query: {amount: amount}
        })
    }


    return (
        <div className="relative inline-block text-left mt-10">
            <button onClick={(() => setshowModal(true))}  className="flex w-96 bg-black hover:bg-gray-600  text-white font-bold py-3 px-4 rounded-xl justify-center items-center">
                  Je participe !
                  </button>
            {
                showModal ? <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>


                    <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>
                    <form className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                        <div className="flex flex-col relative p-4 space-y-3">
                            <div className="flex flex-row justify-between items-end">
                                <div></div>
                                <div onClick={toggleModal} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                    <a href="#">
                                        <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </a>
                                </div>
                            </div>


                            <div className="flex flex-col items-start space-y-3 px-14">
                                <div className="text-2xl font-montserrat font-semibold top-0 sticky text-black">Combien souhaitez vous donner ? </div>
                                <input onChange={((e) => {handleAmountChange(e.target.value)})} placeholder="Montant de la participation"  className="w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"></input>
                                <div className="flex  pt-10  w-full justify-center items-center">
                                    <button onClick={handlePaymentClicked} disabled={!amount.length}
                                        type="submit"
                                        className="flex w-96 bg-black hover:bg-gray-700  text-gray-800 font-bold py-3 px-4 rounded-xl justify-center items-center disabled:opacity-40"
                                    >
                                        <div className="font-montserrat text-sm text-white">Continuer</div>

                                    </button>
                                </div>


                            </div>

                        </div>
                    </form>
                </div>
            </div> : null
            }
        </div>

    )
}



const clickOutsideConfig = {
    handleClickOutside: () => CagnotteParticipate.handleClickOutside
};

export default onClickOutside(CagnotteParticipate, clickOutsideConfig);