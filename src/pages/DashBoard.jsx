import React from 'react'
import {ShoppingCart, ListOrderedIcon, Coins, Users} from 'lucide-react'
import StartCard from '../components/StartCard'
import {motion} from 'framer-motion'
import OverviewChart from '../components/OverviewChart'
import CategoryDistributionChart from '../components/CategoryDistributionChart'
import { useState } from 'react'
import { useEffect } from 'react'
import { GetOrders, HandleGetOrderInfo} from '../lib/utils'
import { useAppContext } from '../context/AppContext'
import OrderList from '../components/OrderList'
import Title from '../components/Title'

const DashBoard = () => {
  const {user, setError, setLoading}= useAppContext()
  const [expense, setExpense]= useState([]);
  const [totalOrder,setTotalOrder]= useState(0);
  const [totalFoods, setTotalFoods]= useState("0");
  const [distributeTable,  setDistributeTable]= useState([]);
  
  
  useEffect( ()=>{
     HandleGetOrderInfo(setLoading, setError, setTotalOrder, setTotalFoods, setExpense,setDistributeTable)
  },[])
  
 
  return (
    
    <div className='mt-30 flex-1 overflow-auto relative z-10'>
      <main className='max-w-7xl mx-auto py-4 px-4 lg:px-8'>
         <Title  
        title1={"Order"} 
        title2={"Dashboard"} 
        titleStyles={"pb-5 items-start"}
        para={true}/>
        {user?(
        <motion.div 
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{opacity: 0, y:20}}
        animate={{opacity: 1, y:20}}
        transition= {{duration:1}}>
          <StartCard name='users' icon={Users} value={user.firstname+ " "+ user.lastname}></StartCard>
          <StartCard name='totalFoods' icon={ShoppingCart} value={totalFoods}></StartCard>
          <StartCard name='totalOrders' icon={ListOrderedIcon} value={totalOrder}></StartCard>
        </motion.div>
        ):(
          <div> no content</div>
        )}
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <OverviewChart expense={expense}/>
          <CategoryDistributionChart distributeTable= {distributeTable}/>
          
        </div>
        
          <OrderList/>
        
      </main>
    </div>
  )
}

export default DashBoard