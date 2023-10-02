import axios from "axios";


const API = "http://127.10.10.10:5006";
console.log(API);

const instance = axios.create({
    baseURL: API,
    withCredentials: true
})
export default instance