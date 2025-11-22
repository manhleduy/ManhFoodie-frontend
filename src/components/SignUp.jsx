import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { CreateNewUser } from '../lib/utils';
import {useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
const SignUp = ({setMode}) => {
    const {setError, setLoading}= useAppContext();
    const [userData, setUserData]= useState({firstname:"", lastname:"", email:"", phonenumber:"",password:"", roleid: 0, address:""});
    const [response, setResponse]= useState();
    const handleChange= (event)=>{
        const { name, value }= event.target;
        setUserData((userData)=>({...userData, [name]: value}));
    }
return (
        <form className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register</h2>
            <input
             required 
             name="email"
             value={userData.email}
             onChange={handleChange}
             className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
             type="email" 
             placeholder="Enter your email" 
            />
             
            <input
            name='password'
             required 
             value={userData.password}
             onChange={handleChange}             
             className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
             type="text" 
             placeholder="Enter your password" 
            />
            <input
             required
             name="firstname"
             value={userData.firstname}
             onChange={handleChange}
             className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
             type="text" 
             placeholder="Enter your firstname" 
            />
            <input
             required 
             name="lastname"
             value={userData.lastname}
             onChange={handleChange}
             className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
             type="text" 
             placeholder="Enter your lastname" 
            />
            <input
             required 
             name="phonenumber"
             value={userData.phonenumber}
             onChange={handleChange}
             className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
             type="text" 
             placeholder="Enter your phonenumber" 
            />
            <input
             required
             name="address"
             value={userData.address}
             onChange={handleChange}
             className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
             type="text" 
             placeholder="Enter your address" 
            />

            <div className="text-right py-4">
                <a onClick={()=>setMode("forgot")} className="text-blue-600 underline" >Forgot Password</a>
            </div>
            <button onClick={(e)=>{
                if(!userData.address || !userData.phonenumber || !userData.lastname ||!userData.lastname || !userData.firstname ||!userData.password || !userData.email){
                    toast.error("insufficent information for an account")
                    return;
                }
                CreateNewUser(setLoading, setError, userData,setResponse)
                e.preventDefault()
            }}  type="submit" className="w-full mb-3  bg-solidTwo hover:bg-orange-600 active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>
            { response && response.status==500 ?(<div className='text-red-500'>{response.message}</div>):(<div></div>)}
            { response && response.status==201 ?(<div className='text-green-500'>{response.message}</div>):(<div></div>)}
            <p className="text-center mt-4">Already have an account? <a onClick={()=>setMode("signin")} className="text-blue-500 underline">Sign in Now</a></p>
        </form>
        
    );
}

export default SignUp