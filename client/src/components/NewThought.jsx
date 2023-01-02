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
        try {
            const response = await axios.post(`http://localhost:8000/thoughts/`, formData)
            console.log(response)
            return response.data
            
        } catch (error) {
            throw error 
        }
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
