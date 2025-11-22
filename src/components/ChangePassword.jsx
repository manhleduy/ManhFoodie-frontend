import React, { useEffect, useState } from 'react'
import { HandleGetUserData, updateUserInfo } from '../lib/utils';
import { parseCSSVariable } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const ChangePassword = ({recoveryEmail}) => {
    const {setError, setLoading}= useAppContext();
    const [newPassword, setNewPassword]= useState("");
    const [response, setResponse]= useState(); 
    const [complete, setComplete]= useState(false);
    
    useEffect(()=>{
      
        HandleGetUserData(setError, setLoading, setResponse, {isUse: true, email: recoveryEmail});
    
    },[])
    const getNewData= async ()=>{
      let NewData= response.userData;
      NewData= {...NewData, password: newPassword};
      
      return NewData;
    }
    const changePassword= async()=>{
      const data= await getNewData();
      await updateUserInfo(setError, setLoading, data);
    }
  return (
    <form className="bg-white  mt-40 flex flex-col text-gray-500 max-w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Change your password</h2>
        <input 
        id="password" 
        name='password'
        value={newPassword}
        onChange={(e)=>{
          setNewPassword(e.target.value)

        }}
        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
        type="password" 
        placeholder="Enter your password" 
        required />
        
       
        <button
        onClick={(e)=>{
          changePassword();
          setComplete(true)
          e.preventDefault();
        }}
          type="submit"
          className="w-full mb-3 mt-5 bg-solidTwo hover:bg-orange-600 active:scale-95 transition py-2.5 rounded-full text-white"> change email 
        </button>    
        {complete?(<div className='text-green-400 text-md'>Change password complete, reload the page and sign in again</div>):null}    
    </form>
  )
}

export default ChangePassword