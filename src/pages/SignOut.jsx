import React, {useState} from 'react'
import { useAppContext } from '../context/AppContext'
import { HandleSignOut } from '../lib/utils'
const SignOut = () => {
    const {setError, setLoading, setUser}= useAppContext()
    const {navigate} = useAppContext()
    return (
        <div className='pt-50 flex w-full h-full justify-center items-center'>
            <div className='h-fit p-3 w-[200px] border-2'>
                <h3 className='text-'>Do you really want to log out?</h3>
                <div className='flex justify-around'>
                    <button
                    className='hover:cursor-pointer text-green-700 bg-green-200 p-4 border-2 border-green-700'
                    onClick={()=>{
                        const exist= async ()=>{
                            if(localStorage.removeItem('email'))localStorage.removeItem('email');
                            if(localStorage.removeItem('isAdmin'))localStorage.removeItem('isAdmin');
                            await HandleSignOut(setLoading, setError);
                            setUser(null)
                        }
                        exist();
                        navigate('/');
                    }}>Yes ✅</button>
                    <button 
                    className='hover:cursor-pointer  text-red-700 bg-red-200 p-4 border-2 border-red-700 '
                    onClick={()=>{
                        navigate('/');
                    }}
                    >No ❌</button>
                </div>
            </div>
        </div>
    )
}

export default SignOut