import React from 'react'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useState } from 'react';
import ForgotPassword from '../components/ForgotPassword';
import {useSelector, useDispatch } from 'react-redux'
import OTP from '../components/OTP';
import ChangePassword from '../components/ChangePassword';
const Login = () => {
    const [recoveryEmail, setRecoveryEmail]= useState("");
    const [mode, setMode] = useState("signup");
    
    if(mode==="signin"){
        return (
        <div className='mt-40 flex justify-center'>
            <SignIn setMode={setMode}/>
        </div>
    );
    };
    if(mode==="forgot"){
        return (
        <div className='mt-40 flex justify-center'>
            <ForgotPassword setMode={setMode} setRecoveryEmail={setRecoveryEmail}/>
        </div> 
    );
    };
    if(mode==="OTP"){
        return (
        <div className='mt-40 flex justify-center'>
            <OTP setMode={setMode} recoveryEmail={recoveryEmail}/>
        </div>
    );
    };
    if(mode==="changePassword"){
        return (
            <div className='mt-40 flex justify-center'>
                <ChangePassword recoveryEmail={recoveryEmail}/>
            </div>
        )
    }
    return (
        <div className='mt-40 flex justify-center'>
            <SignUp setMode={setMode} />
        </div>
    );
    
}

export default Login