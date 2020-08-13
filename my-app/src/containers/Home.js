import React, {useState} from 'react'
import UploadForm from '../components/Uploadform'
import Results from '../components/Results'

const Home = () => {
    const [results, setResult] = useState(null)

    const handleSubmit = (event) => {
        //here you should pass data to state
        console.log(event)
    }
    
    return <div>
        Hello
        <UploadForm />
        {results && <div><Results data={results} /></div>}
        </div>
}



export default Home