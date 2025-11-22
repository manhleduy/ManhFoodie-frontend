import React, { useEffect } from 'react'
import { useState } from 'react';
import { ResetOTP, verifyOTP } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
const OTP = ({setMode, recoveryEmail}) => {
    const length= 6;
    const {setError, setLoading}= useAppContext()
    const [response, setResponse]= useState();
    const [countdown, setCountDown]= useState(300);
    const [correctOTP, setcorrentOTP]= useState(true);
    const [OTP, setOTP]= useState(new Array(length).fill(""));
    const number= OTP.reduce((acccumulator, current)=>{
        return acccumulator+ current;
    })

    const handleBackspace= (e, index)=>{
        const newOTP= [...OTP];
        newOTP[index]="";
        setOTP(newOTP);
        if(index>0 ){
            e.previousSibling.focus();
        }
        
    }
    useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountDown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      ResetOTP(setError, setLoading);
    }
  }, [countdown]);

    const handleChange= (e, index)=>{
        const value= e.value;
        if(!value) return;
        const newOTP =[...OTP];
        
        newOTP[index]= value;
        setOTP(newOTP);
        if(index<length-1 && value){
            e.nextSibling.focus();
        }
    }
    const verify=async()=>{
        const temp= await verifyOTP(setError,setLoading, setResponse,{OTP: number, email: recoveryEmail})
        const check= temp.status=== 200;
        if(!check) {
            setcorrentOTP(false);
            return false;
        }
        setMode('changePassword');
    }
  return (
    <div className='flex flex-col items-center'>
        <h3 className=' text-center font-medium text-orange-500 py-1'>We have send an OTP verification to the email dmdmdd</h3>
        <p className=' text-center font-medium text-orange-500 py-10'> the OTP will expire in {countdown} seconds</p>
        <div>
        {OTP.map((item, index)=>(
            <input
            key={index}
            type="text"
            maxLength="1"
            value={item}
            className=' w-14 h-14 border-2 mr-5 text-2xl text-medium
            rounded-lg text-center border-gray-600'
            onChange={(e)=>handleChange(e.target,index)}
            onKeyDown={e=>{
                if(e.key=== "Backspace"){
                    handleBackspace(e.target,index)
                }
            }}
            required
            ></input>
        ))}
        </div>
        {!correctOTP?(<div className='text-sm text-red-500 '>your OTP isn't correct or it has expired, reload the page and try again</div>):null}
        <button 
        type="submit"
        onClick={()=>{
            return verify();
        }}
        className='mt-10 p-3 text-md text-white bg-orange-600 h-fit rounded-3xl'>Verify</button>
    </div>
  )
}

export default OTP