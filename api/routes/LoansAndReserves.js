//user routers
import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
import { getDataLoanV1, getDataReserveV1, getDataReserveById, getDataReserveByDate, getDataReserveByDiferentParam, postReserve, deleteReserveById, getDataLoanById, getDataLoanByDiferentParam, getDataLoanByDate, postLoan, deleteLoanById, updateLoan} from "../controllers/v3/LoansAndReserves.js";
import { reserveSchema, loanSchema } from "../validation/loanReservesSchemas.js";
import { validateToken} from "../middlewares/token.js";
const appLoans = Router();
const appReserves = Router();

//LOANS
appLoans.get('/', validateToken, getDataLoanV1);
appLoans.put('/requestEmployee', validateToken, updateLoan);
appLoans.get('/:id', validateToken, getDataLoanById);
appLoans.post('/search', validateToken,  getDataLoanByDiferentParam);
appLoans.get('/date',validateToken ,getDataLoanByDate);
appLoans.post('/', validateToken, validateSchema(loanSchema), postLoan);
appLoans.delete('/:id', validateToken ,deleteLoanById);

//RESERVES
appReserves.get('/', validateToken, getDataReserveV1);
appReserves.post('/search', validateToken, getDataReserveByDiferentParam);
appReserves.get('/date', validateToken, getDataReserveByDate);
appReserves.get('/:id', validateToken, getDataReserveById);
appReserves.post('/', validateToken, validateSchema(reserveSchema), postReserve);
appReserves.delete('/:id', validateToken, deleteReserveById);


export {
    appLoans,
    appReserves
} 