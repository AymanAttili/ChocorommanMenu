import { ExitToApp } from '@mui/icons-material'
import { Grid2 as Grid, IconButton, Switch, Typography } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom';
import { useItems } from '../../features/items/useItems';
import SpinnerLoader from '../../ui/SpinnerLoader';
import { useDispatchflavours } from '../../features/flavours/useDispatchFlavours';
import { useUser } from '../../features/auth/useUser';

function ItemsEdit() {
    const navigate = useNavigate();

    const { isAuth } = useUser();
    const { items: categories, isLoading } = useItems();
    const { flavoursDispatch } = useDispatchflavours();

    const changeAvailability = async (id, val) => {
        await flavoursDispatch({ action: 'changeAvailability', payload: { val, id } })
    }



    if (!isAuth)
        return <Navigate replace to={'/login'} />

    if (isLoading)
        return <SpinnerLoader />
    return (
        <Grid container flexDirection={'column'} padding={2} color="primary.main">
            <Grid container justifyContent={'end'}>
                <IconButton color="primary" size={'large'} onClick={() => navigate('/')}>
                    <ExitToApp />
                </IconButton>
            </Grid>
            <Grid container flexDirection={'column'} padding={2} spacing={2}>
                {categories.map((category) =>
                    <Grid container flexDirection={'column'} key={category.id} borderTop={3} paddingY={2}>
                        <Typography variant='h3' fontWeight={700} textAlign={'center'}>
                            {category.name}
                        </Typography>
                        {
                            category.items.map((item) =>
                                <Grid container key={item.id} flexDirection={'column'} alignItems={'end'} borderTop={1} paddingY={2}>
                                    <Typography variant='h4' fontWeight={600}>
                                        {item.name}
                                    </Typography>
                                    <Grid container size={12} flexDirection={'column'}>
                                        {item.flavours.map((flavour) =>
                                            <Grid container flexDirection={'row-reverse'} justifyContent={'space-between'} key={flavour.id}>
                                                <Typography variant='h5'>
                                                    {flavour.name}
                                                </Typography>
                                                <Switch defaultChecked={flavour.isAvailable} onChange={(e) => changeAvailability(flavour.id, e.target.checked)} />
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default ItemsEdit