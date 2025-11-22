import { XIcon, TrashIcon, ListCheck } from 'lucide-react'
import React, { useState } from 'react'
import { assets } from '../assets/data'
import product1 from '../assets/product_1.png'
import { createFood, deleteFood } from '../lib/adminUntils'
import { useAppContext } from '../context/AppContext'
import FoodUpdateForm from './FoodUpdateForm'
const FoodControlCard = ({food, index}) => {
    const {setError, setLoading}= useAppContext()
    const [response, setResponse]= useState()
    const [openUpdate, setOpenUpdate]= useState(false);
  return (
    <div key={index}>
    
        <div className="border h-120 border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-gradient-to-tl from-[#ec9c42] via-[#e6741d] to-[#fdba74] min-w-56 max-w-100 w-full">
            <div className="group cursor-pointer flex bg- items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product1} alt={food.name} />
            </div>
            <div className="text-white text-sm">
                <p>{food.category}</p>
                <p className=" font-medium text-lg truncate w-full">{food.name}</p>
                <div className='flex items-center justify-start gap-x-1 bold-14'>
                    <img src={assets.star} alt=""  width={10}/>
                    <img src={assets.star} alt=""  width={10}/>
                    <img src={assets.star} alt=""  width={10}/>
                    <img src={assets.star} alt=""  width={10}/>
                    <img src={assets.star} alt=""  width={10}/>
                    <p> 5.0 </p>
                </div>
                <br></br>
                <div>Ingredient: {
                    food.ingredient.split(', ').map((item, index)=>(
                        <div>{' '}+{item}</div>
                    ))
                    }</div>
                <br/>
                <div>{food.detail}</div>
                <br/>
                <div className="flex justify-between">
                    <div className="text-lg">price:{food.price}$</div>
                    <button 
                    onClick={()=>{
                        const deletE=async()=>{
                            await deleteFood(setError, setLoading, setResponse, food.id)
                        }
                        deletE();
                    }}                    
                    className='btn-solid rounded p-3'>
                        <TrashIcon width={20} height={20}/>
                    </button>
                    <button 
                    onClick={()=>{
                        setOpenUpdate(true);
                    }}                    
                    className='btn-solid rounded p-3'>
                        <ListCheck width={20} height={20}/>
                    </button>
                </div>
            </div>
        </div>
        {openUpdate?<FoodUpdateForm 
        setOpenUpdate={setOpenUpdate}
        data={food}
        />:null}
    </div>
  )
}

export default FoodControlCard