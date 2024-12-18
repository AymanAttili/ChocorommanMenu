import { Box, Grid2 as Grid, IconButton, Modal, Typography } from "@mui/material"

import { useCallback, useState } from "react"
import { ExitToApp } from "@mui/icons-material"


import { useNavigate } from "react-router-dom"
import ColdDrinkCategory from "../ui/ColdDrinkCategory";
import SpinnerLoader from "../ui/SpinnerLoader";
import { useItems } from "../features/items/useItems";

function ColdPage() {
    const navigate = useNavigate();
    const { items, isLoading } = useItems(1);

    const [currentPic, setCurrentPic] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        maxWidth: '300px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const openPicture = useCallback((pic) => {
        setCurrentPic(pic)
        setOpenModal(true)
    }, [setCurrentPic, setOpenModal])



    if (isLoading)
        return <SpinnerLoader />
    return (
        <Grid container flexDirection={'column'} padding={2} color="primary.main">
            <Grid container justifyContent={'end'}>
                <IconButton color="primary" size={'large'} onClick={() => navigate('/')}>
                    <ExitToApp />
                </IconButton>
            </Grid>
            {items.map((item) => <ColdDrinkCategory key={item.id} item={item} openPicture={openPicture} />)}
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onClick={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={currentPic} alt="" width={"100%"} />
                </Box>
            </Modal>
        </Grid >
    )
}

export default ColdPage