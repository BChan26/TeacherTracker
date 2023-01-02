import axios from "axios"
import { useState, useEffect } from "react"
import { Table } from "flowbite-react"

export default function Thoughts() {

    const handleThoughts = async (e) => {
        try {
            const thought = await axios.get(`http://localhost:8000/thoughts/`)
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
                <div>
                <Table hoverable={true}>

                    <Table.Head>
                        <Table.HeadCell>
                        Thoughts
                        </Table.HeadCell>

                        <Table.HeadCell>
                        Date
                        </Table.HeadCell>

                        <Table.HeadCell>
                        Time
                        </Table.HeadCell>

                        <Table.HeadCell>
                        Edit?
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                    {thoughts.map((value) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={value.id}>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {value.thought}
                        </Table.Cell>

                        <Table.Cell>
                        {value.datetime.slice(0,10)}
                        </Table.Cell>

                        <Table.Cell>
                        {value.datetime.slice(11,19)}
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
