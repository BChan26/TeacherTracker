import axios from "axios"
import { useState } from "react"
// import { useEffect, useState, useContext } from "react"
import { Button, Label, TextInput, ToggleSwitch } from 'flowbite-react'

export default function Tracker() {

    //////////////////Time////////////////////
    //https://reactgo.com/javascript-get-time/
    const current = new Date();

    const [formData, setFormData] = useState({
        trackername: '',
        datetime: current,
        ontask: false,
        followexpectation: false,
        askforhelp: false, 
        comments: '',
        student_id: '',
    })

    const handleLoginForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleLogin = async (e) => {
        try {
            const response = await axios.post(`http://localhost:8000/trackers/`, formData)
            console.log(response)
            return response.data
            
        } catch (error) {
            throw error 
        }
    }

    return (
    <div>

    <form onSubmit={handleLogin}>
        
    <div className="">
            <div className="">
                <Label value="Student"/>
            </div>
            <TextInput id="student_id" type="student_id" placeholder="student_id" name="student_id" value={formData.student_id} onChange={handleLoginForm}/>
        </div>
        
        <div className="">
            <div className="">
                <Label value="Title"/>
            </div>
            <TextInput id="trackername" type="trackername" placeholder="Title" name="trackername" value={formData.trackername} onChange={handleLoginForm}/>
        </div>

        <div className="">
            <ToggleSwitch
                checked={formData.ontask}
                label="On Task?"
                value={formData.ontask}
                onChange={() => {setFormData({...formData, 'ontask': !formData.ontask})}}
                />
        </div>

        <div className="">
            <ToggleSwitch
                checked={formData.followexpectation}
                label="Following Expectations?"
                value={formData.followexpectation}
                onChange={() => {setFormData({...formData, 'followexpectation': !formData.followexpectation})}}
                />
        </div>

        <div className="">
            <ToggleSwitch
                checked={formData.askforhelp}
                label="Asks for help?"
                value={formData.askforhelp}
                onChange={() => {setFormData({...formData, 'askforhelp': !formData.askforhelp})}}
                />
        </div>

        <div>
            <div className="">
                <Label value="Comments"/>
            </div>
            <TextInput id="comments" type="comments" placeholder="Comments (Optional)" name="comments" value={formData.comments} onChange={handleLoginForm}/>
        </div>

        <Button type="submit">
            Submit
        </Button>
        </form>


    </div>  
)
}
