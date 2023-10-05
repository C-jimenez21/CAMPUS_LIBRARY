import { createContext, useState, useContext, useEffect } from "react";
import { registerReq, loginReq, profileReq } from "../API/auth";
import Cookies from 'js-cookie'

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
         throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children})=>{
    const [user,  setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticaded] = useState(false);
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)
    
    
 const signUpRegister = async(user) => {
        try {
            const res =  await registerReq(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticaded(true)
            //setLoading(false)
        } catch (errors) {
            console.log(errors);
            console.log(errors.response.data.error);
            setErrors(errors.response.data.error);
        }
    }

 const signInLogin = async(user) => {
        try {
            const res =  await loginReq(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticaded(true)
            //setLoading(false)
        } catch (errors) {
            console.log(errors.response.data.error);
            setErrors(errors.response.data.error);
        }
    }

    const empleadoRegister = async(user) => {
        try {
            const res =  await registerReq(user);
            alert(res.data.message);
        } catch (errors) {
            console.log(errors);
            setErrors(errors.response.data.error);
        }
    }




const logOut = () => {
    Cookies.remove("token");
    setIsAuthenticaded(false);
    setUser(null);
}

//Limpia los errores despues de cierto tiempo
 useEffect(() => {
    if(errors.length > 0){
        const timer = setTimeout(() =>{
            setErrors([])
        }, 5000)
        return () => clearTimeout(timer)
    }
 }, [errors])

 useEffect(() =>{
   async function checkLogin(){
    const cookies = Cookies.get()
    console.log(cookies);
    if(!cookies.token){
        setIsAuthenticaded(false)
        setLoading(false)
        return setUser(null)
    }

        try {
           const response = await profileReq() 
            if(!response.data){
                setIsAuthenticaded(false);
                setLoading(false);
                return
            }
            
            setUser(response.data)
            setIsAuthenticaded(true)
            setLoading(false)
            //if(!response.data) setIsAuthenticaded(false)
        } catch (error) {
            console.log({"erorr de axiois":error});
            setIsAuthenticaded(false)
            setLoading(false)
            setUser(null)

        }
    }
   checkLogin()
 }, [])
    
    return (
        <AuthContext.Provider value={{
            user,
            signUpRegister,
            isAuthenticated,
            errors,
            loading,
            logOut,
            setErrors,
            signInLogin,
            empleadoRegister
        }}>
            {children}
        </AuthContext.Provider>
    )
}