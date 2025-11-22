import axios from "axios"
let accessToken=null;
let isRefreshing = false;
let failedQueue = [];
export const api=axios.create({
    baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}/api`,
    header:{
        'Content-Type': 'application/json'
    },
    withCredentials: true
})
console.log(import.meta.env.REACT_APP_BACKEND_URL)
api.interceptors.request.use(config => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) =>{
    if(response.data.accessToken){
      accessToken= response.data.accessToken;
    }
    return response
  },
  async (error) => {
    
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        const res = await api.get('user/refreshToken');
        
        accessToken = res.data.accessToken;
        processQueue(null, accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
