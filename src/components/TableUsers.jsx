import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Box, ButtonGroup, Button } from "@mui/material";
import { useProducts } from "../context/userContext";

//import reservas from "../API/JSON/reserves.json";

export default function TableUsers(props) {
    let data = props.data
    let loan = props.loan
    
    const { HandleDeleteById } = useProducts()

    if (loan) {
        if (data.length <= 0) {
            return (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center', // Centrar horizontalmente
                    alignItems: 'center',     // Centrar verticalmente
                    height: '100vh'
                }}>
                    <Alert severity="info">
                        <AlertTitle>No hay datos</AlertTitle>
                        Prueba a solicitar <strong>check it out!</strong>
                    </Alert>
                </Box>
            )
        } else {
            return (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="limitar-ancho" align="center">Name</TableCell>
                                <TableCell className="limitar-ancho" align="center">Email</TableCell>
                                <TableCell className="limitar-ancho" align="center">Product</TableCell>
                                <TableCell className="limitar-ancho" align="center">Serial</TableCell>
                                <TableCell className="limitar-ancho" align="center">Fecha Inicio</TableCell>
                                <TableCell className="limitar-ancho" align="center">Fecha Fin</TableCell>
                                <TableCell className="limitar-ancho" align="center">Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            
                            {data.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {(row.User.name === "") ? "Not Found" : row.User.name}
                                    </TableCell>
                                    <TableCell className="limitar-ancho" align="center">{(row.User.email === "") ? "Not Found" : row.User.email}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{row.Product.name}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{row.Product.serial}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{row.beguinDate}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{row.endDate}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{
                                        (() => {
                                            switch (row.state) {
                                                case "aprobada":
                                                    return (
                                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400  border-blue-400">
                                                            {row.state}
                                                        </span>
                                                    );
                                                case "completada":
                                                    return (
                                                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                            {row.state}
                                                        </span>
                                                    );
                                                case "rechazada":
                                                    return (
                                                        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                            {row.state}
                                                        </span>
                                                    );
                                                case "pendiente":
                                                    return (
                                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-yellow-300  border-yellow-300">
                                                            {row.state}
                                                        </span>
                                                    );
                                                case "vencida":
                                                    return (
                                                        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400  border-gray-500">
                                                            {row.state}
                                                        </span>
                                                    );
                                                default:
                                                    return row.state; // Valor por defecto si no coincide con ningún caso
                                            }
                                        })()

                                    }
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            )
        }
    } else {
        if (data.length <= 0) {
            return (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center', // Centrar horizontalmente
                    alignItems: 'center',     // Centrar verticalmente
                    height: '100vh'
                }}>
                    <Alert severity="info">
                        <AlertTitle>No hay datos</AlertTitle>
                        No tienes reservas <strong>check it out!</strong>
                    </Alert>
                </Box>
            )
        } else {
            return (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="limitar-ancho" align="center">Username</TableCell>
                                <TableCell className="limitar-ancho" align="center">Name</TableCell>
                                <TableCell className="limitar-ancho" align="center">lastname</TableCell>
                                <TableCell className="limitar-ancho" align="center">email</TableCell>
                                <TableCell className="limitar-ancho" align="center">phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {(row.username === "") ? "Not Found" : row.username}
                                    </TableCell>
                                    <TableCell className="limitar-ancho" align="center">{(row.name === "") ? "Not Found" : row.name}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{row.lastname}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{row.email}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{row.phone}</TableCell>
                                    <TableCell className="limitar-ancho" align="center">{
                                        <ButtonGroup size="small" variant="contained" >
                                            <Button color="error" onClick={()=> HandleDeleteById( row.email)}> Eliminar</Button>
                                        </ButtonGroup>
                                    }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

    }
}

