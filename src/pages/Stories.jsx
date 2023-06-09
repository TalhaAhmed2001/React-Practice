import React, { useState } from 'react'
import Story from '../components/Story'
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

const Stories = () => {

    let stori = {
        "totalPages": 5,
        "currentPage": 1,
        "stories": [
            {
                "_id": "6411af44f97cee7c2ff60141",
                "ERP": 22767,
                "Name": "Mir Hamza Ali",
                "title": "This is title of my updated2 story",
                "content": "This is the content of updated2 first story",
                "popularity": 0,
                "date": "2023-03-15T11:43:00.946Z",
                "createdAt": "2023-03-15T11:43:00.947Z",
                "updatedAt": "2023-03-15T14:49:56.825Z",
                "__v": 0
            },
            {
                "_id": "6411b95960a6e0578710c891",
                "ERP": 22768,
                "Name": "Talha Ahmed",
                "title": "This is title of my updated story",
                "content": "This is the content of my updated story",
                "popularity": 0,
                "date": "2023-03-15T12:26:01.500Z",
                "createdAt": "2023-03-15T12:26:01.511Z",
                "updatedAt": "2023-03-15T12:26:01.511Z",
                "__v": 0
            },
            {
                "_id": "6411c6f052c703a8e14bfd7d",
                "ERP": 22767,
                "Name": "Mir Hamza Ali",
                "title": "This is title of my updated3 story",
                "content": "This is the content of updated3 second story",
                "popularity": 0,
                "date": "2023-03-15T13:24:00.728Z",
                "createdAt": "2023-03-15T13:24:00.734Z",
                "updatedAt": "2023-03-15T15:06:24.598Z",
                "__v": 0
            },
            {
                "_id": "6411fac0c964e666926d68c4",
                "ERP": 22767,
                "Name": "Mir Hamza Ali",
                "title": "This is title of my Another story",
                "content": "This is the content of Another story",
                "popularity": 0,
                "date": "2023-03-15T17:05:04.952Z",
                "createdAt": "2023-03-15T17:05:04.966Z",
                "updatedAt": "2023-03-15T17:05:04.966Z",
                "__v": 0
            }
        ]
    }


    const [query, setQuery] = useState({
        filter: '',
        search: ''
    })

    const [totalPages, setTotalPages] = useState(stori.totalPages)
    const [currentPage, setCurrentPage] = useState(stori.currentPage)

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
                                Stories
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
                (stori.stories).map((story) => (
                    <Story props={story}/>
                ))
            }
        </>
    )
}

export default Stories