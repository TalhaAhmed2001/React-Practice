import React, { useState } from 'react'
import Advice from '../components/Advice'
import Navbar from '../components/navbars/Navbar'
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

const Advices = () => {

    let advic = {
        "totalPages": 4,
        "currentPage": 1,
        "advices": [
            {
                "_id": "6411c82eed8e67fb60dfde3f",
                "ERP": 22767,
                "Name": "Mir Hamza Ali",
                "category": "BSCS",
                "title": "This is title of my updated advice",
                "content": "This is the content of updated advice",
                "popularity": 0,
                "date": "2023-03-15T13:29:18.035Z",
                "createdAt": "2023-03-15T13:29:18.050Z",
                "updatedAt": "2023-03-16T12:11:11.199Z",
                "__v": 0
            },
            {
                "_id": "6411c852ed8e67fb60dfde43",
                "ERP": 22768,
                "Name": "Talha",
                "category": "BSCS",
                "title": "This is title of my first advice",
                "content": "This is the content of my first advice",
                "popularity": 0,
                "date": "2023-03-15T13:29:54.018Z",
                "createdAt": "2023-03-15T13:29:54.019Z",
                "updatedAt": "2023-03-15T13:29:54.019Z",
                "__v": 0
            },
            {
                "_id": "6413117b34e511de33a1524b",
                "Name": "Mir Hamza Ali",
                "category": "General",
                "title": "Advice 2",
                "content": "This is the content of Advice2",
                "popularity": 0,
                "date": "2023-03-16T12:54:19.557Z",
                "createdAt": "2023-03-16T12:54:19.563Z",
                "updatedAt": "2023-03-16T12:54:19.563Z",
                "__v": 0
            },
            {
                "_id": "6413118034e511de33a1524d",
                "Name": "Mir Hamza Ali",
                "category": "General",
                "title": "Advice 3",
                "content": "This is the content of Advice3",
                "popularity": 0,
                "date": "2023-03-16T12:54:24.907Z",
                "createdAt": "2023-03-16T12:54:24.908Z",
                "updatedAt": "2023-03-16T12:54:24.908Z",
                "__v": 0
            }
        ]
    }

    const [totalPages, setTotalPages] = useState(advic.totalPages)
    const [currentPage, setCurrentPage] = useState(advic.currentPage)

    const [query, setQuery] = useState({
        filter: '',
        search: ''
    })

    const { filter, search } = query

    const onChange = e => {
        setQuery((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

const onSearch = e => {
    //axios.get(search)
}

const onFilter = e =>{
    
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
                            Advices
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
                            placeholder='Enter Search thing here...'
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
                            <InputLabel id="demo-simple-select-label">Filter *</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                name='filter'
                                id="filter"
                                value={filter}
                                label="filter"
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
            (advic.advices).map((advice)=>(
                <Advice props={advice}/>
            ))
        }
    </>
)
}

export default Advices