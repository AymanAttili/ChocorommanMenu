import { ExitToApp, Visibility, VisibilityOff } from '@mui/icons-material'
import { Avatar, Button, Grid2 as Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useUser } from '../../features/auth/useUser';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo.jpg'
import { useLogin } from '../../features/auth/useLogin';


function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors: formErrors } } = useForm();
    const navigate = useNavigate();
    const { isAuth } = useUser();
    const { login, isLoading } = useLogin();

    const handleLogin = (data) => {
        if (!data)
            return;
        console.log(data);


        login({ userName: data.userName, password: data.password })
    }
    if (isAuth)
        return <Navigate replace to={'/editMenu'} />

    return (
        <Grid container flexDirection={'column'} padding={2} color="primary.main">
            <Grid container justifyContent={'end'}>
                <IconButton color="primary" size={'large'} onClick={() => navigate('/')}>
                    <ExitToApp />
                </IconButton>
            </Grid>
            <Grid container size={12} flexDirection={'column'} alignItems={'center'} component='form' onSubmit={handleSubmit(handleLogin)} >
                <Avatar src={logo} sx={{
                    width: 200,
                    height: 200,
                    marginY: 4,
                    boxShadow: 8
                }} />
                <TextField label="User name" margin='dense' disabled={isLoading} {...register('userName', { required: true })} fullWidth />
                <TextField label="Password" margin='dense'
                    type={showPassword ? 'text' : 'password'}
                    disabled={isLoading}
                    error={!!formErrors.password}
                    helperText={formErrors.password?.message}
                    fullWidth
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(val => !val)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }
                    }}
                    {...register('password', { required: "Password is required", })}
                />

                <Button variant='contained' fullWidth type={'submit'} disabled={isLoading} size={'large'} sx={{ marginTop: 4 }}>
                    Login
                </Button>
            </Grid>
        </Grid>

    )
}

export default Login