import React,{useState} from 'react'

const CreateStory = () => {

    const [story, setStory] = useState({
        ERP: '',
        Name: '',
        title: '',
        content: ''
    })

    const { ERP, Name, title, content } = story;

    const onChange = e => {
        setStory((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setStory({
            ERP: '',
            Name: '',
            title: '',
            content: ''
        })
    }
  return (
    <>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    
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
                    <button type="submit">Create Story</button>
                </div>
            </form>
        </>
  )
}

export default CreateStory