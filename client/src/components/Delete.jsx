import axios from "axios"

export default function Delete({value}) {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/thoughts/${value.id}`)
            window.location.reload()
        } catch (error){
            alert("An Error Occured")
        }

    }

    return (
        <div>
            <p onClick={handleDelete}>Click to Delete</p>
        </div>
    )
}
