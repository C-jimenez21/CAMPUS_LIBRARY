//user routers
import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
//import { getDataUserV1, getDataProductV1, getDataReserveV1, getDataLoanV1 } from "../controllers/v1/UserV1.js";
import { getDataLoanV1, getDataReserveV1, getDataReserveById, getDataReserveByDate, getDataReserveByDiferentParam, postReserve, deleteReserveById} from "../controllers/v3/LoansAndReserves.js";
import { reserveSchema } from "../validation/loanReservesSchemas.js";

const appLoans = Router();
const appReserves = Router();


appLoans.get('/', getDataLoanV1);
//appLoans.get('/:id', getDataProductById);
//appLoans.post('/', validateSchema(productSchema), postProduct);
//appLoans.delete('/:id', deleteProductById);


appReserves.get('/', getDataReserveV1);
appReserves.get('/search', getDataReserveByDiferentParam);
appReserves.get('/date', getDataReserveByDate);
appReserves.get('/:id', getDataReserveById);
appReserves.post('/', validateSchema(reserveSchema), postReserve);
appReserves.delete('/:id', deleteReserveById);


export {
    appLoans,
    appReserves
} 