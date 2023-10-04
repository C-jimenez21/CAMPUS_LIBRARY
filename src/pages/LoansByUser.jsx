import React, { useEffect, useState } from 'react'
import {getReservesById} from '../API/auth'
import { useAuth } from '../context/authContext'
import BasicTable from '../components/TableReserves'

export default function LoansByUser() {
    const [reserve, setReserve] = useState([])

    const {user} = useAuth()

    const BringData = async() =>{
        try {
            const data = await getReservesById(user.email)
            setReserve(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=> {
        BringData()
    }, [])
  
  
  
    return (
        
    <div>
        <BasicTable data={reserve}/>
    </div>

  )
}
