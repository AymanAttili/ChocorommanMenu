import { ExitToApp } from "@mui/icons-material";
import { Box, Button, Grid2 as Grid, IconButton, Modal } from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import HotDrinkCategory from "../ui/HotDrinkCategory";
import SpinnerLoader from "../ui/SpinnerLoader";
import { useItems } from "../features/items/useItems";

function HotPage() {
    const navigate = useNavigate();
    const { items, isLoading } = useItems(2);

    const [currentPic, setCurrentPic] = useState('')
    const [showNonAvailable, setShowNonAvailable] = useState(false)
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
            <Grid container justifyContent={'space-between'} paddingY={1}>
                <IconButton color="primary" size={'large'} onClick={() => navigate('/')}>
                    <ExitToApp />
                </IconButton>
                <Button size="large" variant={showNonAvailable ? 'outlined' : 'contained'} sx={{ fontSize: 16, fontWeight: 700 }} onClick={() => setShowNonAvailable((val) => !val)}>
                    {
                        showNonAvailable ?
                            'إظهار المتوفر' :
                            'إظهار الكل'
                    }
                </Button>
            </Grid>
            {items.map((item) => <HotDrinkCategory key={item.id} item={item} openPicture={openPicture} showNonAvailable={showNonAvailable} />)}
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

export default HotPage