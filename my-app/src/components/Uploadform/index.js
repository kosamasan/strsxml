import React, { useState } from 'react'

const UploadForm = (props) => {
    const [uploadedFile, setUploadedFile] = useState({})
    const [inputKey, setInputKey] = useState(Date.now())

    const onSubmit = async (e) => {
        e.preventDefault()
        props.fileUploadHandle(uploadedFile)
    }

    const fileUploadHandle = (e) => {
        setUploadedFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    const removeFile = () => {
        setUploadedFile({})
        setInputKey(Date.now())
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
                        key={inputKey}
                    />
                </label>
                <button
                    type="submit"
                    style={{ marginTop: '10px' }}
                >
                    submit
                </button>
                {uploadedFile.name && 
                  <div onClick={removeFile}>
                   remove file
                  </div>
                }
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
