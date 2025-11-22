import React from 'react'
import { useState, useEffect } from 'react'
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'
import { useAppContext } from '../context/AppContext'

const AddressForm = () => {
  const  {navigate, user}= useAppContext();
  const [address, setAddress]= useState({
    firstname:"",
    secondName:"",
    email: "",
    street: "",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  const onChangeHandler =(e)=>{
    const name= e.target.name
    const value = e.target.value
    setAddress((data)=>({...data, [name]:value}))

  }
  useEffect(()=>{
    if(!user){
      navigate('/cart')
    }
  },[])
  return (
    <div className=' max-padd-container py-16 pt-28 bg-primary'>

      <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
        <form className='flex flex-[2] flex-col gap-3 text-[95%]'>
          <Title title1={"Delivery"} title2={"Information"} titleStyles={"pg-5"}></Title>
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} value={address.firstname} 
            type="text" name="firstname" placeholder='first Name'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none w-1/2' />
          <input onChange={onChangeHandler} value={address.lastname} 
            type="text" name="lastname" placeholder='last Name'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none w-1/2' />
          </div>
          <input onChange={onChangeHandler} value={address.email} 
            type="email" name="email" placeholder='Email'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none' />
           <input onChange={onChangeHandler} value={address.phone} 
            type="text" name="phone" placeholder='Phone'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none' />
           <input onChange={onChangeHandler} value={address.street} 
            type="text" name="street" placeholder='Street'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none' />
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} value={address.city} 
            type="text" name="city" placeholder='City'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none w-1/2' />
          <input onChange={onChangeHandler} value={address.state} 
            type="text" name="state" placeholder='State'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none w-1/2' />
          </div>
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} value={address.zipcode} 
            type="text" name="zipcode" placeholder='zip code'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none w-1/2' />
          <input onChange={onChangeHandler} value={address.country} 
            type="text" name="country" placeholder='Country'
            className='ring-1 ring-slate-900/15 p-1 p;-3 rounded-sm
          bg-white outline-none w-1/2' />
          </div>
          <button type='submit' className='btn-solid rounded-md w-1/2 mt-2'>Add Address</button>
        </form>
        <div className='flex flex-1 flex-col'>
          <div className='max-w-[370px] w-full bg-white p-5 py-10 max-md:mt-16 rounded'>
            <CartTotal></CartTotal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm