import { Grid2 as Grid, Typography } from "@mui/material"
import { CiCoffeeCup } from "react-icons/ci"

function DrinkCard({ drink, openPicture }) {
    return (
        <Grid container flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'} gap={2} size={6} padding={2} onClick={() => openPicture(drink.image)}>
            <Grid container flexDirection={'column'}>
                <img width={110} height={180} src={drink.image} />
                <Typography variant="h5" fontWeight={900} textAlign={'center'}>
                    {drink.name}
                </Typography>
            </Grid>
            <Grid container size={12} flexDirection={'row-reverse'} justifyContent={'space-around'}>
                {
                    drink?.prices?.s &&
                    <Grid container alignItems={'end'} justifyContent={'center'}>
                        <CiCoffeeCup fontSize={25} />
                        <Typography fontWeight={900} textAlign={'center'}>
                            {drink.prices.s}
                        </Typography>
                    </Grid>
                }
                <Grid container alignItems={'end'} justifyContent={'center'}>
                    <CiCoffeeCup fontSize={30} />
                    <Typography fontWeight={900} textAlign={'center'}>
                        {drink.prices.m ? drink.prices.m : 'X'}
                    </Typography>
                </Grid>
                {
                    drink?.prices?.l &&
                    <Grid container alignItems={'end'} justifyContent={'center'}>
                        <CiCoffeeCup fontSize={40} />
                        <Typography fontWeight={900} textAlign={'center'}>
                            {drink.prices.l}
                        </Typography>
                    </Grid>
                }
            </Grid>
        </Grid >
    )
}

export default DrinkCard