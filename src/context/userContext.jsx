import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getProductsById, getLoansById, getReservesById, postLoans, postReserves } from "../API/auth";
import { useAuth } from "./authContext";
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
    const [errors, setErrors] = useState([])


    const getProductID = async (id) => {
        try {
            const res = await getProductsById(id)
            setProduct(res.data[0])
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const postLoanUser = async (data) => {
        try {
            const res = await postLoans(data)
            setProduct(res.data)
            console.log(res);
        } catch (errors) {
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
                errors

            }}>
                {children}
            </UserContext.Provider>
        </>
    )
}