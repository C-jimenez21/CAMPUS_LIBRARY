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
import { Box } from "@mui/material";

//import reservas from "../API/JSON/reserves.json";

export default function BasicTable(props) {
    let data = props.data
    let loan = props.loan
    if(loan){
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
                                    <TableCell className="limitar-ancho" align="center">{row.endDate }</TableCell> 
                                    <TableCell className="limitar-ancho" align="center">{row.state}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    }else {
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
                                <TableCell className="limitar-ancho" align="center">Name</TableCell>
                                <TableCell className="limitar-ancho" align="center">Email</TableCell>
                                <TableCell className="limitar-ancho" align="center">Product</TableCell>
                                <TableCell className="limitar-ancho" align="center">Serial</TableCell>
                                <TableCell className="limitar-ancho" align="center">Fecha Reserva</TableCell>
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
                                    <TableCell className="limitar-ancho" align="center">{row.reservedDate}</TableCell>
                                    
    
                                    <TableCell className="limitar-ancho" align="center">{row.state}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

    }
}

