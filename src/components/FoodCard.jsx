import React from "react";
import product1 from '../assets/product_1.png'
import { assets } from "../assets/data";
import { XIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
const FoodCard = ({food, setOpenFoodInfo}) => {
    const {addToCart, user}= useAppContext();

    return (
        <div className="fixed z-1000 border flex justify-center items-center border-gray-500/20 rounded-md top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]">
            
            <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-gradient-to-tl from-[#ec9c42] via-[#e6741d] to-[#fdba74] min-w-56 max-w-100 w-full">
            <button className="cursor-pointer" 
            onClick={()=>setOpenFoodInfo(false)}><XIcon width={20}/></button>
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
                    onClick={ async()=>{
                        if(!user || user=='undefined'){
                            toast.error("you are not login now, try login first or create an")
                            return;
                        }
                        addToCart({...food, amount: 1})
                    }}                    
                    className='btn-solid rounded p-3'>
                        <img src={assets.cartAdd} alt="" width={20}/>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};
export default FoodCard