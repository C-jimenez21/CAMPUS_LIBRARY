import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from "cookie-parser";

import {loadEnv} from 'vite'

import appUser from './routes/user.js';
import appAuth from './routes/Auth.js';
import appProducts from './routes/Products.js';
import { appReserves, appLoans } from './routes/LoansAndReserves.js';
const env = loadEnv('development', process.cwd(), "VITE");

const appExpress = express()

appExpress.use(express.json())
appExpress.use(morgan('dev'))
appExpress.use(cookieParser());
appExpress.use(cors('*'))

appExpress.use('/', appAuth) 

appExpress.use('/api/User', appUser)
appExpress.use('/api/Products', appProducts)
appExpress.use('/api/Loans', appLoans)
appExpress.use('/api/Reserves', appReserves)


const config = {
    port: env.VITE_PORT_BACKEND,
    hostname: env.VITE_HOSTNAME
}
appExpress.listen(config, () =>{
    console.log(`listening on http://${config.hostname}:${config.port}`);
})