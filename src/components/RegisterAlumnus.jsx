import React, { useState } from 'react'

const RegisterAlumnus = () => {


    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        id: '',
        password: '',
        sex: '',
        degree: '',
        major: '',
        graduation: ''
    })

    const { first_name, last_name, id, password, sex, degree, major, graduation } = profile;

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
            degree: '',
            major: '',
            graduation: ''
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>
                        First Name:
                        <input required type="text" id='first_name' name='first_name' value={first_name} placeholder='first name' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input required type="text" id='last_name' name='last_name' value={last_name} placeholder='last name' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Sex:
                        <select required id='sex' name='sex' value={sex} className='form-control' onChange={onChange}>
                            <option value="">-- Please select --</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        ID:
                        <input required type="number" id='id' name='id' value={id} placeholder='id' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input required type="password" id='password' name='password' value={password} placeholder='password' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Degree:
                        <input required type='text' id='degree' name='degree' value={degree} placeholder='degree' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Major:
                        <input required type='text' id='major' name='major' value={major} placeholder='major' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Graduation:
                        <input required type='number' id='graduation' name='graduation' value={graduation} placeholder='graduation' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </div>
            </form></>

    )

}

export default RegisterAlumnus