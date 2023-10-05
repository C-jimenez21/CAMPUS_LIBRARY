//user routers
import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
//import { getDataUserV1, getDataProductV1, getDataReserveV1, getDataLoanV1 } from "../controllers/v1/UserV1.js";
import { postProduct, getDataProductV1, getDataProductById, deleteProductById } from "../controllers/v2/Product.js";
import { productSchema } from "../validation/productSchema.js";
import { validateToken } from "../middlewares/token.js";
const appProducts = Router();


appProducts.get('/', validateToken, getDataProductV1);
appProducts.get('/:id', validateToken, getDataProductById);
appProducts.post('/', validateToken, validateSchema(productSchema), postProduct);
appProducts.delete('/:id', validateToken, deleteProductById);



export default appProducts