import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {loadEnv} from 'vite'

import appUser from './routes/user.js';


const env = loadEnv('development', process.cwd(), "VITE");

const appExpress = express()

appExpress.use(express.json())
appExpress.use(morgan('dev'))
appExpress.use(cors('*'))


appExpress.use('/', appUser)


const config = {
    port: env.VITE_PORT_BACKEND,
    hostname: env.VITE_HOSTNAME
}
appExpress.listen(config, () =>{
    console.log(`listening on http://${config.hostname}:${config.port}`);
})