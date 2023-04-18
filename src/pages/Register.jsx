import React, { useState } from 'react'
import RegisterStudent from '../components/RegisterStudent'
import RegisterAlumnus from '../components/RegisterAlumnus'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Register = () => {

    const [user, setUser] = useState('alumnus')

    const setStudent = (e) => {
        setUser('student')
    }

    const setAlumnus = (e) => {
        setUser('alumnus')
    }

    return (
        <div className='container'>
            {/*             
            <button onClick={setStudent}>Register as Student</button>
            <button onClick={setAlumnus}>Register as Alumnus</button> */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" size='large' aria-label=" button group">
                    <Button onClick={setAlumnus}>Sign Up as Alumnus</Button>
                    <Button onClick={setStudent}>Sign Up as Student</Button>
                </ButtonGroup>

            </Box>
            {user === 'student' ? <RegisterStudent /> : <RegisterAlumnus />}
        </div>
    )
}

export default Register