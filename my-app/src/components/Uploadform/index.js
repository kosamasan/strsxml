import React, { useState } from 'react'

const UploadForm = (props) => {
    const [uploadedFile, setUploadedFile] = useState({})

    const onSubmit = async (e) => {
        e.preventDefault()
        props.fileUploadHandle(uploadedFile)
    }

    const fileUploadHandle = (e) => {
        setUploadedFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    const render = () => {
        return (
            <form onSubmit={onSubmit}>
                <label>
                    Upload file:
                    <input
                        accept=".png, .xml"
                        onChange={fileUploadHandle}
                        type="file"
                    />
                </label>
                <button
                    type="submit"
                    style={{ marginTop: '10px' }}
                >
                    submit
                </button>

            </form>
        )
    }

    return (
        <div >
            {render()}
        </div>
    )
}

export default UploadForm
