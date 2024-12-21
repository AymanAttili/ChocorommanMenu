import { Grid2 as Grid, Typography } from "@mui/material"
import { CiCoffeeCup } from "react-icons/ci"

function DrinkCard({ flavour, openPicture }) {
    return (
        <Grid container flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'} gap={2} size={6} padding={2} onClick={() => openPicture(flavour.image)}>
            <Grid container flexDirection={'column'} alignItems={'center'}>
                <img width={110} height={180} src={flavour.image} />
                <Typography variant="h5" fontWeight={900} textAlign={'center'}>
                    {flavour.name}
                </Typography>
            </Grid>
            <Grid container size={12} flexDirection={'row'} justifyContent={'center'} spacing={2}>
                {
                    flavour?.prices?.s &&
                    <Grid container alignItems={'end'} justifyContent={'center'} spacing={0}>
                        <Typography fontWeight={900} textAlign={'center'}>
                            {flavour.prices.s}
                        </Typography>
                        <CiCoffeeCup fontSize={25} />
                    </Grid>
                }
                {
                    flavour?.prices?.l &&
                    <Grid container alignItems={'end'} justifyContent={'center'} spacing={0}>
                        <Typography fontWeight={900} textAlign={'center'}>
                            {flavour.prices.m}
                        </Typography>
                        <CiCoffeeCup fontSize={30} color={flavour.prices.m ? '' : "grey"} />
                    </Grid>
                }
                {
                    flavour?.prices?.l &&
                    <Grid container alignItems={'end'} justifyContent={'center'} spacing={0}>
                        <Typography fontWeight={900} textAlign={'center'}>
                            {flavour.prices.l}
                        </Typography>
                        <CiCoffeeCup fontSize={40} />
                    </Grid>
                }
            </Grid>
        </Grid >
    )
}

export default DrinkCard