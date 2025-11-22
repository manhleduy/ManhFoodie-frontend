import React, { useState, useEffect } from 'react'
import { HandleSignIn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import { createFood } from '../lib/adminUntils';
const CreateFoodForm = () => {
      const {user,setUser,navigate, setError, setLoading}=useAppContext();
      const [response, setResponse]= useState();
      const [newFoodData, setNewFoodData]= useState();
      const handleChange=(e)=>{
          const {name, value}= e.target;
          setNewFoodData((signInData)=>({...signInData, [name]:value}));
      }
    
    return (
          <form className="bg-white  mt-40 flex flex-col text-gray-500 max-w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>
              <input 
                  id="name" 
                  name='name'
                  value={newFoodData.name}
                  onChange={handleChange}
                  className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="name" 
                  placeholder="Enter the name" 
                  required />
              <input 
                  id="rating" 
                  name='rating'
                  value={newFoodData.rating}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="rating" 
                  placeholder="Enter the rating" 
                  required />
               <input 
                  id="origin" 
                  name='origin'
                  value={newFoodData.origin}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="origin" 
                  placeholder="Enter the origin" 
                  required />
               <input 
                  id="category" 
                  name='category'
                  value={newFoodData.category}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="category" 
                  placeholder="Enter the category" 
                  required />
               <input 
                  id="image" 
                  name='image'
                  value={newFoodData.image}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="image" 
                  placeholder="Enter the image" 
                  required />
               <input 
                  id="price" 
                  name='price'
                  value={newFoodData.price}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="price" 
                  placeholder="Enter the price" 
                  required />
               <input 
                  id="ingredient" 
                  name='ingredient'
                  value={newFoodData.ingredient}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="ingredient" 
                  placeholder="Enter the price" 
                  required />
               <input 
                  id="detail" 
                  name='detail'
                  value={newFoodData.detail}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="detail" 
                  placeholder="Enter the price" 
                  required />
              
              <button  
              onClick={(e)=>{
                  createFood(setError, setLoading, setResponse, newFoodData);
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

export default CreateFoodForm