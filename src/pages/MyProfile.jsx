import React from 'react'
import UpdateProfile from '../components/UpdateProfile'
import UpdateJob from '../components/UpdateJob'
import CreateAdvice from '../components/CreateAdvice'
import AddJob from '../components/AddJob'
import UpdateAdvice from '../components/UpdateAdvice'
import CreateStory from '../components/CreateStory'
import UpdateStory from '../components/UpdateStory'

const MyProfile = () => {
    return (
        <>
            <h1>Profile</h1>
            {<UpdateProfile />}
            <h1>Add job</h1>
            {<AddJob />}
            <h1>update job</h1>
            {<UpdateJob />}
            <h1>create advice</h1>
            {<CreateAdvice />}
            <h1>update advice</h1>
            {<UpdateAdvice />}
            <h1>create story</h1>
            {<CreateStory />}
            <h1>update story</h1>
            {<UpdateStory />}
        </>
    )
}

export default MyProfile