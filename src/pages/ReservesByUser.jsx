import React, { useEffect, useState } from 'react'
import { getReservesByDiferentParam } from '../API/auth'
import { useAuth } from '../context/authContext'
import BasicTable from '../components/TableReserves'
import { Container, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

export default function ReservesByUser() {
    const [reserve, setReserve] = useState([])
    const [isLoad, setLoad] = useState(true)

    const { user } = useAuth()
    console.log(reserve);
    const BringData = async () => {
        try {
            console.log(user);
            const body = { "field": "user", "value": user.email }
            console.log(body);
            const res = await getReservesByDiferentParam(body)
            setReserve(res.data)
            setLoad(false)
            console.log({"respuesta pagina": res});
        } catch (error) {
            console.log(error);
            setLoad(false);

        }
    }

    useEffect(() => {
        BringData()
        console.log("cuantas veces esta llamando a la aapi...");
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
                    <BasicTable data={reserve} loan={false} />
                )
                }
            </Container>
        </>

    )
}
