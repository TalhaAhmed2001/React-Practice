import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../pages/logo.svg';

import AlumNet2 from '../../images/AlumNet2.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const AlumnusNavbar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" zIndex='0'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* <Box sx={{ display:'flex', alignItems: 'center', ml: -1}}> */}
                    <img src={AlumNet2} alt="logo" width='5%' height='5%' />
                    {/* </Box> */}
                    <Typography
                        variant="h4"
                        color='inherit' component={Link} to='/'
                        //component='a'

                        sx={{
                            //ml: -28,
                            display: { xs: 'flex', md: 'flex' },
                            flexGrow: 0.1,
                            fontFamily: 'sans',
                            fontWeight: 1000,
                            letterSpacing: '.175rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AlumNet
                    </Typography>
                    <>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Alumni
                            </Button>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Stories
                            </Button>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Advices
                            </Button>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
                            <Button sx={{ my: 2, color: 'inherit', display: 'block' }} component={Link} to='/create'>
                                Create
                            </Button>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        
                    </>

                    <Button color='inherit' component={Link} to='/alumnus/myprofile'>
                        My Profile
                    </Button>

                    <Button color="inherit"component={Link} to='/login'>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AlumnusNavbar