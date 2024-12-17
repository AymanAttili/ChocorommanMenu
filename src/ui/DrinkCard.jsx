import { Grid2 as Grid, Typography } from "@mui/material"

function DrinkCard({ drink, openPicture }) {
    return (
        <Grid container flexDirection={'column'} alignItems={'center'} size={6} padding={2} onClick={() => openPicture(drink.image)}>
            <img width={110} height={180} src={drink.image} />
            <Typography variant="h5" fontWeight={900} textAlign={'center'}>
                {drink.name}
            </Typography>
        </Grid>
    )
}

export default DrinkCard