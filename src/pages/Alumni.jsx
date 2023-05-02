import React, { useState } from 'react'
import Navbar from '../components/navbars/Navbar'
import Alumnus from '../components/Alumnus'

import { Box, Paper, Typography } from '@mui/material'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Alumni = () => {

    let profil = {
        "totalPages": {
            "": 4
        },
        "currentPage": 1,
        "alumni": [
            {
                "id": 22222,
                "first_name": "MIR UMAR",
                "last_name": "ALI",
                "sex": "M",
                "degree": "BSCS",
                "major": "Game Dev",
                "graduation": 2000
            },
            {
                "id": 22747,
                "first_name": "JANE",
                "last_name": "DOE",
                "sex": "F",
                "degree": "BSCS",
                "major": "Game Dev",
                "graduation": 2000
            },
            {
                "id": 22767,
                "first_name": "MIR HAMZA",
                "last_name": "ALI",
                "sex": "M",
                "degree": "BSCS",
                "major": "Game Dev",
                "graduation": 2000
            },
            {
                "id": 44444,
                "first_name": "ALI",
                "last_name": "SHAIKH",
                "sex": "M",
                "degree": "BSCS",
                "major": null,
                "graduation": null
            }
        ]
    }

    const [totalPages, setTotalPages] = useState(profil.totalPages)
    const [currentPage, setCurrentPage] = useState(profil.currentPage)

    const [query, setQuery] = useState({
        filter: '',
        search: ''
    })

    const { filter, search } = query

    const onChange = e => {
        setQuery((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSearch = e => {
        //axios.get(search)
    }

    const onFilter = e => {

    }
    return (
        <>
            <Navbar user_id={3} />
            <Box sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
            }}>
                <Paper sx={{ p: 4, }} elevation={4}>
                    <br />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="h3" textAlign='left' sx={{ fontWeight: 'bold' }}>
                                Alumni
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                                name="search"
                                required
                                fullWidth
                                id="search"
                                label=""
                                onChange={onChange}
                                value={search}
                                placeholder='Search Alumni by full name...'
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 0, mb: -2 }}
                                color='secondary'
                                onClick={onSearch}
                            >
                                Search
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">filter by degree</InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    name='filter'
                                    id="filter"
                                    value={filter}
                                    label="filter by degree"
                                    onChange={onChange}
                                >
                                    <MenuItem value={'General'}>General</MenuItem>
                                    <MenuItem value={'BSCS'}>BSCS</MenuItem>
                                    <MenuItem value={'BBA'}>BBA</MenuItem>
                                    <MenuItem value={'SSLA'}>SSLA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 0, mb: -2 }}
                                color='secondary'
                                onClick={onFilter}
                            >
                                Filter
                            </Button>
                        </Grid>
                    </Grid>

                </Paper>

            </Box>
            {
                (profil.alumni).map((profile)=>(
                    <Alumnus props={profile}/>
                ))
            }
        </>
    )
}

export default Alumni