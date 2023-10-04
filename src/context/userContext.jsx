import { createContext, useContext, useState } from "react";
import { getProducts, getProductsById, getLoansById, getReservesById, postLoans, postReserves } from "../API/auth";
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


    const getProductID = async(id) => {
        try {
            const res = await getProductsById(id)
            setProduct(res.data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const postLoanUser = async(data) => {
        try {
            const res = await postLoans(data)
            setProduct(res.data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <UserContext.Provider value={{
            getProductID,
            product,
            postLoanUser

        }}>
            {children}
        </UserContext.Provider>
    )
}