

import { useEffect, useState } from 'react';
import { Cell, Legend, ResponsiveContainer, Tooltip,Pie, PieChart } from 'recharts';


const CategoryDistributionChart = ({distributeTable}) => {
    const [arr, setArr]= useState([]);
    console.log(distributeTable)    
    const COLORS = ['#57c0e8', '#FF6565', '#82ca9d','#7303C4', '#EBA63D','#F9D544'];
    const quantity= distributeTable.reduce(
        (accumulator, currentvalue)=> {
            return accumulator+ parseInt(currentvalue.value);
        },
        0
    )
    useEffect(()=>{
        setArr(
            distributeTable.map(
                (item)=>{
                    return {...item,value:parseInt(item.value)}
                }
            )
        );
    },[])
    return (
        <div className='bg-[#1e1e1e] backdrop-blur-md
        shadow-lg rouded-xl p-4 md:p-6 border-[#1f1f1f] mx-2 md:mx-0'>
            <h2  className='text-base md:text-lg font-medium mb-4 text-white text-center md:text-left'>Category Distribution</h2>
            <div className='h-64 md:h-80'>
                {quantity>0?(
                    <ResponsiveContainer  width="100%" height="100%">
                    <PieChart>
                        <Pie 
                            data={arr}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            dataKey="value"
                            label={({name, value})=>`${name} ${(parseInt(value)*100/quantity).toFixed(0)}%`}
                            >
                            {distributeTable.map((entry, index)=>(
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{
                            backgroundColor: "rbga(31, 41, 55, 0.8)",
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
                ):(
                    <div>let order something now</div>
                )}
                
            </div>
        </div>
    )
}

export default CategoryDistributionChart