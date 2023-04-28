import { Container, CssBaseline, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';


const Story = props => {

    var { ERP, Name, title, content } = props

    title = "Title"
    Name = 'Name'
    ERP = 22846
    content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'
    
    return (
        <>
            <br />
            <br />
            <Container component="main" maxWidth='lg'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: -1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        marginBottom: -1
                    }}
                >
                    <Paper sx={{ p: 4, }} elevation={4} >

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant='h6' textAlign='left' sx={{ mt: -2 }}>
                                    {title}
                                </Typography>
                            </Grid>

                            
                            <Grid item xs={12} sm={12}>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant='subtitle2' textAlign='left' sx={{ mt: -2 }}>
                                    {content}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant='body1' textAlign='left' sx={{ mt: -2 }}>
                                    {Name}{' '}{ERP}
                                </Typography>
                            </Grid>
                            

                        </Grid>

                    </Paper>
                </Box>
            </Container>
        </>
    )
}

export default Story