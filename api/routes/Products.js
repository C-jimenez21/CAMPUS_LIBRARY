//user routers
import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
//import { getDataUserV1, getDataProductV1, getDataReserveV1, getDataLoanV1 } from "../controllers/v1/UserV1.js";
import { postProduct, getDataProductV1, getDataProductById, deleteProductById } from "../controllers/v2/Product.js";
import { productSchema } from "../validation/productSchema.js";
const appProducts = Router();


appProducts.get('/', getDataProductV1);
appProducts.get('/:id', getDataProductById);
appProducts.post('/', validateSchema(productSchema), postProduct);
appProducts.delete('/:id', deleteProductById);



export default appProducts