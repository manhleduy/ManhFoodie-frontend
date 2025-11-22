import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'
import { dummyAddress } from '../assets/data'
import { createOrder } from '../lib/utils'
import { XIcon } from 'lucide-react'
const CartTotal = () => {
    const {
        currency,
        navigate,
        delivery_charges,
        getCartAmount,
        method,
        setMethod,
        getCartCount,
        cartItems,
        setCartItems,
        appliedDiscount,
        setLoading,
        setError,
        user
    }= useAppContext()
    
    
 
  return (
    <div >
        <h3>
            Order Details
            <span className='text-lg font-bold text-solid'>({getCartCount()}) Items</span>
        </h3>
        

        <div className='mb-5'>
            <div className='my-6'>
                <h4 className='mb-5'>Payment method</h4>
                <div className='flex gap-3'>
                    <div onClick={()=>setMethod("COD")}
                        className={`${ method==='COD' ?"btn-solid":"btn-light"}
                         !py-1 text-xs cursor-pointer`}>
                        Paypal
                    </div>
                    <div onClick={()=>setMethod("stripe")}
                        className={`${ method==='COD' ?"btn-solid":"btn-light"}
                         !py-1 text-xs cursor-pointer`}>
                        Visa
                    </div>
                </div>
            </div>
        </div>
        <hr className='border-gray-300 my-5'/>
        <div className='mt-4 space-y-2'>
            <div className='flex justify-between'>
                <h5>Price</h5>
                <p className='font-bold'>{currency}{getCartAmount()}</p>
            </div>
            <div className='flex justify-between'>
                <h5>Shipping Fee</h5>
                <p className='font-bold'>{currency}{getCartAmount()=== 0 
                    ? "0.00"
                :`${delivery_charges}.00`}</p>
            </div>
            <div className='flex justify-between'>
                <h5>Tax 2%</h5>
                <p className='font-bold'>{currency}{(getCartAmount() * 2)/100}</p>
            </div>
            
            <div className='flex justify-between text-lg font-medium mt-3'>
                <h5 className=''>Total Amount</h5>
                <p className=' text-lg font-bold'>{currency}{getCartAmount()=== 0
                    ? "0.00": getCartAmount()-100+delivery_charges +(getCartCount()*2)/100 
             }
                </p>
            </div>
        </div>
        <button 
        onClick={()=>{
            if(!user || user==='undefined'){
                toast.error("log in to use this ")
                return;
            }

            navigate('/pricing');
        }} 
        className='btn-solid w-full mt-8 !rounded-md py-2' >Proceed to Order</button>
    </div>
)
};

export default CartTotal