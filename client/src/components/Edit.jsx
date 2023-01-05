import axios from 'axios'
import { useState } from 'react'
import { Label, Textarea, ToggleSwitch, Dropdown, Button } from 'flowbite-react'

export default function Edit ({value}) {

//Initial value for useState for Editing Read.jsx Data
const valueEdit = {
    id: value.id,
    student: value.student,
    trackername: value.trackername,
    datetime: value.datetime,
    ontask: value.ontask,
    followexpectation: value.followexpectation,
    askforhelp: value.askforhelp,
    comments: value.comments,
}

//useState, with editvalue as current state and setEditvalue as func to update state
const [editvalue, setEditvalue] = useState(valueEdit)

    //edit's handleChange w/ text input value updating valueText
    const editHandleChange = (event) => {
        setEditvalue({...editvalue,[event.target.name]: event.target.value})
    }
    
    //edit's handleSubmit to actualize changes
    //runs axios call and updates state
    const editHandleSubmit = (event) => {
    event.preventDefault();
        editvaluesCall(editvalue)
        setEditvalue(editvalue)
        // window.location.reload()
        window.location.href = "https://teachertracker.netlify.app/"
    }

    //axios call to update
    const editvaluesCall = async() => {
        const post = await axios.put(`https://cryptic-eyrie-38765.herokuapp.com/trackers/${value.id}`, editvalue)
        console.log(post.data)
        setEditvalue(post.data)
    }

    return (
        <div>
            
            <Dropdown label="Click Here to Edit" className="h-screen">
                <form onSubmit={editHandleSubmit}>
                
                <div>
                    <div className="mb-2 block w-full">
                        <Label value="Tracker Name"/>
                    </div>
                    <Textarea name="trackername" onChange={editHandleChange} value={editvalue.trackername} />
                </div>

                <div className="flex flex-col gap-4">
                    <ToggleSwitch
                        checked={editvalue.ontask}
                        label="On Task?"
                        value={editvalue.ontask}
                        onChange={() => {setEditvalue({...editvalue, 'ontask': !editvalue.ontask})}}
                        />
                </div>

                <div className="flex flex-col gap-4">
                    <ToggleSwitch
                        checked={editvalue.followexpectation}
                        label="Follows Expectations?"
                        value={editvalue.followexpectation}
                        onChange={() => {setEditvalue({...editvalue, 'followexpectation': !editvalue.followexpectation})}}
                        />
                </div>

                <div className="flex flex-col gap-4">
                    <ToggleSwitch
                        checked={editvalue.askforhelp}
                        label="Asks for help?"
                        value={editvalue.askforhelp}
                        onChange={() => {setEditvalue({...editvalue, 'askforhelp': !editvalue.askforhelp})}}
                        />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label value="Comments"/>
                    </div>
                    <Textarea name="comments" value={editvalue.comments} onChange={editHandleChange}/>
                </div>

                <Button className="button-styling" type="submit">
                Edit Tracker
                </Button>
                </form>
            </Dropdown>
                


        </div>
    )
}