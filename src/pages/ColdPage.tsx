import { Box, Grid2 as Grid, IconButton, Modal, Typography } from "@mui/material"

import slash1 from '../images/slash1.webp'
import berry from '../images/berry.png'
import watermelon from '../images/watermelon.png'
import mango from '../images/mango.png'
import kiwi from '../images/kiwi.png'
import mastik from '../images/mastik.png'
import lemonmint from '../images/lemonmint.png'
import icedcoffee from '../images/icedcoffee.png'
import passiflora from '../images/passiflora.png'
import { useState } from "react"
import { ExitToApp } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

function ColdPage() {
    const navigate = useNavigate();

    const [currentPic, setCurrentPic] = useState(slash1)
    const [openModal, setOpenModal] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const openPicture = (pic: any) => {
        setCurrentPic(pic)
        setOpenModal(true)
    }
    return (
        <Grid container flexDirection={'column'} padding={2} color="primary.main">
            <Grid container justifyContent={'end'}>
                <IconButton color="primary" size={'large'} onClick={() => navigate('/')}>
                    <ExitToApp />
                </IconButton>
            </Grid>
            <Typography variant="h3" paddingBottom={2} textAlign={'center'} fontWeight={900} >
                الأصناف المتاحة
            </Typography>
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} borderTop={3} borderBottom={3} paddingY={1}>
                <Grid size={7.5} component={Typography} sx={{ textAlign: 'right', fontSize: 22, fontWeight: 800 }}>
                    الصنف
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 22, fontWeight: 800 }}>
                    S
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 22, fontWeight: 800 }}>
                    M
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 22, fontWeight: 800 }}>
                    L
                </Grid>
            </Grid>
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} paddingY={2}>
                <Grid size={7.5} component={Typography} sx={{ textAlign: 'right', fontSize: 18, fontWeight: 700 }}>
                    سلاش
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18, fontWeight: 700 }}>
                    2.5
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18, fontWeight: 700 }}>
                    4
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18, fontWeight: 700 }}>
                    6
                </Grid>
            </Grid>


            <Grid container size={12} flexDirection={'row-reverse'} borderBottom={3}>
                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(mastik)}>
                    <img width={120} height={180} src={mastik} />
                    <Typography variant="h6">
                        علكة ماستيك
                    </Typography>
                </Grid>

                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(berry)}>
                    <img width={120} height={180} src={berry} />
                    <Typography variant="h6">
                        توت
                    </Typography>
                </Grid>

                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(mango)}>
                    <img width={120} height={180} src={mango} />
                    <Typography variant="h6">
                        مانجو
                    </Typography>
                </Grid>
                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(kiwi)}>
                    <img width={120} height={180} src={kiwi} />
                    <Typography variant="h6">
                        كيوي
                    </Typography>
                </Grid>

                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(watermelon)}>
                    <img width={110} height={180} src={watermelon} />
                    <Typography variant="h6">
                        بطيخ
                    </Typography>
                </Grid>
            </Grid>

            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} paddingY={2}>
                <Grid size={7.5} component={Typography} sx={{ textAlign: 'right', fontSize: 18, fontWeight: 700 }}>
                    آيس كوفي
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18, fontWeight: 700 }}>
                    5
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18, fontWeight: 700 }}>
                    7
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18, fontWeight: 700 }}>
                    9
                </Grid>
            </Grid>
            <Grid container size={12} justifyContent={'center'} borderBottom={3}>

                <Grid container flexDirection={'column'} alignItems={'center'} padding={2} onClick={() => openPicture(icedcoffee)}>
                    <img width={120} height={180} src={icedcoffee} />
                    <Typography variant="h6">
                        آيس كوفي
                    </Typography>
                </Grid>
            </Grid>

            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} paddingY={2}>
                <Grid size={7.5} component={Typography} sx={{ textAlign: 'right', fontSize: 18 }}>
                    بسفلورا
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18 }}>
                    5
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18 }}>
                    7
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18 }}>
                    9
                </Grid>
            </Grid>
            <Grid container size={12} justifyContent={'center'} borderBottom={3}>
                <Grid container flexDirection={'column'} alignItems={'center'} padding={2} onClick={() => openPicture(passiflora)}>
                    <img width={180} height={180} src={passiflora} />
                    <Typography variant="h6">
                        بسفلورا
                    </Typography>
                </Grid>
            </Grid>

            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} paddingY={2}>
                <Grid size={7.5} component={Typography} sx={{ textAlign: 'right', fontSize: 18 }}>
                    عصائر طبيعية
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18 }}>
                    5
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18 }}>
                    7
                </Grid>
                <Grid size={1.5} component={Typography} sx={{ textAlign: 'center', fontSize: 18 }}>
                    9
                </Grid>
            </Grid>
            <Grid container size={12} justifyContent={'center'} borderBottom={3}>
                <Grid container flexDirection={'column'} alignItems={'center'} padding={2} onClick={() => openPicture(lemonmint)}>
                    <img width={180} height={180} src={lemonmint} />
                    <Typography variant="h6">
                        ليمون ونعنع
                    </Typography>
                </Grid>
            </Grid>

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