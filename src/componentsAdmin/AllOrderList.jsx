import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { getAllOrders } from '../lib/adminUntils';
import OrderCard from './OrderCard';
const AllOrderList = () => {
    const [response, setResponse]= useState();
    const {setError, setLoading}= useAppContext();
    const [allOrder, setAllOrder]= useState();
    const [currentPage, setCurrentPage]= useState(1);
    const [chosenPhoneNumber, setChosenPhoneNumber]= useState("");
    const [chosenEmail, setChosenEmail]= useState("");
    const totalPages= 6;
    useEffect(()=>{
        const fectchData= async()=>{
            await getAllOrders(setError, setLoading, setResponse)
        }
        fectchData()
    },[setAllOrder])
    useEffect(()=>{
        if(response && response!=="undefined"){
            const {message, orders, status}= response;
            setAllOrder(orders);
        }
    },[response])
    if(!response && response!=="undefined"){
        return (<div>Waiting for a bit</div>)
    }
    

  return (
    <div className='flex flex-col '>
        <h1 className='text-solidOne text-center'>All Order</h1>
          <div className='flex gap-3'>
            <p className='font-bold text-orange-400'>phone number</p>
            <input
            onChange={(e)=>{setChosenPhoneNumber(e.target.value)}}
            type='text' 
            className=' border-4 rounded '/>
            <p className='font-bold text-orange-400'>email</p>
            <input 
            onChange={(e)=>{setChosenEmail(e.target.value)}}
            type='text' 
            className=' border-4 rounded '/>
          </div>
        {allOrder?.filter((item)=>{
                if(chosenPhoneNumber==="" && chosenEmail===""){
                  return true;
                }else if(chosenPhoneNumber==="" && chosenEmail!==""){
                  return item.email.includes(chosenEmail);
                }else if(chosenEmail==="" && chosenPhoneNumber!==""){
                  return item.phonenumber.includes(chosenPhoneNumber)
                }else{
                  return item.email.includes(chosenEmail) && item.phonenumber.includes(chosenPhoneNumber)
                }
              }).filter((entry, index)=>index<=currentPage*20-1 &&index>=(currentPage-1)*20 ).map((item, index)=>(
            <OrderCard data={item} index={index}/>
        ))}
        <div className='flexCentered flex flex-wrap mt-14 mb-10 gap-4'>
            <button disabled={currentPage===1}
              onClick={()=>setCurrentPage(prev=>prev-1)}
              className={`btn-solid !py-1 !px-3 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}>
                Previous
              </button>
            {Array.from({length: totalPages}, (_,index)=>(
              <button key={index +1}
              onClick={()=>setCurrentPage(index+1)}
              className={`btn-light !py-1 !px-3  ${currentPage === index +1 && "bg-solidTwo text-primary scale-150"}`}>
                {index+1}
              </button>
            ))}
            <button disabled={currentPage===totalPages}
              onClick={()=>setCurrentPage(prev=>prev+1)}
              className={` btn-solid !py-1 !px-3 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}>
                Next
              </button>
          </div>
    </div>
  )
}

export default AllOrderList