import { Box, Grid2 as Grid, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

import mix from '../images/mix.jpg'
import icedCoffee from '../images/icedCoffee.jpg'
import passiflora from '../images/passiflora.jpg'
import { useState } from "react"

function ColdPage() {
    const [currentPic, setCurrentPic] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const openPicture = (pic) => {
        setCurrentPic(pic)
        setOpenModal(true)
    }
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
                                sm
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontSize: 18 }}>
                                md
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontSize: 18 }}>
                                lg
                            </TableCell>
                            <TableCell sx={{ width: 50, textAlign: 'right', fontSize: 18 }}>
                                صورة
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow onClick={() => openPicture(mix)}>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                براد بطعم العلكة
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                2.5
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                4
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                6
                            </TableCell>
                            <TableCell sx={{ width: 50, textAlign: 'right' }}>
                                <img width={30} src={mix} />
                            </TableCell>
                        </TableRow>
                        <TableRow onClick={() => openPicture(passiflora)}>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                آيس بسفلورا
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                5
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                7
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                9
                            </TableCell>
                            <TableCell sx={{ width: 50, textAlign: 'right' }} >
                                <img width={30} src={passiflora} />
                            </TableCell>
                        </TableRow>
                        <TableRow onClick={() => openPicture(icedCoffee)}>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                آيس كافيه
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                5
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                7
                            </TableCell>
                            <TableCell sx={{ textAlign: 'right', fontWeight: 700 }}>
                                9
                            </TableCell>
                            <TableCell sx={{ width: 50, textAlign: 'right' }} >
                                <img width={30} src={icedCoffee} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={currentPic} alt="" width={"100%"} />
                </Box>
            </Modal>
        </Grid>
    )
}

export default ColdPage