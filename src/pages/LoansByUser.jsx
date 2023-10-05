import React, { useEffect, useState } from 'react'
import { getLoansByDiferentParam } from '../API/auth'
import { useAuth } from '../context/authContext'
import BasicTable from '../components/TableReserves'
import { Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";


export default function LoansByUser() {
    const [LoansData, setLoans] = useState([])
    const [isLoad, setLoad] = useState(true)

    const { user } = useAuth()
    console.log(LoansData);
    const BringData = async () => {
        try {
            console.log(user);
            const body = { "field": "user", "value": user.email }
            console.log(body);
            const res = await getLoansByDiferentParam(body)
            setLoans(res.data)
            setLoad(false)

        } catch (error) {
            console.log(error);
            setLoad(false);

        }
    }

    useEffect(() => {
        BringData()
    }, [])



    return (

        <>
            <Container maxWidth="xl" sx={{ mt: 5 }}>
                {isLoad ? (<Box sx={{
                    display: 'flex',
                    justifyContent: 'center', // Centrar horizontalmente
                    alignItems: 'center',     // Centrar verticalmente
                    height: '70vh'
                }}>
                    <CircularProgress />
                </Box>
                ) : (
                    <BasicTable data={LoansData} loan={true} />
                )
                }
            </Container>
        </>

    )
}
