import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/data'
import { useAppContext } from '../context/AppContext';
import product1 from '../assets/product_1.png'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { Dot} from 'lucide-react';
import FoodCard from './FoodCard.jsx'
const Item = ({product}) => {
    
    const {currency,addToCart, navigate, user}= useAppContext();
    const [openMoreInfo, setOpenMoreInfo]= useState(false);
    return (
    <div className='relative mt-24 group'>
        
        <div className='mx-auto rounded-full absolute left-0 right-0
         -top-21 h-[177px] w-[177px]'>
            <img src={product1}
            alt="productImg"  
            height={177} 
            width ={177}
            className='absolute inset-0 h-full w-full object-cover
            opacity-100 hover:rotate-90 transition drop-shadow-md'/>
            
        </div>

        <div className='rounded-4xl bg-primary pt-20 overflow-hidden'>
            <div className='p-3'>
                <h4 className='text-lg line-clamp-1 mb-1'>{product.name}
                    <button className='border h-fit rounded-2xl text-center flex'></button>
                </h4>
                <div  className='flex, items-start justify-between pb-1'>
                    <h5 className='mb-1'>{product.categoty}</h5>
                    <div className='flex items-center justify-start gap-x-1 bold-14'>
                        <img src={assets.star} alt=""  width={10}/>
                        <img src={assets.star} alt=""  width={10}/>
                        <img src={assets.star} alt=""  width={10}/>
                        <img src={assets.star} alt=""  width={10}/>
                        <img src={assets.star} alt=""  width={10}/>
                        <h5> 5.0 </h5>
                    </div>
                </div>
                <p className='line-clamp-1'>{product.ingredient}</p>
            </div>

            <div className='flexBetween p-3 pt-0'>
                <h4 className='text-solidOne'>{currency}{product.price}{"  "}
                    <button
                     onClick={()=>{setOpenMoreInfo(!openMoreInfo)}}
                     className='border text-sm bg-orange-400
                 text-white p-1 rounded-2xl cursor-pointer'>More Info...</button>
                </h4>
            </div>

            <div className='flexBetween rounded-xl pl-5 text-[13px] font-semibold'>
                <div className='flex flextStart gap-10'>
                    <div className='flex flex-col gap-1 relative bottom-1.5'>
                        <h5>Prep</h5>
                        <p className='text-xs'>5m</p>
                    </div>
                    <hr  className='h-8 w-[1px] bg-tertiary/10 border-none'/>
                    <div className='flex flex-col gap-1 relative bottom-1.5'>
                        <h5>Cook</h5>
                        <p className='text-xs'>20m</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <button 
                    onClick={ async()=>{
                        if(!user || user=='undefined'){
                            toast.error("you are not login now, try login first or create an")
                            return;
                        }
                        addToCart({...product, amount: 1})
                        toast.success(`your added ${product.name} to your cart`)
                    }}
                    className='btn-solid rounded p-3'>
                        <img src={assets.cartAdd} alt="" width={20}/>
                    </button>
                </div>
            </div>
            
        </div>
        {openMoreInfo?<FoodCard food={product} setOpenFoodInfo={setOpenMoreInfo}/> :null}
    </div>
  )
}

export default Item