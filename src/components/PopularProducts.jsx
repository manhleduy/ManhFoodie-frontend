import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Title from './Title';
import Item from './Item';
const PopularProducts = () => {
  const [popularProducts, setPopularProducts]=useState([]);
  const {products}= useAppContext();

  useEffect(()=>{
    const data= products.slice(0,5)
      setPopularProducts(data)
  },[products])
  return (
    <section className='max-padd-container py-22 xl:py-28 bg-white '>
      <Title title1={"Popular"} title2={"Foods"} titleStyles={"pb-10"}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 sl:grid-cols-5 gap-4'>
      {popularProducts.map(product=>(
        <div key={product.id}>
          <Item product={product}/>
        </div>
      ))}
    </div>
    </section>

  )
}

export default PopularProducts