//user routers
import { Router } from "express";
import { getDataUserV1 } from "../controllers/v1/UserV1.js";
const appUser = Router();

appUser.get('/profile', getDataUserV1);

export default appUser