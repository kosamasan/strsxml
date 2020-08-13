import React, {useState} from 'react'
import UploadForm from '../components/Uploadform'
import Results from '../components/Results'

const Home = () => {
    const [results, setResult] = useState(null)

    const handleSubmit = (event) => {
        //here you should pass data to state
        console.log(event)
    }

    const fileUploadHandle = (file) => {
        console.log(file)
      }
    
    return <div>
        Hello
        <UploadForm fileUploadHandle={fileUploadHandle} />
        {results && <div><Results data={results} /></div>}
        </div>
}



export default Home