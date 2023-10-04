import axios from './axios.js';

//const API = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/`;


export const registerReq = (user) => axios.post(`/register`, user);

export const loginReq = (user) => axios.post(`/login`, user);

export const profileReq = () => axios.get(`/verify`);


//USER URL

export const getProducts = () => axios.get(`/api/Products`)
export const getProductsById = (id) => axios.get(`/api/Products/${id}`)

export const getReservesById = () => axios.get(`/api/Reserves/${id}`)
export const postReserves = (reserve) => axios.post(`/api/Reserves`, reserve)

export const getLoansById = () => axios.get(`/api/Loans/${id}`)
export const postLoans = (loan) => axios.post(`/api/Loans`, loan)


