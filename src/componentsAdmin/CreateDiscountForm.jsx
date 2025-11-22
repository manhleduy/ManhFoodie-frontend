import React, { useState, useEffect } from 'react'
import { HandleSignIn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import { createDiscount, createFood } from '../lib/adminUntils';
const CreateDiscountForm = () => {
      const {user,setUser,navigate, setError, setLoading}=useAppContext();
      const [response, setResponse]= useState();
      const [newDiscountData, setNewDiscountData]= useState();
      const handleChange=(e)=>{
          const {name, value}= e.target;
          setNewDiscountData((signInData)=>({...signInData, [name]:value}));
      }
    
    return (
          <form className="bg-white  mt-40 flex flex-col text-gray-500 max-w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>
              <input 
                  id="name" 
                  name='name'
                  value={newDiscountData.name}
                  onChange={handleChange}
                  className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="name" 
                  placeholder="Enter the name" 
                  required />
              <input 
                  id="value" 
                  name='value'
                  value={newDiscountData.value}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="value" 
                  placeholder="Enter value applied" 
                  required />
               <input 
                  id="detail" 
                  name='detail'
                  value={newDiscountData.detail}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="detail" 
                  placeholder="Enter more detail" 
                  required />
               <input 
                  id="amount" 
                  name='amount'
                  value={newDiscountData.amount}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="amount" 
                  placeholder="Enter the amount of discount ticket" 
                  required />
               <input 
                  id="expiration_date" 
                  name='expiration_date'
                  value={newDiscountData.expiration_date}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="expiration_date" 
                  placeholder="Enter the expiration date" 
                  required />
               <input 
                  id="requirement" 
                  name='requirement'
                  value={newDiscountData.requirement}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="requirement" 
                  placeholder="Enter the requirement" 
                  required />
               
              <button  
              onClick={(e)=>{
                  createDiscount(setError, setLoading, setResponse, newDiscountData)
                  e.preventDefault();
              }} 
              type="submit" 
              className="w-full mb-3  bg-solidTwo hover:bg-orange-600 
              active:scale-95 transition py-2.5 rounded-full text-white">Create</button>
              { response && (response.status===500 || response.status===400 || response.status===404) ?(<div className='text-red-500'>{response.message}</div>):(<div></div>)}
              { response && response.status==200 ?(<div className='text-green-500'>{response.message}</div>):(<div></div>)}
              
          </form>
      );
}

export default CreateDiscountForm