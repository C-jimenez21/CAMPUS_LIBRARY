import axios from "axios";
const config = import.meta.env

const API = "http://127.10.10.10:5006";
const Api2 = `http://${config.VITE_HOSTNAME}:${config.VITE_PORT_BACKEND}`

const instance = axios.create({
    baseURL: Api2,
    withCredentials: true
})
export default instance