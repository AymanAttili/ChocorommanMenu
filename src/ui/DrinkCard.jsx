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
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'center'} spacing={2}>
                {
                    flavour?.prices?.s &&
                    <Grid container alignItems={'end'} justifyContent={'center'} spacing={0}>
                        <CiCoffeeCup fontSize={25} />
                        <Typography fontWeight={900} textAlign={'center'}>
                            {flavour.prices.s}
                        </Typography>
                    </Grid>
                }
                {
                    flavour.prices &&
                    <Grid container alignItems={'end'} justifyContent={'center'} spacing={0}>
                        <CiCoffeeCup fontSize={30} color={flavour.prices.m ? '' : "grey"} />
                        <Typography fontWeight={900} textAlign={'center'}>
                            {flavour.prices.m && flavour.prices.m}
                        </Typography>
                    </Grid>
                }
                {
                    flavour?.prices?.l &&
                    <Grid container alignItems={'end'} justifyContent={'center'} spacing={0}>
                        <CiCoffeeCup fontSize={40} />
                        <Typography fontWeight={900} textAlign={'center'}>
                            {flavour.prices.l}
                        </Typography>
                    </Grid>
                }
            </Grid>
        </Grid >
    )
}

export default DrinkCard