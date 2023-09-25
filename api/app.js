import express from 'express';
import {loadEnv} from 'vite'

const appExpress = express()

const env = loadEnv('development', process.cwd(), "VITE");
const config = {
    port: env.VITE_PORT_BACKEND,
    hostname: env.VITE_HOSTNAME
}
appExpress.listen(config, () =>{
    console.log(`listening on http://${config.hostname}:${config.port}`);
})