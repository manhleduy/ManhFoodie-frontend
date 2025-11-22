import React, { useState } from 'react';
import Title from '../components/Title';
import { useAppContext } from '../context/AppContext';
import DiscountTicket from '../components/DiscountTicket';
import { NavLink } from 'react-router-dom';
import { CreditCardIcon, CalendarIcon, ChevronDownIcon } from 'lucide-react'

// Icon Components (Replacements for image URLs and Font Awesome)
const PaypalIcon = (props) => (
  <img
    src="https://i.imgur.com/7kQEsHU.png"
    alt="PayPal"
    width="30"
    {...props}
  />
);

const VisaIcon = (props) => (
  <img
    src="https://i.imgur.com/2ISgYja.png"
    alt="Visa"
    width="30"
    {...props}
  />
);

const MastercardIcon = (props) => (
  <img
    src="https://i.imgur.com/W1vtnOV.png"
    alt="Mastercard"
    width="30"
    {...props}
  />
);

const AmexIcon = (props) => (
  <img
    src="https://i.imgur.com/35tC99g.png"
    alt="Amex"
    width="30"
    {...props}
  />
);


const Pricing = () => {
  const {user, cartItems,setCartItems,appliedDiscount, setAppliedDiscount}= useAppContext()
  // State to manage which payment method is currently 'open' (Credit Card is open by default)
  const [activeTab, setActiveTab] = useState('creditCard');

  const isCreditCardActive = activeTab === 'creditCard';
  const isPaypalActive = activeTab === 'paypal';
  const [paypalEmail, setPaypalEmail]= useState();
  const [cardNumber, setCardNumber]= useState();
  const [CVV, setCVV]= useState();
  const [expireDate, setExpireDate]= useState();
  console.log(appliedDiscount)
  const handleOnChange=(value, setValue)=>{
    setValue= value
  }
  const orderAll=()=>{
          if(cartItems.length===0) return;
          cartItems.forEach(items=> {
              createOrder(setError, setLoading, {
                  email: items.email,
                  name:items.userName,
                  phonenumber:items.phonenumber,
                  address: items.address,
                  food: items.name,
                  price: items.price* items.amount,
                  fastorder:1,
                  detail: items.category,
                  amount: items.amount
              })
          });
          setCartItems([]);
  
      }
  return (
    <div className=" min-h-screen py-10 font-sans pt-30 w-full ">
      <div className="container mx-auto px-4  w-full">
        <div className="flex flex-wrap -mx-3 ">
          {/* Payment Method Section */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-col gap-10 justify-center items-center">
             <Title  
                title1={"Payment"} 
                title2={""} 
                titleStyles={"pb-5 items-start"}
                para={true}/>
            <div className="bg-white rounded-lg shadow-md mt-2">
              <div className="w-full">
                {/* PayPal Accordion Item */}
                <div className="border-b last:border-b-0 border-gray-200">
                  <h2>
                    <button
                      className={`flex justify-between items-center w-full p-4 text-left ${
                        isPaypalActive ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'
                      } transition-colors rounded-t-lg focus:outline-none`}
                      type="button"
                      onClick={() => setActiveTab(isPaypalActive ? '' : 'paypal')}
                    >
                      <span className="text-gray-700 font-medium">Paypal</span>
                      <PaypalIcon />
                    </button>
                  </h2>
                  {isPaypalActive && (
                    <div className="p-4 bg-gray-300 border-t border-gray-200">
                      <input
                        onChange={(e)=>handleOnChange(e.target.value, setPaypalEmail)}
                        value={paypalEmail}
                        type="text"
                        className="w-full h-12 px-4 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                        placeholder="Paypal email"
                      />
                    </div>
                  )}
                </div>

                {/* Credit Card Accordion Item */}
                <div className="border-b last:border-b-0 border-gray-200">
                  <h2>
                    <button
                      className={`flex justify-between items-center w-full p-4 text-left ${
                        isCreditCardActive ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'
                      } transition-colors rounded-b-lg focus:outline-none`}
                      type="button"
                      onClick={() => setActiveTab(isCreditCardActive ? '' : 'creditCard')}
                    >
                      <span className="text-gray-700 font-medium">Credit card</span>
                      <div className="flex space-x-1">
                        <VisaIcon />
                        <MastercardIcon />
                        <AmexIcon />
                        <VisaIcon /> {/* Duplicated icon in original HTML */}
                      </div>
                    </button>
                  </h2>
                  {isCreditCardActive && (
                    <div className="p-6 bg-gray-300 border-t border-gray-200">
                      <span className="text-xs font-normal text-gray-600 ml-1">Card Number</span>
                      <div className="relative mt-1">
                        <CreditCardIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                        <input
                          onChange={(e)=>{handleOnChange(e.target.value, setCardNumber)}}
                          value={cardNumber}
                          type="text"
                          className="w-full h-12 pl-10 pr-4 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div className="flex space-x-3 mt-4 mb-4">
                        {/* Expiry Date */}
                        <div className="w-1/2">
                          <span className="text-xs font-normal text-gray-600 ml-1">Expiry Date</span>
                          <div className="relative mt-1">
                            <CalendarIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                            <input
                              onChange={(e)=>{handleOnChange(e.target.value, setExpireDate)}}
                              value={expireDate}
                              type="text"
                              className="w-full h-12 pl-10 pr-4 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                              placeholder="MM/YY"
                            />
                          </div>
                        </div>

                        {/* CVC/CVV */}
                        <div className="w-1/2">
                          <span className="text-xs font-normal text-gray-600 ml-1">CVC/CVV</span>
                          <div className="relative mt-1">
                            
                            <input
                              onChange={(e)=>{handleOnChange(e.target.value, setCVV)}}
                              value={CVV}
                              type="text"
                              className="w-full h-12 pl-10 pr-4 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                              placeholder="000"
                            />
                          </div>
                        </div>
                      </div>

                      <span className="text-xs text-gray-500">
                        
                        Your transaction is secured with ssl certificate
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {appliedDiscount?
            <DiscountTicket data={appliedDiscount}/>:
            (
              <button className=''>chose a<NavLink 
                key="discount"
                to='/discount'
                className="px-3 py-2 rounded-full underline text-orange-500 text-sm font-bold">
                discount
                </NavLink>for your deal?</button>
            )
            }
            <button 
              onClick={()=>{
              if(!user || user==='undefined'){
                toast.error("log in to use this ")
                return;
              }
              orderAll();
                }} 
              className='btn-solid w-full mt-8 !rounded-md py-2' >payment
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Pricing;