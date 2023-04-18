import React, { useState } from 'react'
import './App.css';
import logo from './logo.svg';
import momo from './momo.png'
//import {Link} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Login = () => {

    const [loginData, setLoginData] = useState({
        id: '',
        password: ''
    })

    const { id, password } = loginData;

    const theme = createTheme();

    const onChange = (e) => {
        setLoginData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }
    const onSubmit = (e) => {
        
        e.preventDefault();
        //alert(id,password)
        console.log('id = ', id, 'password = ', password)
        setLoginData({
            id: '',
            password: ''
        })
    }

    return (
        <>
        
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        
                        
                        <Paper sx={{ p: 4, width: 500 }} elevation={5} square>
                            <Box sx={{ marginTop: 0, marginBottom: 0 }}>
                                <img src={logo} alt="logo" className="App-logo"/>
                            </Box>
                            
                            <Typography component="h1" variant="h5" textAlign='center'>
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={onSubmit} sx={{ mt: 0 }}>
                                <TextField required margin="normal" value={id} onChange={onChange} type='Number' fullWidth id="id" label="ID" name="id" autoComplete="id" />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    value={password}
                                    onChange={onChange}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>

                                    </Grid>
                                    <Grid item >
                                        <Link href="/register" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Box>

                </Container>
            </ThemeProvider>

        </>
    );
}

export default Login