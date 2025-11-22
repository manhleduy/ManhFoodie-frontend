import React, { useState } from 'react'
import { createFood } from '../lib/adminUntils';
import { useAppContext } from '../context/AppContext';
import FoodsList from '../componentsAdmin/FoodsList';

const FoodControl = () => {
  //name,rating,origin,category,image, price, ingredient, detail
  const {setError, setLoading}= useAppContext()
  const [response, setResponse]= useState()
  const [newFoodData, setnewFoodData]= useState({name:"", rating: "", origin: "",category:"", image:"", price:"", ingredient:"", detail:""})
  const handleChange=(e)=>{
    const {name, value}= e.target;
    setnewFoodData((pre)=>({...pre, [name]: value}));
  }
  
  return (
    <div className='max-padd-container flex flex-col justify-center items-center'>
      <form className="bg-white  mt-40 flex flex-col text-gray-500 max-w-[400px] gap-1
      mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create a new food for menu</h2>
        <input 
          id="name" 
          name='name'
          value={newFoodData.name}
          onChange={handleChange}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
          type="name" 
          placeholder="name" 
          required />
        <input 
          id="rating" 
          name='rating'
          value={newFoodData.rating}
          onChange={handleChange}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
          type="rating" 
          placeholder="rating" 
          required />
        <input 
          id="origin" 
          name='origin'
          value={newFoodData.origin}
          onChange={handleChange}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
          type="origin" 
          placeholder="origin" 
          required />
        <input 
          id="category" 
          name='category'
          value={newFoodData.category}
          onChange={handleChange}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
          type="category" 
          placeholder="category" 
          required />
        <input 
          id="price" 
          name='price'
          value={newFoodData.price}
          onChange={handleChange}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
          type="price" 
          placeholder="price"
          required />
        <input 
          id="ingredient" 
          name='ingredient'
          value={newFoodData.ingredient}
          onChange={handleChange}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
          type="ingredient" 
          placeholder="ingredient" 
          required />
        <input 
          id="detail" 
          name='detail'
          value={newFoodData.ingredient}
          onChange={handleChange}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
          type="detail" 
          placeholder="detail" 
          required />
        <button  
          onClick={(e)=>{
            createFood(setError, setLoading, setResponse, newFoodData);
            e.preventDefault()
          }}
          type="submit" 
          className="w-full mb-3  bg-solidTwo hover:bg-orange-600 
          active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>      
      </form>
      <FoodsList/>
    </div>
  )
}

export default FoodControl