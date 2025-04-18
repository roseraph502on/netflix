import axios from "axios";


// Vite 환경변수는 import.meta.env 객체에서 가져옴
const API_KEY = import.meta.env.VITE_API_KEY;
// const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Accept:'application/json',
        Authorization:`Bearer ${API_KEY}`,
    }
})

api.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

  export default api;