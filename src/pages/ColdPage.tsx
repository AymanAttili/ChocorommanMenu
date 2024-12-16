import { Box, Button, Grid2 as Grid, IconButton, Modal, Typography } from "@mui/material"

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
import { LuCupSoda } from "react-icons/lu";



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
        maxWidth: '300px',
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
            <Typography variant="h3" paddingBottom={2} paddingTop={4} textAlign={'center'} fontWeight={900} borderTop={6}>
                سلاش
            </Typography>
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} alignItems={'center'} borderBottom={1} paddingY={1}>
                <Grid size={4} component={Typography} sx={{ textAlign: 'right', fontSize: 22, fontWeight: 800 }}>
                    الأسعار
                </Grid>
                <Grid size={8} container alignItems={'end'} justifyContent={'space-around'} flexDirection={'row-reverse'}>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={30} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            2.5
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={40} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            4
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={50} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            6
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container size={12} flexDirection={'row-reverse'} paddingBottom={3}>
                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(mastik)} >
                    <img width={120} height={180} src={mastik} />
                    <Typography variant="h5" fontWeight={900} >
                        علكة ماستيك
                    </Typography>
                </Grid>

                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(berry)}>
                    <img width={120} height={180} src={berry} />
                    <Typography variant="h5" fontWeight={900}>
                        توت
                    </Typography>
                </Grid>

                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(mango)}>
                    <img width={120} height={180} src={mango} />
                    <Typography variant="h5" fontWeight={900}>
                        مانجو
                    </Typography>
                </Grid>
                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(kiwi)}>
                    <img width={120} height={180} src={kiwi} />
                    <Typography variant="h5" fontWeight={900}>
                        كيوي
                    </Typography>
                </Grid>

                <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(watermelon)}>
                    <img width={110} height={180} src={watermelon} />
                    <Typography variant="h5" fontWeight={900}>
                        بطيخ
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h3" paddingBottom={2} paddingTop={4} textAlign={'center'} fontWeight={900} borderTop={6}>
                آيس كوفي
            </Typography>
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} alignItems={'center'} borderBottom={1} paddingY={1}>
                <Grid size={4} component={Typography} sx={{ textAlign: 'right', fontSize: 22, fontWeight: 800 }}>
                    الأسعار
                </Grid>
                <Grid size={8} container alignItems={'end'} justifyContent={'space-around'} flexDirection={'row-reverse'}>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={30} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            5
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={40} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            7
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={50} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            9
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container size={12} justifyContent={'center'} paddingBottom={3}>

                <Grid container flexDirection={'column'} alignItems={'center'} padding={2} onClick={() => openPicture(icedcoffee)}>
                    <img width={120} height={180} src={icedcoffee} />
                    <Typography variant="h5" fontWeight={900}>
                        آيس كوفي
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h3" paddingBottom={2} paddingTop={4} textAlign={'center'} fontWeight={900} borderTop={6}>
                بسفلورا
            </Typography>
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} alignItems={'center'} borderBottom={1} paddingY={1}>
                <Grid size={4} component={Typography} sx={{ textAlign: 'right', fontSize: 22, fontWeight: 800 }}>
                    الأسعار
                </Grid>
                <Grid size={8} container alignItems={'end'} justifyContent={'space-around'} flexDirection={'row-reverse'}>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={30} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            5
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={40} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            7
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={50} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            9
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container size={12} justifyContent={'center'} paddingBottom={3}>
                <Grid container flexDirection={'column'} alignItems={'center'} padding={2} onClick={() => openPicture(passiflora)}>
                    <img width={180} height={180} src={passiflora} />
                    <Typography variant="h5" fontWeight={900}>
                        بسفلورا
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h3" paddingBottom={2} paddingTop={4} textAlign={'center'} fontWeight={900} borderTop={6}>
                عصائر طبيعية
            </Typography>
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-between'} alignItems={'center'} borderBottom={1} paddingY={1}>
                <Grid size={4} component={Typography} sx={{ textAlign: 'right', fontSize: 22, fontWeight: 800 }}>
                    الأسعار
                </Grid>
                <Grid size={8} container alignItems={'end'} justifyContent={'space-around'} flexDirection={'row-reverse'}>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={30} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            5
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={40} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            7
                        </Typography>

                    </Grid>
                    <Grid container flexDirection={'column'} borderRadius={1000}>
                        <LuCupSoda fontSize={50} />
                        <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                            9
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container size={12} justifyContent={'center'} paddingBottom={3}>
                <Grid container flexDirection={'column'} alignItems={'center'} padding={2} onClick={() => openPicture(lemonmint)}>
                    <img width={180} height={180} src={lemonmint} />
                    <Typography variant="h5" fontWeight={900}>
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