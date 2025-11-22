import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/data.js'
import Navbar from './Navbar.jsx'
import { useAppContext } from '../context/AppContext.jsx'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import {Check} from 'lucide-react'
const Header = () => {
  const {user,refreshToken, accessToken,isAdmin, setIsAdmin,navigate,getCartCount,error}= useAppContext();
  const [menuOpened, setMenuOpened]= useState(false);
  
  const isHomePgae= useLocation().pathname.endsWith('/');
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected]= useState("");
  const [currentUser, setCurrentUser]=useState();
  
    
  const FunctionPages = !isAdmin
  ?[ "dashboard", "pricing","information" ,"signout"]
  :["userdashboard", "orderdashboard","signout"]
  

  const toggleMenu=()=>{
    setMenuOpened(prev=> !prev)
  }
  
  return (
    <header className={`absolute top-0 left-0 right-0 z-50 py-3 ${!isHomePgae && "bg-white"}`}>
        <div className='max-padd-container flexBetween'>
            <div  className='flex flex-1'>
                <Link to={'/'} className='fles items-end'>
                <img src={assets.logoImg} alt='logoImg' className='h-12'/>
                <div >
                  <span className='hidden sm:block font-extrabold
                  text-3xl relative top-1 left-1'>ManhFoodie</span>
                  <span className='hidden sm:block font-extrabold text-xs
                  relative left-1.5 traching-[10px] uppercase text-solid'>Fiesta</span>
                </div>
                </Link>
            </div>
            <div className='flex flex-1'>
              <Navbar setMenuOpened={setMenuOpened} 
              containerStyles={`${menuOpened
                ? 'flex items-start flex-col gay-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-salte-900/5 z-50'
                : 'hidden lg:flex gap-x-5 xl:gap-x-1 medium-15 p-1'
              }`}/>
            </div>
            
            <div className='flex flex-1 item-center sm:justify-end gap-x-4
            sm:gap-x-8'>
              <div className='relative lg:hidden w-7 h-6'>
                <img onClick={toggleMenu} src={assets.menu} alt="" className={`absolute inset-0
                  lg:hidden cursor-pointer transition-opacity duration-700
                  ${menuOpened? "opacity-0":"opacity-100"}`}
                  width={29}/>   
                <img onClick={toggleMenu} src={assets.menuClose} alt="" className={`absolute  inset-0
                  lg:hidden cursor-pointer transition-opacity duration-700
                  ${menuOpened? "opacity-100":"opacity-0"}`}
                  width={29}/>
              </div>
              {!isAdmin?<div onClick={()=>navigate('/cart')} className='relative cursor-pointer'>
                <img  src={assets.cartAdded} alt="" className='min-w-11 bg-white
                rouded full p-2'/>
                <label className='abosolute bottom-10 right-1 text-xs font-bold
                bg-solid text-white flexCenter rounded-full w-9'>
                  {getCartCount()}
                </label>
              </div>:null}
              <div className=''>
                {user ? 
                    <div className="flex flex-col w-30 text-sm relative">
                          <button type="button" onClick={() => setIsOpen(!isOpen)}
                              className="w-full flex justify-between text-left px-4 pr-2 py-2 border rounded bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none">
                              <span>
                                <div className='flex justify-center items-center'>  
                                  <img src={assets.personLogo} alt="ccc"  width={20} height={20}/>
                                  <div>{user.firstname}{" "}{user.lastname}</div>
                                </div>
                              </span>
                              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280" >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                          </button>
                          {isOpen && (
                              <ul className="w-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2">
                                {FunctionPages.map((item) => (
                                  <li onClick={()=>{
                                    setSelected(item);
                                    navigate(`/${item}`)
                                    }} 
                                    key={item} 
                                    className=" flex px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
                                    {item}{" "}
                                    {item===selected ?<Check width={15}/>:<div></div> }
                                  </li> 
                                ))}
                              </ul>
                          )}
                  </div> 
                  :( 
                <button
                  onClick={()=>navigate('/login')}
                   className='btn-solid flexCenter gap-2'>
                  Login
                  <img src={assets.user} alt="" className='invert w-5'/>
                </button>
                )}
              </div>
              
            </div>
        </div>
    </header>
  )
}

export default Header
