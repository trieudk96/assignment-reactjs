import axios from "axios";
import AppConfig from "../AppConfig";

const httpClient = axios.create({
    baseURL: AppConfig.baseUrl,
    timeout:AppConfig.timeout || 1000,
    headers: {'Authorization': AppConfig.AuthenHeader()},
});

httpClient.interceptors.response.use(response=>response.data,error=>{
    console.log(error);
    if(!!error.response && error.response.status === 401) {
        
    }
    return Promise.reject(error)
})




export default httpClient;