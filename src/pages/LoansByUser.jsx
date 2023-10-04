import React, { useEffect, useState } from 'react'
import { getReservesByDiferentParam } from '../API/auth'
import { useAuth } from '../context/authContext'
import BasicTable from '../components/TableReserves'
import { Container } from '@mui/material'

export default function LoansByUser() {
    const [reserve, setReserve] = useState([])

    const { user } = useAuth()
    console.log(reserve);
    const BringData = async () => {
        try {
            console.log(user);
            const body = { "field": "user", "value": user.email }
            console.log(body);
            const res = await getReservesByDiferentParam(body)
            setReserve(res.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        BringData()
    }, [])



    return (

        <>
            <Container maxWidth="xl" sx={{ mt: 5 }}>
                <BasicTable data={reserve} loan={false}/>
            </Container>
        </>

    )
}
