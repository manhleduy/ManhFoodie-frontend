import React, { useState } from 'react'
import product1 from '../assets/product_1.png'
import { User2Icon } from 'lucide-react'
import { assets } from '../assets/data'
const UsersPresent = ({chosenPhoneNumber,chosenEmail ,allUsers}) => {
    const [currentPage, setCurrentPage]= useState(1);
    
    const totalPages=10;
    //lastname, firstname, email, phonenumber, address
    if(!allUsers) return <div>There is no user register your page</div>
  return (
    <div>
        <div className='flex flex-wrap items-center justify-center gap-5 w-full'>
            {allUsers.filter((item)=>{
                if(chosenPhoneNumber==="" && chosenEmail===""){
                  return true;
                }else if(chosenPhoneNumber==="" && chosenEmail!==""){
                  return item.email.includes(chosenEmail);
                }else if(chosenEmail==="" && chosenPhoneNumber!==""){
                  return item.phonenumber.includes(chosenPhoneNumber)
                }else{
                  return item.email.includes(chosenEmail) && item.phonenumber.includes(chosenPhoneNumber)
                }
              }).filter((entry, index)=>index<=currentPage*20-1 &&index>=(currentPage-1)*20 ).map((item, index)=>(
                <div key={index} className='relative mt-24 group border-6 border-orange-500 rounded-2xl  '>
                    <div className='mx-auto rounded-full absolute left-1/4 
                    -top-10 h-[177px] w-[177px]'>
                        <div className='border-2 w-fit rounded-full bg-orange-300'>
                        <User2Icon width={100} height={100}/> 
                        </div>
                    </div>
                    <div className='rounded-4xl bg-primary pt-20 overflow-hidden'>
                        <div className='p-3'>
                            
                            <div  className='flex, items-start justify-between pb-1 gap-3'>
                                <div className='mb-1 flex'>fist name: <h5 className='text-orange-400'>{item.firstname}</h5></div>
                                <div className='mb-1 flex'>last name: <h5 className='text-orange-400'>{item.lastname}</h5></div>
                                <div className='mb-1 flex'>phone number: <h5 className='text-orange-400'>{item.phonenumber}</h5></div>
                                <div className='mb-1 flex'>email: <h5 className='text-orange-400'>{item.email}</h5></div>
                                <div className='mb-1 flex'>address: <h5 className='text-orange-400'>{item.address}</h5></div>
                            </div>
                            
                        </div>               
                    </div>
                </div>
            ))}

        </div>
        <div className='flexCentered flex flex-wrap mt-14 mb-10 gap-4'>
            <button disabled={currentPage===1}
              onClick={()=>setCurrentPage(prev=>prev-1)}
              className={`btn-solid !py-1 !px-3 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}>
                Previous
              </button>
            {Array.from({length: totalPages}, (_,index)=>(
              <button key={index +1}
              onClick={()=>setCurrentPage(index+1)}
              className={`btn-light !py-1 !px-3  ${currentPage === index +1 && "bg-solidTwo text-primary scale-150"}`}>
                {index+1}
              </button>
            ))}
            <button disabled={currentPage===totalPages}
              onClick={()=>setCurrentPage(prev=>prev+1)}
              className={` btn-solid !py-1 !px-3 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}>
                Next
              </button>
        </div>
    </div>
  )
}

export default UsersPresent