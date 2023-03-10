import axios from "axios"
import { useState } from "react"
import { Button, Label, Textarea } from 'flowbite-react'

export default function NewThought() {

    //////////////////Time////////////////////
    //https://reactgo.com/javascript-get-time/
    const current = new Date();

    const [formData, setFormData] = useState({
        thought: '',
        datetime: current,
    })

    const handleThoughtForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleThought = async (e) => {
            e.preventDefault()
            const response = await axios.post(`https://cryptic-eyrie-38765.herokuapp.com/thoughts/`, formData)
            window.location.href = "https://teachertracker.netlify.app/"
            return response.data
            //tracker,jsx has the format for try/catch setup
            

    }

    return (
    <div>

    <form onSubmit={handleThought}>
        
        <div className="">
            <div className="">
                <Label value="Thought"/>
            </div>
            <Textarea id="thought" type="thought" placeholder="Your Thoughts Here" name="thought" value={formData.thought} sizing="lg" onChange={handleThoughtForm}/>
        </div>

        <Button type="submit">
            Submit
        </Button>
        </form>

    </div>  
)
}
