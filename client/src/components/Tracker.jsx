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
        // student: '',
        
    })

    const handleTrackerForm = (e) => {
        e.preventDefault()
        setFormData({...formData, [e.target.name]: e.target.value})
        // console.log(formData)
    }

    const handleTracker = async (e) => {
        e.preventDefault()
        console.log(formData)
        const response = await axios.post(`https://cryptic-eyrie-38765.herokuapp.com/trackers/`, formData)
        window.location.href = "https://teachertracker.netlify.app/"
        return response.data

        // try {
        //     const response = await axios.post(`http://localhost:8000/trackers/`, formData)
        //     return response.data
            
        // } catch (error) {
        //     throw error 
        // }
    }

    return (
    <div>

    <form onSubmit={handleTracker}>
        
    {/* <div className="">
            <div className="">
                <Label value="Student"/>
            </div>
            <TextInput id="student" type="student" placeholder="student" name="student" value={formData.student} onChange={handleTrackerForm}/>
            </div> */}
        
        <div className="">
            <div className="">
                <Label value="Name/Title"/>
            </div>
            <TextInput id="trackername" type="trackername" placeholder="Name/Title" name="trackername" value={formData.trackername} onChange={handleTrackerForm}/>
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
            <TextInput id="comments" type="comments" placeholder="Comments (Optional)" name="comments" value={formData.comments} onChange={handleTrackerForm}/>
        </div>

        <Button type="submit">
            Submit
        </Button>
        </form>


    </div>  
)
}
