import React, { useState } from 'react'
import { XIcon } from 'lucide-react'
import { useAppContext } from '../context/AppContext';
import { updateDiscount, updateFood } from '../lib/adminUntils';
const DiscountUpdateForm = ({setOpenUpdate, data}) => {
    const {setError, setLoading}= useAppContext()
    const [updateDiscountData, setUpdateDiscountData]= useState(data);
    const [response, setResponse]=useState();
    const handleChange=(e)=>{
          const {name, value}= e.target;
          setUpdateDiscountData((signInData)=>({...signInData, [name]:value}));
      }
    return (
      <div className="fixed z-1000 border flex justify-center items-center border-gray-500/20 rounded-md top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]">
          <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-gradient-to-tl from-[#ec9c42] via-[#e6741d] to-[#fdba74] min-w-56 max-w-100 w-full">
                <button className="cursor-pointer" 
                onClick={()=>{setOpenUpdate(false)}}><XIcon width={20}/></button>
                <form className="bg-white  flex flex-col text-gray-500 max-w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">change the info of this discount</h2>
                    <input 
                        id="name" 
                        name='name'
                        value={updateDiscountData.name}
                        onChange={handleChange}
                        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="name" 
                        placeholder="Enter the name" 
                        required />
                    <input 
                        id="value" 
                        name='value'
                        value={updateDiscountData.value}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="value" 
                        placeholder="Enter value applied" 
                        required />
                    <input 
                        id="detail" 
                        name='detail'
                        value={updateDiscountData.detail}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="detail" 
                        placeholder="Enter more detail" 
                        required />
                     <input 
                        id="amount" 
                        name='amount'
                        value={updateDiscountData.amount}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="amount" 
                        placeholder="Enter the amount of discount ticket" 
                        required />
                    <input 
                        id="expiration_date" 
                        name='expiration_date'
                        value={updateDiscountData.expiration_date}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="expiration_date" 
                        placeholder="Enter the expiration date" 
                        required />
                    <input 
                        id="requirement" 
                        name='requirement'
                        value={updateDiscountData.requirement}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="requirement" 
                        placeholder="Enter the requirement" 
                        required />
                             
                    <button  
                            onClick={(e)=>{
                                updateDiscount(setError, setLoading, setResponse, data.id, updateDiscountData)
                                e.preventDefault();
                            }} 
                            type="submit" 
                            className="w-full mb-3  bg-solidTwo hover:bg-orange-600 
                            active:scale-95 transition py-2.5 rounded-full text-white">Create</button>
                            { response && (response.status===500 || response.status===400 || response.status===404) ?(<div className='text-red-500'>{response.message}</div>):(<div></div>)}
                            { response && response.status==200 ?(<div className='text-green-500'>{response.message}</div>):(<div></div>)}
                            
                </form>
          </div>
      </div>
    )
}

export default DiscountUpdateForm