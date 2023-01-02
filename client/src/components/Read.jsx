import axios from "axios"
import { useState, useEffect } from "react"
import { Table } from "flowbite-react"

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
                <Table hoverable={true}>

                    <Table.Head>
                        <Table.HeadCell>
                        Student
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Date
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Time
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Tracker Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                        On Task?
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Following Expectations?
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Asks For Help?
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Comments
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Edit?
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                    {trackers.map((value) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={value.id}>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {value.student}
                        </Table.Cell>
                        <Table.Cell>
                            {value.datetime.slice(0,10)}
                        </Table.Cell>                        
                        <Table.Cell>
                            {value.datetime.slice(12,19)}
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
                            <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                            Edit
                            </a>
                        </Table.Cell>
                        </Table.Row>
                    ))}
                    </Table.Body>

                </Table>
                </div>
        </div>
    ) 
}
