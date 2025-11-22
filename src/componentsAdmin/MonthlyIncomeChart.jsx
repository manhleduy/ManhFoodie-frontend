import React from 'react'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

const MonthlyIncomeChart = ({monthlyIncome}) => {
  return (
      <div className='h-64 md:h-80 '>
        <h1 className='text-solidOne w-full text-center'>Monthly Income</h1>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={monthlyIncome}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563"/>
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af" 
              tick={{fontSize: 12}}
              interval="preserveStartEnd"/>
            <YAxis 
              stroke="#9ca3af" 
              tick={{ fontSize: 12}} 
              width={40}/>
            <Tooltip 
              contentStyle={{
                backgroundColor: "rbga(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
                fontSize: '12px'
              }}
              />
            <Line 
              type="monotone" 
              dataKey="expense"
              stroke="#D08A5E"
              strokeWidth={3}
              dot={{fill:"#D08A5E", strokeWidthL: 2, r:4}}
              activeDot={{r:6, strokeWidth: 2}}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}

export default MonthlyIncomeChart