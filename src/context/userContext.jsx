import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getProductsById, getLoansById, getReservesById, postLoans, postReserves } from "../API/auth";
import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom";
const UserContext = createContext()

export const useProducts = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useProducts must be used  within a ProductProvider")
    }
    return context;
}

export function UserProvider({ children }) {
    const [product, setProduct] = useState([])
    const [loan, setLoan] = useState([])
    const [reserve, setReserve] = useState([])
    const [errors, setErrors] = useState([])


    const getProductID = async (id) => {
        try {
            const res = await getProductsById(id)
            setProduct(res.data[0])
            console.log(res);
        } catch (error) {
            console.log(error);
            Navigate("/Notfound")

        }
    }

    const postLoanUser = async (data) => {
        try {
            const res = await postLoans(data)
            alert(res.data.message)        
            setLoan(res.data)
            console.log(res);
        } catch (errors) {
            console.log(errors.response.data.error);
            setErrors(errors.response.data.error);
        }
    }
 
    const postReserveUser = async (data) =>{
        try {
            const res = await postReserves(data)
            alert("Se registro con exito")        
            setReserve(res.data)
            console.log(res);
        } catch (error) {
            console.log(errors.response.data.error);
            setErrors(errors.response.data.error);
        }
    }

    return (
        <>
            <UserContext.Provider value={{
                getProductID,
                product,
                postLoanUser,
                postReserveUser,
                errors

            }}>
                {children}
            </UserContext.Provider>
        </>
    )
}