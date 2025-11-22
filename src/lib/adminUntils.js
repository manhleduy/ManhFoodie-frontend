import { api } from "./axios";

export const getAllUser=async(setError, setLoading, setResponse)=>{
     try{
        const res= await api.get('/admin/users');
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const getUserStatistic=async (setError, setLoading, setResponse)=>{
    try{
        const res= await api.get('/admin/users/statis');
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }

}
export const getAllFoods=async(setError, setLoading, setResponse)=>{
    try{
        const res= await api.get('/admin/food')||[];
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e)
        console.log("Cannot getting your information now", e);
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const createFood=async(setError, setLoading, setResponse, data)=>{
    try{
        const res= await api.post('/admin/food', data);
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const updateFood=async(setError, setLoading, setResponse, id, data)=>{
    try{
        const res= await api.put(`/admin/food/${id}`, data);
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const deleteFood=async(setError, setLoading, setResponse, id)=>{
    try{
        const res= await api.delete(`/admin/food/${id}`);
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const getAllOrders=async(setError, setLoading, setResponse)=>{
    try{
        const res= await api.get('/admin/orders');
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const getOrderStatistic=async(setError, setLoading, setResponse)=>{
    try{
        const res= await api.get('admin/orders/statis');
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const getAllDiscount=async(setError, setLoading, setResponse)=>{
    try{
        const res= await api.get('/admin/discounts');
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const createDiscount= async(setError, setLoading, setResponse, data)=>{
    try{
        const res= await api.post('/admin/discounts', data);
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const updateDiscount=async(setError, setLoading, setResponse, id, data)=>{
    try{
        const res= await api.put(`/admin/discounts/${id}`, data);
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const deleteDiscount=async(setError, setLoading, setResponse, id)=>{
    try{
        const res= await api.delete(`/admin/discounts/${id}`);
        setLoading(true);
        setResponse(res.data);
    }catch(e){
        setError(e);
        console.log("cannot getting the use statistic now")
    }finally{
        setError(null);
        setLoading(false);
    }
}