import React from 'react'
import { useState, useEffect } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/data'
import product1 from '../assets/product_1.png'
import { HandleGetUserData } from '../lib/utils'
import { createOrder } from '../lib/utils'
const Cart = () => {
    const {navigate, products, currency, cartItems,setCartItems, setError, setLoading}= useAppContext();
    const[ response, setResponse]=useState();
    const [openAdjust, setOpenAdjust]= useState(-1);
    useEffect(()=>{
      HandleGetUserData(setLoading,setError, setResponse, {isUse: false, email: "ccc"});
      
    },[])
    
    useEffect(()=>{
      const phonenumber= response?.userData?.phonenumber;
      const address= response?.userData?.address;
      const email= response?.userData?.email;
      const userName= response?.userData?.firstname
      setCartItems(prev =>
          prev.map((item) =>
          {
            return { ...item, address: address, phonenumber: phonenumber, email: email, userName: userName}
          }
          )
        );
    },[response])
    
    
    const increment=(choosenId, newVal)=>{
      setCartItems(prev =>
        prev.map((item, i) =>
          i === choosenId ? { ...item, amount: newVal } : item
        )
      );
    }
    const decrement= (choosenId, newVal)=>{
      setCartItems(prev =>
        prev.map((item, i) =>
          i === choosenId ? { ...item,amount: newVal>0? newVal:1 } : item
        )
      );
    
    }
    const adjustAddress=(choosenId,newVal)=>{
      setCartItems(prev =>
        prev.map((item, i) =>
          i === choosenId ? { ...item, address: newVal } : item
        )
      );
    }
    const adjustPhoneNumber= (choosenId, newVal)=>{
       setCartItems(prev =>
        prev.map((item, i) =>
          i === choosenId ? { ...item, phonenumber: newVal } : item
        )
      );
    }
    const handleOpenAdjust=(index)=>{
      if(index===openAdjust){
        setOpenAdjust(-1);
        return;
      }
        setOpenAdjust(index);
    }
    const Confirm=(items)=>{
      createOrder(setError, setLoading, {
        email: items.email,
        name:items.userName,
        phonenumber:items.phonenumber,
        address: items.address,
        food: items.name,
        price: items.price* items.amount,
        fastorder:1,
        detail: items.category,
        amount: items.amount
      })
      setCartItems(pre=>pre.filter(item=> item.id!==items.id))
    }
    const RejectOrder=(items)=>{
      
      setCartItems(pre=>pre.filtxer(item=> item.name!==items.name))
      
    }
       
     return (
      
        <div className='max-padd-container py-16 pt-40 bg-primary'>

            <div className='flex, flex-col xl:flex-row gap-20 xl:gap-28'> 
                <div className='flex flex-[2] flex-col gap-3 text-[95%]'>
                    <Title  
                    title1={"Cart"} 
                    title2={"Overview"} 
                    titleStyles={"pb-5 items-start"}
                    paraStyles={"hidden"}/>
                </div>
               
                <div className='flex flex-1'>
                  <div className='max-w-[370px] w-full bg-white
                  p-5 py-10 max-md:mt-16 rounded-xl'>
                    <CartTotal/>
                  </div>
                  <div className='pl-4 w-full  flex-col  '>
                    {cartItems.map((items, index)=>items.email?(
                    <div key={index} className=' w-full pt-10   font-medium items-center bg-white p-2 rounded-xl'>
                      <div className='flex  justify-between items-center md:gap-6 gap-3 '>
                        <div className='flex bg-primary rounded-xl'>
                          <img src={product1} alt="" width={100}/>
                        </div>
                        <div className='flex gap-2 flex-col justify-around w-[150px]'>
                          <h5 className='hidden  sm:block line-clamp-1'>{items.name}</h5>
                          <div className='flexBetween'>
                            <div className='flex items-center ring-1 ring-slate-900/15
                            rounded-full overflow-hidden bg-primary'>
                              <button onClick={()=>{decrement(index, items.amount-1)}}
                                className='bg-solid p-1.5 text-white rounded-full
                                shadow-md m-0.5 cursor-pointer'>
                                  <img src={assets.minus} alt=""  width={11}
                                  className='invert'/>
                                </button>
                                <p className='px-2'>{items.amount}</p>
                                <button onClick={()=>{increment(index, items.amount+1)}}
                                className='bg-solid p-1.5 text-white rounded-full
                                shadow-md m-0.5 cursor-pointer'>
                                  <img src={assets.plus} alt="" width={11}
                                  className='invert'/>
                                </button>
                            </div>
                          </div>
                          <h5 className='hidden sm:block line-clamp-1'>{items.price*items.amount}{currency}</h5>                         
                        </div>
                        
                          <div className='min-lg:hidden'>
                            <div className="flex flex-wrap items-center justify-center gap-12">
                              <div className="flex flex-wrap items-center justify-center gap-12">
                                <label className=" relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                                    <input onChange={()=>{handleOpenAdjust(index)}} type="checkbox" className="peer sr-only" />
                                    <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-indigo-600 peer-focus:ring-2 peer-focus:ring-indigo-500"></div>
                                    <span className="dot absolute top-3.5 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                    Use default address
                                </label>
                                {index===openAdjust?(
                                  <div className='flex flex-col '>
                                    <div className="flex items-center border-b gap-2 border-gray-500/30 h-[46px] overflow-hidden max-w-md w-[150px] min-lg:w-[250px]">
                                        <input onChange={(e)=>{adjustAddress(index, e.target.value)}} type="text" value={items.address} className="w-full h-full outline-none placeholder-gray-500 text-gray-500 bg-transparent text-sm" />
                                    </div>
                                    <div className="flex items-center border-b gap-2 border-gray-500/30 h-[46px] overflow-hidden max-w-md w-full">
                                        <input onChange={(e)=>{adjustPhoneNumber(index, e.target.value)}} type="text" value={items.phonenumber} className="w-full h-full outline-none placeholder-gray-500 text-gray-500 bg-transparent text-sm" />
                                    </div>
                                  </div>
                                ):null}
                            </div>
                          </div>
                        </div>
                        <div className='flex flex-col max-lg:hidden'>
                           <div className="flex items-center border-b gap-2 border-gray-500/30 h-[46px] overflow-hidden max-w-md w-[150px] min-lg:w-[250px]">
                              <input onChange={(e)=>{adjustAddress(index, e.target.value)}} type="text" value={items.address} className="w-full h-full outline-none placeholder-gray-500 text-gray-500 bg-transparent text-sm" />
                          </div>
                          <div className="flex items-center border-b gap-2 border-gray-500/30 h-[46px] overflow-hidden max-w-md w-full">
                              <input onChange={()=>{adjustPhoneNumber(index, e.target.value)}} type="text" value={items.phonenumber} className="w-full h-full outline-none placeholder-gray-500 text-gray-500 bg-transparent text-sm" />
                          </div>
                        </div>
                        <div className=' flex gap-6 max-sm:flex-col'>
                          <button onClick={()=>{
                            Confirm(items)
                            navigate("pricing")
                          }}
                          className='cursor-pointer mx-auto'>
                            <img src={assets.cartAdded} alt=""  width={22}/>
                          </button>
                          <button onClick={()=>{RejectOrder(items)}}
                          className='cursor-pointer mx-auto'>
                            <img src={assets.cartRemove} alt=""  width={22}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  ):null)}
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Cart