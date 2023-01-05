import axios from "axios"
import { useState, useEffect } from "react"
import moment from "moment"
import { Table } from "flowbite-react"
import Edit from './Edit.jsx'

export default function Read() {

    const handleTrackers = async (e) => {
        try {
            const tracker = await axios.get(`https://cryptic-eyrie-38765.herokuapp.com/trackers/`)
            console.log(tracker.data)
            setTrackers(tracker.data)
            
        } catch (error) {
            throw error 
        }
    }

    //UseState and UseEffect for Mapping Out Trackers
    const [trackers, setTrackers] = useState([])
    useEffect(() => {
    handleTrackers()
    }, [])
    // console.log(trackers)

    return(
        <div>
                <div id="table" className="">
                <Table hoverable={true} className="overflow-y-auto h-full">

                    <Table.Head>
                        {/* <Table.HeadCell>
                        Student
                        </Table.HeadCell> */}
                        <Table.HeadCell>
                        Date/Time
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Title
                        </Table.HeadCell>
                        <Table.HeadCell>
                        On Task?
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Follows Expectations?
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Asks For Help?
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Comment
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Edit
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                    {trackers.map((value) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={value.id}>
                        {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {value.student}
                        </Table.Cell> */}
                        <Table.Cell>
                            {moment(value.datetime).format("MMMM Do YYYY, h:mm a")}
                        </Table.Cell>                        
                        <Table.Cell>
                            {value.trackername}
                        </Table.Cell>
                        <Table.Cell>
                            {value.ontask.toString()}
                        </Table.Cell>
                        <Table.Cell>
                            {value.followexpectation.toString()}
                        </Table.Cell>
                        <Table.Cell>
                            {value.askforhelp.toString()}
                        </Table.Cell>
                        <Table.Cell>
                            {value.comments}
                        </Table.Cell>
                        <Table.Cell>
                            <Edit value={value}/>
                        </Table.Cell>
                        </Table.Row>
                    ))}
                    </Table.Body>

                </Table>
                </div>
        </div>
    ) 
}
