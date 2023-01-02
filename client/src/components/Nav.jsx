import { Link } from 'react-router-dom'

export default function Nav() {

return(
    <div>
    
    <div className="PageHeaderIcon">
        <img src="https://i.postimg.cc/yY860vxM/teacher-tracker-logo-1.png" alt="Teacher Tracker Logo" id='websitelogo'/>
    </div>
    
    <div className="NavBar">

            {/* <div className="NavBarItem">
            <Link to= "/CreateStudent">
                <div>Create Student</div>
            </Link>
            </div> */}

            <div className="NavBarItem">
            <Link to= "/">
                <div>New Data</div>
            </Link>
            </div>

            <div className="NavBarItem">
                <Link to= "/Read">
                    <div>All Data</div>
                </Link>
            </div>

            <div className="NavBarItem">
                <Link to= "/NewThought">
                    <div>New Thought</div>
                </Link>
            </div>

            <div className="NavBarItem">
                <Link to= "/Thoughts">
                    <div>All Thoughts</div>
                </Link>
            </div>



    </div>
    </div>
) 
}
