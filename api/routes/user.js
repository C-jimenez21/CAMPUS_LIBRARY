//user routers
import { Router } from "express";
import { getDataUserV1, getDataUserById,  } from "../controllers/v1/UserV1.js";
import { profile } from "../controllers/authentication/auth.controllers.js";
import { validateToken } from "../middlewares/token.js";
const appUser = Router();



appUser.get('/pruebas', getDataUserV1);
appUser.get('/:id', getDataUserById)


export default appUser  