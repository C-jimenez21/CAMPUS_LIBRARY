import axios from './axios.js';

//const API = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/`;


export const registerReq = (user) => axios.post(`/register`, user);

export const loginReq = (user) => axios.post(`/login`, user);

export const profileReq = () => axios.get(`/api/User/pruebas`);