import '../styles/landingPage.css'
import { Link } from "react-router-dom";
const LandingPage = () => {
    return ( 
        <div className="land">
            <div className="landingpage">
            <h1>Book Sanctuary</h1>
            <div className="loginOptions">
                <Link to="/adminLogin" id='alogin'>Admin Login</Link>
                <Link to="/userLogin" id='ulogin'>User Login</Link>
            </div>
        </div>
        </div>
     );
}
 
export default LandingPage;