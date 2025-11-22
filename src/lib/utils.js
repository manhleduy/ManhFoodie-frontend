import { api } from "./axios";
import { useAppContext } from "../context/AppContext";


export const CreateNewUser= async(setLoading, setError,userInfo,setResponse)=>{
    try{
        const res= await api.post('/user/users/signup',userInfo);
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e)
        console.log("can not create your account right now", e);
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const HandleSignIn= async(setLoading, setError, SigninInfo,setUser)=>{
    try{
        const res= await api.post(`/user/users/signin`, SigninInfo)
        
        setLoading(true);
        setUser(res.data);
    }catch(e){
        setError(e)
        console.log("can not find This user", e);
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const HandleSignOut= async( setLoading, setError)=>{
    try{
        const res= await api.post('/user/users/signout');
        setLoading(true);
    }catch(e){
        setError(e);
        console.log("cannot log out now, try later", e);
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const HandleGetUserData= async(setLoading, setError, setUser,OTPmodule)=>{
    try{
        let res;
        let data;
        if(!OTPmodule.isUse){
            data = localStorage.getItem('email')|| null
             if(!OTPmodule.isUse){
                data= JSON.parse(data);
            }
        }else{  
            data= {email: OTPmodule.email}
            
        }
        res=await api.post(`/user/users/info`, data);
        setLoading(true); 
        setUser(res.data);
    }catch(e){
        setError(e)
        console.log("Cannot getting your information now", e);
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const HandleGetOrderInfo= async( setLoading, setError, setTotalOrder, setTotalFood, setExpense,setDistributeTable)=>{
    try{
        let data =localStorage.getItem('email')|| null
        if(data && data!=="undefined")  data= JSON.parse(data);
        setLoading(true);
        const ordernum= await api.post('/user/orders/ordernum', data);
        const expenseTable= await api.post('/user/orders/expense', data)||[];
        const categoryDistributeTable= await api.post("/user/orders/piechart", data)||[];
        const {orderNum,foodamount}= ordernum.data;
        const {ExpenseTable}= expenseTable.data;
        const {CategoryDistributeTable}= categoryDistributeTable.data;
        setTotalOrder(orderNum);
        setTotalFood(foodamount);
        setExpense(ExpenseTable);
        
        setDistributeTable(CategoryDistributeTable);
    }catch(e){
        setError(e);
        console.log("can not lead you to the dashboard now");
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const updateUserInfo=async( setLoading, setError, data)=>{
    try{
        setLoading(true)
        const res = await api.put(`/user/users`, data);
        return res
    }catch(e){
        setError(e)
        console.log("Cannot update a new order now, sorry for this discomfort",e)

    }finally{
        setError(null);
        setLoading(false)
    }
}

export const GetFoods= async(setError, setLoading,setFoods)=>{
    try{
        const res= await api.get('/user/food')||[];
        setLoading(true);
        setFoods(res.data.foods[0]);
        
    }catch(e){
        console.log(e);
        setError(e)

    }finally{
        setLoading(false);
        setError(null);
    }
}


export const GetOrders= async(setError, setLoading,setOrders)=>{
    try{
        let data = await localStorage.getItem('email')|| null
        if(data && data!=="undefined")  data= JSON.parse(data).email;
        
        const res=await api.get(`/user/orders/${data}`);

        setLoading(true);
        setOrders(res.data);
    }catch(e){
        setError(e)
        console.log("Cannot getting your information now", e);
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const createOrder= async(setError, setLoading, order)=>{
    try{
        setLoading(true)
        
        const res = await api.post('/user/orders', order);
            console.log('Order created:', res.data);
        return res
    }catch(e){
        setError(e)
        console.log("Cannot add a new order now, sorry for this discomfort")

    }finally{
        setError(null);
        setLoading(false)
    }
}
export const deleteOrder= async(setError, setLoading, id)=>{
    try{
        const res= await api.delete(`/user/orders/${id}`);
        setLoading(true);
    }catch(e){
        setError(e)
        console.log("Cannot getting your information now", e);
    }finally{
        setError(null);
        setLoading(false)
    } 
}
export const updateOrder= async(order,setError, setLoading,id)=>{
    try{
        setLoading(true)
        
        const res = await api.put(`/user/orders/${id}`, order, {
            headers: { 'Content-Type': 'application/json' }
            });
            console.log('Order created:', res.data);

    }catch(e){
        setError(e)
        console.log("Cannot update a new order now, sorry for this discomfort")

    }finally{
        setLoading(false)
    }try{
        setError(false)
        setLoading(true)
        
        const res = await api.put(`/user/orders/${id}`, order, {
            headers: { 'Content-Type': 'application/json' }
            });
            console.log('Order created:', res.data);

    }catch(e){
        setError(true)
        console.log("Cannot update a new order now, sorry for this discomfort")

    }finally{
        setLoading(false)
    }
}

export const sendOTPemail= async( setError, setLoading, data)=>{
    try{
        
        const res= await api.post("/user/recoveryEmail/OTPemail",data)
        setLoading(true)
    }catch(e){
        setError(e)
        console.log(e);
        console.log("cannot send OTP mail to you")

    }finally{
        setError(null);
        setLoading(false);
    }
}
export const sendUserEmail= async( setError, setLoading, data)=>{
    try{
        
        const res= await api.post("/user/sendEmail",data)
        setLoading(true)
    }catch(e){
        setError(e)
        console.log(e);
        console.log("cannot send OTP mail to you")

    }finally{
        setError(null);
        setLoading(false);
    }
}
export const verifyOTP= async( setError, setLoading,setResponse, data)=>{
    try{
        const res= await api.post("/user/recoveryEmail/verifyOTP",data)
        setLoading(true)
        setResponse(res);
        
        return res.data
        
    }catch(e){
        console.log(e)
        setError(e)
        console.log("cannot send OTP mail to you error")
        

    }finally{
        setError(null);
        setLoading(false);
    }
}

export const ResetOTP = async(setError, setLoading)=>{
    try{
        const res= await api.get("/user/recoveryEmail/resetOTP")
        
        setLoading(true)
    }catch(e){
        setError(e)
        console.log("cannot send OTP mail to you error")

    }finally{
        setError(null);
        setLoading(false);
    }
}
export const GetDiscounts= async(setError, setLoading,setDiscounts)=>{
    try{
        const res=await api.get('/user/discounts');
        setLoading(true);
        setDiscounts(res.data.discounts[0]);
    }catch(e){
        setError(e)
        console.log("Cannot getting your information now", e);
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const GetDiscountById= async(id,setError, setLoading,setDiscount)=>{
    try{
        const res= await api.get(`/user/discounts/${id}`);
        setLoading(true);
        setDiscount(res.data);
    }catch(e){
        setError(e)
        console.log("Cannot getting your information now", e);
    }finally{
        setError(null);
        setLoading(false)
    } 
}


