import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        id: '',
        password: '',
        sex: '',
        degree: ''
    })

    const { first_name, last_name, id, password, sex, degree } = profile;

    const onChange = (e) => {
        //console.log("ON CHANGE KE ANDAR")
        setProfile((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setProfile({
            first_name: '',
            last_name: '',
            id: '',
            password: '',
            sex: '',
            degree: ''
        })
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>
                        First Name:
                        <input required type="text" id = 'first_name' name = 'first_name' value={first_name} placeholder='first name' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input required type="text"  id = 'last_name' name = 'last_name' value={last_name}  placeholder='last name' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Sex:
                        <select required id = 'sex' name = 'sex' value={sex}  className='form-control' onChange={onChange}>
                            <option value="">-- Please select --</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        ID:
                        <input required type="number" id = 'id' name = 'id' value={id}  placeholder='id' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input required type="password" id = 'password' name = 'password' value={password}  placeholder='password' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Degree:
                        <input required type='text' id = 'degree' name='degree' value={degree}  placeholder='degree' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </div>
            </form>
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    )
}

export default Register