//user routers
import { Router } from "express";
import { getDataUserV1, getDataProductV1, getDataReserveV1, getDataLoanV1 } from "../controllers/v1/UserV1.js";
const appUser = Router();

appUser.get('/profile', getDataUserV1);
appUser.get('/products', getDataProductV1);
appUser.get('/reserves', getDataReserveV1);
appUser.get('/loans', getDataLoanV1);


export default appUser  