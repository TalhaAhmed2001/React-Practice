import React,{useState} from 'react'

const UpdateAdvice = props => {

    const [advice, setAdvice] = useState({
        ERP: props.ERP,
        Name: props.Name,
        category: props.category,
        title: props.title,
        content: props.content
    })

    const { ERP, Name, category, title, content } = advice;

    const onChange = e => {
        setAdvice((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setAdvice({
            ERP: props.ERP,
            Name: props.Name,
            category: props.category,
            title: props.title,
            content: props.content
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>
                        Category:
                        <select required id='category' name='category' value={category} className='form-control' onChange={onChange}>
                            <option value="">-- Please select --</option>
                            <option value="BSCS">BSCS</option>
                            <option value="BBA">BBA</option>
                            <option value="SSLA">SSLA</option>
                            <option value="General">General</option>
                        </select>
                        </label>
                    <br />
                    <label>
                        Title:
                        <input required type="text" id='title' name='title' value={title} placeholder='title' className='form-control' onChange={onChange} />
                    </label>
                    <br />
                    <label>
                        Content:
                        <textarea required type="text" id='content' name='content' value={content} placeholder='Enter text here...' className='form-control' onChange={onChange}/>
                    </label>
                    <br />
                    <button type="submit">Update Advice</button>
                </div>
            </form>
        </>
    )
}

export default UpdateAdvice