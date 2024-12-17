import { Avatar, Button, Grid2 as Grid, Typography } from "@mui/material"
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

import logo from '../images/logo.jpg'
import { AcUnit, Bedtime, Cookie } from "@mui/icons-material";
import { FaBottleDroplet } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function MainMenu() {
    const navigate = useNavigate();
    return (

        <Grid container padding={2} flexDirection={'column'} alignItems={'center'} spacing={3} justifyContent={'start'} minHeight={'100dvh'} >
            <Avatar src={logo} sx={{
                width: 200,
                height: 200,
                marginY: 4,
                boxShadow: 8
            }} />
            <Grid component={Button} container size={12} spacing={2} color={'secondary.main'} bgcolor={'primary.main'} padding={4} borderRadius={5} boxShadow={8} onClick={() => navigate('cold')}>
                <Typography fontWeight={700} fontSize={22}>
                    المشروبات الباردة
                </Typography>
                <AcUnit fontSize={'large'} />
            </Grid>
            <Grid component={Button} container size={12} spacing={2} color={'primary.main'} bgcolor={'secondary.main'} padding={4} borderRadius={5} boxShadow={8} onClick={() => navigate('hot')}>
                <Typography fontWeight={700} fontSize={22}>
                    المشروبات الساخنة
                </Typography>
                <EmojiFoodBeverageIcon fontSize={'large'} />
            </Grid>
            <Grid component={Button} disabled container size={12} spacing={2} color={'secondary.main'} bgcolor={'primary.main'} padding={4} borderRadius={5} boxShadow={8} onClick={() => navigate('mojito')}>
                <Typography fontWeight={700} fontSize={22}>
                    أصناف الموهيتو
                </Typography>
                <FaBottleDroplet fontSize={32} />
            </Grid>
            <Grid component={Button} disabled container size={12} spacing={2} color={'primary.main'} bgcolor={'secondary.main'} padding={4} borderRadius={5} boxShadow={8} onClick={() => navigate('ramadan')}>
                <Typography fontWeight={700} fontSize={22}>
                    أصناف رمضانية
                </Typography>
                <Bedtime fontSize={'large'} />
            </Grid>
            <Grid component={Button} disabled container size={12} spacing={2} color={'secondary.main'} bgcolor={'primary.main'} padding={4} borderRadius={5} boxShadow={8} onClick={() => navigate('dessert')}>
                <Typography fontWeight={700} fontSize={22}>
                    الحلويات
                </Typography>
                <Cookie fontSize={'large'} />
            </Grid>
        </Grid>
    )
}

export default MainMenu