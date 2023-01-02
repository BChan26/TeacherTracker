import axios from "axios"
import { useState, useEffect } from "react"

export default function Read() {

    const handleTrackers = async (e) => {
        try {
            const tracker = await axios.get(`http://localhost:8000/trackers/`)
            console.log(tracker.data)
            setTrackers(tracker.data)
            // return tracker.data
            
        } catch (error) {
            throw error 
        }
    }

    //UseState and UseEffect for Mapping Out Posts
    const [trackers, setTrackers] = useState([])
    useEffect(() => {
    handleTrackers()
    }, [])
    // console.log(trackers)

    return(
        <div>
            <div>
                {trackers.map((value) => (
                    <div>
                        <h3>{value.trackername}</h3>
                    </div>
                ))}
            </div>
        </div>
    ) 
}
