//user routers
import { Router } from "express";
import { getDataUserV1, getDataUserById, getDataEmpleadoV1, deleteUserById  } from "../controllers/v1/UserV1.js";
import { profile } from "../controllers/authentication/auth.controllers.js";
import { validateToken } from "../middlewares/token.js";
const appUser = Router();



appUser.get('/', validateToken, getDataUserV1);
appUser.get('/Empleado', validateToken, getDataEmpleadoV1);
appUser.get('/:id', validateToken ,getDataUserById)
appUser.delete('/:id', validateToken ,deleteUserById);


export default appUser  