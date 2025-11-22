import React, {useState} from 'react'
import { useAppContext } from '../context/AppContext'
import { createOrder } from '../lib/utils';
import { createDiscount } from '../lib/adminUntils';
import DiscountList from '../componentsAdmin/DiscountList';

const DiscountControl = () => {
    //name,value,detail,amount, expiration_date,requirement
    const {setError, setLoading}= useAppContext()
    const [response, setResponse]= useState();
    const [newDiscountData, setNewDiscountData]= useState({name:"", value:"", detail: "", amount: "", year: "", day: "", month: "", requirement: ""})
    const handleChange=(e)=>{
      const {name, value}= e.target;
      setNewDiscountData((pre)=>({...pre, [name]: value}));
    }
      
      return (
        <div className='max-padd-container flex flex-col justify-center items-center'>
          <form className="bg-white  mt-40 flex flex-col gap-3 text-gray-500 max-w-[400px] 
          mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create a new discount</h2>
            <input 
              id="name" 
              name='name'
              value={newDiscountData.name}
              onChange={handleChange}
              className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
              type="name" 
              placeholder="name" 
              required />
            <input 
              id="value" 
              name='value'
              value={newDiscountData.value}
              onChange={handleChange}
              className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
              type="value" 
              placeholder="value" 
              required />
            <input 
              id="detail" 
              name='detail'
              value={newDiscountData.detail}
              onChange={handleChange}
              className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
              type="detail" 
              placeholder="detail" 
              required />
            <input 
              id="amount" 
              name='amount'
              value={newDiscountData.amount}
              onChange={handleChange}
              className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
              type="amount" 
              placeholder="amount" 
              required />
            
              <input 
              id="expiration_date" 
              name='expiration_date'
              value={newDiscountData.expiration_date}
              onChange={handleChange}
              className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
              type="date" 
              placeholder="expiration date"
              required />
              
            <input 
              id="requirement" 
              name='requirement'
              value={newDiscountData.requirement}
              onChange={handleChange}
              className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
              type="requirement" 
              placeholder="requirement" 
              required />
           
            <button  
              onClick={(e)=>{
                createDiscount(setError, setLoading, setResponse, newDiscountData)
                e.preventDefault()
              }}
              type="submit" 
              className="w-full mb-3  bg-solidTwo hover:bg-orange-600 
              active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>      
          </form>
          <DiscountList/>
        </div>
      )
}

export default DiscountControl