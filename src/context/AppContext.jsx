import React, { useEffect, useState,createContext,useContext } from 'react'
import { dummyProducts } from '../assets/data';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"
import { GetDiscounts, GetFoods,createOrder } from '../lib/utils';
const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [error, setError]=useState();
    const [loading, setLoading]= useState(true);

    const [user, setUser]=useState();
    const [isAdmin, setIsAdmin]= useState(false);
    const [accessToken, setAccessToken]= useState();
    const [refreshToken, setRefreshToken]= useState();

    const [products, setProducts]=useState([]);
    const [discounts, setDiscounts]= useState([]);
    const [cartItems, setCartItems]= useState([])
    const [appliedDiscount, setAppliedDiscount]= useState(null);

    const [searchQuery, setSearchQuery]= useState("");

    

    const [method, setMethod]= useState("COD")
    const currency= "$"
    const delivery_charges=10
    const navigate = useNavigate()
    const fetchProducts=()=>{
      GetFoods(setError, setLoading, setProducts);
      GetDiscounts(setError, setLoading, setDiscounts);
    }
    useEffect(() => {
        fetchProducts()
        async function init() {
          const data = await localStorage.getItem('email'); 
          if(data && data!=='undefined'){
            setUser(JSON.parse(data))
          };
          const checkAdmin= await localStorage.getItem('isAdmin');
          
          if(checkAdmin && checkAdmin!=="undefined"){
            if(JSON.parse(checkAdmin)===1){
              setIsAdmin(true);
            }
            else{
              setIsAdmin(false);
            }
          }
        }
        init();
    }, [])
    const ApplyDiscount=(discountId, value)=>{
      
      setAppliedDiscount(value)
    }

    const addToCart = (product)=>{
      setCartItems(pre=>[...pre, product]);
    }
    const getCartCount=()=>{// calculate the total items
        return cartItems.length;
    }
    const getCartAmount = () =>
      cartItems.reduce((acc, item) => acc + item.amount * item.price, 0);
    
    
    
    const value={
        user,
        setUser,
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        products,
        fetchProducts,
        currency,
        navigate,
        cartItems, 
        setCartItems,
        delivery_charges,
        searchQuery,
        setSearchQuery,
        addToCart,
        getCartCount,
        getCartAmount,
        method,
        setMethod,
        discounts,
        setDiscounts,
        appliedDiscount,
        setAppliedDiscount,
        error,
        setError,
        loading, 
        setLoading,
        isAdmin,
        setIsAdmin
    }
  return (
    <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext= ()=>useContext(AppContext)