import axios from './axios.js';

//const API = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/`;


export const registerReq = (user) => axios.post(`/register`, user);

export const loginReq = (user) => axios.post(`/login`, user);

export const profileReq = () => axios.get(`/verify`);


//USER URL

export const getProducts = () => axios.get(`/api/Products`)
export const getProductsById = (id) => axios.get(`/api/Products/${id}`)

export const getReservesById = () => axios.get(`/api/Reserves/${id}`)

export const getReservesByDiferentParam = (info) => axios.post(`/api/Reserves/search`, info)


export const getLoansByDiferentParam = (info) => axios.post(`/api/Loans/search`, info)

export const postReserves = (reserve) => axios.post(`/api/Reserves`, reserve)

export const getLoansById = () => axios.get(`/api/Loans/${id}`)
export const postLoans = (loan) => axios.post(`/api/Loans`, loan)

//Employees URL
export const postProduct = (book) => axios.post(`api/Products`, book)
export const requestLoans = (book) => axios.put(`api/Loans/requestEmployee`, book)

export const getAllUsers = () => axios.get(`api/User/`)
export const getAllEmployee = () => axios.get(`api/User/Empleado`)
export const deleteUser = (data) => axios.delete(`api/User/${data}`)
