import axios from "axios"

export default function Delete({value}) {

    const handleDelete = async () => {
        try {
            await axios.delete(`https://cryptic-eyrie-38765.herokuapp.com/${value.id}`)
            // window.location.reload()
            window.location.href = "https://teachertracker.netlify.app/"
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
