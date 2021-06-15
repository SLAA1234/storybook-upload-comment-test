import React from 'react'
import Upload from "./upload";

export default {
    title:"Upload Image",
    component: Upload
}

const Template = () => {
    return (
        <React.Fragment>
        <p>Upload your image or video here: </p>
            <Upload />          
        </React.Fragment>   
    )
}

export const UploadStory = Template.bind({})