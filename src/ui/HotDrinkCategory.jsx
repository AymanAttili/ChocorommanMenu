import { Grid2 as Grid, Typography } from "@mui/material"
import DrinkCard from "./DrinkCard";

function HotDrinkCategory({ item, openPicture, showNonAvailable }) {

    const { flavours, prices, name } = item;

    const currentDate = new Date();
    // Format the date in Arabic
    const arabicDate = new Intl.DateTimeFormat('ar-EG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(currentDate);
    return (
        <Grid>
            <Typography variant="h3" paddingBottom={2} paddingTop={4} textAlign={'center'} fontWeight={900} borderTop={6}>
                {name}
            </Typography>
            {/* <Grid container size={12} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} borderBottom={1} paddingY={1}>
                <Grid size={4} component={Typography} sx={{ textAlign: 'right', fontSize: 22, fontWeight: 800 }}>
                    الأسعار
                </Grid>
                <Grid size={8} container justifyContent={'space-around'} flexDirection={'row'}>
                    {
                        prices?.s &&
                        <Grid container flexDirection={'column'} borderRadius={1000}>
                            <CiCoffeeCup fontSize={30} />
                            <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                                {prices.s}
                            </Typography>

                        </Grid>
                    }
                    {
                        prices?.m &&
                        <Grid container flexDirection={'column'} borderRadius={1000}>
                            <CiCoffeeCup fontSize={40} />
                            <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                                {prices.m}
                            </Typography>

                        </Grid>
                    }
                    {
                        prices?.l &&
                        <Grid container flexDirection={'column'} borderRadius={1000}>
                            <CiCoffeeCup fontSize={50} />
                            <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 800 }}>
                                {prices.l}
                            </Typography>
                        </Grid>
                    }

                </Grid>
            </Grid> */}
            <Grid container size={12} flexDirection={'row'} justifyContent={'center'} paddingBottom={3}>
                {
                    flavours.length > 1 &&
                    <Grid size={12} textAlign={'right'} component={Typography} fontSize={14} fontWeight={700} padding={1} bgcolor={'secondary.main'}>
                        الأصناف المتوفرة لليوم. ({arabicDate})
                    </Grid>
                }
                {
                    flavours?.map((flavour) =>
                        (flavour.isAvailable === true || showNonAvailable) &&
                        <DrinkCard flavour={flavour} openPicture={openPicture} key={flavour.id} />
                    )
                }
            </Grid>
        </Grid>
    )
}

export default HotDrinkCategory