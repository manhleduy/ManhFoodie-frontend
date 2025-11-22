import React , {useState, useEffect}from 'react'
import { HandleGetUserData, updateUserInfo } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import Title from '../components/Title';
const Information = () => {
      const {setError, setLoading}= useAppContext()
      const [user, setUser]= useState();
      const [info, setInfo]= useState(null);
      const [response, setResponse]= useState();
      const handleChange=(e)=>{
          const {name, value}= e.target;
          setInfo((signInData)=>({...signInData, [name]:value}));
      }
   
    if(!user || user==="undefined"){
        const fetchUser=async()=>{
            await HandleGetUserData(setError, setLoading, setUser,{isUse: false, email: null});
        }
        fetchUser()
        
      }
    
    
    if(!user || user==="undefined"){return(
        <div>wait for a bit</div>
    )}else{
        if(!info){
        const {firstname, lastname, email, phonenumber, roleid, address}= user.userData;
        
        setInfo({
            firstname:firstname,
            lastname:lastname,
            email: email,
            phonenumber:phonenumber,
            roleid: roleid,
            address:address,
        })
        }
    }
    const executeUpdate=async ()=>{
        return await updateUserInfo(setLoading, setError, info);
    }
    return (
        
        <div className='flex flex-col mt-40 w-full h-fit items-center justify-center'>
              <Title  
                title1={"Your"} 
                title2={"Information"} 
                titleStyles={"pb-5 items-start"}
                para={true}/>
          <form className="bg-white flex flex-col gap-4 text-gray-500 max-w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
              <input 
                  id="firstname" 
                  name='firstname'
                  value={info?.firstname}
                  onChange={handleChange}
                  className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="firstname" 
                  placeholder="Enter your email" 
                  required />
              <input 
                  id="lastname" 
                  name='lastname'
                  value={info?.lastname}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="lastname" 
                  placeholder="Enter your password" 
                  required />
              <input 
                  id="phonenumber" 
                  name='phonenumber'
                  value={info?.phonenumber}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="phonenumber" 
                  placeholder="Enter your password" 
                  required />
               <input 
                  id="address" 
                  name='address'
                  value={info?.address}
                  onChange={handleChange}
                  className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                  type="address" 
                  placeholder="Enter your password" 
                  required />
             
                <button                
                    onClick={(e)=>{
                        executeUpdate()
                        e.preventDefault();
                    }} 
                    type="submit" 
                    className="w-full mb-3  bg-solidTwo hover:bg-orange-600 
                    active:scale-95 transition py-2.5 rounded-full text-white">Update your information
                </button>
             
             
          </form>
          </div>
      );
}

export default Information