//user routers
import { Router } from "express";
import { getDataUserV1, getDataReserveV1, getDataLoanV1 } from "../controllers/v1/UserV1.js";
import { validateToken } from "../middlewares/Token.js";
const appUser = Router();


appUser.get('/profile', validateToken, getDataUserV1);

appUser.get('/pruebas', getDataUserV1);


export default appUser  