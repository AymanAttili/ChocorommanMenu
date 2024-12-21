import { AttachFile, ExitToApp, Image } from '@mui/icons-material'
import { Box, Button, Container, Dialog, DialogActions, DialogTitle, FormLabel, Grid2 as Grid, IconButton, InputLabel, Modal, Paper, Switch, TextField, Typography } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom';
import { useItems } from '../../features/items/useItems';
import SpinnerLoader from '../../ui/SpinnerLoader';
import { useDispatchflavours } from '../../features/flavours/useDispatchFlavours';
import { useUser } from '../../features/auth/useUser';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import VisuallyHiddenInput from '../../ui/VisuallyHiddenInput';
import { useDispatchItems } from '../../features/items/useDispatchItems';

function ItemsEdit() {
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, watch, reset, formState: { errors: formErrors } } = useForm();

    const { isAuth } = useUser();
    const { items: categories, isLoading } = useItems();

    const { flavoursDispatch, isError: isFlavourError } = useDispatchflavours();
    const { itemsDispatch, isError: isItemError } = useDispatchItems();

    const [openModal, setOpenModal] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [currImage, setCurrImage] = useState('');
    const imagePreview = useRef(null);

    const openEditModal = ({ item, type }) => {
        reset();
        setCurrImage(() => '');
        if (item) {
            setValue('id', item.id);
            setValue('name', item.name);
            setValue('small', item.prices?.s);
            setValue('medium', item.prices?.m);
            setValue('large', item.prices?.l);
            setCurrImage(item.image)
        }
        setValue('parentId', item.parentId);
        setValue('type', type);

        setOpenModal(true);
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCurrImage(reader.result); // Set the preview URL
            };
            reader.readAsDataURL(file); // Read file as Data URL
        }
    };

    const handleEdit = async (data) => {
        if (!data)
            return

        if (!data.id) {
            if (data.type === 'flavour') {
                await flavoursDispatch({ action: 'add', payload: data })
            }
            if (data.type === 'item') {
                await itemsDispatch({ action: 'add', payload: data })
            }
        }

        else {
            if (data.type === 'flavour') {
                await flavoursDispatch({ action: 'edit', payload: data })
            }
            if (data.type === 'item') {
                await itemsDispatch({ action: 'edit', payload: data })
            }
        }

        if (!isItemError || !isFlavourError) {
            setOpenModal(false)
        }
    }

    const handleDelete = async ({ id, type }) => {

        if (type === 'item') {
            await itemsDispatch({ action: 'delete', payload: { id } })
        }
        else if (type === 'flavour') {
            await flavoursDispatch({ action: 'delete', payload: { id } })
        }

        if (!isItemError || !isFlavourError) {
            setOpenModal(false)
            setOpenAlert(false)
        }
    }

    const changeAvailability = async (id, val) => {
        await flavoursDispatch({ action: 'changeAvailability', payload: { val, id } })
    }

    if (!isAuth)
        return <Navigate replace to={'/login'} />

    if (isLoading)
        return <SpinnerLoader />
    return (
        <>
            <Grid container flexDirection={'column'} padding={2} color="primary.main">
                <Grid container>
                    <IconButton color="primary" size={'large'} onClick={() => navigate('/')}>
                        <ExitToApp />
                    </IconButton>
                </Grid>
                <Grid container flexDirection={'column'} padding={2} spacing={2}>
                    {categories.map((category) =>
                        <Grid container flexDirection={'column'} key={category.id} borderTop={3} paddingY={2}>
                            <Typography variant='h3' fontWeight={700} textAlign={'center'} borderBottom={1} paddingBottom={2}>
                                {category.name}
                            </Typography>
                            <Button variant='contained'
                                onClick={() => openEditModal({ type: 'item', item: { parentId: category.id } })}>
                                إضافة صنف
                            </Button>
                            {
                                category.items.map((item) =>
                                    <Grid container key={item.id} flexDirection={'column'} borderTop={1} paddingY={2}>
                                        <Grid container justifyContent={'space-between'} alignItems={'center'}>
                                            <Typography variant='h4' fontWeight={600} sx={{ cursor: 'pointer' }} >
                                                {item.name}
                                            </Typography>
                                            <Button variant='contained' size={'large'} onClick={() => openEditModal({ item, type: 'item' })}>
                                                تعديل
                                            </Button>
                                        </Grid>
                                        <Grid container size={12} flexDirection={'column'} border={1} padding={1}>
                                            <Typography variant='h5' fontWeight={700} textAlign={'center'} borderBottom={1} paddingBottom={1}>
                                                الأطعمة
                                            </Typography>
                                            {item.flavours.map((flavour) =>
                                                <Grid container flexDirection={'row'} justifyContent={'space-between'} key={flavour.id}>
                                                    <Typography variant='h5' sx={{ cursor: 'pointer' }} onClick={() => openEditModal({ item: flavour, type: 'flavour' })}>
                                                        {flavour.name}
                                                    </Typography>
                                                    <Switch defaultChecked={flavour.isAvailable} onChange={(e) => changeAvailability(flavour.id, e.target.checked)} />
                                                </Grid>
                                            )}
                                        </Grid>
                                        <Button variant='contained' color='secondary' sx={{ color: 'primary.main' }}
                                            onClick={() => openEditModal({ type: 'flavour', item: { parentId: item.id } })}>
                                            إضافة طعم
                                        </Button>
                                    </Grid>
                                )
                            }
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                maxWidth="md" component='form' onSubmit={handleSubmit(handleEdit)}
            >
                <Grid container flexDirection={'column'} padding={4} borderRadius={4}>
                    <TextField {...register('type', { required: true })} sx={{ visibility: 'hidden', height: 0 }} />
                    <TextField {...register('id')} sx={{ visibility: 'hidden', height: 0 }} />
                    <TextField {...register('parentId')} sx={{ visibility: 'hidden', height: 0 }} />
                    {
                        watch('id') &&
                        <Grid container justifyContent={'end'}>
                            <Button variant={'contained'} color={'error'} onClick={() => setOpenAlert(true)}>
                                حذف
                            </Button>
                        </Grid>
                    }

                    <Typography variant='h4' textAlign={'center'} marginTop={4}>
                        {watch('id') ? 'تعديل ' : 'إضافة '}
                        {watch('type') === 'flavour' ? 'طعم' : 'صنف'}
                    </Typography>

                    <Grid container flexDirection={'column'} sx={{ marginTop: 4 }}>
                        <FormLabel htmlFor='name' title='اسم الصنف'> اسم الصنف</FormLabel>
                        <TextField margin='dense' id='name' disabled={isLoading} {...register('name', { required: true })} />

                        <FormLabel sx={{ marginTop: 4 }}>
                            الأسعار
                        </FormLabel>
                        <Grid container spacing={3}>
                            <TextField margin='dense' type={'number'} label="صغير" disabled={isLoading} {...register('small')} />
                            <TextField margin='dense' type={'number'} label="وسط" disabled={isLoading} {...register('medium')} />
                            <TextField margin='dense' type={'number'} label="كبير" disabled={isLoading} {...register('large')} />
                        </Grid>

                        {
                            watch('type') === 'flavour'
                            &&
                            <Grid container flexDirection={'column'} alignItems={'center'} marginTop={4} spacing={2}>
                                <img width={110} height={180} ref={imagePreview} src={currImage} />
                                <Button
                                    component="label"
                                    variant="outlined"
                                    tabIndex={-1}
                                >
                                    Upload image
                                    <VisuallyHiddenInput
                                        type="file"
                                        accept=".png, .jpg"
                                        {...register('image')}
                                        onChange={handleFileChange}
                                    />
                                </Button>
                            </Grid>
                        }


                    </Grid>

                    <Grid container spacing={3}>
                        <Button variant='contained' type='submit' sx={{ marginTop: 8 }}>
                            حفظ التغييرات
                        </Button>
                        <Button variant='outlined' onClick={() => setOpenModal(false)} sx={{ marginTop: 8 }}>
                            إلغاء
                        </Button>
                    </Grid>
                </Grid>
            </Dialog >

            <Dialog
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                maxWidth="sm" component='form' onSubmit={handleSubmit(handleEdit)}
            >
                <DialogTitle>
                    هل أنت متأكد أنك تريد الحذف؟
                </DialogTitle>

                <DialogActions>
                    <Button size={'large'} onClick={() => setOpenAlert(false)}>إلغاء</Button>
                    <Button variant={'contained'} size={'large'} onClick={() => handleDelete({ id: watch('id'), type: watch('type') })} autoFocus>
                        موافق
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ItemsEdit