import { Grid2 as Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

import logo from '../images/logo.jpg'

function ColdPage() {
    return (
        <Grid >
            <Typography variant="h4" padding={2} textAlign={'center'} fontWeight={700} >
                الأصناف المتاحة
            </Typography>
            <TableContainer sx={{ borderTop: 2 }}>
                <Table sx={{ direction: 'rtl' }}>
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ textAlign: 'right', fontSize: 18 }}>
                                الصنف
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontSize: 18 }}>
                                الأسعار
                            </TableCell>
                            <TableCell sx={{ width: 50, textAlign: 'right', fontSize: 18 }}>
                                صورة
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                براد بطعم العلكة
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                1/2/3/4/5
                            </TableCell>
                            <TableCell sx={{ width: 50, textAlign: 'right' }}>
                                <img width={30} src={logo} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default ColdPage