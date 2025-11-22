import React, { useState, useEffect } from 'react'
import { HandleSignIn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const SignIn = ({setMode}) => {
    const {user,setUser,navigate, setError, setLoading, setIsAdmin}=useAppContext();
    const [response, setResponse]= useState();
    const [signInData, setSignInData]= useState({email: "", password:""});
    const handleChange=(e)=>{
        const {name, value}= e.target;
        setSignInData((signInData)=>({...signInData, [name]:value}));
    }
    if(user)navigate('/');
    useEffect(()=>{
        
        setUser(response?.user);  
        
        // Remove the item with key 'myKey' from local storage
        localStorage.removeItem('isAdmin');
        localStorage.setItem("isAdmin", JSON.stringify(response?.roleid))
        if(response?.roleid===1){
          setIsAdmin(true);
        }
        else{
          setIsAdmin(false);
        }
        localStorage.removeItem('email');
        localStorage.setItem("email", JSON.stringify(response?.user));
    },[response])
  return (
        <form className="bg-white  mt-40 flex flex-col text-gray-500 max-w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Now</h2>
            <input 
                id="email" 
                name='email'
                value={signInData.email}
                onChange={handleChange}
                className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                type="email" 
                placeholder="Enter your email" 
                required />
            <input 
                id="password" 
                name='password'
                value={signInData.password}
                onChange={handleChange}
                className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                type="password" 
                placeholder="Enter your password" 
                required />
            <div className="text-right py-4">
                <a onClick={()=>setMode("forgot")} className="text-blue-600 underline" >Forgot Password</a>
            </div>
            <button  
            onClick={(e)=>{
                HandleSignIn(setLoading,setError,signInData,setResponse)
                
                e.preventDefault();
            }} 
            type="submit" 
            className="w-full mb-3  bg-solidTwo hover:bg-orange-600 
            active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>
            { response && (response.status===500 || response.status===400 || response.status===404) ?(<div className='text-red-500'>{response.message}</div>):(<div></div>)}
            { response && response.status==200 ?(<div className='text-green-500'>{response.message}</div>):(<div></div>)}
            <p className="text-center mt-4">Don't have an account? <a onClick={()=>setMode("signup")} className="text-blue-500 underline">Sign up Now</a></p>
        </form>
    );
}

export default SignIn