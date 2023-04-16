import React,{useState} from 'react'

const AddJob = () => {

    const [job, setJob] = useState({
        id: '',
        employer: '',
        role: '',
        date_start: '',
        date_end: ''
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
            id: '',
            employer: '',
            role: '',
            date_start: '',
            date_end: ''
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
                        <input required type="date" id='date_start' name='date_start' value={date_start} placeholder='date_start' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Date End:
                        <input type="date" id='date_end' name='date_end' value={date_end} placeholder='date_end' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <button type="submit">Add Job</button>
                </div>
            </form>
        </>
  )
}

export default AddJob