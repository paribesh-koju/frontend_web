import axios from "axios";

//creating an instance of axios 
const Api = axios.create({
    baseURL : "http://localhost:8080",
    withCredentials : true,
    headers :{
        "Content-Type" : "application/json"
    }
});
//creating test api 

export const testApi = () => Api.get('/test')

export const newtestApi = () => Api.get('/test_new')
//http://localhost:8080/test