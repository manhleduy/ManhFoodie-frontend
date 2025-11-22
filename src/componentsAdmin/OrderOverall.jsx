import React from 'react'
import StartCard from '../components/StartCard'
import { ListOrderedIcon, Beef, CircleDollarSign } from 'lucide-react'
const OrderOverall = ({orderOverall}) => {
  const {orderNum, foodAmount, totalIncome}= orderOverall
  return (
    <div className='flex item-center justify-center flex-wrap gap-5'>
      <h1 className='text-solidOne w-full text-center'>Overall order status</h1>
      <div className='min-md:w-1/2'>
      <StartCard name='total order relately' icon={ListOrderedIcon} value={orderNum}></StartCard>
      </div>
      <div className='min-md:w-1/2'>
      <StartCard name='total food ordered relately' icon={Beef} value={foodAmount}></StartCard>
      </div>
      <div className='min-md:w-1/2'>
      <StartCard name='total income' icon={CircleDollarSign} value={totalIncome}></StartCard>
      </div>
    </div>
  )
}

export default OrderOverall