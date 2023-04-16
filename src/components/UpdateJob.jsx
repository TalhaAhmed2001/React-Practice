import React, { useState } from 'react'

const UpdateJob = props => {

    const [job, setJob] = useState({
        id: props.id,
        employer: props.employer,
        role: props.role,
        date_start: props.date_start,
        date_end: props.date_end
    })

    const { id, employer, role, date_start, date_end } = job;

    const onChange = e => {
        setJob((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setJob({
            id: props.id,
            employer: props.employer,
            role: props.role,
            date_start: props.date_start,
            date_end: props.date_end
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>
                        Employer:
                        <input required type="text" id='employer' name='employer' value={employer} placeholder='employer' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Role:
                        <input required type="text" id='role' name='role' value={role} placeholder='role' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Date Start:
                        <input required type="date" id='date_start' name='date_start' value={date_start} placeholder='date_start' className='form-control' onChange={onChange} disabled/>
                    </label>
                    <br />
                    <label>
                        Date End:
                        <input type="date" id='date_end' name='date_end' value={date_end} placeholder='date_end' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <button type="submit">Update Job</button>
                </div>
            </form>
        </>
    )
}

export default UpdateJob