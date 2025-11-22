import React, { useState } from 'react'
import { sendOTPemail } from '../lib/utils'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
const ForgotPassword = ({setMode,setRecoveryEmail, recoveryEmail}) => {
  const {setError, setLoading}= useAppContext();
  const [inputEmail, setInputEmail]= useState("")
  return (
    <form className="bg-white  mt-40 flex flex-col text-gray-500 max-w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">forgot password?</h2>
        <input 
        onChange={(e)=>{setInputEmail(e.target.value)}} 
        id="email" 
        name="email"
        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
        type="email" 
        placeholder="Enter your email" 
        required={true} />
        <button
          onClick={()=>{
            if(!inputEmail){
              toast.error("provide your email first")
            }
            toast.success("we have sent an OTP email to your gmail please check now")
            setRecoveryEmail(inputEmail);
            
            sendOTPemail(setError,setLoading,{email: inputEmail})
            
            setMode('OTP')
          }}
          type="submit"
          className="w-full mb-3 bg-solidTwo hover:bg-orange-600 active:scale-95 transition py-2.5 rounded-full text-white">Send an email to this </button>
        <p className="text-center mt-4"><a onClick={()=>setMode("signin")} className="text-blue-500 underline">Sign in</a></p>
        <p className="text-center mt-4"><a onClick={()=>setMode("signup")} className="text-blue-500 underline">Sign up</a></p>
    </form>
  )
}

export default ForgotPassword