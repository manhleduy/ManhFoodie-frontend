import React, { useEffect, useState } from 'react'
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';
const MonthlyRegisterChart = ({monthlyRegister}) => {
  const [trimArr, setTrimArr]=useState();
  useEffect(()=>{
    setTrimArr(monthlyRegister.map(
      (item)=>{
        return {...item,registernum: parseInt(item.registernum)}
      }
    ))
  },[])
  
  return (
    <div 
    className='flex-col items-center justify-center'
    style={{ width: '100%', maxWidth: '100vw', height:"400px"}} >
      <h1 className='text-solidOne text-center'>Monthly register</h1>
      {monthlyRegister.length>0?
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
        
        responsive
        data={trimArr}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="registernum" fill="#FE8F41"barSize={70} />
        </BarChart>
      </ResponsiveContainer>
    
      :(<div>no content</div>)
      }
    </div>
  )
}

export default MonthlyRegisterChart