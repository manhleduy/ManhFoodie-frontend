import React, { useState } from 'react'
import { XIcon } from 'lucide-react'
import { useAppContext } from '../context/AppContext';
import { updateFood } from '../lib/adminUntils';
const FoodUpdateForm = ({setOpenUpdate, data}) => {
    const {setError, setLoading}= useAppContext()
    const [updateFoodData, setUpdateFoodData]= useState(data);
    const [response, setResponse]=useState();
    const handleChange=(e)=>{
          const {name, value}= e.target;
          setUpdateFoodData((signInData)=>({...signInData, [name]:value}));
      }
    return (
      <div className="fixed z-1000 border flex justify-center items-center border-gray-500/20 rounded-md top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]">
          <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-gradient-to-tl from-[#ec9c42] via-[#e6741d] to-[#fdba74] min-w-56 max-w-100 w-full">
              <button className="cursor-pointer" 
              onClick={()=>{setOpenUpdate(false)}}><XIcon width={20}/></button>
              <form className="bg-white  mt-40 flex flex-col text-gray-500 max-w-[400px] gap-1
                    mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Change this food information</h2>
                      <input 
                        id="name" 
                        name='name'
                        value={updateFoodData.name}
                        onChange={handleChange}
                        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="name" 
                        placeholder="name" 
                        required />
                      <input 
                        id="rating" 
                        name='rating'
                        value={updateFoodData.rating}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="rating" 
                        placeholder="rating" 
                        required />
                      <input 
                        id="origin" 
                        name='origin'
                        value={updateFoodData.origin}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="origin" 
                        placeholder="origin" 
                        required />
                      <input 
                        id="category" 
                        name='category'
                        value={updateFoodData.category}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="category" 
                        placeholder="category" 
                        required />
                      <input 
                        id="price" 
                        name='price'
                        value={updateFoodData.price}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="price" 
                        placeholder="price"
                        required />
                      <input 
                        id="ingredient" 
                        name='ingredient'
                        value={updateFoodData.ingredient}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="ingredient" 
                        placeholder="ingredient" 
                        required />
                      <input 
                        id="detail" 
                        name='detail'
                        value={updateFoodData.ingredient}
                        onChange={handleChange}
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="detail" 
                        placeholder="detail" 
                        required />
                      <button  
                        onClick={(e)=>{
                          updateFood(setError, setLoading, setResponse, data.id, updateFoodData)
                          e.preventDefault()
                        }}
                        type="submit" 
                        className="w-full mb-3  bg-solidTwo hover:bg-orange-600 
                        active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>      
                    </form>
          </div>
      </div>
    )
}

export default FoodUpdateForm