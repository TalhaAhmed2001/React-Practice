import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    const [loginData, setLoginData] = useState({
        id: '',
        password:''
    })

    // const [id, setID] = useState('')
    // const [password, setPassword] = useState('')

    // const onIdChange = (e) => {
    //     setID(e.target.value);
    // }

    // const onPasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }

    const {id, password} = loginData;

    const onChange = (e)=>{
        setLoginData((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        })
        )
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //alert
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={onSubmit}>

                <div className='form-group'>
                    <label>
                        ID:
                        <input type="text" name='id' value={id} onChange={onChange} placeholder='id'/>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name='password' value={password} onChange={onChange} placeholder='password'/>
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </div>

            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    )
}

export default Login