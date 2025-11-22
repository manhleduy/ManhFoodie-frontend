import React from 'react'
import MonthlyRegisterChart from '../componentsAdmin/MonthlyRegisterChart'
import { useAppContext } from '../context/AppContext'
import { useState, useEffect } from 'react'
import { getAllUser, getUserStatistic } from '../lib/adminUntils'
import UsersPresent from '../componentsAdmin/UsersPresent'
const UserDashboard = () => {
  
  const {setError, setLoading}= useAppContext()
  const [response, setResponse]= useState();
  const [userNum, setUserNum]= useState();
  const [monthlyRegister, setMonthlyRegister]= useState();
  const [allUserResponse, setAllUserResponse]= useState();
  const [allUser, setAllUser]= useState();
  const [chosenPhoneNumber, setChosenPhoneNumber]= useState("");
  const [chosenEmail, setChosenEmail]= useState("");
  useEffect(()=>{
    const fetchData=async()=>{
      await getUserStatistic(setError, setLoading, setResponse);
      await getAllUser(setError, setLoading, setAllUserResponse);
    }
    fetchData();
  },[setUserNum, setMonthlyRegister, setAllUser])
  useEffect(()=>{
    
    if(response && response!=="undefined"){
      const {message, userNum, monthlyRegister, status}= response;
      setUserNum(userNum);
      setMonthlyRegister(monthlyRegister);
    }
    if(allUserResponse && allUserResponse!=="undefined"){
      const {users}= allUserResponse;
      setAllUser(users);
    }

  }
  ,[response, allUserResponse])
  if(!response || !monthlyRegister ) return <div className='pt-40'>Waiting for loading the information</div>
  return (
    <div className='max-padd-container flex flex-col gap-30 pt-40'>
        <div className='flex justify-center flex-col items-center '>
          <h1 className='text-solidOne'>the user of your app is</h1>
          <h1 className='bg-solidTwo font-bold rounded-full flex w-20 justify-center items-center text-white h-20 p-4'>{userNum}</h1>
        </div>

        <MonthlyRegisterChart monthlyRegister={monthlyRegister}/>
        <div>
          <h1 className='text-solidOne text-center'>All Users</h1>
          <div className='flex gap-3'>
            <p className='font-bold text-orange-400'>phone number</p>
            <input
            onChange={(e)=>{setChosenPhoneNumber(e.target.value)}}
            type='text' 
            className=' border-4 rounded '/>
            <p className='font-bold text-orange-400'>email</p>
            <input 
            onChange={(e)=>{setChosenEmail(e.target.value)}}
            type='text' 
            className=' border-4 rounded '/>
          </div>
        <UsersPresent 
        chosenPhoneNumber={chosenPhoneNumber}  
        chosenEmail={chosenEmail}
        allUsers={allUser}/>
        </div>
    </div>

  )
}

export default UserDashboard