import React, { useEffect, useState } from 'react'
import { Cell, Legend, ResponsiveContainer, Tooltip,Pie, PieChart } from 'recharts';

const OrderPiechart = ({categoryDistribute, originDistribute}) => {
    const COLORS = ['#57c0e8', '#FF6565', '#82ca9d','#7303C4', '#EBA63D','#F9D544'];
    const [category,setCategory]=useState([]);
    const [origin, setOrigin]= useState([]);
    useEffect(()=>{
      setCategory(
        categoryDistribute.map(
          (item)=>{
            return {...item,value:parseInt(item.value)}
          }
        ))
      setOrigin(originDistribute.map((item)=>{
        return {...item,value: parseInt(item.value)}
      }))
    },[])
    const quantityCategory= categoryDistribute.reduce(
        (accumulator, currentvalue)=> {
            return accumulator+ parseInt(currentvalue.value)
        },
        0
    )
    const quantityOrigin= originDistribute.reduce(
        (accumulator, currentvalue)=> {
            return accumulator+ parseInt(currentvalue.value)
        },
        0
    )
  return (
    <div className='min-md:flex gap-10 justify-center items-center '>
        <div className='bg-[#1e1e1e] backdrop-blur-md border-2 
        shadow-lg rouded-xl p-4 md:p-6 border-[#1f1f1f] mx-2 md:mx-0'>
            <h2  className='text-base md:text-lg font-medium mb-4 text-white text-center md:text-left'>Category Distribution</h2>
            <div className='h-64 md:h-80'>
                
              {category.length>0?<ResponsiveContainer  width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={category}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    dataKey="value"
                    label={({name, value})=>`${name} ${(value*100/quantityCategory).toFixed(0)}%`}
                  >
                  {category.map((entry, index)=>(
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderBlock: "#4b5563",
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "12px"
                    }}
                    itemStyle={{color:"#e5e7eb"}}
                  />
                  <Legend 
                    iconType="circle"
                    layout="horizontal"
                    align="center"
                    wrapperStyle={{fontSize: 12}}
                  />
                </PieChart>
              </ResponsiveContainer>
              :(<div>No content</div>)
              }
            </div>
        </div>
        <div className='bg-[#1e1e1e] backdrop-blur-md max-md:mt-20
        shadow-lg rouded-xl p-4 md:p-6 border-[#1f1f1f] mx-2 md:mx-0'>
            <h2  className='text-base md:text-lg font-medium mb-4 text-white text-center md:text-left'>Category Distribution</h2>
            <div className='h-64 md:h-80'>
                
              {origin.length>0?<ResponsiveContainer  width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={origin}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    dataKey="value"
                    label={({name, value})=>`${name} ${(value*100/quantityOrigin).toFixed(0)}%`}
                  >
                  {origin.map((entry, index)=>(
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderBlock: "#4b5563",
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "12px"
                    }}
                    itemStyle={{color:"#e5e7eb"}}
                  />
                  <Legend 
                    iconType="circle"
                    layout="horizontal"
                    align="center"
                    wrapperStyle={{fontSize: 12}}
                  />
                </PieChart>
              </ResponsiveContainer>
              :(<div>No content</div>)
              }
            </div>
        </div>
    </div>
    
  )
}

export default OrderPiechart