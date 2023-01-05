import axios from "axios"
import { useState, useEffect } from "react"
import moment from "moment"
import { Table, Button } from "flowbite-react"
import Delete from './Delete.jsx'

export default function Thoughts() {

    const handleThoughts = async (e) => {
        try {
            const thought = await axios.get(`https://cryptic-eyrie-38765.herokuapp.com/thoughts/`)
            console.log(thought.data)
            setThoughts(thought.data)
            
        } catch (error) {
            throw error 
        }
    }

    //UseState and UseEffect for Mapping Out Thoughts
    const [thoughts, setThoughts] = useState([])
    useEffect(() => {
    handleThoughts()
    }, [])

    return(
        <div>
                <div className="h-screen">
                <Table hoverable={true}>

                    <Table.Head>
                        <Table.HeadCell>
                        Thoughts
                        </Table.HeadCell>

                        <Table.HeadCell>
                        Date/Time
                        </Table.HeadCell>

                        <Table.HeadCell>
                        Delete
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                    {thoughts.map((value) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={value.id}>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {value.thought}
                        </Table.Cell>

                        <Table.Cell>
                        {moment(value.datetime).format("MMMM Do YYYY, h:mm a")}
                        </Table.Cell>

                        <Table.Cell>
                        <Button className="button-styling">
                        <Delete value={value}/>
                        </Button>
                            
                        </Table.Cell>

                        </Table.Row>
                    ))}
                    </Table.Body>

                </Table>
                </div>
        </div>
    ) 
}
