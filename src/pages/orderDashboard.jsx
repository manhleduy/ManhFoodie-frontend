import React, { useEffect, useState,useMemo } from 'react'
import MonthlyIncomeChart from '../componentsAdmin/MonthlyIncomeChart'
import OrderPiechart from '../componentsAdmin/OrderPiechart'
import OrderOverall from '../componentsAdmin/OrderOverall'
import { getOrderStatistic } from '../lib/adminUntils'
import { useAppContext } from '../context/AppContext'
import AllOrderList from '../componentsAdmin/AllOrderList'
import Title from '../components/Title'
const OrderDashboard = () => {
  const {setError, setLoading}= useAppContext()
  const [response, setResponse]= useState(null);
  const [orderOverall, setOrderOverall]= useState();
  const [monthlyIncome, setMonthlyIncome]= useState();
  const [categoryDistribute, setCategoryDistribute]= useState();
  const [originDistribute, setOriginDistribute]= useState();
  useEffect(()=>{
    const fetchData = async () => {
        await getOrderStatistic(setError, setLoading, setResponse);
    }

    fetchData();
  },
  [setOrderOverall, setMonthlyIncome, setCategoryDistribute, setOriginDistribute])
  useEffect(()=>{
    
       if(response!=="undefined" && response){
          const{
            message,
            orderNum,
            foodAmount,
            totalIncome,
            monthlyIncome,
            categoryDistribute,
            originDistribute,
            status
          }= response
          setOrderOverall({orderNum: orderNum, foodAmount: foodAmount, totalIncome: totalIncome})
          setMonthlyIncome(monthlyIncome);
          setCategoryDistribute(categoryDistribute);
          setOriginDistribute(originDistribute);
          
        }
  },[response])
  
  if(!response || !orderOverall || !categoryDistribute || !originDistribute) return <div className='pt-40'>Waiting for loading the information</div>
  return (
    <div className='flex flex-col gap-40 pt-40 w-full max-padd-container'>
      
      <OrderOverall orderOverall={orderOverall}/>
      <MonthlyIncomeChart monthlyIncome={monthlyIncome}/>
      <OrderPiechart categoryDistribute={categoryDistribute} originDistribute={originDistribute}/>
      <AllOrderList/>
    </div>
  )
}

export default OrderDashboard