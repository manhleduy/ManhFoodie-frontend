import React from 'react'
const OrderCard = ({data, index}) => {

  return (
    <div key={index} className='w-full max-w-[800px]  border-5 p-3 m-2 rounded-xl  min-md:flex flex-wrap justify-between border-orange-700 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#fde68a]  to-[#f59e0b] '>
      <div>
        
        <p className='text-orange-400'>{data.name}</p>
        <p className='text-orange-400'>{data.address}</p>
      </div>
      <div className=''>
        <div>email: {data.email}</div>
        <div>phonenumber: {data.phonenumber}</div>
      </div>
      <div>
        <div>food: {data.food}</div>
        <div>category: {data.detail}</div>
      </div>
      <div>
        <div>price: {data.price} </div>
        <div>amount: {data.amount}</div>
      </div>
                    
    </div>
  )
}

export default OrderCard