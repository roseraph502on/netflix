import axios from "axios";
const api = axios.create({
    baseUrl:"",
    headers:{
        Accept:'',
        Authorization:`Bearer${API_KEY}`,
    }
})