import React,{useState} from 'react'

const UpdateStory = props => {

    const [story, setStory] = useState({
        ERP: props.ERP,
        Name: props.Name,
        title: props.title,
        content: props.content
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
            ERP: props.ERP,
            Name: props.Name,
            title: props.title,
            content: props.content
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
                    <button type="submit">Update Story</button>
                </div>
            </form>
        </>
  )
}

export default UpdateStory