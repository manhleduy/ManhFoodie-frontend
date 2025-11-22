import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Blog from './pages/Blog'
import Contact from'./pages/Contact'
import Cart from './pages/Cart'
import AddressForm from './pages/AddressForm'
import MyOrders from './pages/MyOrders'
import Footer from './components/Footer'
import Header from './components/Header'
import {Toaster} from "react-hot-toast"
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import SignOut from './pages/SignOut'
import { useAppContext } from './context/AppContext'
import Pricing from './pages/Pricing'
import Information from './pages/Information'
import Discounts from './pages/Discounts'
import FoodControl from './pages/FoodControl'
import UserDashboard from './pages/userDashboard'
import OrderDashboard from './pages/orderDashboard'
import DiscountControl from './pages/DiscountControl'
function App() {
  const {navigate, user}= useAppContext();
  
  return (
    <main className="overflow-x-hidden taxt-textColor ">
      <Header/>
      <Toaster position='top-center'/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/address-form' element={<AddressForm/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/signout' element={<SignOut/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/information' element={<Information/>}/>
        <Route path='/discount' element={<Discounts/>}/>
        <Route path='/foodcontrol' element={<FoodControl/>}/>
        <Route path='/discountcontrol' element={<DiscountControl/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/orderdashboard' element={<OrderDashboard/>}/>
      </Routes>
      <Footer/>
      
    </main>
  )
}

export default App
