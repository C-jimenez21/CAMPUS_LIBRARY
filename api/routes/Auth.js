//user routers
import { Router } from "express";
import { getDataUserV1, getDataProductV1, getDataReserveV1, getDataLoanV1 } from "../controllers/v1/UserV1.js";
const appAuth = Router();

appAuth.get('/login', getDataUserV1);
appAuth.get('/register', getDataProductV1);


export default appAuth