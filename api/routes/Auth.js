//user routers
import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
//import { getDataUserV1, getDataProductV1, getDataReserveV1, getDataLoanV1 } from "../controllers/v1/UserV1.js";
import { login, profile, register } from "../controllers/authentication/auth.controllers.js";
import { registerSchema, loginSchema } from "../validation/authSchema.js";
import { validateToken } from "../middlewares/token.js";

const appAuth = Router();

appAuth.post('/login', validateSchema(loginSchema), login);
appAuth.post('/register', validateSchema(registerSchema), register);
appAuth.get('/verify', validateToken, profile )


export default appAuth