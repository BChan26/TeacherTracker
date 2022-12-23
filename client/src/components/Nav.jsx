import { Link } from 'react-router-dom'

export default function Nav() {

return(
    <div>
    
    <div className="PageHeaderIcon">
        <img src="https://i.postimg.cc/yY860vxM/teacher-tracker-logo-1.png" alt="Teacher Tracker Logo" id='websitelogo'/>
    </div>
    
    <div className="NavBar">

            <div className="NavBarItem">
            <Link to= "/CreateStudent">
                <div>Create Student</div>
            </Link>
            </div>

            <div className="NavBarItem">
            <Link to= "/">
                <div>Tracker</div>
            </Link>
            </div>

            <div className="NavBarItem">
                <Link to= "/Thoughts">
                    <div>Thoughts</div>
                </Link>
            </div>

            <div className="NavBarItem">
                <Link to= "/Read">
                    <div>Data</div>
                </Link>
            </div>

    </div>
    </div>
) 
}
