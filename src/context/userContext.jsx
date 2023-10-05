import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getProductsById, getLoansById, getReservesById, postLoans, postReserves, requestLoans, getLoansByDiferentParam, getAllUsers, getAllEmployee, deleteUser } from "../API/auth";
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

    const [peticiones, setPeticiones] = useState([])

    const [usuarios, setUsuarios] = useState([])

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

    const postReserveUser = async (data) => {
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


    const mostrarLoansPendientes = async () => {
        try {
            const body = { "field": "state", "value": "pendiente" }
            const res = await getLoansByDiferentParam(body);
            setPeticiones(res.data)
        } catch (error) {
            console.log(error);
            Navigate("/Notfound")

        }
    }


    const manejarPeticion = async (product, id, state) => {
        try {
            let obj = { "identificador": id, "response": state, "IDproducto": product }
            console.log(obj);
            const res = await requestLoans(obj);
            console.log({ "response: ": res, "validation": res.status === 204 });
            if (res.status === 204) {
                console.log(peticiones.filter(peticiones => peticiones._id !== peticiones));
                return setPeticiones(peticiones.filter(peticiones => peticiones._id !== id))

            }
        } catch (error) {
            console.log(error);
            alert(error.message)
            //Navigate("/Notfound")

        }
    }


    const ShowAllUsers = async () => {
        try {
            const res = await getAllUsers()
            setUsuarios(res.data)
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }


    const HandleDeleteById = async (id) => {
        try {
            const res = await deleteUser(id);
            console.log(res);
            if (res.status === 200) {
                console.log(usuarios.filter(usuarios => usuarios._id !== id));
                setUsuarios(usuarios.filter(usuarios => usuarios.id !== id))
                return  alert(`Se elimino ${usuarios.id} `)
            }
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }

    return (
        <>
            <UserContext.Provider value={{
                getProductID,
                product,
                postLoanUser,
                postReserveUser,
                errors,
                peticiones,
                mostrarLoansPendientes,
                manejarPeticion,
                usuarios,
                ShowAllUsers,
                HandleDeleteById
            }}>
                {children}
            </UserContext.Provider>
        </>
    )
}