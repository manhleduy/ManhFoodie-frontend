import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
const Navbar = ({containerStyles, setMenuOpened}) => {
  const {isAdmin, setIsAdmin}= useAppContext();
  
  const navLinks=!isAdmin?[
    {path:'/', title:'Home'},
    {path:'/menu',title:"Menu"},
    {path:'/blog',title:'Blog'},
    {path:'/contact',title:'Contact'},
    {path:'/discount', title:'Discount'}
  ]:[
    {path:'/', title:'Home'},
    {path:'/foodcontrol', title:'Food control'},
    {path:'/discountcontrol', title:'Discount control'}
  ]

  return (
    <div className={containerStyles}>
      {navLinks.map((link)=>(
        <NavLink 
        onClick={()=> setMenuOpened(false)} 
        key={link.title}
        to={link.path}
        className={({isActive})=>
          `${isActive ? "active-link":""} px-3 py-2
          rounded-full uppercase text-sm font-bold`
        }>
        {link.title}
        </NavLink>
      ))}
    </div> 

  )
}

export default Navbar