import React from 'react'
import { useAppContext } from '../context/AppContext'
import DiscountTicket from '../components/DiscountTicket';
import Title from '../components/Title';
const Discounts = () => {
    const {discounts,setDiscounts}= useAppContext();
    
    if(!discounts  || discounts.length===0){
        return <div className='pt-40 text-lg text-orange-600'>Waiting a while</div>
    }
  return (
    <div className='pt-40' >
    
      <Title  
        title1={"Discount"} 
        title2={"Overview"} 
        titleStyles={"pb-5 items-start"}
        para={true}/>
        
      <div className='flex flex-wrap gap-4'>
          
          {discounts.map((items, index)=>(
              <DiscountTicket data={items}/>
          ))}
      </div>
    </div>

  )
}

export default Discounts