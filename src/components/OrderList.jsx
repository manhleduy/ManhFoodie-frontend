import React, { useState, useEffect } from 'react'
import product1 from '../assets/product_1.png'
import Title from './Title'
import { deleteOrder,GetOrders } from '../lib/utils';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';
const OrderList = () => {
    const {setError, setLoading}= useAppContext();
    const [response, setResponse]= useState([])
    const [orders, setOrders]= useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            GetOrders(setLoading, setError, setResponse)
        }
        fetchData();
      },[setOrders])

    useEffect(()=>{
        if(response && response!=='undefined'){
            setOrders(response.orders)
        }
      },[response])
    const Delete=(item)=>{
        GetOrders(setLoading, setError, setResponse)
        deleteOrder(setError, setLoading, item.id)
         
    }
   
    if(!orders || orders==='undifined')return null;
    
  return (
    

    <div className='flex flex-col w-full h-fit  items-center'>
       
        <Title  
            title1={"Recent"} 
            title2={"Order"} 
            titleStyles={"pb-5 items-start"}
            paraStyles={"hidden"}/>

        {orders.map((item, index)=>(
            <div key={index} className='w-full max-w-[800px] border-5 p-3 m-2 rounded-xl  flex flex-wrap justify-between border-orange-700 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#fde68a]  to-[#f59e0b] '>
                <div>
                <img src={product1} alt="product img" width={50}/>
                <p className='text-orange-400'>{item.food}</p>
                </div>
                <div className=''>
                    <div>address: {item.address}</div>
                    <div>phonenumber: {item.phonenumber}</div>

                </div>
                <div>
                    <div>Price: {item.price*item.amount}$</div>
                    <div>Amount: {item.amount}</div>
                </div>
                <div className='flex gap-3'>
                    <button
                    onClick={()=>{
                        Delete(item)
                        toast.success('Successfully toasted!')
                    }}
                    className='border-2 h-fit m-1 p-1 
                    rounded-2xl text-red-500 cursor-pointer'>delete</button>
                    
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default OrderList