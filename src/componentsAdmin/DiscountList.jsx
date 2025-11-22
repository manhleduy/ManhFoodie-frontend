import { useState, useEffect } from 'react'
import React from 'react'
import DiscountTicket from '../components/DiscountTicket'
import { useAppContext } from '../context/AppContext'
import { getAllDiscount } from '../lib/adminUntils'
import DiscountControlTicket from './DiscountControlTicket'
const DiscountList = () => {
    const {setError, setLoading}= useAppContext()
    const [response, setResponse]= useState()
    const [discountList, setDiscountList]= useState()
    const [discountName, setDiscountName]= useState('');
    const [currentPage, setCurrentPage]= useState(1);
    const totalPages=10;
    useEffect(()=>{
        const fetchData= async()=>{
            await getAllDiscount(setError, setLoading,setResponse);
        }
        fetchData();
    },[setDiscountList])
    useEffect(()=>{
        if(response && response!=="undefined"){
            const {discounts}= response;
            setDiscountList(discounts)
        }
    },[response])
    if(!response || response==='undefined' || !discountList){
        return <div>there is nothing in here</div>
    }
    
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-solidOne  w-full text-center' >All Discounts</h1>
            <div>
                <p className='font-bold text-orange-400'>discount name</p>
                <input 
                onChange={(e)=>{setDiscountName(e.target.value)}}
                type='text' 
                className=' border-4 rounded '/>
            </div>
            <div className='flex gap-3 flex-wrap justify-center items-center'>
                {discountList.filter((item)=>{
                if(discountName===""){
                  return true;
                }else{
                    return item.name.includes(discountName);
                }}).filter((entry, index)=>index<=currentPage*20-1 &&index>=(currentPage-1)*20 )
                .map((item, index)=>(
                    <DiscountControlTicket data={item}/>
                ))}
            </div>
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

export default DiscountList