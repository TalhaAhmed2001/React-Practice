import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterStudent from '../components/RegisterStudent'
import RegisterAlumnus from '../components/RegisterAlumnus'

const Register = () => {

    const [user, setUser] = useState('student')

    const setStudent = (e) => {
        setUser('student')
    }

    const setAlumnus = (e) => {
        setUser('alumnus')
    }

    return (
        <div className='container'>
            <h1>Register Page</h1>
            
            <button onClick={setStudent}>Register as Student</button>
            <button onClick={setAlumnus}>Register as Alumnus</button>
            {user==='student' ? <RegisterStudent/> : <RegisterAlumnus/>}
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    )
}

export default Register