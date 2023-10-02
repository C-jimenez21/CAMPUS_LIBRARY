//user routers
import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
import { getDataLoanV1, getDataReserveV1, getDataReserveById, getDataReserveByDate, getDataReserveByDiferentParam, postReserve, deleteReserveById, getDataLoanById, getDataLoanByDiferentParam, getDataLoanByDate, postLoan, deleteLoanById} from "../controllers/v3/LoansAndReserves.js";
import { reserveSchema, loanSchema } from "../validation/loanReservesSchemas.js";

const appLoans = Router();
const appReserves = Router();

//LOANS
appLoans.get('/', getDataLoanV1);
appLoans.get('/:id', getDataLoanById);
appReserves.get('/search', getDataLoanByDiferentParam);
appReserves.get('/date', getDataLoanByDate);
appLoans.post('/', validateSchema(loanSchema), postLoan);
appLoans.delete('/:id', deleteLoanById);

//RESERVES
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